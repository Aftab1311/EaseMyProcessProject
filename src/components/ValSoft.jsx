import Marquee from "react-fast-marquee";
import Heading from "./ui/Heading";
import Image from "next/image";

const clients = [
  { logo: "/images/logo/pitchbook.png" },
  { logo: "/images/logo/s&p.png" },
  { logo: "/images/logo/fresh.png" },
  { logo: "/images/logo/wave.png" },
  { logo: "/images/logo/ibis.jpg" },
  { logo: "/images/logo/sage.png" },
  { logo: "/images/logo/zoho.png" },
//   { logo: "/images/logo/keepharma.png" },
//   { logo: "/images/logo/occl.png" },
//   { logo: "/images/logo/payrup.png" },
//   { logo: "/images/logo/revivo.png" },
//   { logo: "/images/logo/sterlite.png" },
//   { logo: "/images/logo/wrigleys.png" },
];

export default function ValSoft() {
  return (
    <div className="w-full container mx-auto py-20 flex flex-col justify-center items-center gap-4 " id="clients">
      <h1 className="text-[#a60424] underline text-3xl md:text-6xl text-center">Softwares/ databases we work with:</h1>
      {/* <h2 className="text-black text-xl md:text-2xl">by our core team members</h2> */}
      
      <Marquee gradient={false} speed={50} className="my-10 py-2">
        {clients.map((client, idx) => (
          <Image
            key={idx}
            src={client.logo}
            alt="client logo"
            className="h-[6rem] md:h-24 p-4 mx-8 md:px-4 object-contain rounded-lg"
            style={{
              boxShadow:
                "4px 0px 4px 0px #00000008, 0px 4px 4px 0px #00000024, 0px 0px 4px 0px #00000014",
            }}
            width={200}
            height={400}
          />
        ))}
      </Marquee>
      <div className="w-full mt-10 md:mt-20 px-10 border-b-2 border-black"></div>
    </div>
  );
}
