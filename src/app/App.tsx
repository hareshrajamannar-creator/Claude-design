import { useState } from 'react';
import { CalendarView } from './components/CalendarView';
import { PostDetailsDrawer } from './components/PostDetailsDrawer';
import { ActivityDrawer } from './components/ActivityDrawer';
import { ApprovePostsView } from './components/ApprovePostsView';
import { ApprovePostsDrawerContent } from './components/ApprovePostsDrawerContent';
import { RejectedPostsView } from './components/RejectedPostsView';
import { ApprovalsSetupView } from './components/ApprovalsSetupView';
import svgPaths from '../imports/svg-q05k7ytov1';
import { imgAddCircle, imgHelp, imgBitmapCopy } from '../imports/svg-ss3mz';
import imgBitmapCopy1 from 'figma:asset/07f55cb4dc9076729807bf360ffceba0f970bd1f.png';

type ActiveView = 'calendar' | 'approve-posts' | 'fix-rejected' | 'approvals-setup';

const PRIMARY_ICONS = [
  { key: 'home', viewBox: '0 0 11.1666 12.7435', path: svgPaths.p3c83e900, active: false },
  { key: 'inbox', viewBox: '0 0 15.1666 13.85', path: svgPaths.p16687400, active: false },
  { key: 'location', viewBox: '0 0 12.2467 14.7836', path: svgPaths.p1db22180, active: false },
  { key: 'reviews', viewBox: '0 0 13.6492 12.9968', path: svgPaths.p97a8100, active: false },
  { key: 'referrals', viewBox: '0 0 15.1666 16.1506', path: svgPaths.p3bb91c80, active: false },
  { key: 'payments', viewBox: '0 0 15.1666 15.1666', path: svgPaths.p3d180f80, active: false },
  { key: 'appointments', viewBox: '0 0 13.1666 15.2628', path: svgPaths.p1e88cfb0, active: false },
  { key: 'social', viewBox: '0 0 15.3589 13.3589', path: svgPaths.p210b2470, active: true },
  { key: 'surveys', viewBox: '0 0 13.1666 14.6666', path: svgPaths.p1271780, active: false },
  { key: 'ticketing', viewBox: '0 0 14.9743 14.9743', path: svgPaths.p2af55f00, active: false },
  { key: 'contacts', viewBox: '0 0 14.6698 10.8485', path: svgPaths.p1cc6aa00, active: false },
  { key: 'campaigns', viewBox: '0 0 15.2948 11.7626', path: svgPaths.p2cdd75c0, active: false },
  { key: 'reports', viewBox: '0 0 15.1666 15.1666', path: svgPaths.p3f11bb00, active: false },
  { key: 'insights', viewBox: '0 0 11.1667 15.2308', path: svgPaths.p37c51900, active: false },
  { key: 'competitors', viewBox: '0 0 14.1666 13.1666', path: svgPaths.paf11800, active: false },
];

