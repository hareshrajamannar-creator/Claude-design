import svgPaths from "./svg-0aidlnqi7g";
import imgImageBefore from "figma:asset/b5981f9016c5465e376b0cb4a08e936f7eb3896d.png";
import imgImageAfter from "figma:asset/86bd60c7792cdbb0c4d5ccf6dcaf1f00a2f3e4ad.png";
import { imgArrowLeftAlt } from "./svg-xmc5v";

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

function Frame2() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end opacity-0 relative shrink-0">
      <Frame2 />
    </div>
  );
}

function DrawerHeader() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[16px] pt-[24px] px-[24px] top-0 w-[650px]" data-name="Drawer Header">
      <div className="flex flex-row items-center self-stretch">
        <Frame />
      </div>
      <Frame3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[18px] left-0 top-[12px] w-[570px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#555] text-[12px] top-0 tracking-[-0.24px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TODAY, 19 MAR 2026
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[45.148px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">just now</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[279.109px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Sarah Mitchell</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          edited the caption and hashtags
        </span>
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] left-0 text-[#555] text-[11px] top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caption
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[text-decoration-skip-ink:none] absolute decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 line-through text-[#555] text-[12px] top-0 w-[198px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Try our new Spicy Chicken Sandwich! Available for a limited time. #McDonalds #NewMenu
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[68px] items-start left-0 pb-px pt-[7px] px-[9px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[241px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5 8H11M11 8L8 5M11 8L8 11" id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#212121] text-[12px] top-0 w-[214px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Introducing our NEW Spicy Chicken Sandwich! 🔥 Crispy, juicy, and packed with flavor. Limited time only! #McDonalds #SpicyChicken #NewMenu #LimitedTime
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[104px] items-start left-[265px] pb-px pt-[7px] px-[9px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1976d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Icon1 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[124.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#fafafa] h-[148.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[522_0_0] h-[196px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[196px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[220px] left-0 top-0 w-[570px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[221px] items-start left-0 pb-px top-[42px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c494540} id="Vector_3" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[32.914px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">5mins</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[241.375px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">David Rodriguez</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          updated the post image
        </span>
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] left-0 text-[#555] text-[11px] top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Image
      </p>
    </div>
  );
}

function ImageBefore() {
  return (
    <div className="h-[120px] relative rounded-[2px] shrink-0 w-full" data-name="Image (Before)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageBefore} />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-[111.84px] text-[#555] text-[10px] text-center top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Before
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[149px] items-start left-0 pb-px pt-[5px] px-[5px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ImageBefore />
      <Paragraph9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[241px] size-[16px] top-[50px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5 8H11M11 8L8 5M11 8L8 11" id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ImageAfter() {
  return (
    <div className="h-[120px] relative rounded-[2px] shrink-0 w-full" data-name="Image (After)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImageAfter} />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[15px] left-[110.52px] text-[#1976d2] text-[10px] text-center top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        After
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[151px] items-start left-[265px] pb-[2px] pt-[6px] px-[6px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1976d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ImageAfter />
      <Paragraph10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[151px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Icon3 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[171.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#fafafa] h-[195.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[522_0_0] h-[243px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[243px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[570px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[267px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[268px] items-start left-0 pb-px top-[263px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #C69204)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #C69204)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #C69204)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, #C69204)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[38.234px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">15mins</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[432.234px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Marketing Team</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          applied Happy Meal promotion rules to Facebook pages
        </span>
      </p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] left-0 text-[#555] text-[11px] top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Platform
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#212121] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Facebook
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white h-[28px] relative rounded-[4px] shrink-0 w-[70.117px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[9px] relative size-full">
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#fafafa] h-[72.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[522_0_0] h-[120px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[120px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[144px] left-0 top-0 w-[570px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-0 pb-px top-[531px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container29 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[676px] relative shrink-0 w-[570px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <Container4 />
        <Container16 />
        <Container28 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[18px] left-0 top-[12px] w-[570px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#555] text-[12px] top-0 tracking-[-0.24px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mar 19, 2026
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_3878)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_3878">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[48.5px] text-[#1976d2] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          View 10 locations
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M9 4.5L6 7.5L3 4.5" id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[18px] items-center left-0 top-[47.5px] w-[111.086px]" data-name="Button">
      <Paragraph16 />
      <Icon6 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[124.188px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 19, 2026 11:42 AM</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[437.117px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Jessica Martinez</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          scheduled this post for 10 locations on Mar 20, 9:00 AM
        </span>
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[39.5px] left-0 top-0 w-[522px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[522_0_0] h-[65.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
        <Container46 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[65.5px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[89.5px] left-0 top-0 w-[570px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[89.5px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[90.5px] items-start left-0 pb-px top-[42px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container41 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_3888)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #377E2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #377E2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_3888">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[44px] text-[#1976d2] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          View 5 locations
        </p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M9 4.5L6 7.5L3 4.5" id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[18px] items-center left-0 top-[47.5px] w-[104.266px]" data-name="Button">
      <Paragraph19 />
      <Icon8 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[124.375px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 19, 2026 10:15 AM</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[269.938px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Regional Manager</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          approved 5 of 10 locations
        </span>
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[39.5px] left-0 top-0 w-[522px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[522_0_0] h-[65.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <Container53 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[65.5px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[89.5px] left-0 top-0 w-[570px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[89.5px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[90.5px] items-start left-0 pb-px top-[132.5px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container48 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[18px] left-[8px] top-[4px] w-[102.734px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#de1b0c] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phoenix Scottsdale
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[#fef6f5] h-[26px] left-0 rounded-[4px] top-[48.5px] w-[118.734px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[121.172px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 19, 2026 9:30 AM</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[187.945px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Michael Chen</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          removed location
        </span>
      </p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[39.5px] left-0 top-0 w-[522px]" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[522_0_0] h-[74.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[74.5px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[98.5px] left-0 top-0 w-[570px]" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[98.5px] relative shrink-0 w-full" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.5px] items-start left-0 pb-px top-[223px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container55 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[322.5px] relative shrink-0 w-[570px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph15 />
        <Container40 />
        <Container47 />
        <Container54 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[18px] left-0 top-[12px] w-[570px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#555] text-[12px] top-0 tracking-[-0.24px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mar 18, 2026
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[120.703px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 18, 2026 4:20 PM</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[224.742px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Sarah Mitchell</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          edited the post caption
        </span>
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] left-0 text-[#555] text-[11px] top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caption
      </p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[text-decoration-skip-ink:none] absolute decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 line-through text-[#555] text-[12px] top-0 w-[204px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`McDonald's meals in every celebration that brings smiles, happiness, and togetherness. #FamilyTime #McDonalds`}</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[86px] items-start left-0 pb-px pt-[7px] px-[9px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph29 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[241px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5 8H11M11 8L8 5M11 8L8 11" id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#212121] text-[12px] top-0 w-[209px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`McDonald's meals make every celebration special with smiles, happiness, and unforgettable moments together. #FamilyTime #McDonalds #Celebration`}</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[104px] items-start left-[265px] pb-px pt-[7px] px-[9px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1976d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph30 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Icon11 />
      <Container74 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[124.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph28 />
      <Container72 />
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#fafafa] h-[148.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="flex-[522_0_0] h-[196px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[196px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[220px] left-0 top-0 w-[570px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[221px] items-start left-0 pb-px top-[42px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container64 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c494540} id="Vector_3" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[18px] left-[8px] top-[4px] w-[124.711px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#1976d2] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Updated for 8 locations
      </p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute bg-[#ecf5fd] h-[26px] left-0 rounded-[4px] top-[48.5px] w-[140.711px]" data-name="Container">
      <Paragraph31 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[118.633px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 18, 2026 3:15 PM</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[330.031px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">David Rodriguez</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          updated the post image for 8 locations
        </span>
      </p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[39.5px] left-0 top-0 w-[522px]" data-name="Container">
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Container80() {
  return (
    <div className="flex-[522_0_0] h-[74.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[74.5px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[98.5px] left-0 top-0 w-[570px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[98.5px] relative shrink-0 w-full" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.5px] items-start left-0 pb-px top-[263px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container76 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[44px] text-[#1976d2] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          View 3 locations
        </p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M9 4.5L6 7.5L3 4.5" id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[18px] items-center left-0 top-[47.5px] w-[104.266px]" data-name="Button">
      <Paragraph34 />
      <Icon14 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[118.711px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 18, 2026 1:30 PM</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[218.781px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Michael Chen</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          added 3 new locations
        </span>
      </p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[39.5px] left-0 top-0 w-[522px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
    </div>
  );
}

function Container88() {
  return (
    <div className="flex-[522_0_0] h-[65.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button2 />
        <Container89 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[65.5px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[89.5px] left-0 top-0 w-[570px]" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[89.5px] relative shrink-0 w-full" data-name="Container">
      <Container85 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[90.5px] items-start left-0 pb-px top-[362.5px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container84 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_3888)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #377E2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #377E2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_3888">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[44px] text-[#1976d2] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          View 5 locations
        </p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M9 4.5L6 7.5L3 4.5" id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[18px] items-center left-0 top-[47.5px] w-[104.266px]" data-name="Button">
      <Paragraph37 />
      <Icon16 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[125.656px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 18, 2026 12:45 PM</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[320.891px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Regional Manager</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          approved the remaining 5 locations
        </span>
      </p>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute h-[39.5px] left-0 top-0 w-[522px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Container95() {
  return (
    <div className="flex-[522_0_0] h-[65.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button3 />
        <Container96 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[65.5px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[89.5px] left-0 top-0 w-[570px]" data-name="Container">
      <Container93 />
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[89.5px] relative shrink-0 w-full" data-name="Container">
      <Container92 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[90.5px] items-start left-0 pb-px top-[453px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container91 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_3905)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #DE1B0C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 6L6 10" id="Vector_2" stroke="var(--stroke-0, #DE1B0C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 6L10 10" id="Vector_3" stroke="var(--stroke-0, #DE1B0C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_3905">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[124.336px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 18, 2026 11:20 AM</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[323.305px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Brand Compliance</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          rejected Boston Commons location
        </span>
      </p>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph40 />
      <Paragraph41 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[18px] left-[8px] top-[4px] w-[148.359px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#de1b0c] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rejected: Boston Commons
      </p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute bg-[#fef6f5] h-[26px] left-0 rounded-[4px] top-px w-[164.359px]" data-name="Container">
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] left-0 text-[#555] text-[11px] top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reason
      </p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#de1b0c] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Image does not meet brand guidelines - logo placement incorrect
      </p>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col gap-[4px] h-[62.5px] items-start left-0 pt-[12px] px-[12px] rounded-[4px] top-[35px] w-[522px]" data-name="Container">
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[97.5px] relative shrink-0 w-full" data-name="Container">
      <Container105 />
      <Container106 />
    </div>
  );
}

function Container102() {
  return (
    <div className="flex-[522_0_0] h-[145px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container103 />
        <Container104 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[145px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container101 />
      <Container102 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[169px] left-0 top-0 w-[570px]" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[169px] relative shrink-0 w-full" data-name="Container">
      <Container99 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[170px] items-start left-0 pb-px top-[543.5px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container98 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[126.586px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 18, 2026 10:00 AM</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[224.742px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Sarah Mitchell</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          edited the post caption
        </span>
      </p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph45 />
      <Paragraph46 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] left-0 text-[#555] text-[11px] top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caption
      </p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[text-decoration-skip-ink:none] absolute decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 line-through text-[#555] text-[12px] top-0 w-[173px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start your morning right with our breakfast menu!
      </p>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-0 pb-px pt-[7px] px-[9px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph48 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[241px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5 8H11M11 8L8 5M11 8L8 11" id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#212121] text-[12px] top-0 w-[173px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start your morning right with our delicious breakfast menu! Fresh ingredients, hot coffee, and your favorites. ☀️ #BreakfastTime
      </p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[86px] items-start left-[265px] pb-px pt-[7px] px-[9px] rounded-[4px] top-0 w-[233px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1976d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph49 />
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[86px] relative shrink-0 w-full" data-name="Container">
      <Container117 />
      <Icon19 />
      <Container118 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[106.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph47 />
      <Container116 />
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[#fafafa] h-[130.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Container115 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="flex-[522_0_0] h-[178px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container113 />
        <Container114 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[178px] items-start left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[202px] left-0 top-0 w-[570px]" data-name="Container">
      <Container110 />
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[202px] relative shrink-0 w-full" data-name="Container">
      <Container109 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[203px] items-start left-0 pb-px top-[713.5px] w-[570px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container108 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_3863)" id="Icon">
          <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_3863">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[8px] rounded-[9999px] size-[32px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 30.736%, rgb(234, 216, 249) 122.3%)" }}>
      <Icon20 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[121.344px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#555] text-[12px] top-px tracking-[-0.24px] whitespace-nowrap">Mar 18, 2026 9:00 AM</p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="absolute h-[20.5px] left-0 top-[19px] w-[187.906px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0] left-0 text-[#212121] text-[0px] text-[14px] top-[0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">Sarah Mitchell</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic tracking-[-0.4304px]">{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          created this post
        </span>
      </p>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[39.5px] left-[40px] top-0 w-[522px]" data-name="Container">
      <Paragraph50 />
      <Paragraph51 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[39.5px] left-[4px] top-[12px] w-[562px]" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[63.5px] left-0 top-0 w-[570px]" data-name="Container">
      <Container121 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-white h-[63.5px] left-0 top-[916.5px] w-[570px]" data-name="Container">
      <Container120 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[980px] relative shrink-0 w-[570px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph25 />
        <Container63 />
        <Container75 />
        <Container83 />
        <Container90 />
        <Container97 />
        <Container107 />
        <Container119 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1978.5px] items-start justify-center left-0 pl-[16px] top-0 w-[602px]" data-name="Container">
      <Container3 />
      <Container39 />
      <Container62 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1978.5px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[1978.5px] items-start relative rounded-[4px] shrink-0 w-[602px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-0 px-[24px] py-[8px] top-[70px] w-[650px]">
      <Container />
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