import CurvedMarquee from "@/components/ui/marquee";

const images = [
  "/logo1.png", // Replace with your image URLs
  "/logo2.png", // Replace with your image URLs
  "/logo3.png", // Replace with your image URLs
  "/logo4.png", // Replace with your image URLs
  "/logo5.png", // Replace with your image URLs
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-between flex-col py-20">
      <h6>Product Manager</h6>
      <CurvedMarquee images={images} radius={400} rotationSpeed={0.01} />
      <div className="flex flex-col items-center">
        <a className="cursor-pointer">FULL SERVICE</a>
        <a className="cursor-pointer">CONTACT</a>
        <a className="cursor-pointer">INFO</a>
        <a className="cursor-pointer">SHOP</a>
        <a className="cursor-pointer">LINESHEETS</a>
      </div>
    </div>
  );
}
