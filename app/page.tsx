import CurvedMarquee from "@/components/ui/marquee";

const images = [
  { src: "/sxcom.png", href: "https://www.abc.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/rbw.png", href: "https://www.def.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/jjjj.png", href: "https://www.jjjjound.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/lopez.png", href: "https://www.hh.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/pny.png", href: "https://www.jj.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/fofa.png", href: "https://www.kk.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/molenne.png", href: "https://www.ll.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/n10as.png", href: "https://www.mm.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/cheers.png", href: "https://www.nn.com", target: "_blank", rel: "noopener noreferrer" },
  { src: "/tenrec.png", href: "https://www.oo.com", target: "_blank", rel: "noopener noreferrer" }
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col">
      {/* <h6 className="title mb-1">PRODUCTION MANAGER®</h6> */}
      <CurvedMarquee className="mt-10" images={images} radius={500} rotationSpeed={0.011} />
      {<div className="link text- mt-[-10px] flex flex-col items-center">
        {/* <a className="cursor-progress">PRODUCTION MANAGER®</a> */}
              </div>}
        {/* <a className="cursor-pointer">CONTACT</a>
        <a className="cursor-pointer">INFO</a>
        <a className="cursor-pointer">SHOP</a>
        <a className="cursor-pointer">LINESHEETS</a>
      </div> */}
    </div>
  );
}
