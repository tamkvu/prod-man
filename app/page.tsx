import CurvedMarquee from "@/components/ui/marquee";

const images = [
  { src: "/sxcom.png", href: "www.abc.com" }, // Replace with your image URLs
  { src: "/rbw.png", href: "www.def.com" },// Replace with your image URLs
  { src: "/jjjj.png", href: "www.jjjjound.com" }, // Replace with your image URLs
  { src: "/lopez.png", href: "www.hh.com" }, // Replace with your image URLs
  { src: "/pny.png", href: "www.jj.com" }, // Replace with your image URLs
  { src: "/fofa.png", href: "www.kk.com" }, // Replace with your image URLs
  { src: "/molenne.png", href: "www.ll.com" }, // Replace with your image URLs
  { src: "/n10as.png", href: "www.mm.com" }, // Replace with your image URLs
  { src: "/cheers.png", href: "www.nn.com" }, // Replace with your image URLs
  { src: "/tenrec.png", href: "www.oo.com" }, // Replace with your image URLs
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
