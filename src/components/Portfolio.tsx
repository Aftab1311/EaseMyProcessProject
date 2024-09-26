import Image from "next/image";
import Heading from "./ui/Heading";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Portfolio() {
  
    const handleOpenPdf1 = () => {
      // Replace the URL below with the path to your PDF file
      window.open('/portfolio/pdf1.pdf', '_blank');
    };

    const handleOpenPdf2 = () => {
      // Replace the URL below with the path to your PDF file
      window.open('/portfolio/pdf2.pdf', '_blank');
    }

    const handleOpenPdf3 = () => {
      // Replace the URL below with the path to your PDF file
      window.open('/portfolio/pdf3.pdf', '_blank');
    }

    const handleOpenPdf4 = () => {
      // Replace the URL below with the path to your PDF file
      window.open('/portfolio/pdf4.pdf', '_blank');
    }
  return (
    <section className="py-10 md:py-20 bg-[url('/images/hero/dotbg.png')] bg-cover bg-center">
      <Heading color="white pb-10 ">Our Portfolio</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 md:mx-40 gap-8 md:gap-10">


        <div className="relative flex justify-center group cursor-pointer" onClick={handleOpenPdf1}>
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/portfolio/port1.png"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-[#D2042DF2] to-[#78041BF2] rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Business Valuation</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>

        <div className="relative flex justify-center group cursor-pointer" onClick={handleOpenPdf2}>
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/portfolio/port2.png"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-[#D2042DF2] to-[#78041BF2] rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Financial Modeling</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>

        <div className="relative flex justify-center group cursor-pointer" onClick={handleOpenPdf3}>
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/portfolio/port3.png"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-[#D2042DF2] to-[#78041BF2] rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Financial Planning & Analysis</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>

        <div className="relative flex justify-center group cursor-pointer" onClick={handleOpenPdf4}>
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/portfolio/port4.png"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-[#D2042DF2] to-[#78041BF2] rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Pitch deck</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>
       

       

      </div>
    </section>
  );
}
