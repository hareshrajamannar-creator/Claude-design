import svgPaths from '../../imports/svg-q05k7ytov1';
import { imgHelp, imgEdit } from '../../imports/svg-ss3mz';
import { POST_DATA } from '../data/postData';
import { useState, useRef, useEffect } from 'react';

interface CalendarViewProps {
  onPostClick: (postId: string) => void;
  onActivityClick: (postId: string) => void;
}

type StatusType = 'published' | 'draft' | 'rejected' | 'awaiting' | 'scheduled' | 'partially' | 'ai-suggested';
type ActionType = 'simple' | 'workflow';

interface PostCardProps {
  postId: string;
  status: StatusType;
  platforms: ('facebook' | 'instagram' | 'linkedin')[];
  time: string;
  caption: string;
  image: string;
  actionType: ActionType;
  hasOuterBorder?: boolean;
  onActivityClick: (postId: string) => void;
  onPostClick: (postId: string) => void;
}

const statusConfig: Record<StatusType, { bg: string; color: string; label: string }> = {
  published:     { bg: '#eaf7e8', color: '#377e2c', label: 'Published' },
  draft:         { bg: '#eaeaea', color: '#454545', label: 'Draft' },
  rejected:      { bg: '#fde3e1', color: '#bf170a', label: 'Rejected' },
  awaiting:      { bg: '#fef6e0', color: '#a77b03', label: 'Awaiting approval' },
  partially:     { bg: '#fef6e0', color: '#a77b03', label: 'Partially approved' },
  scheduled:     { bg: '#ecf5fd', color: '#1565b4', label: 'Scheduled' },
  'ai-suggested':{ bg: '#ede6f8', color: '#6834b7', label: 'AI-suggested' },
};

const cardStyle: Record<StatusType, { bg: string; borderColor: string; outerBorder: boolean }> = {
  published:     { bg: '#f5f5f5', borderColor: '#eaeaea', outerBorder: false },
  draft:         { bg: '#f5f5f5', borderColor: '#eaeaea', outerBorder: false },
  rejected:      { bg: '#f5f5f5', borderColor: '#eaeaea', outerBorder: false },
  awaiting:      { bg: '#ffffff', borderColor: '#eaeaea', outerBorder: true },
  partially:     { bg: '#ffffff', borderColor: '#eaeaea', outerBorder: true },
  scheduled:     { bg: '#ffffff', borderColor: '#eaeaea', outerBorder: true },
  'ai-suggested':{ bg: '#f9f7fd', borderColor: '#e8def6', outerBorder: true },
};

function FacebookIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[#337fff] inset-[0_-0.01%_0_0.01%] rounded-[10.591px]" />
      <div className="absolute inset-[25.11%_35.93%_24.84%_36.99%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.41425 10.0089">
          <path d={svgPaths.p3dc9c800} fill="white" />
        </svg>
      </div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: 'linear-gradient(-45deg, rgb(251, 225, 138) 0.96099%, rgb(252, 187, 69) 21.961%, rgb(247, 82, 116) 38.961%, rgb(213, 54, 146) 52.961%, rgb(143, 57, 206) 74.961%, rgb(91, 79, 233) 100.96%)' }}>
        <div className="absolute bottom-[24.85%] left-1/4 right-[24.97%] top-[25.11%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0056 10.0089">
            <path d={svgPaths.p3e5d3500} fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[#0a66c2] inset-0 rounded-[12px]" />
      <div className="absolute inset-[30.22%_29.15%_29.74%_29%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36943 8.00711">
          <path d={svgPaths.p36823500} fill="white" />
        </svg>
      </div>
    </div>
  );
}

