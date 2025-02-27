import CurvedMarquee from "@/components/ui/marquee";

const images = [
  { src: "/sxcom.png", href: "https://www.sex.com" },
  { src: "/rbw.png", href: "https://www.raisedbywolves.ca" },
  { src: "/jjjj.png", href: "https://www.jjjjound.com" },
  { src: "/lopez.png", href: "https://www.lopezmtl.com" },
  { src: "/pny.png", href: "https://www.punkandyo.com" },
  { src: "/fofa.png", href: "https://www.concordia.ca/finearts.html" },
  { src: "/molenne.png", href: "https://www.instagram.com/molenne.montreal/?hl=en" },
  { src: "/n10as.png", href: "https://www.n10.as" },
  { src: "/cheers.png", href: "https://www.instagram.com/cheersmatesoda/?hl=en" },
  { src: "/tenrec.png", href: "https://www.tenrec.shop" }
];

const ImageLinks = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {images.map((item, index) => (
        <a 
          key={index} 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={item.src} 
            alt={`Link to ${item.href}`} 
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </a>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col">
      <CurvedMarquee className="mt-10" images={images} radius={500} rotationSpeed={0.01} />
      <div className="link text- mt-[-10px] flex flex-col items-center">
        {/* Add links or buttons here if needed */}
      </div>
    </div>
  );
}
