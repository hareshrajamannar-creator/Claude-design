import { useState, useCallback } from 'react';
import {
  ArrowLeft, ChevronUp, ChevronDown, CheckCircle, Clock,
  XCircle, MoreVertical, MapPin
} from 'lucide-react';
import { POST_DATA } from '../data/postData';
import { APPROVAL_DATA, ApprovalLocation } from '../data/approvalData';
import { POST_ACTIVITIES } from '../data/postData';

// ─── Platform Icons ────────────────────────────────────────────────────────────

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0 rounded-full overflow-hidden" style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-[#337fff]" />
      <svg className="absolute inset-0 m-auto" width={size * 0.5} height={size * 0.55} viewBox="0 0 10 18" fill="white">
        <path d="M6.5 6H9V3.5C8.3 3.2 7.4 3 6.5 3 4 3 2.5 4.5 2.5 7V9H0v3h2.5V18h3V12H8l.5-3H5.5V7.2C5.5 6.5 5.9 6 6.5 6z" />
      </svg>
    </div>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0 rounded-[5px] overflow-hidden" style={{ width: size, height: size }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(-45deg,#fbe18a,#fcbb45,#f75274,#d53692,#8f39ce,#5b4fe9)' }} />
      <svg className="absolute inset-0 m-auto" width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </div>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0 rounded-[5px] overflow-hidden" style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-[#0a66c2]" />
      <svg className="absolute inset-0 m-auto" width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </div>
  );
}

// ─── Avatar ────────────────────────────────────────────────────────────────────

function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0 font-['Roboto:Medium',sans-serif] text-white"
      style={{
        width: size, height: size,
        fontSize: size * 0.35,
        backgroundImage: 'linear-gradient(119deg, rgb(195,199,245) 27%, rgb(234,216,249) 136%)',
        color: '#4a3f8a',
      }}
    >
      {initials}
    </div>
  );
}

// ─── Rejection Modal ───────────────────────────────────────────────────────────

