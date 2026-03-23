import { useState } from 'react';
import {
  Pencil, MessageSquare, Info, History, Copy, Trash2,
  Search, SlidersHorizontal, ChevronDown, MoreVertical
} from 'lucide-react';
import { POST_DATA } from '../data/postData';
import { APPROVAL_DATA } from '../data/approvalData';

// ─── Platform Icons ────────────────────────────────────────────────────────────

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <div className="relative shrink-0 rounded-full overflow-hidden" style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-[#337fff]" />
      <svg className="absolute inset-0 m-auto" width={size * 0.5} height={size * 0.5} viewBox="0 0 10 18" fill="white">
        <path d="M6.5 6H9V3.5C8.3 3.2 7.4 3 6.5 3 4 3 2.5 4.5 2.5 7V9H0v3h2.5V18h3V12H8l.5-3H5.5V7.2C5.5 6.5 5.9 6 6.5 6z" />
      </svg>
    </div>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <div className="relative shrink-0 rounded-[6px] overflow-hidden" style={{ width: size, height: size }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(-45deg,#fbe18a,#fcbb45,#f75274,#d53692,#8f39ce,#5b4fe9)' }} />
      <svg className="absolute inset-0 m-auto" width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </div>
  );
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <div className="relative shrink-0 rounded-[6px] overflow-hidden" style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-[#0a66c2]" />
      <svg className="absolute inset-0 m-auto" width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </div>
  );
}

function PlatformIcons({ platforms }: { platforms: ('facebook' | 'instagram' | 'linkedin')[] }) {
  return (
    <div className="flex items-center gap-[8px]">
      {platforms.includes('facebook') && <FacebookIcon />}
      {platforms.includes('instagram') && <InstagramIcon />}
      {platforms.includes('linkedin') && <LinkedInIcon />}
    </div>
  );
}

// ─── Status Badge ──────────────────────────────────────────────────────────────

const statusConfig = {
  awaiting:  { bg: '#fef6e0', color: '#a77b03', label: 'Awaiting approval' },
  partially: { bg: '#fef6e0', color: '#a77b03', label: 'Partially approval' },
};

function StatusBadge({ status }: { status: 'awaiting' | 'partially' }) {
  const cfg = statusConfig[status];
  return (
    <span
      className="font-['Roboto:Regular',sans-serif] text-[12px] px-[8px] py-[3px] rounded-[4px] whitespace-nowrap shrink-0"
      style={{ backgroundColor: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}

// ─── Post Card ─────────────────────────────────────────────────────────────────

interface PostCardProps {
  postId: string;
  onOpenDetails: (postId: string) => void;
  onOpenActivity: (postId: string) => void;
}

function PostCard({ postId, onOpenDetails, onOpenActivity }: PostCardProps) {
  const post = POST_DATA[postId];
  const approval = APPROVAL_DATA[postId];
  if (!post || (post.status !== 'awaiting' && post.status !== 'partially')) return null;

  const locationCount = approval?.locations?.length ?? 10;
  const creatorName = approval?.submittedBy ?? 'Creator name';
  const workflowName = approval?.workflowTitle ?? 'Workflow name';
  const displayDate = `${post.date.split(',')[1]?.trim() ?? post.date}, ${post.time}`;

  // Show multiple images layout
  const images = [post.image, post.image, post.image, post.image, post.image];

  return (
    <div
      className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden cursor-pointer hover:border-[#1976d2] transition-colors"
      onClick={() => onOpenDetails(postId)}
    >
      <div className="px-[16px] pt-[16px] pb-[0px]">
        {/* Top row: channel icons + status badge */}
        <div className="flex items-center justify-between mb-[10px]">
          <PlatformIcons platforms={post.platforms.length > 1 ? post.platforms : ['facebook', 'instagram', 'linkedin']} />
          <StatusBadge status={post.status as 'awaiting' | 'partially'} />
        </div>

        {/* Meta row: date • locations • creator • workflow */}
        <div className="flex items-center gap-[6px] mb-[12px] flex-wrap">
          <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555]">{displayDate}</span>
          <span className="text-[#aaa] text-[12px]">•</span>
          <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555]">{locationCount} locations</span>
          <span className="text-[#aaa] text-[12px]">•</span>
          <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555]">{creatorName}</span>
          <span className="text-[#aaa] text-[12px]">•</span>
          <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#555]">{workflowName}</span>
        </div>

        {/* Caption */}
        <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] leading-[22px] mb-[12px] line-clamp-3" style={{ fontVariationSettings: "'wdth' 100" }}>
          {post.caption}
        </p>

        {/* Hashtags */}
        <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#1976d2] leading-[20px] mb-[14px] line-clamp-2">
          {post.hashtags}
        </p>

        {/* Images row */}
        <div className="flex gap-[8px] mb-[14px]">
          <div className="relative rounded-[6px] overflow-hidden shrink-0" style={{ width: 112, height: 112 }}>
            <img src={post.image} alt="Post" className="w-full h-full object-cover" />
          </div>
          {post.status === 'partially' && (
            <>
              {[1, 2, 3].map(i => (
                <div key={i} className="relative rounded-[6px] overflow-hidden shrink-0" style={{ width: 112, height: 112 }}>
                  <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="relative rounded-[6px] overflow-hidden shrink-0 flex items-center justify-center bg-[#f0f0f0]" style={{ width: 112, height: 112 }}>
                <span className="font-['Roboto:Medium',sans-serif] text-[20px] text-[#555]">+5</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Action bar */}
      <div
        className="border-t border-[#eaeaea] px-[16px] py-[10px] flex items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left icons */}
        <div className="flex items-center gap-[12px]">
          <button className="text-[#555] hover:text-[#212121] p-[2px]" title="Edit">
            <Pencil size={18} />
          </button>
          <button className="text-[#555] hover:text-[#212121] p-[2px]" title="Comment">
            <MessageSquare size={18} />
          </button>
          <button className="text-[#555] hover:text-[#212121] p-[2px]" title="Info">
            <Info size={18} />
          </button>
          <button
            className="text-[#555] hover:text-[#1976d2] p-[2px]"
            title="Activity"
            onClick={() => onOpenActivity(postId)}
          >
            <History size={18} />
          </button>
          <button className="text-[#555] hover:text-[#212121] p-[2px]" title="Copy">
            <Copy size={18} />
          </button>
          <button className="text-[#555] hover:text-[#bf170a] p-[2px]" title="Delete">
            <Trash2 size={18} />
          </button>
        </div>

        {/* Right: Reject + Approve */}
        <div className="flex items-center gap-[8px]">
          <button className="h-[36px] px-[16px] rounded-[4px] border border-[#e5e9f0] bg-white font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f5f5f5] transition-colors">
            Reject
          </button>
          <button className="h-[36px] px-[16px] rounded-[4px] bg-[#1976d2] font-['Roboto:Regular',sans-serif] text-[14px] text-white hover:bg-[#1565c0] transition-colors">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main View ─────────────────────────────────────────────────────────────────

interface ApprovePostsViewProps {
  onOpenDetails: (postId: string) => void;
  onOpenActivity: (postId: string) => void;
}

export function ApprovePostsView({ onOpenDetails, onOpenActivity }: ApprovePostsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Posts that need approval
  const approvalPostIds = Object.keys(POST_DATA).filter(
    id => POST_DATA[id].status === 'awaiting' || POST_DATA[id].status === 'partially'
  );

  const filtered = approvalPostIds.filter(id => {
    if (!searchQuery) return true;
    const post = POST_DATA[id];
    return post.caption.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-col h-full">
      {/* Page header */}
      <div className="border-b border-[#eaeaea] px-[24px] h-[64px] flex items-center justify-between shrink-0 bg-white">
        <h1 className="font-['Roboto:Regular',sans-serif] font-normal text-[20px] text-[#212121] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Approve posts
        </h1>
        <div className="flex items-center gap-[8px]">
          {/* Search */}
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-[10px] text-[#aaa]" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="h-[36px] pl-[32px] pr-[12px] rounded-[4px] border border-[#e5e9f0] font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] outline-none focus:border-[#1976d2] w-[200px]"
            />
          </div>
          {/* Sort */}
          <button className="h-[36px] px-[12px] flex items-center gap-[6px] rounded-[4px] border border-[#e5e9f0] bg-white font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] hover:bg-[#f5f5f5]">
            Newest <ChevronDown size={16} />
          </button>
          {/* Filter */}
          <button className="h-[36px] w-[36px] flex items-center justify-center rounded-[4px] border border-[#e5e9f0] bg-white hover:bg-[#f5f5f5]">
            <SlidersHorizontal size={16} className="text-[#555]" />
          </button>
          {/* More */}
          <button className="h-[36px] w-[36px] flex items-center justify-center rounded-[4px] border border-[#e5e9f0] bg-white hover:bg-[#f5f5f5]">
            <MoreVertical size={16} className="text-[#555]" />
          </button>
        </div>
      </div>

      {/* Posts list */}
      <div className="flex-1 overflow-y-auto px-[24px] py-[16px]">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[300px] gap-[8px]">
            <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[#555]">No posts awaiting approval</p>
            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#aaa]">All caught up! Check back later.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-[16px] max-w-[700px] mx-auto">
            {filtered.map(id => (
              <PostCard
                key={id}
                postId={id}
                onOpenDetails={onOpenDetails}
                onOpenActivity={onOpenActivity}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
