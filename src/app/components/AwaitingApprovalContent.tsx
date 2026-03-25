import { useState, useCallback, useEffect, useRef } from 'react';
import { CheckCircle, Clock, Lock, XCircle, AlertTriangle, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { POST_DATA } from '../data/postData';
import { APPROVAL_DATA, ApprovalLocation } from '../data/approvalData';

// ─── Sub-components ───────────────────────────────────────────────────────────

function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0 font-['Roboto:Medium',sans-serif] text-white text-[11px]"
      style={{
        width: size, height: size,
        backgroundImage: 'linear-gradient(119deg, rgb(195,199,245) 27%, rgb(234,216,249) 136%)',
        color: '#4a3f8a',
      }}
    >
      {initials}
    </div>
  );
}

function WorkflowTracker({ steps }: { steps: ReturnType<typeof APPROVAL_DATA['post-4']['steps']['slice']> }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-[#eaeaea]">
      {/* Section header */}
      <button
        className="w-full flex items-center justify-between px-[24px] py-[14px] hover:bg-[#fafafa]"
        onClick={() => setOpen(!open)}
      >
        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#212121] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Manager review
        </p>
        {open ? <ChevronUp size={18} color="#555" /> : <ChevronDown size={18} color="#555" />}
      </button>

      {open && (
        <div className="px-[24px] pb-[16px]">
          <div className="relative">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <div key={step.stepNumber} className="flex gap-[12px]">
                  {/* Icon + connecting line */}
                  <div className="flex flex-col items-center">
                    <div className="mt-[2px]">
                      {step.status === 'complete' && <CheckCircle size={20} color="#377e2c" fill="#eaf7e8" strokeWidth={2} />}
                      {step.status === 'current' && <Clock size={20} color="#1976d2" />}
                      {step.status === 'locked' && <Lock size={20} color="#aaa" />}
                      {step.status === 'rejected' && <XCircle size={20} color="#bf170a" fill="#fde3e1" strokeWidth={2} />}
                    </div>
                    {!isLast && <div className="w-px bg-[#e0e0e0] flex-1 my-[4px]" style={{ minHeight: 28 }} />}
                  </div>

                  {/* Step content */}
                  <div className="pb-[16px] flex-1">
                    <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#212121] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {step.title}
                    </p>

                    {step.status === 'complete' && (
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {step.approvers.map(a => a.isCurrentUser ? 'You' : a.name).join(' and ')} approved this post
                      </p>
                    )}

                    {step.status === 'current' && (
                      <div>
                        {/* Who responded */}
                        {step.approvers.filter(a => a.responded).map(a => (
                          <p key={a.id} className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {a.isCurrentUser ? 'You' : a.name} {a.action === 'approved' ? '✓ approved' : '✕ rejected'}
                          </p>
                        ))}
                        {/* Who still pending */}
                        {step.approvers.filter(a => !a.responded).length > 0 && (
                          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#a77b03] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Pending approvals from{' '}
                            {step.approvers.filter(a => !a.responded).map(a => a.isCurrentUser ? 'You' : a.name).join(', ')}
                          </p>
                        )}
                      </div>
                    )}

                    {step.status === 'locked' && (
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#aaa] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Unlocks when Step {step.stepNumber - 1} is complete
                      </p>
                    )}

                    {step.status === 'rejected' && (
                      <div>
                        {step.approvers.filter(a => a.action === 'rejected').map(a => (
                          <div key={a.id}>
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#bf170a] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {a.isCurrentUser ? 'You' : a.name} rejected this post
                            </p>
                            {a.rejectionReason && (
                              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#bf170a] leading-[18px] mt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                "{a.rejectionReason}"
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Rejection modal ──────────────────────────────────────────────────────────

interface RejectionModalProps {
  targetName: string; // location name or "all pending locations"
  onConfirm: (reason: string) => void;
  onCancel: () => void;
}

function RejectionModal({ targetName, onConfirm, onCancel }: RejectionModalProps) {
  const [reason, setReason] = useState('');
  const isValid = reason.trim().length > 0;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-[16px]">
      <div className="bg-white rounded-[8px] w-full max-w-[480px] shadow-xl">
        {/* Header */}
        <div className="px-[24px] py-[20px] border-b border-[#eaeaea]">
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-[#212121] tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Reject {targetName}
          </p>
        </div>

        {/* Body */}
        <div className="px-[24px] py-[20px]">
          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Provide a reason for rejection. This will be shared with the post author so they can make improvements.
          </p>
          <label className="block font-['Roboto:Medium',sans-serif] text-[12px] text-[#212121] mb-[6px] uppercase tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Rejection reason <span className="text-[#bf170a]">*</span>
          </label>
          <textarea
            className="w-full border border-[#e0e0e0] rounded-[4px] px-[12px] py-[8px] text-[14px] text-[#212121] resize-none focus:outline-none focus:border-[#1976d2] font-['Roboto:Regular',sans-serif]"
            style={{ fontVariationSettings: "'wdth' 100" }}
            rows={4}
            placeholder="e.g. Image doesn't match brand guidelines. Please use approved assets from the library."
            value={reason}
            onChange={e => setReason(e.target.value)}
            autoFocus
          />
          {!isValid && reason.length > 0 && (
            <p className="text-[12px] text-[#bf170a] mt-[4px] font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Rejection reason is required
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="px-[24px] py-[16px] border-t border-[#eaeaea] flex justify-end gap-[12px]">
          <button
            className="px-[16px] py-[8px] border border-[#e5e9f0] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f4f6f7]"
            style={{ fontVariationSettings: "'wdth' 100" }}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`px-[16px] py-[8px] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-white transition-opacity ${isValid ? 'bg-[#bf170a] hover:opacity-90' : 'bg-[#e0a09b] cursor-not-allowed'}`}
            style={{ fontVariationSettings: "'wdth' 100" }}
            onClick={() => isValid && onConfirm(reason.trim())}
            disabled={!isValid}
          >
            Confirm rejection
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Location Detail Card (Drawer 2 — stacked) ────────────────────────────────
// Handles pending (pre-action review), approved, and rejected states.
// Header layout matches PostDetailsDrawerContent: title + badge left, CTAs right.

interface LocationDetailCardProps {
  location: ApprovalLocation;
  locationState: { status: 'pending' | 'approved' | 'rejected'; rejectionReason?: string };
  postId: string;
  canReview: boolean;
  onBack: () => void;
  onApprove: (id: string) => void;
  onOpenRejectModal: (id: string, name: string) => void;
}

function LocationDetailCard({ location, locationState, postId, canReview, onBack, onApprove, onOpenRejectModal }: LocationDetailCardProps) {
  const post = POST_DATA[postId];
  const status = locationState.status;
  const rejectionReason = locationState.rejectionReason || location.rejectionReason;
  const shortName = location.name.replace(/^Motto Mortgage\s+/i, '');

  const statusLabel = status === 'rejected' ? 'Rejected' : status === 'approved' ? 'Approved' : 'Pending review';
  const statusBg    = status === 'rejected' ? '#fde3e1' : status === 'approved' ? '#eaf7e8' : '#fef6e0';
  const statusColor = status === 'rejected' ? '#bf170a' : status === 'approved' ? '#377e2c' : '#a77b03';


  return (
    <div className="absolute inset-0 bg-white z-30 flex flex-col overflow-hidden">
      {/* ── Header — matches PostDetailsDrawerContent layout ── */}
      <div className="bg-white border-b border-[#eaeaea] sticky top-0 z-10 flex items-center justify-between px-[24px] py-[18px] shrink-0">
        {/* Left: back + title + badge */}
        <div className="flex items-center gap-[8px] min-w-0">
          <button onClick={onBack} className="p-[2px] hover:bg-[#f4f6f7] rounded cursor-pointer shrink-0">
            <ArrowLeft size={20} color="#303030" />
          </button>
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-[#212121] tracking-[-0.36px] truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
            {shortName}
          </p>
          <div
            className="px-[8px] py-[4px] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[12px] shrink-0"
            style={{ backgroundColor: statusBg, color: statusColor, fontVariationSettings: "'wdth' 100" }}
          >
            {statusLabel}
          </div>
        </div>

        {/* Right: CTAs + more options */}
        <div className="flex items-center gap-[8px] shrink-0 ml-[12px]">
          {/* Pending: Reject / Approve */}
          {status === 'pending' && canReview && (
            <>
              <button
                onClick={() => onOpenRejectModal(location.id, location.name)}
                className="h-[36px] px-[12px] border border-[#e5e9f0] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f4f6f7] whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Reject
              </button>
              <button
                onClick={() => { onApprove(location.id); onBack(); }}
                className="h-[36px] px-[12px] bg-[#1976d2] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-white hover:opacity-90 whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Approve
              </button>
            </>
          )}
          {/* Rejected: Edit post / Resubmit */}
          {status === 'rejected' && (
            <>
              <button
                className="h-[36px] px-[12px] border border-[#e5e9f0] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f4f6f7] whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Edit post
              </button>
              <button
                className="h-[36px] px-[12px] bg-[#1976d2] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-white hover:opacity-90 whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Resubmit
              </button>
            </>
          )}
          {/* More options — always visible */}
          <button className="h-[36px] w-[36px] border border-[#e5e9f0] rounded-[4px] flex items-center justify-center hover:bg-[#f4f6f7] shrink-0">
            <span className="text-[#555] text-[18px] leading-none font-bold">⋮</span>
          </button>
        </div>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-auto">
        <div className="px-[24px] py-[16px] space-y-[20px]">

          {/* View original post reference */}
          <div className="bg-[#f4f6f7] rounded-[6px] p-[12px]">
            <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#555] mb-[6px] uppercase tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Original post
            </p>
            <button onClick={onBack} className="flex items-center gap-[6px] group text-left">
              <ArrowLeft size={13} color="#1976d2" className="shrink-0" />
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#1976d2] group-hover:underline line-clamp-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                Back to all locations — {post?.caption?.slice(0, 45)}…
              </p>
            </button>
            <div className="mt-[6px]">
              <span className="px-[6px] py-[2px] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[11px] bg-[#fef6e0] text-[#a77b03]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Awaiting approval
              </span>
            </div>
          </div>

          {/* Rejection reason callout */}
          {status === 'rejected' && rejectionReason && (
            <div className="bg-[#fde3e1] border border-[#f5c0bb] rounded-[8px] p-[16px]">
              <div className="flex items-start gap-[10px]">
                <XCircle size={20} color="#bf170a" className="shrink-0 mt-[1px]" />
                <div>
                  <p className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#bf170a] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Rejection reason
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#bf170a] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {rejectionReason}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Approved callout */}
          {status === 'approved' && (
            <div className="bg-[#eaf7e8] border border-[#b3e5b0] rounded-[8px] p-[14px] flex items-center gap-[10px]">
              <CheckCircle size={18} color="#377e2c" className="shrink-0" />
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#377e2c]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Approved{location.actionedBy ? ` by ${location.actionedBy}` : ''}{location.actionedAt ? ` · ${location.actionedAt}` : ''}
              </p>
            </div>
          )}

          {/* Post preview for this location */}
          <div>
            <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#555] uppercase tracking-[0.5px] mb-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Content for this location
            </p>
            <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden">
              <div className="flex items-center gap-[8px] p-[12px] border-b border-[#eaeaea]">
                <Avatar name={location.name} size={32} />
                <div>
                  <p className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {location.name}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#555]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {post?.date} · {post?.time}
                  </p>
                </div>
              </div>
              <div className="p-[12px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {post?.caption}
                </p>
                {post?.hashtags && (
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {post.hashtags}
                  </p>
                )}
              </div>
              {post?.image && <img src={post.image} alt="Post" className="w-full h-auto" />}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface AwaitingApprovalContentProps {
  postId: string;
  onClose: () => void;
}

export function AwaitingApprovalContent({ postId, onClose }: AwaitingApprovalContentProps) {
  const post = POST_DATA[postId];
  const approvalData = APPROVAL_DATA[postId];

  // Location states (mutable in this session)
  const [locationStates, setLocationStates] = useState<Record<string, { status: 'pending' | 'approved' | 'rejected'; rejectionReason?: string }>>(
    () => Object.fromEntries(
      (approvalData?.locations || []).map(loc => [
        loc.id,
        { status: loc.status, rejectionReason: loc.rejectionReason },
      ])
    )
  );

  // Rejection modal
  const [rejectionTarget, setRejectionTarget] = useState<{ id: string; name: string } | null>(null);

  // Location detail card (Drawer 2) — id of selected location, null = hidden
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  // Content changed banner (simulate: toggle with state)
  const [contentChangedBanner, setContentChangedBanner] = useState(false);

  // Preview section collapse
  const [previewOpen, setPreviewOpen] = useState(true);

  // Selected preview location (for the location dropdown)
  const [previewLocationId, setPreviewLocationId] = useState<string>(() => {
    const first = (approvalData?.locations || [])[0];
    return first?.id || '';
  });
  const [previewDropdownOpen, setPreviewDropdownOpen] = useState(false);
  const previewDropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!previewDropdownOpen) return;
    function handleClick(e: MouseEvent) {
      if (previewDropdownRef.current && !previewDropdownRef.current.contains(e.target as Node)) {
        setPreviewDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [previewDropdownOpen]);


  const visibleLocations = (approvalData?.locations || []).filter(
    loc => loc.isCurrentUserScope
  );

  const pendingCount = visibleLocations.filter(loc => locationStates[loc.id]?.status === 'pending').length;
  const actionedCount = visibleLocations.length - pendingCount;
  const allActioned = pendingCount === 0;

  // Actions
  const approveLocation = useCallback((id: string) => {
    setLocationStates(prev => ({ ...prev, [id]: { status: 'approved' } }));
  }, []);

  const openRejectModal = useCallback((id: string, name: string) => {
    setRejectionTarget({ id, name });
  }, []);

  const confirmRejection = useCallback((reason: string) => {
    if (!rejectionTarget) return;
    if (rejectionTarget.id === '__all__') {
      setLocationStates(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(id => {
          if (next[id].status === 'pending') {
            next[id] = { status: 'rejected', rejectionReason: reason };
          }
        });
        return next;
      });
    } else {
      setLocationStates(prev => ({
        ...prev,
        [rejectionTarget.id]: { status: 'rejected', rejectionReason: reason },
      }));
    }
    setRejectionTarget(null);
  }, [rejectionTarget]);

  const approveAll = useCallback(() => {
    setLocationStates(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(id => {
        if (next[id].status === 'pending') next[id] = { status: 'approved' };
      });
      return next;
    });
  }, []);

  if (!post || !approvalData) return null;

  const currentStep = approvalData.steps.find(s => s.status === 'current');
  const currentUserIsPendingReviewer = currentStep?.approvers.some(a => a.isCurrentUser && !a.responded);

  return (
    <div className="bg-white relative size-full flex flex-col">
      {/* ── Header ── */}
      <div className="bg-white border-b border-[#eaeaea] flex items-center justify-between px-[24px] py-[18px] sticky top-0 z-10 shrink-0">
        <div className="flex items-center gap-[8px]">
          <button onClick={onClose} className="p-[2px] hover:bg-[#f4f6f7] rounded cursor-pointer">
            <ArrowLeft size={20} color="#303030" />
          </button>
          <p className="font-['Roboto:Regular',sans-serif] text-[18px] text-[#212121] tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Post details
          </p>
          {(() => {
            const cfg =
              post.status === 'rejected'  ? { bg: '#fde3e1', color: '#bf170a', label: 'Rejected' } :
              post.status === 'awaiting'  ? { bg: '#fef6e0', color: '#a77b03', label: 'Awaiting approval' } :
                                            { bg: '#fef6e0', color: '#a77b03', label: 'Partially approved' };
            return (
              <div className="px-[8px] py-[4px] rounded-[4px]" style={{ backgroundColor: cfg.bg }}>
                <p className="font-['Roboto:Regular',sans-serif] text-[12px]" style={{ color: cfg.color, fontVariationSettings: "'wdth' 100" }}>
                  {cfg.label}
                </p>
              </div>
            );
          })()}
        </div>

        {/* Right: Bulk actions (awaiting/partially) or Edit/Resubmit (rejected) + ⋮ */}
        {post.status === 'rejected' ? (
          <div className="flex items-center gap-[8px]">
            <button
              className="h-[36px] px-[12px] border border-[#e5e9f0] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f4f6f7]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Edit post
            </button>
            <button
              className="h-[36px] px-[12px] bg-[#1976d2] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-white hover:opacity-90"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Resubmit
            </button>
            <button className="h-[36px] w-[36px] border border-[#e5e9f0] rounded-[4px] flex items-center justify-center hover:bg-[#f4f6f7]">
              <span className="text-[#555] text-[18px] leading-none font-bold">⋮</span>
            </button>
          </div>
        ) : currentUserIsPendingReviewer && !allActioned ? (
          <div className="flex items-center gap-[8px]">
            <button
              onClick={() => openRejectModal('__all__', 'all pending locations')}
              className="h-[36px] px-[12px] border border-[#e5e9f0] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f4f6f7]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Reject all
            </button>
            <button
              onClick={approveAll}
              className="h-[36px] px-[12px] bg-[#1976d2] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-white hover:opacity-90"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Approve all
            </button>
            {/* More options */}
            <button className="h-[36px] w-[36px] border border-[#e5e9f0] rounded-[4px] flex items-center justify-center hover:bg-[#f4f6f7]">
              <span className="text-[#555] text-[18px] leading-none font-bold">⋮</span>
            </button>
          </div>
        ) : (
          /* No bulk actions when all actioned or user is not a reviewer */
          <button className="h-[36px] w-[36px] border border-[#e5e9f0] rounded-[4px] flex items-center justify-center hover:bg-[#f4f6f7]">
            <span className="text-[#555] text-[18px] leading-none font-bold">⋮</span>
          </button>
        )}
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-auto">

        {/* Content changed banner (edge case) */}
        {contentChangedBanner && (
          <div className="mx-[24px] mt-[12px] bg-[#fef6e0] border border-[#f5d87a] rounded-[4px] p-[12px] flex items-start gap-[8px]">
            <AlertTriangle size={16} color="#a77b03" className="shrink-0 mt-[1px]" />
            <div className="flex-1">
              <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#a77b03]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Post content has changed
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#a77b03]" style={{ fontVariationSettings: "'wdth' 100" }}>
                The post was edited after you opened this drawer. Review the latest version before approving.
              </p>
            </div>
            <button
              className="text-[#1976d2] font-['Roboto:Regular',sans-serif] text-[12px] shrink-0 hover:underline"
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => setContentChangedBanner(false)}
            >
              Refresh
            </button>
          </div>
        )}

        {/* All-actioned state */}
        {allActioned && currentUserIsPendingReviewer && (
          <div className="mx-[24px] mt-[12px] bg-[#eaf7e8] border border-[#b3e5b0] rounded-[4px] p-[12px] flex items-start gap-[8px]">
            <CheckCircle size={16} color="#377e2c" className="shrink-0 mt-[1px]" />
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#377e2c]" style={{ fontVariationSettings: "'wdth' 100" }}>
              You've actioned all your assigned locations. Other reviewers may still be pending.
            </p>
          </div>
        )}

        {/* ── Approval Workflow Tracker ── */}
        <WorkflowTracker steps={approvalData.steps} />

        {/* ── Post Preview (collapsible) — 2nd section ── */}
        {(() => {
          const allLocations = approvalData.locations;
          const selectedLoc = allLocations.find(l => l.id === previewLocationId) || allLocations[0];
          return (
            <div className="border-b border-[#eaeaea]">
              {/* Preview header row */}
              <div className="flex items-center justify-between px-[24px] py-[14px]">
                <div className="flex items-center gap-[8px]">
                  {/* Location dropdown trigger */}
                  <div className="relative" ref={previewDropdownRef}>
                    <button
                      className="flex items-center gap-[4px] hover:bg-[#f4f6f7] rounded-[4px] px-[6px] py-[2px] -mx-[6px]"
                      onClick={() => setPreviewDropdownOpen(o => !o)}
                    >
                      <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Preview
                      </p>
                      <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {selectedLoc?.name.replace(/^Motto Mortgage\s+/i, '') || selectedLoc?.city}
                      </span>
                      <ChevronDown size={14} color="#1976d2" />
                    </button>

                    {/* Dropdown list */}
                    {previewDropdownOpen && (
                      <div className="absolute top-full left-0 mt-[4px] bg-white border border-[#e0e0e0] rounded-[6px] shadow-lg z-20 min-w-[220px] max-h-[260px] overflow-auto">
                        {allLocations.map(loc => {
                          const locState = locationStates[loc.id];
                          return (
                            <button
                              key={loc.id}
                              className={`w-full flex items-center gap-[10px] px-[14px] py-[10px] text-left hover:bg-[#f4f6f7] ${loc.id === previewLocationId ? 'bg-[#f0f4ff]' : ''}`}
                              onClick={() => { setPreviewLocationId(loc.id); setPreviewDropdownOpen(false); }}
                            >
                              <Avatar name={loc.name} size={24} />
                              <div className="flex-1 min-w-0">
                                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121] truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {loc.name}
                                </p>
                                <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#555]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {loc.city}
                                </p>
                              </div>
                              {/* Selected tick */}
                              {loc.id === previewLocationId && (
                                <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M3 8.5L6.5 12L13 5" stroke="#1976d2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  className="hover:bg-[#f4f6f7] rounded p-[2px]"
                  onClick={() => { setPreviewOpen(!previewOpen); setPreviewDropdownOpen(false); }}
                >
                  {previewOpen ? <ChevronUp size={18} color="#555" /> : <ChevronDown size={18} color="#555" />}
                </button>
              </div>

              {previewOpen && selectedLoc && (
                <div className="px-[24px] pb-[16px]">
                  <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden">
                    <div className="flex items-center gap-[8px] p-[12px] border-b border-[#eaeaea]">
                      <Avatar name={selectedLoc.name} size={32} />
                      <div>
                        <p className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {selectedLoc.name}
                        </p>
                        <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#555]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {post.date} · {post.time}
                        </p>
                      </div>
                    </div>
                    <div className="p-[12px]">
                      <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {post.caption}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {post.hashtags}
                      </p>
                    </div>
                    <img src={post.image} alt="Post" className="w-full h-auto" />
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* ── Location list section ── */}
        <div className="border-b border-[#eaeaea]">
          <div className="px-[24px] py-[14px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Scheduled for {visibleLocations.length} location{visibleLocations.length !== 1 ? 's' : ''} · {approvalData.submittedAt.split(' ').slice(0, 3).join(' ')}
              </p>
              {/* Progress indicator */}
              <div className="px-[8px] py-[2px] rounded-[99px] font-['Roboto:Regular',sans-serif] text-[11px]"
                style={{
                  backgroundColor: allActioned ? '#eaf7e8' : '#fef6e0',
                  color: allActioned ? '#377e2c' : '#a77b03',
                  fontVariationSettings: "'wdth' 100",
                }}>
                {actionedCount}/{visibleLocations.length} actioned
              </div>
            </div>
            <ChevronUp size={18} color="#555" />
          </div>

          {/* Location rows */}
          <div className="divide-y divide-[#f0f0f0] pb-[8px]">
            {visibleLocations.map(loc => {
              const state = locationStates[loc.id];

              return (
                <div
                  key={loc.id}
                  className="group px-[24px] py-[12px] flex items-center gap-[12px] hover:bg-[#f4f6f7] transition-colors cursor-pointer"
                  onClick={() => setSelectedLocationId(loc.id)}
                >
                  {/* Avatar + name */}
                  <Avatar name={loc.name} size={32} />
                  <div className="flex-1 min-w-0">
                    <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {loc.name}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#555]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {loc.city}
                    </p>
                  </div>

                  {/* Status / hover quick-actions */}
                  {state.status === 'pending' && currentUserIsPendingReviewer && (
                    <div
                      className="flex gap-[6px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={e => e.stopPropagation()} // don't open card when clicking quick-action buttons
                    >
                      <button
                        onClick={() => openRejectModal(loc.id, loc.name)}
                        className="h-[32px] px-[12px] border border-[#e5e9f0] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121] hover:bg-[#e9ecef]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => approveLocation(loc.id)}
                        className="h-[32px] px-[12px] bg-[#1976d2] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-white hover:opacity-90"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Approve
                      </button>
                    </div>
                  )}

                  {state.status === 'pending' && !currentUserIsPendingReviewer && (
                    <span className="px-[8px] py-[4px] rounded-[4px] bg-[#fef6e0] font-['Roboto:Regular',sans-serif] text-[12px] text-[#a77b03] shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Pending
                    </span>
                  )}

                  {state.status === 'approved' && (
                    <div className="flex items-center gap-[6px] shrink-0">
                      <span className="px-[8px] py-[4px] rounded-[4px] bg-[#eaf7e8] font-['Roboto:Regular',sans-serif] text-[12px] text-[#377e2c]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        ✓ Approved
                      </span>
                    </div>
                  )}

                  {state.status === 'rejected' && (
                    <div className="flex items-center gap-[6px] shrink-0">
                      <span className="px-[8px] py-[4px] rounded-[4px] bg-[#fde3e1] font-['Roboto:Regular',sans-serif] text-[12px] text-[#bf170a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        ✕ Rejected
                      </span>
                      {/* Chevron hint */}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-40">
                        <path d="M5 3L9 7L5 11" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ── Rejection Modal ── */}
      {rejectionTarget && (
        <RejectionModal
          targetName={rejectionTarget.id === '__all__' ? 'all pending locations' : rejectionTarget.name}
          onConfirm={confirmRejection}
          onCancel={() => setRejectionTarget(null)}
        />
      )}

      {/* ── Location Detail Card (Drawer 2) ── */}
      {(() => {
        if (!selectedLocationId) return null;
        const locData = approvalData.locations.find(l => l.id === selectedLocationId);
        const locState = locationStates[selectedLocationId];
        if (!locData || !locState) return null;
        return (
          <LocationDetailCard
            location={locData}
            locationState={locState}
            postId={postId}
            canReview={!!currentUserIsPendingReviewer}
            onBack={() => setSelectedLocationId(null)}
            onApprove={(id) => {
              approveLocation(id);
              setSelectedLocationId(null);
            }}
            onOpenRejectModal={(id, name) => {
              openRejectModal(id, name);
              // card stays open; after modal confirms it will re-render in rejected state
            }}
          />
        );
      })()}
    </div>
  );
}
