import React from "react";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import Head from "next/head";
import WhyUs from "@/components/ui/WhyUs";
import HomeService from "@/components/HomeService";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/ui/navbar";
import DealProcess from "@/components/DealProcess";
import Portfolio from "@/components/Portfolio";
import FAQs from "@/components/ui/FAQs";
import Footer from "@/components/ui/footer";
import { dealAdvisoryFaqs } from "@/constants/faqs";
import { dealItems } from "@/constants/carousel";
import Guidance from "@/components/Deal_Guidance";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const DealAdvisory = () => {
  return (
    <main
      className={`flex flex-col overflow-x-hidden bg-white min-h-screen w-full ${poppins.className}`}
    >
      <Head>
        <meta
          name="title"
          content="Ease My Process: Bookkeeping, Accounting, Taxation and Advisory Firm"
        />
        <meta
          name="description"
          content="Assisting small to mid-size businesses and CPA firms to streamline bookkeeping, accounting, payroll and tax calculation. We make sure to help Businesses and CPA firms run efficiently."
        />
        <meta
          name="keywords"
          content="Bookkeeping, Auditing, CPA, Business, Firms, tax, tax calculation, payroll, tax advisory, accounting"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Ease My Process" />
        <title>Ease My Process</title>
      </Head>
      <Navbar />
      <Hero items={dealItems} />
      <div className="w-full flex justify-center">
    {/* <div style={{ flex: 2, marginLeft: '80px' }}>
      <img 
        src="/dealAdvisoryWhyUS.png" 
        alt="Why Choose Us" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div> */}

    <div className="w-full flex justify-center flex-col items-center my-10">
      <h1  className="text-3xl font-bold text-[#a60424] text-center w-full md:text-5xl my-6">Seamless Deal Execution, Tailored to Your Growth</h1>
      <h2 className="text-base md:text-xl w-[100%] px-4 text-center my-2 md:mb-10">
      Expert Deal Advisory & Start-Up Solutions: From Market Evaluation to Successful Deal Execution
      </h2>
     
      <div className="relative w-full h-[500px] flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-center my-28 md:my-20">
        {/* Central Circular Image */}
        <div className="absolute w-[400px] h-[400px] items-center justify-center hidden md:flex ">
          <img
            src="/FinancialPlanningWhyus.png"
            alt="Why Choose Us"
            className="rounded-full object-contain w-[550px] h-[550px]"
          />
        </div>

        {/* Top Content Box */}
        <div className="md:absolute md:-top-24 md:left-1/2 md:transform md:-translate-x-1/2 w-[90%]  md:w-[30%]">
          <div className=" border border-gray-300 md:h-[160px] flex flex-col justify-center items-center rounded-lg p-5 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-base md:text-lg mb-2 font-bold text-center">Skilled Guidance:</h3>
            <p className="text-[12px] md:text-sm text-center">
            Provided by a former Big 4 consultant with extensive knowledge of large-scale transactions in India.
            </p>
          </div>
        </div>

        {/* Right Content Box */}
        <div className="md:absolute md:top-1/2 md:right-10 md:transform md:-translate-y-1/2 w-[90%]  md:w-[30%]">
          <div className=" border border-gray-300 md:h-[160px] flex flex-col justify-center items-center rounded-lg p-5 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-base md:text-lg mb-2 font-bold text-center">Full-Service Advisory:</h3>
            <p className="text-[12px] md:text-sm text-center">
            We handle every aspect, from identifying prospects to completing transactions. Our in-depth knowledge of the market allows us to identify the most favorable investment opportunities in India.
            </p>
          </div>
        </div>

        {/* Bottom Content Box */}
        <div className="md:absolute md:-bottom-24 md:mt-10 md:right-[13%] md:transform  w-[90%]  md:w-[30%]">
          <div className=" border border-gray-300 md:h-[160px] flex flex-col justify-center items-center rounded-lg p-5 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-base md:text-lg mb-2 font-bold text-center">Startup Specialization:</h3>
            <p className="text-[12px] md:text-sm text-center">
            We assist with exit planning and startup setup. Over 50,000 Indian companies received $14 billion in investment in 24 md:mt-1023..
            </p>
          </div>
        </div>

        {/* Left Content Box */}
        <div className="md:absolute md:top-1/2 md:left-10 md:transform md:-translate-y-1/2 w-[90%]  md:w-[30%] ">
          <div className=" border border-gray-300 md:h-[160px] flex flex-col justify-center items-center rounded-lg p-5 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-base md:text-lg mb-2 font-bold text-center">Regulatory Knowledge:</h3>
            <p className="text-[12px] md:text-sm text-center">
            We are aware of the intricate tax and regulatory laws in India.
            </p>
          </div>
        </div>

        {/* Top Left Box (optional) */}
        <div className="md:absolute md:-bottom-24 md:mt-10 md:left-[13%] md:transform  md:w-[30%] w-[90%] ">
          <div className="border border-gray-300 md:h-[160px] flex flex-col justify-center items-center rounded-lg p-5 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-base md:text-lg mb-2 font-bold text-center">client Focus:</h3>
            <p className="text-[12px] md:text-sm text-center">
            In an economy that is expanding quickly, we address problems promptly and communicate effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Guidance/>
      <ContactUs/>
      <DealProcess/>
      <FAQs FaqTableData={dealAdvisoryFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default DealAdvisory;
