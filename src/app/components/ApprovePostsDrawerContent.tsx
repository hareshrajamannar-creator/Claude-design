import { useState, useCallback } from 'react';
import {
  ArrowLeft, ChevronUp, ChevronDown, CheckCircle, Clock,
  XCircle, MoreVertical, MapPin
} from 'lucide-react';
import { POST_DATA } from '../data/postData';
import { APPROVAL_DATA, ApprovalLocation } from '../data/approvalData';
import { POST_ACTIVITIES } from '../data/postData';
import { PlatformIcons } from './PlatformIcons';

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
