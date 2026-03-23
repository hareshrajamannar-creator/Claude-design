import svgPaths from "../../imports/svg-zf6pg056p3";
import { imgArrowLeftAlt } from "../../imports/svg-pf7eq";
import { POST_DATA, StatusType } from "../data/postData";
import { AwaitingApprovalContent } from "./AwaitingApprovalContent";

interface PostDetailsDrawerContentProps {
  postId: string;
  onClose: () => void;
}

const statusConfig: Record<StatusType, { bg: string; color: string; label: string }> = {
  published:      { bg: '#eaf7e8', color: '#377e2c', label: 'Published' },
  draft:          { bg: '#eaeaea', color: '#454545', label: 'Draft' },
  rejected:       { bg: '#fde3e1', color: '#bf170a', label: 'Rejected' },
  awaiting:       { bg: '#fef6e0', color: '#a77b03', label: 'Awaiting approval' },
  partially:      { bg: '#fef6e0', color: '#a77b03', label: 'Partially approved' },
  scheduled:      { bg: '#ecf5fd', color: '#1565b4', label: 'Scheduled' },
  'ai-suggested': { bg: '#ede6f8', color: '#6834b7', label: 'AI-suggested' },
};

function FacebookIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[#337fff] inset-0 rounded-full" />
      <svg className="absolute inset-0 m-auto size-[10px]" viewBox="0 0 10 18" fill="white">
        <path d="M6.5 6H9V3.5C8.3 3.2 7.4 3 6.5 3 4 3 2.5 4.5 2.5 7V9H0v3h2.5V18h3V12H8l.5-3H5.5V7.2C5.5 6.5 5.9 6 6.5 6z" />
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0 rounded-[6px]" style={{ backgroundImage: 'linear-gradient(-45deg,#fbe18a,#fcbb45,#f75274,#d53692,#8f39ce,#5b4fe9)' }} />
      <svg className="absolute inset-0 m-auto size-[12px]" viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[#0a66c2] inset-0 rounded-[6px]" />
      <svg className="absolute inset-0 m-auto size-[12px]" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </div>
  );
}

