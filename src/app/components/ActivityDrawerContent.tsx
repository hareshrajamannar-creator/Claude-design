import svgPaths from "../../imports/svg-0aidlnqi7g";
import { imgArrowLeftAlt } from "../../imports/svg-xmc5v";
import { ActivityFeed } from './ActivityFeed';

interface ActivityDrawerContentProps {
  postId: string;
  onClose: () => void;
}

export function ActivityDrawerContent({ postId, onClose }: ActivityDrawerContentProps) {
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
              Activity
            </p>
          </div>
        </div>
      </div>

      {/* Activity Feed Content */}
      <div className="px-[24px] py-[16px]">
        <ActivityFeed postId={postId} />
      </div>
    </div>
  );
}
