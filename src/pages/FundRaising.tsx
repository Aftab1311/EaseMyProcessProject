import React from "react";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/ui/navbar";
import Funding from "@/components/Funding";
import ContactUs from "@/components/ContactUs";
import FundProcess from "@/components/FundProcess";
import FAQs from "@/components/ui/FAQs";
import Footer from "@/components/ui/footer";
import { fundFaqs } from "@/constants/faqs";
import Image from "next/image";
import { fundingItems } from "@/constants/carousel";
import Hero from "@/components/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const FundRaising = () => {
  const whyChooseUsItems = [
    {
      title: "Strategic Solutions",
      description: "Develop tailored funding strategies that align with your unique business goals and market position, ensuring you effectively capture investor interest.",
    },
    {
      title: "Data-Driven Strategies",
      description: "Leverage analytics and market research to inform your approach, showcasing the viability and potential of your business to attract the right sources of capital.",
    },
    {
      title: "End-To-End Support",
      description: "Receive comprehensive assistance throughout the fundraising process, from initial planning to final negotiations, empowering you to navigate challenges and secure the funding you need.",
    },
   
  ];

  

  return (
    <main className={`flex flex-col overflow-x-hidden bg-white min-h-screen w-full ${poppins.className}`}>
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

      <Hero items={fundingItems} />

      <div className="text-center mt-[91px] md:mt-[140px] ">
        <h1 className="text-4xl lg:text-7xl mb-4 text-[#a60424] text-center font-bold my-4">Why Choose Us?</h1>
        <h2 className="text-sm md:text-xl mb-32 md:mb-40 w-[90%] md:w-full">
          Many companies require capital, but our approach is distinct:
        </h2>
        <div className="relative w-full h-[400px] flex flex-col gap-6 md:gap-0 my-10 md:flex-row items-center justify-center">
  {/* Central Circular Image */}
  <div className="absolute w-[400px] h-[400px] items-center justify-center hidden md:flex">
    <Image
      src="/FundRaisingwhyus.png"
      alt="Circular Image"
      width={450}
      height={150}
      className="rounded-full object-contain p-10"
    />
  </div>

  {/* Surrounding Content Boxes */}
  <div className="md:absolute md:-top-32 md:left-[50%] md:transform md:-translate-x-1/2 w-[90%] md:w-[30%]">
    <div className="border md:h-[168px] flex flex-col justify-center items-center border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[0].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[0].description}</p>
    </div>
  </div>

  <div className="md:absolute md:top-[50%] md:right-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
    <div className="border md:h-[168px] flex flex-col justify-center items-center border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[1].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[1].description}</p>
    </div>
  </div>

  <div className="md:absolute md:top-[50%] md:left-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
    <div className="border md:h-[168px] flex flex-col justify-center items-center border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[2].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[2].description}</p>
    </div>
  </div>

 
</div> 

      </div>
     
      <Funding />
      <ContactUs />
      <FundProcess />
      <FAQs FaqTableData={fundFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default FundRaising;