export function PostDetailsDrawerContent({ postId, onClose }: PostDetailsDrawerContentProps) {
  const post = POST_DATA[postId];

  if (!post) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center">
        <p className="text-[#555] font-['Roboto:Regular',sans-serif]">Post not found</p>
      </div>
    );
  }

  // Awaiting, partially approved, and rejected posts use the dedicated approval flow UI
  if (post.status === 'awaiting' || post.status === 'partially' || post.status === 'rejected') {
    return <AwaitingApprovalContent postId={postId} onClose={onClose} />;
  }

  const sConfig = statusConfig[post.status];

  // Action buttons differ by status
  const renderActions = () => {
    switch (post.status) {
      case 'scheduled':
        return (
          <>
            <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Reschedule</p>
            </div>
            <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Post now</p>
            </div>
          </>
        );
      case 'awaiting':
        return (
          <>
            <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Reject</p>
            </div>
            <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Approve</p>
            </div>
          </>
        );
      case 'partially':
        return (
          <>
            <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Reject all</p>
            </div>
            <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Approve all</p>
            </div>
          </>
        );
      case 'rejected':
        return (
          <>
            <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Edit post</p>
            </div>
            <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Resubmit</p>
            </div>
          </>
        );
      case 'draft':
        return (
          <>
            <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Edit</p>
            </div>
            <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Schedule</p>
            </div>
          </>
        );
      case 'ai-suggested':
        return (
          <>
            <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Dismiss</p>
            </div>
            <div className="bg-[#6834b7] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Use suggestion</p>
            </div>
          </>
        );
      case 'published':
      default:
        return (
          <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
            <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>View post</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white relative size-full">
      {/* Header */}
      <div className="bg-white border-b border-[#eaeaea] content-stretch flex items-center justify-between pb-[16px] pt-[24px] px-[24px] sticky top-0 w-full z-10">
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
            <div className="relative shrink-0 size-[20px] cursor-pointer" onClick={onClose}>
              <div className="absolute inset-[27.78%_17.91%_27.76%_19.41%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.883px_-5.557px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5352 8.89044">
                  <path d={svgPaths.p3ae4b800} fill="var(--fill-0, #303030)" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#212121] text-[18px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Post details
            </p>
            {/* Status badge */}
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" style={{ backgroundColor: sConfig.bg }}>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" style={{ color: sConfig.color, fontVariationSettings: "'wdth' 100" }}>
                {sConfig.label}
              </p>
            </div>
          </div>
        </div>

        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          {renderActions()}
          {/* More options */}
          <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[36px] cursor-pointer">
            <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="relative shrink-0 size-[20px]">
              <div className="absolute inset-[23.05%_44.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.917px_-4.609px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16663 10.782">
                  <path d={svgPaths.p1b297900} fill="var(--fill-0, #303030)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[24px] py-[16px]">
        {/* Preview header — "Preview [Location] ↓" inline on left, matching drawer style */}
        <div className="flex items-center mb-[12px]">
          <div className="flex items-center gap-[4px] cursor-pointer">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Preview
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] text-[#1976d2] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {post.location}
            </p>
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[37.46%_27.42%_37.45%_27.49%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.498px_-7.492px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01782 5.0176">
                  <path d={svgPaths.p5ccaa80} fill="var(--fill-0, #1976D2)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Post preview card */}
        <div className="bg-white border border-[#eaeaea] rounded-[8px] overflow-hidden">
          {/* Post header */}
          <div className="flex items-start gap-[8px] p-[12px] border-b border-[#eaeaea]">
            <div className="rounded-[9999px] shrink-0 size-[32px]" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
            <div className="flex-1">
              <div className="flex items-center gap-[6px]">
                <p className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#212121] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Motto Mortgage {post.location}
                </p>
                <div className="flex gap-[4px]">
                  {post.platforms.map((p) => (
                    <span key={p}>
                      {p === 'facebook' && <FacebookIcon />}
                      {p === 'instagram' && <InstagramIcon />}
                      {p === 'linkedin' && <LinkedInIcon />}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#555] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {post.date} · {post.time}
              </p>
            </div>
          </div>

          {/* Post content */}
          <div className="p-[12px]">
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#212121] leading-[20px] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {post.caption}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#1976d2] leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {post.hashtags}
            </p>
          </div>

          {/* Post image */}
          <div className="relative">
            <img src={post.image} alt="Post preview" className="w-full h-auto" />
          </div>
        </div>

        {/* Scheduled for / status info */}
        <div className="mt-[24px]">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] text-[#212121] text-[16px] tracking-[-0.32px] mb-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {post.scheduledFor}
          </p>

          {/* Show location list for scheduled/awaiting/partially */}
          {(post.status === 'scheduled' || post.status === 'awaiting' || post.status === 'partially') && (
            <div className="space-y-[8px]">
              {['Atlanta', 'Boston', 'California', 'Chicago', 'Denver'].map((location, idx) => (
                <div key={idx} className="flex items-center gap-[8px] p-[8px] bg-[#fafafa] rounded-[4px]">
                  <div className="rounded-[9999px] shrink-0 size-[24px]" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
                  <div className="flex-1">
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      McDonald's {location}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#555]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {location}
                    </p>
                  </div>
                  {post.status === 'partially' && idx === 0 && (
                    <span className="text-[11px] text-[#377e2c] font-['Roboto:Regular',sans-serif]">✓ Approved</span>
                  )}
                  {post.status === 'partially' && idx > 0 && (
                    <span className="text-[11px] text-[#a77b03] font-['Roboto:Regular',sans-serif]">Pending</span>
                  )}
                </div>
              ))}
              <button className="flex items-center gap-[4px] text-[#1976d2] mt-[12px] hover:underline cursor-pointer">
                <p className="font-['Roboto:Regular',sans-serif] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  See more
                </p>
              </button>
            </div>
          )}

          {/* Show rejection reason for rejected posts */}
          {post.status === 'rejected' && (
            <div className="p-[12px] bg-[#fde3e1] rounded-[4px] border border-[#f5c0bb]">
              <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#bf170a] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>Rejection reason</p>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#bf170a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Image does not meet brand guidelines. Please use approved photography from the asset library.
              </p>
            </div>
          )}

          {/* AI suggestion info */}
          {post.status === 'ai-suggested' && (
            <div className="p-[12px] bg-[#f9f7fd] rounded-[4px] border border-[#e8def6]">
              <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#6834b7] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>AI suggestion</p>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#6834b7]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Generated based on your past top-performing posts and current engagement trends for {post.location}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
