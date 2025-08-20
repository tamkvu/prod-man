import CurvedMarquee from "@/components/ui/marquee";

const images = [
  {
    src: "/sxcom.png",
    // href: "https://www.reuters.com/article/us-sexcom/sex-com-domain-name-sold-for-13-million-idUSTRE69K3KY20101021/",
    // target: "_blank",
    // rel: "noopener noreferrer",
  },
  {
    src: "/rbw.png",
    href: "https://www.raisedbywolves.ca",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/jjjj.png",
    href: "https://www.jjjjound.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/lopez.png",
    href: "https://www.lopezmtl.ca",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/pny.png",
    href: "https://www.punkandyo.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/fofa.png",
    // href: "https://www.kk.com",
    // target: "_blank",
    // rel: "noopener noreferrer",
  },
  {
    src: "/molenne.png",
    href: "https://www.instagram.com/molenne.montreal/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/n10as.png",
    href: "https://www.n10.as",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/cheers.png",
    href: "https://www.instagram.com/cheersmatesoda/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/tenrec.png",
    href: "https://www.tenrec.shop/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    src: "/piano.png",
    // href: "https://www.instagram.com/whatis.pianogolf/",
    // target: "_blank",
    // rel: "noopener noreferrer",
  },
  {
    src: "/hdb.png",
    // href: "https://www.instagram.com/has_dac_biet/",
    // target: "_blank",
    // rel: "noopener noreferrer",
  },
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col">
      {/* <h6 className="title mb-1">CONTACT US</h6> */}
      <CurvedMarquee
        className="mt-1"
        images={images}
        radius={500}
        rotationSpeed={0.005}
      />
      {
        <div className="link text- mt-[-10px] flex flex-col items-center">
          {/* <a className="cursor-progress">AFFILIATIONS</a> */}
        </div>
      }
      {/* <a className="cursor-pointer">CONTACT</a>
        <a className="cursor-pointer">INFO</a>
        <a className="cursor-pointer">SHOP</a>
        <a className="cursor-pointer">LINESHEETS</a>
      </div> */}
    </div>
  );
}