function RejectionModal({ targetName, onConfirm, onCancel }: {
  targetName: string;
  onConfirm: (reason: string) => void;
  onCancel: () => void;
}) {
  const [reason, setReason] = useState('');
  const isValid = reason.trim().length > 0;
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-[16px]">
      <div className="bg-white rounded-[8px] w-full max-w-[480px] shadow-xl">
        <div className="px-[24px] py-[20px] border-b border-[#eaeaea]">
          <p className="font-['Roboto:Regular',sans-serif] text-[18px] text-[#212121] tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Reject {targetName}
          </p>
        </div>
        <div className="px-[24px] py-[20px]">
          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Provide a reason so the creator can make improvements.
          </p>
          <textarea
            className="w-full border border-[#e0e0e0] rounded-[4px] px-[12px] py-[8px] text-[14px] text-[#212121] resize-none outline-none focus:border-[#1976d2] font-['Roboto:Regular',sans-serif]"
            rows={4}
            placeholder="e.g. Image doesn't match brand guidelines. Please use approved assets."
            value={reason}
            onChange={e => setReason(e.target.value)}
            autoFocus
          />
        </div>
        <div className="px-[24px] py-[16px] border-t border-[#eaeaea] flex justify-end gap-[12px]">
          <button className="px-[16px] py-[8px] border border-[#e5e9f0] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f4f6f7]" onClick={onCancel}>
            Cancel
          </button>
          <button
            className={`px-[16px] py-[8px] rounded-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-white ${isValid ? 'bg-[#bf170a] hover:opacity-90' : 'bg-[#e0a09b] cursor-not-allowed'}`}
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

// ─── Collapsible Section ───────────────────────────────────────────────────────

function CollapsibleSection({ title, children, defaultOpen = true, subtitle }: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#eaeaea]">
      <button
        className="w-full flex items-center justify-between px-[24px] py-[14px] hover:bg-[#fafafa]"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col items-start">
          <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {title}
          </span>
          {subtitle && (
            <span className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#555] mt-[1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {subtitle}
            </span>
          )}
        </div>
        {open ? <ChevronUp size={18} color="#555" /> : <ChevronDown size={18} color="#555" />}
      </button>
      {open && <div className="px-[24px] pb-[16px]">{children}</div>}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

interface ApprovePostsDrawerContentProps {
  postId: string;
  onClose: () => void;
}

export function ApprovePostsDrawerContent({ postId, onClose }: ApprovePostsDrawerContentProps) {
  const post = POST_DATA[postId];
  const approval = APPROVAL_DATA[postId];
  const activities = POST_ACTIVITIES[postId] ?? [];

  type Channel = 'facebook' | 'instagram' | 'linkedin';
  const availableChannels: Channel[] = ['facebook', 'instagram', 'linkedin'];
  const [activeChannel, setActiveChannel] = useState<Channel>('facebook');
  const [selectedLocation, setSelectedLocation] = useState<string>(approval?.locations?.[0]?.city ?? 'Atlanta');

  // Per-location action state
  type LocStatus = 'pending' | 'approved' | 'rejected';
  const [locStates, setLocStates] = useState<Record<string, { status: LocStatus; reason?: string }>>(() => {
    const init: Record<string, { status: LocStatus; reason?: string }> = {};
    approval?.locations?.forEach(l => {
      init[l.id] = { status: l.status === 'rejected' ? 'rejected' : l.status === 'approved' ? 'approved' : 'pending', reason: l.rejectionReason };
    });
    return init;
  });

  const [rejectionTarget, setRejectionTarget] = useState<{ id: string; name: string } | null>(null);
  const [showAllLocations, setShowAllLocations] = useState(false);

  const handleApproveLocation = useCallback((locId: string) => {
    setLocStates(prev => ({ ...prev, [locId]: { status: 'approved' } }));
  }, []);

  const handleRejectLocation = useCallback((locId: string, name: string) => {
    setRejectionTarget({ id: locId, name });
  }, []);

  const handleConfirmRejection = useCallback((reason: string) => {
    if (rejectionTarget) {
      setLocStates(prev => ({ ...prev, [rejectionTarget.id]: { status: 'rejected', reason } }));
      setRejectionTarget(null);
    }
  }, [rejectionTarget]);

  const handleApproveAll = () => {
    setLocStates(prev => {
      const next = { ...prev };
      approval?.locations?.forEach(l => {
        if (next[l.id]?.status === 'pending') next[l.id] = { status: 'approved' };
      });
      return next;
    });
  };

  if (!post || !approval) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-[#555] font-['Roboto:Regular',sans-serif]">Post not found</p>
      </div>
    );
  }

  const statusLabel = post.status === 'awaiting' ? 'Awaiting approval' : 'Partially approval';
  const statusColor = '#a77b03';
  const statusBg = '#fef6e0';

  const locations = approval.locations ?? [];
  const visibleLocations = showAllLocations ? locations : locations.slice(0, 5);
  const scheduledDate = post.scheduledFor?.replace('Awaiting approval for', '').replace('Partially approved for', '').trim() ?? 'Mar 16, 10:00 AM';

  const channelLabel: Record<Channel, string> = { facebook: 'Facebook', instagram: 'Instagram', linkedin: 'LinkedIn' };

  return (
    <div className="flex flex-col h-full">

      {/* ── Drawer Header ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-[24px] py-[16px] border-b border-[#eaeaea] shrink-0">
        {/* Left: back + title + badge */}
        <div className="flex items-center gap-[12px]">
          <button className="text-[#555] hover:text-[#212121]" onClick={onClose}>
            <ArrowLeft size={20} />
          </button>
          <span className="font-['Roboto:Regular',sans-serif] text-[18px] text-[#212121] tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Post details
          </span>
          <span
            className="font-['Roboto:Regular',sans-serif] text-[12px] px-[8px] py-[2px] rounded-[4px]"
            style={{ backgroundColor: statusBg, color: statusColor }}
          >
            {statusLabel}
          </span>
        </div>

        {/* Right: Reject all + Approve all + more */}
        <div className="flex items-center gap-[8px]">
          <button
            className="h-[36px] px-[14px] rounded-[4px] border border-[#e5e9f0] bg-white font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f5f5f5]"
            onClick={() => {
              // open reject all modal — simplified: just mark all pending as rejected with placeholder
              setLocStates(prev => {
                const next = { ...prev };
                locations.forEach(l => {
                  if (next[l.id]?.status === 'pending') next[l.id] = { status: 'rejected', reason: 'Rejected by approver' };
                });
                return next;
              });
            }}
          >
            Reject all
          </button>
          <button
            className="h-[36px] px-[14px] rounded-[4px] bg-[#1976d2] font-['Roboto:Regular',sans-serif] text-[14px] text-white hover:bg-[#1565c0]"
            onClick={handleApproveAll}
          >
            Approve all
          </button>
          <button className="h-[36px] w-[36px] flex items-center justify-center rounded-[4px] border border-[#e5e9f0] bg-white hover:bg-[#f5f5f5]">
            <MoreVertical size={16} className="text-[#555]" />
          </button>
        </div>
      </div>

      {/* ── Scrollable body ───────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto">

        {/* ── Manager Review ─────────────────────────────────────── */}
        <CollapsibleSection title="Manager review">
          <div className="relative">
            {approval.steps.map((step, idx) => {
              const isLast = idx === approval.steps.length - 1;
              return (
                <div key={step.stepNumber} className="flex gap-[12px]">
                  <div className="flex flex-col items-center">
                    <div className="mt-[2px]">
                      {step.status === 'complete'  && <CheckCircle size={20} color="#377e2c" fill="#eaf7e8" strokeWidth={2} />}
                      {step.status === 'current'   && <Clock size={20} color="#1976d2" />}
                      {step.status === 'locked'    && <Clock size={20} color="#aaa" />}
                      {step.status === 'rejected'  && <XCircle size={20} color="#bf170a" fill="#fde3e1" strokeWidth={2} />}
                    </div>
                    {!isLast && <div className="w-px bg-[#e0e0e0] flex-1 my-[4px]" style={{ minHeight: 28 }} />}
                  </div>
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
                        {step.approvers.filter(a => a.responded).map(a => (
                          <p key={a.id} className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {a.isCurrentUser ? 'You' : a.name} {a.action === 'approved' ? '✓ approved' : '✕ rejected'}
                          </p>
                        ))}
                        {step.approvers.filter(a => !a.responded).length > 0 && (
                          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#a77b03] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Pending approvals from {step.approvers.filter(a => !a.responded).map(a => a.isCurrentUser ? 'You' : a.name).join(', ')}
                          </p>
                        )}
                      </div>
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
        </CollapsibleSection>

        {/* ── Preview ────────────────────────────────────────────── */}
        <CollapsibleSection
          title="Preview"
          subtitle=""
          defaultOpen={true}
        >
          {/* Preview header: "Preview" + Location dropdown */}
          <div className="flex items-center gap-[8px] mb-[12px] -mt-[4px]">
            <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#555]" style={{ fontVariationSettings: "'wdth' 100" }}>Viewing as</span>
            <button className="flex items-center gap-[4px] font-['Roboto:Medium',sans-serif] text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {selectedLocation} <ChevronDown size={16} />
            </button>
          </div>

          {/* Channel tabs */}
          <div className="flex gap-[0px] border-b border-[#eaeaea] mb-[16px]">
            {availableChannels.map(ch => (
              <button
                key={ch}
                className={`px-[16px] pb-[10px] pt-[4px] font-['Roboto:Regular',sans-serif] text-[14px] border-b-2 -mb-[1px] transition-colors ${
                  activeChannel === ch
                    ? 'border-[#1976d2] text-[#1976d2]'
                    : 'border-transparent text-[#555] hover:text-[#212121]'
                }`}
                onClick={() => setActiveChannel(ch)}
              >
                {channelLabel[ch]}
              </button>
            ))}
          </div>

          {/* Post preview */}
          <div className="bg-[#fafafa] rounded-[8px] p-[16px]">
            {/* Profile row */}
            <div className="flex items-center gap-[10px] mb-[12px]">
              <Avatar name={approval.submittedBy} size={32} />
              <div>
                <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#212121] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Motto Mortgage {selectedLocation}
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#888] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {post.date}
                </p>
              </div>
            </div>
            {/* Caption */}
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121] leading-[20px] mb-[10px] whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
              {post.caption}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#1976d2] leading-[18px] mb-[12px]">
              {post.hashtags}
            </p>
            {/* Image */}
            <div className="rounded-[6px] overflow-hidden">
              <img src={post.image} alt="Post preview" className="w-full object-cover max-h-[320px]" />
            </div>
            {/* Tags row */}
            <div className="flex items-center gap-[6px] mt-[10px]">
              <span className="font-['Roboto:Regular',sans-serif] text-[12px] bg-[#eaeaea] text-[#555] px-[8px] py-[2px] rounded-[4px]">Celebrations</span>
              <span className="font-['Roboto:Regular',sans-serif] text-[12px] bg-[#eaeaea] text-[#555] px-[8px] py-[2px] rounded-[4px]">Main events</span>
            </div>
          </div>
        </CollapsibleSection>

        {/* ── Scheduled for X pages ──────────────────────────────── */}
        <CollapsibleSection title={`Scheduled for ${locations.length} pages on ${scheduledDate}`}>
          <div className="flex flex-col divide-y divide-[#f0f0f0]">
            {visibleLocations.map(loc => {
              const state = locStates[loc.id] ?? { status: 'pending' };
              return (
                <div key={loc.id} className="flex items-center justify-between py-[10px] first:pt-[0px]">
                  {/* Location info */}
                  <div className="flex items-center gap-[10px]">
                    <Avatar name={loc.name} size={32} />
                    <div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {loc.name}
                      </p>
                      <div className="flex items-center gap-[4px]">
                        <MapPin size={11} className="text-[#888]" />
                        <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#888] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {loc.city}
                        </p>
                        {state.status === 'approved' && (
                          <span className="ml-[6px] text-[11px] text-[#377e2c] bg-[#eaf7e8] px-[6px] py-[1px] rounded-[3px] font-['Roboto:Regular',sans-serif]">Approved</span>
                        )}
                        {state.status === 'rejected' && (
                          <span className="ml-[6px] text-[11px] text-[#bf170a] bg-[#fde3e1] px-[6px] py-[1px] rounded-[3px] font-['Roboto:Regular',sans-serif]">Rejected</span>
                        )}
                      </div>
                      {state.status === 'rejected' && state.reason && (
                        <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#bf170a] mt-[2px] max-w-[280px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {state.reason}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Per-location actions */}
                  {state.status === 'pending' && (
                    <div className="flex items-center gap-[6px] shrink-0">
                      <button
                        className="h-[32px] px-[12px] rounded-[4px] border border-[#e5e9f0] bg-white font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121] hover:bg-[#f5f5f5]"
                        onClick={() => handleRejectLocation(loc.id, loc.name)}
                      >
                        Reject
                      </button>
                      <button
                        className="h-[32px] px-[12px] rounded-[4px] bg-[#1976d2] font-['Roboto:Regular',sans-serif] text-[13px] text-white hover:bg-[#1565c0]"
                        onClick={() => handleApproveLocation(loc.id)}
                      >
                        Approve
                      </button>
                    </div>
                  )}
                  {state.status !== 'pending' && (
                    <button
                      className="text-[12px] text-[#1976d2] font-['Roboto:Regular',sans-serif] hover:underline shrink-0"
                      onClick={() => setLocStates(prev => ({ ...prev, [loc.id]: { status: 'pending' } }))}
                    >
                      Undo
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {locations.length > 5 && (
            <button
              className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#1976d2] hover:underline"
              onClick={() => setShowAllLocations(!showAllLocations)}
            >
              {showAllLocations ? 'Show less' : `See more (${locations.length - 5} more)`}
            </button>
          )}
        </CollapsibleSection>

        {/* ── Activity ───────────────────────────────────────────── */}
        <CollapsibleSection title="Activity" defaultOpen={false}>
          <div className="flex flex-col gap-[0px]">
            {activities.length === 0 && (
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#888]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No activity yet.
              </p>
            )}
            {activities.map((act, idx) => (
              <div key={act.id} className={`flex gap-[12px] py-[12px] ${idx !== activities.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}>
                <Avatar name={act.user.name} size={32} />
                <div className="flex-1 min-w-0">
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#888] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {act.timestamp}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <span className="font-['Roboto:Medium',sans-serif]">{act.user.name}</span> {act.description}
                  </p>
                  {act.details?.rejectionReason && (
                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#bf170a] mt-[2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Reason: {act.details.rejectionReason}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

      </div>

      {/* ── Rejection Modal ───────────────────────────────────────── */}
      {rejectionTarget && (
        <RejectionModal
          targetName={rejectionTarget.name}
          onConfirm={handleConfirmRejection}
          onCancel={() => setRejectionTarget(null)}
        />
      )}
    </div>
  );
}