function SimpleActionIcons({ postId, onActivityClick, showActivity }: { postId?: string; onActivityClick?: (id: string) => void; showActivity?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen]);

  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      {/* edit */}
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.333px_-2.333px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3333 11.3333">
            <path d={svgPaths.p3a0fd900} fill="#303030" />
          </svg>
        </div>
      </div>
      {/* content_copy */}
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[12.08%_18.13%_14.17%_18.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.9px_-1.933px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1999 11.7999">
            <path d={svgPaths.p2f932100} fill="#303030" />
          </svg>
        </div>
      </div>
      {/* tag/sell */}
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[12.08%_12.06%_12.04%_12.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.933px_-1.933px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1365 12.1397">
            <path d={svgPaths.p3daf9600} fill="#303030" />
          </svg>
        </div>
      </div>
      {/* delete */}
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[17.56%_22.08%_17.08%_22.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.533px_-2.81px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.9333 10.4564">
            <path d={svgPaths.p382a4d00} fill="#303030" />
          </svg>
        </div>
      </div>
      {/* more_vert with Activity dropdown — shown for non-AI posts */}
      {showActivity && postId && onActivityClick && (
        <div
          className="relative shrink-0 size-[16px] cursor-pointer"
          onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
          ref={menuRef}
        >
          <div className="absolute inset-[23.05%_44.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.133px_-3.687px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7333 8.62557">
              <path d={svgPaths.p21a73580} fill="#303030" />
            </svg>
          </div>
          {menuOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-[#eaeaea] rounded-[4px] shadow-lg z-50 min-w-[120px]">
              <div
                className="px-[12px] py-[8px] hover:bg-[#f4f6f7] cursor-pointer font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#212121] whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={(e) => { e.stopPropagation(); setMenuOpen(false); onActivityClick(postId); }}
              >
                Activity
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function WorkflowActionIcons({ postId, onActivityClick }: { postId: string; onActivityClick: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen]);

  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      {/* edit */}
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.333px_-2.333px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3333 11.3333">
            <path d={svgPaths.p3a0fd900} fill="#303030" />
          </svg>
        </div>
      </div>
      {/* calendar_month */}
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[11.6%_17.08%_12.08%_17.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.733px_-1.856px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5333 12.2102">
            <path d={svgPaths.pfa3b200} fill="#303030" />
          </svg>
        </div>
      </div>
      {/* paper-plane */}
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3f801a00} fill="#303030" stroke="#303030" strokeWidth="0.117857" />
        </svg>
      </div>
      {/* tag/sell */}
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-[12.08%_12.06%_12.04%_12.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.933px_-1.933px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1365 12.1397">
            <path d={svgPaths.p3daf9600} fill="#303030" />
          </svg>
        </div>
      </div>
      {/* more_vert with dropdown */}
      <div
        className="relative shrink-0 size-[16px] cursor-pointer"
        onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
        ref={menuRef}
      >
        <div className="absolute inset-[23.05%_44.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.133px_-3.687px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgEdit}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7333 8.62557">
            <path d={svgPaths.p21a73580} fill="#303030" />
          </svg>
        </div>
        {menuOpen && (
          <div className="absolute right-0 top-full mt-1 bg-white border border-[#eaeaea] rounded-[4px] shadow-lg z-50 min-w-[120px]">
            <div
              className="px-[12px] py-[8px] hover:bg-[#f4f6f7] cursor-pointer font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#212121] whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={(e) => { e.stopPropagation(); setMenuOpen(false); onActivityClick(postId); }}
            >
              Activity
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PostCard({ postId, status, platforms, time, caption, image, actionType, hasOuterBorder = false, onActivityClick, onPostClick }: PostCardProps) {
  const sConfig = statusConfig[status];
  const cStyle = cardStyle[status];

  const innerCard = (
    <div
      className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full cursor-pointer"
      style={{ backgroundColor: cStyle.bg }}
      onClick={() => onPostClick(postId)}
    >
      <div aria-hidden="true" className="absolute border border-solid inset-[-1px] pointer-events-none rounded-[5px]" style={{ borderColor: cStyle.borderColor }} />
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          {/* Status badge */}
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" style={{ backgroundColor: sConfig.bg }}>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" style={{ color: sConfig.color, fontVariationSettings: "'wdth' 100" }}>
              {sConfig.label}
            </p>
          </div>

          {/* Platforms + time */}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            {platforms.map((platform) => (
              <span key={platform}>
                {platform === 'facebook' && <FacebookIcon />}
                {platform === 'instagram' && <InstagramIcon />}
                {platform === 'linkedin' && <LinkedInIcon />}
              </span>
            ))}
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {time}
            </p>
          </div>

          {/* Caption */}
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#212121] text-[10.369px] line-clamp-3 overflow-hidden" style={{ fontVariationSettings: "'wdth' 100" }}>{caption}</p>
          </div>

          {/* Image */}
          <div className="h-[132px] relative rounded-[8px] shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute h-[141.5%] left-0 max-w-none top-[-2.38%] w-full object-cover" src={image} />
            </div>
          </div>

          {/* Actions */}
          {actionType === 'simple' ? (
            <SimpleActionIcons
              postId={postId}
              onActivityClick={onActivityClick}
              showActivity={status !== 'ai-suggested'}
            />
          ) : (
            <WorkflowActionIcons postId={postId} onActivityClick={onActivityClick} />
          )}
        </div>
      </div>
    </div>
  );

  if (hasOuterBorder) {
    return (
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        {innerCard}
      </div>
    );
  }

  return innerCard;
}

// Captions and images are now driven from POST_DATA

export function CalendarView({ onPostClick, onActivityClick }: CalendarViewProps) {
  return (
    <div className="bg-white relative w-full overflow-auto">

      {/* Calendar Header (64px) */}
      <div className="bg-white h-[64px] relative shrink-0 w-full sticky top-0 z-10">
        <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative size-full">
            {/* Left: Month Navigation */}
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {/* chevron_left */}
                  <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[32px] cursor-pointer">
                    <div className="relative shrink-0 size-[20px]">
                      <div className="absolute inset-[27.44%_37.11%_27.42%_37.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.561px_-5.488px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.0176 9.02811">
                          <path d={svgPaths.p186700} fill="#303030" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#212121] text-[18px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    March 2026
                  </p>
                  {/* chevron_right */}
                  <div className="content-stretch flex h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[33px] cursor-pointer">
                    <div className="relative shrink-0 size-[20px]">
                      <div className="absolute inset-[27.42%_37.8%_27.49%_37.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.425px_-5.484px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.01367 9.01782">
                          <path d={svgPaths.p1b9e6f00} fill="#303030" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Today */}
                  <div className="content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1976d2] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Today
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              {/* List/Week/Month toggle */}
              <div className="content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#e5e9f0] border-[0.943px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    List
                  </p>
                </div>
                <div className="bg-[#e5e9f0] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Week
                  </p>
                </div>
                <div className="content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0 cursor-pointer">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Month
                  </p>
                </div>
              </div>

              {/* AI button */}
              <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[36px] cursor-pointer">
                <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="relative shrink-0 size-[20px]">
                  <div className="absolute inset-[0_-0.15%_25.87%_16.67%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6975 14.8252">
                      <path d={svgPaths.p33170700} fill="#6834B7" />
                      <path d={svgPaths.p2d8f3b80} fill="#6834B7" />
                      <path clipRule="evenodd" d={svgPaths.p1692000} fill="#6834B7" fillRule="evenodd" />
                      <path d={svgPaths.p4cf0c70} fill="#6834B7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* More (dots) button */}
              <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[36px] cursor-pointer">
                <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="relative shrink-0 size-[20px]">
                  <div className="absolute inset-[23.05%_44.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.917px_-4.609px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16663 10.782">
                      <path d={svgPaths.p1b297900} fill="#303030" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filter button */}
              <div className="content-stretch flex items-start relative shrink-0">
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[36px] cursor-pointer">
                  <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="relative shrink-0 size-[20px]">
                    <div className="absolute inset-[27.08%_14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.917px_-5.417px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 9.16667">
                        <path d={svgPaths.p32d18bf0} fill="#303030" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day Headers (45px) */}
      <div className="bg-[#f4f6f7] content-stretch flex h-[45px] items-center relative shrink-0 w-full">
        {/* Sun 1 */}
        <div className="bg-white content-stretch flex h-[45px] items-center justify-center p-[9.426px] relative shrink-0 flex-1">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-solid inset-0 pointer-events-none" />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#555] text-[12.254px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Sun 1</p>
        </div>
        {/* Mon 2 */}
        <div className="bg-white content-stretch flex h-[45px] items-center justify-center p-[9.426px] relative shrink-0 flex-1">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-solid inset-0 pointer-events-none" />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#555] text-[12.254px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Mon 2</p>
        </div>
        {/* Tue 3 */}
        <div className="bg-white content-stretch flex h-[45px] items-center justify-center p-[9.426px] relative shrink-0 flex-1">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-solid inset-0 pointer-events-none" />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#555] text-[12.254px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Tue 3</p>
        </div>
        {/* Wed 4 - today */}
        <div className="bg-white h-full relative shrink-0 flex-1">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[9.426px] relative size-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1976d2] text-[12.844px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Wed
                </p>
                <div className="bg-[#1976d2] overflow-clip relative rounded-[47.131px] shrink-0 size-[18.852px]">
                  <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15.591px] left-[calc(50%+0.07px)] text-[11.26px] text-center text-white top-[calc(50%-7.54px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Thu 5 */}
        <div className="bg-white content-stretch flex h-[45px] items-center justify-center p-[9.426px] relative shrink-0 flex-1">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-solid inset-0 pointer-events-none" />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#555] text-[12.254px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Thu 5</p>
        </div>
        {/* Fri 6 */}
        <div className="bg-white content-stretch flex h-[45px] items-center justify-center p-[9.426px] relative shrink-0 flex-1">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-solid inset-0 pointer-events-none" />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#555] text-[12.254px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Fri 6</p>
        </div>
        {/* Sat 7 */}
        <div className="bg-white content-stretch flex h-[45px] items-center justify-center p-[9.426px] relative shrink-0 flex-1">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-solid inset-0 pointer-events-none" />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#555] text-[12.254px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Sat 7</p>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="content-stretch flex relative w-full">

        {/* Sun 1 — empty */}
        <div className="bg-[#fafafa] flex-[1_0_0] min-h-[939px] min-w-px relative">
          <div aria-hidden="true" className="absolute border-[#eaeaea] border-r border-solid inset-0 pointer-events-none" />
        </div>

        {/* Mon 2 — Published */}
        <div className="bg-[#fafafa] flex-[1_0_0] min-h-[939px] min-w-px relative">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
              <PostCard
                postId="post-1"
                status="published"
                platforms={POST_DATA['post-1'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-1'].caption}
                image={POST_DATA['post-1'].image}
                actionType="simple"
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eaeaea] border-r border-solid inset-0 pointer-events-none" />
        </div>

        {/* Tue 3 — Draft + Rejected */}
        <div className="bg-[#fafafa] flex-[1_0_0] min-h-[939px] min-w-px relative">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
              <PostCard
                postId="post-2"
                status="draft"
                platforms={POST_DATA['post-2'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-2'].caption}
                image={POST_DATA['post-2'].image}
                actionType="simple"
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
              <PostCard
                postId="post-3"
                status="rejected"
                platforms={POST_DATA['post-3'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-3'].caption}
                image={POST_DATA['post-3'].image}
                actionType="simple"
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#eaeaea] border-r border-solid inset-0 pointer-events-none" />
        </div>

        {/* Wed 4 — Awaiting approval + Partially approved + Rejected */}
        <div className="bg-white flex-[1_0_0] min-h-[976px] min-w-px relative">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
              <PostCard
                postId="post-4"
                status="awaiting"
                platforms={POST_DATA['post-4'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-4'].caption}
                image={POST_DATA['post-4'].image}
                actionType="workflow"
                hasOuterBorder
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
              <PostCard
                postId="post-5"
                status="partially"
                platforms={POST_DATA['post-5'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-5'].caption}
                image={POST_DATA['post-5'].image}
                actionType="workflow"
                hasOuterBorder
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
              <PostCard
                postId="post-9"
                status="rejected"
                platforms={POST_DATA['post-9'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-9'].caption}
                image={POST_DATA['post-9'].image}
                actionType="simple"
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-r-[0.943px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Thu 5 — AI-suggested + Scheduled */}
        <div className="bg-white flex-[1_0_0] min-h-[939px] min-w-px relative">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
              <PostCard
                postId="post-6"
                status="ai-suggested"
                platforms={POST_DATA['post-6'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-6'].caption}
                image={POST_DATA['post-6'].image}
                actionType="simple"
                hasOuterBorder
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
              <PostCard
                postId="post-7"
                status="scheduled"
                platforms={POST_DATA['post-7'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-7'].caption}
                image={POST_DATA['post-7'].image}
                actionType="workflow"
                hasOuterBorder
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-r-[0.943px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Fri 6 — AI-suggested */}
        <div className="bg-white flex-[1_0_0] min-h-[939px] min-w-px relative">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
              <PostCard
                postId="post-8"
                status="ai-suggested"
                platforms={POST_DATA['post-8'].platforms}
                time="10:00 AM"
                caption={POST_DATA['post-8'].caption}
                image={POST_DATA['post-8'].image}
                actionType="simple"
                hasOuterBorder
                onActivityClick={onActivityClick}
                onPostClick={onPostClick}
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-r-[0.943px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Sat 7 — empty */}
        <div className="bg-white flex-[1_0_0] min-h-[939px] min-w-px relative">
          <div aria-hidden="true" className="absolute border-[#e9e9eb] border-b-[0.943px] border-r-[0.943px] border-solid inset-0 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
