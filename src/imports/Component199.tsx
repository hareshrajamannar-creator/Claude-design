import svgPaths from "./svg-rixf1o5uzq";
import { imgArrowLeftAlt } from "./svg-h8by9";

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="arrow_left">
        <div className="absolute inset-[27.78%_17.91%_27.76%_19.41%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.883px_-5.557px] mask-size-[20px_20px]" data-name="arrow_left_alt" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5352 8.89044">
            <path d={svgPaths.p3ae4b800} fill="var(--fill-0, #303030)" id="arrow_left_alt" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#212121] text-[18px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Activity
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reschedule
        </p>
      </div>
      <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Post now
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 size-[20px]" data-name="more_vert">
          <div className="absolute inset-[23.05%_44.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.917px_-4.609px] mask-size-[20px_20px]" data-name="more_vert" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16663 10.782">
              <path d={svgPaths.p1b297900} fill="var(--fill-0, #303030)" id="more_vert" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end opacity-0 relative shrink-0">
      <Frame5 />
    </div>
  );
}

function DrawerHeader() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[16px] pt-[24px] px-[24px] top-0 w-[650px]" data-name="Drawer Header">
      <div className="flex flex-row items-center self-stretch">
        <Frame />
      </div>
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#212121] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Activity
          </p>
          <div className="relative shrink-0 size-[20px]" data-name="chevron_up">
            <div className="absolute inset-[37.53%_27.44%_37.4%_27.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.484px_-7.506px] mask-size-[20px_20px]" data-name="expand_less" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.02811 5.01367">
                <path d={svgPaths.pddafd00} fill="var(--fill-0, #303030)" id="expand_less" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-px items-start relative shrink-0 w-[458px] whitespace-nowrap">
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Feb 22, 2026 12:56 PM
      </p>
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        David scheduled this post on Dec 6, 10:00 AM
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[12px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-px items-start relative shrink-0 w-[458px] whitespace-nowrap">
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Feb 22, 2026 12:56 PM
      </p>
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sarah edited the post caption
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[12px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-px items-start relative shrink-0 w-[458px] whitespace-nowrap">
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Feb 22, 2026 12:56 PM
      </p>
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Sarah created this post `}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[12px] relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative w-full">
          <Frame7 />
          <Frame8 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip pb-[8px] relative rounded-[inherit] w-full">
        <Frame10 />
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-0 px-[24px] py-[8px] top-[70px] w-[650px]">
      <Frame14 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Component 199">
      <DrawerHeader />
      <Frame1 />
    </div>
  );
}