const SECONDARY_NAV_ITEMS = [
  { key: 'engage', label: 'Engage' },
  { key: 'reports', label: 'Reports' },
  { key: 'competitors', label: 'Competitors' },
  { key: 'libraries', label: 'Libraries' },
  { key: 'agents', label: 'Agents' },
  { key: 'settings', label: 'Settings' },
];

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('calendar');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [settingsExpanded, setSettingsExpanded] = useState(false);

  // For approve-posts view, we use a dedicated drawer
  const [approveDrawerPostId, setApproveDrawerPostId] = useState<string | null>(null);

  return (
    <div className="bg-white relative h-screen overflow-hidden flex">

      {/* Primary Rail Nav - 40px */}
      <div className="bg-[#e5e9f0] shrink-0 w-[40px] flex flex-col h-screen sticky top-0 z-20">
        <div aria-hidden="true" className="absolute border-[#eaeaea] border-r border-solid inset-0 pointer-events-none z-10" />

        {/* Logo top */}
        <div className="bg-[#e5e9f0] h-[52px] flex items-center justify-center px-[12px] py-[8px] shrink-0 relative">
          <div className="relative shrink-0 size-[28px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path clipRule="evenodd" d={svgPaths.p2ddf8700} fill="#1976D2" fillRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Nav icons */}
        <div className="flex flex-col gap-[8px] items-center px-[12px] py-[8px] relative flex-1">
          {PRIMARY_ICONS.map((icon) => (
            <div
              key={icon.key}
              className={`content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0 size-[28px] cursor-pointer${icon.active ? ' bg-[#c7d6f6] rounded-[4px] overflow-clip' : ''}`}
            >
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[12.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.417px_-2.417px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={icon.viewBox}>
                    <path d={icon.path} fill="#303030" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* Separator */}
          <div className="h-px relative rounded-[4px] shrink-0 w-full">
            <div className="flex flex-row items-end justify-center size-full">
              <div className="content-stretch flex items-end justify-center px-[4px] relative size-full">
                <div className="h-0 relative shrink-0 w-[20px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                      <line stroke="#C7D6F6" x2="20" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings icon */}
          <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0 size-[28px] cursor-pointer">
            <div className="relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.08%_14.79%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.959px_-2.417px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0821 15.1666">
                  <path d={svgPaths.p177c8400} fill="#303030" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Top nav + Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Nav Bar - 52px */}
        <div className="bg-white border-b border-[#eaeaea] h-[52px] flex items-center justify-between px-[24px] shrink-0 sticky top-0 z-10">
          {/* Left: Social AI title */}
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#212121] text-[18px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Social AI
            </p>
          </div>

          {/* Right: Icons */}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            {/* Add circle */}
            <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[12.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.417px_-2.417px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgAddCircle}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1666 15.1666">
                    <path d={svgPaths.p21d4a600} fill="#1976D2" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Help */}
            <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[12.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.417px_-2.417px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1666 15.1666">
                    <path d={svgPaths.p32bf4c0} fill="#303030" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Avatar */}
            <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" fill="white" r="9.5" stroke="#F4F6F7" />
                </svg>
                <div className="absolute inset-[6.25%]">
                  <div className="absolute inset-[6.25%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                      <circle cx="8.75" cy="8.75" fill="#D8D8D8" r="8.75" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-4.69%_0.78%_-42.97%_0.78%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.094px_2.188px] mask-size-[17.5px_17.5px]" style={{ maskImage: `url('${imgBitmapCopy}')` }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmapCopy1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Menu */}
            <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[29.02%_17.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.417px_-5.805px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1666 8.391">
                    <path d={svgPaths.pb2a9c70} fill="#303030" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-1 overflow-hidden">

          {/* Secondary Sidebar - 222px */}
          <div className="bg-[#fafafa] border-r border-[#eaeaea] w-[222px] shrink-0 flex flex-col overflow-y-auto">
            {/* Secondary nav content */}
            <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[8px] relative w-full">
              {/* Create post */}
              <div className="h-[28px] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[4px] relative size-full">
                  <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Create post
                  </p>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]">
                      <div className="absolute inset-[12.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.933px_-1.933px] mask-size-[16px_16px]" style={{ maskImage: `url('${imgAddCircle}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1666 15.1666">
                          <path d={svgPaths.p21d4a600} fill="#1976D2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publish - expanded */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                {/* Publish header */}
                <div className="content-stretch flex gap-[8px] h-[28px] items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[190px] cursor-pointer">
                  <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Publish
                  </p>
                  <div className="relative shrink-0 size-[20px]">
                    <div className="absolute inset-[37.53%_27.44%_37.4%_27.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.484px_-7.506px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.02811 5.01367">
                        <path d={svgPaths.pddafd00} fill="#303030" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Sub-items */}
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  {/* Calendar */}
                  <div
                    className={`content-stretch flex h-[28px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[190px] cursor-pointer ${activeView === 'calendar' ? 'bg-[#e5e9f0]' : 'hover:bg-[#f0f0f0]'}`}
                    onClick={() => setActiveView('calendar')}
                  >
                    <p className="flex-[1_0_0] font-['Roboto:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Calendar
                    </p>
                  </div>
                  {/* View drafts */}
                  <div className="content-stretch flex gap-[8px] h-[28px] items-center px-[8px] py-[4px] relative shrink-0 w-[190px] cursor-pointer hover:bg-[#f0f0f0] rounded-[4px]">
                    <p className="flex-[1_0_0] font-['Roboto:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      View drafts
                    </p>
                  </div>
                  {/* Approve posts */}
                  <div
                    className={`content-stretch flex gap-[8px] h-[28px] items-center px-[8px] py-[4px] relative shrink-0 w-[190px] cursor-pointer rounded-[4px] ${activeView === 'approve-posts' ? 'bg-[#e5e9f0]' : 'hover:bg-[#f0f0f0]'}`}
                    onClick={() => setActiveView('approve-posts')}
                  >
                    <p className="flex-[1_0_0] font-['Roboto:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Approve posts
                    </p>
                  </div>
                  {/* Fix failed posts */}
                  <div className="content-stretch flex gap-[8px] h-[28px] items-center px-[8px] py-[4px] relative shrink-0 w-[190px] cursor-pointer hover:bg-[#f0f0f0] rounded-[4px]">
                    <p className="flex-[1_0_0] font-['Roboto:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Fix failed posts
                    </p>
                  </div>
                  {/* Fix rejected posts */}
                  <div
                    className={`content-stretch flex gap-[8px] h-[28px] items-center px-[8px] py-[4px] relative shrink-0 w-[190px] cursor-pointer rounded-[4px] ${activeView === 'fix-rejected' ? 'bg-[#e5e9f0]' : 'hover:bg-[#f0f0f0]'}`}
                    onClick={() => setActiveView('fix-rejected')}
                  >
                    <p className="flex-[1_0_0] font-['Roboto:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Fix rejected posts
                    </p>
                  </div>
                </div>
              </div>

              {/* Collapsed sections */}
              {SECONDARY_NAV_ITEMS.map((item) => (
                <div key={item.key} className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div
                    className="content-stretch flex gap-[8px] h-[28px] items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[190px] cursor-pointer hover:bg-[#f0f0f0]"
                    onClick={() => {
                      if (item.key === 'settings') {
                        setSettingsExpanded(prev => !prev);
                      }
                    }}
                  >
                    <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {item.label}
                    </p>
                    <div className="relative shrink-0 size-[20px]">
                      <div className="absolute inset-[37.46%_27.42%_37.45%_27.49%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.498px_-7.492px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgHelp}')` }}>
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 9.01782 5.0176"
                          style={{ transform: item.key === 'settings' && settingsExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                        >
                          <path d={svgPaths.p5ccaa80} fill="#303030" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Settings sub-items */}
                  {item.key === 'settings' && settingsExpanded && (
                    <div className="content-stretch flex flex-col items-start relative shrink-0 pl-[8px]">
                      <div
                        className={`content-stretch flex h-[28px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[182px] cursor-pointer ${activeView === 'approvals-setup' ? 'bg-[#e5e9f0]' : 'hover:bg-[#f0f0f0]'}`}
                        onClick={() => setActiveView('approvals-setup')}
                      >
                        <p className="flex-[1_0_0] font-['Roboto:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Approvals
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto bg-white">
            {activeView === 'calendar' && (
              <CalendarView
                onPostClick={setSelectedPost}
                onActivityClick={setSelectedActivity}
              />
            )}
            {activeView === 'approve-posts' && (
              <ApprovePostsView
                onOpenDetails={(id) => setApproveDrawerPostId(id)}
                onOpenActivity={setSelectedActivity}
              />
            )}
            {activeView === 'fix-rejected' && (
              <RejectedPostsView
                onOpenDetails={setSelectedPost}
                onOpenActivity={setSelectedActivity}
              />
            )}
            {activeView === 'approvals-setup' && (
              <ApprovalsSetupView />
            )}
          </div>
        </div>
      </div>

      {/* Drawers */}
      <PostDetailsDrawer
        postId={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
      <ActivityDrawer
        postId={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />

      {/* Approve Posts Drawer (dedicated for approve-posts view) */}
      {approveDrawerPostId && (
        <div className="absolute inset-0 bg-black/30 z-20" onClick={() => setApproveDrawerPostId(null)}>
          <div
            className="absolute bg-white h-full overflow-auto right-0 top-0 w-[650px]"
            onClick={e => e.stopPropagation()}
          >
            <ApprovePostsDrawerContent
              postId={approveDrawerPostId}
              onClose={() => setApproveDrawerPostId(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
