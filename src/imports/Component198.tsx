import svgPaths from "./svg-t5bm6bd5iw";
import imgRectangle4668 from "figma:asset/7960a5bfc7d459feb2f053d727e8b9944f90b50c.png";
import { imgArrowLeftAlt, imgCheckCircle } from "./svg-hu4ug";

function Spam() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="SPAM">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1976d2] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Scheduled
      </p>
    </div>
  );
}

function Frame1() {
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
        Post details
      </p>
      <div className="bg-[#ecf5fd] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tonal">
        <Spam />
      </div>
    </div>
  );
}

function Frame3() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Frame3 />
    </div>
  );
}

function DrawerHeader() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[16px] pt-[24px] px-[24px] top-0 w-[650px]" data-name="Drawer Header">
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1976d2] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Atlanta
      </p>
      <div className="relative shrink-0 size-[20px]" data-name="chevron_down">
        <div className="absolute inset-[37.46%_27.42%_37.45%_27.49%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.498px_-7.492px] mask-size-[20px_20px]" data-name="expand_more" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01782 5.0176">
            <path d={svgPaths.p5ccaa80} fill="var(--fill-0, #1976D2)" id="expand_more" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[337px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#212121] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Preview
      </p>
      <Frame />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Frame23 />
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 whitespace-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Motto mortgage Atlanta `}</p>
      <p className="leading-[18px] relative shrink-0 text-[#8f8f8f] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mar 16, 10:00 AM
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[420px]">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame21 />
    </div>
  );
}

function Tags() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tags">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Tags">
          <rect fill="var(--fill-0, #F5F5F5)" height="24" rx="12" width="24" />
          <path d={svgPaths.p141e4600} fill="var(--fill-0, #1976D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="bg-[#e9e9eb] content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[5px] relative rounded-[2px] shrink-0" data-name="Label">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Celebrations
        </p>
      </div>
      <div className="bg-[#e9e9eb] content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[5px] relative rounded-[2px] shrink-0" data-name="Label">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Main events
        </p>
      </div>
      <Tags />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <Frame11 />
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#212121] text-[0px] text-[14px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[20px]">{`So, how can a homebuyer show the current homeowner they are serious about buying? Meet Ernest. Well, earnest money actually. Earnest money is a deposit given to the seller when a buyer submits an offer on a home. It demonstrates their commitment to the purchase and is typically credited toward down payment or closing costs. Questions about earnest money? Reach out for details. `}</span>
          <span className="leading-[20px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/earnestmoney/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/earnestmoney/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #EarnestMoney
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/seriousbuyer/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/seriousbuyer/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #SeriousBuyer
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/homebuyingtips/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/homebuyingtips/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #HomeBuyingTips
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/realestateadvice/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/realestateadvice/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #RealEstateAdvice
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/homeownershipjourney/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/homeownershipjourney/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #HomeownershipJourney
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/commitmenttobuy/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/commitmenttobuy/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #CommitmentToBuy
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/downpayment/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/downpayment/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #DownPayment
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/closingcosts/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/closingcosts/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #ClosingCosts
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/homegoals/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/homegoals/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #HomeGoals
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/trustedadvisor/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/trustedadvisor/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #TrustedAdvisor
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/startyourjourney/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/startyourjourney/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #StartYourJourney
            </span>
          </a>
          <span className="leading-[20px] text-[#1877f2] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </span>
          <a className="cursor-pointer leading-[20px] text-[#1877f2] tracking-[-0.28px]" href="https://www.instagram.com/explore/tags/homebuyingjourney/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[20px]" href="https://www.instagram.com/explore/tags/homebuyingjourney/" style={{ fontVariationSettings: "'wdth' 100" }}>
              #HomeBuyingJourney
            </span>
          </a>
        </p>
        <div className="h-[651px] relative rounded-[8px] shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[108.65%] left-0 max-w-none top-[-2.5%] w-[103.45%]" src={imgRectangle4668} />
          </div>
        </div>
        <Frame10 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip pb-[8px] relative rounded-[inherit] w-full">
        <Frame12 />
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#212121] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Scheduled for 10 pages on Mar 16, 10:00 AM `}</p>
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

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 whitespace-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Motto mortgage Atlanta `}</p>
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Atlanta
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame22 />
    </div>
  );
}

function Spam1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="SPAM">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#377e2c] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Approved
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Frame17 />
      <div className="bg-[#f1faf0] content-stretch flex gap-[4px] items-center opacity-0 px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tonal">
        <div className="relative shrink-0 size-[16px]" data-name="check_circle">
          <div className="absolute inset-[12.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.933px_-1.933px] mask-size-[16px_16px]" data-name="check_circle" style={{ maskImage: `url('${imgCheckCircle}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1333 12.1333">
              <path d={svgPaths.p138dfd00} fill="var(--fill-0, #377E2C)" id="check_circle" />
            </svg>
          </div>
        </div>
        <Spam1 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 whitespace-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Motto mortgage Boston `}</p>
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Boston `}</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame24 />
    </div>
  );
}

function Spam2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="SPAM">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#de1b0c] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rejected
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Frame19 />
      <div className="bg-[#fef6f5] content-stretch flex gap-[4px] items-center opacity-0 px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tonal">
        <Spam2 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 whitespace-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Motto mortgage California `}</p>
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`California `}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center opacity-0 px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#212121] text-[12px] tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reject
        </p>
      </div>
      <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[32px] items-center justify-center opacity-0 px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Approve
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Frame20 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 whitespace-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Motto mortgage Chicago `}</p>
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Chicago `}</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center opacity-0 px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#212121] text-[12px] tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reject
        </p>
      </div>
      <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[32px] items-center justify-center opacity-0 px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Approve
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Frame27 />
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 whitespace-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Motto mortgage Denver `}</p>
      <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Denver
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center opacity-0 px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e9f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#212121] text-[12px] tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reject
        </p>
      </div>
      <div className="bg-[#1976d2] content-stretch flex gap-[8px] h-[32px] items-center justify-center opacity-0 px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Approve
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1976d2] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        See more
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative w-full">
          <Frame5 />
          <Frame6 />
          <Frame7 />
          <Frame8 />
          <Frame9 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip pb-[8px] relative rounded-[inherit] w-full">
        <Frame13 />
        <Frame14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-0 px-[24px] py-[8px] top-[70px] w-[650px]">
      <Frame16 />
      <Frame15 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Component 198">
      <DrawerHeader />
      <Frame2 />
    </div>
  );
}