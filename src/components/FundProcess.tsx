import Image from "next/image";
import React from "react";

const FundProcess = () => {
    const sectionsData = [
        {
          heading: "Strategy Development",
          description:
            "Our fundraising consultants work with you to create a tailored business fundraising strategy. We identify the best sources of capital and develop a plan for approaching investors, lenders, and other potential funding sources.",
        },
        {
          heading: "Identifying Potential Investors or Lenders",
          description:
            "We help you pinpoint the ideal investors or lenders for your business, ensuring that the fundraising strategy aligns with your goals and target market.",
        },
        {
          heading: "Getting Finances in Order",
          description:
            "Numbers are crucial to investors. We assist you in strategically presenting your finances and projected revenue to increase your chances of securing funding.",
        },
        {
          heading: "Company Valuation",
          description:
            "Understanding your business's value is vital before launching your fundraising campaign. We help you evaluate key metrics investors look for, providing confidence during negotiations.",
        },
        {
          heading: "Pitch Deck Development",
          description:
            "A well-crafted pitch deck is essential. We help you create a compelling presentation that highlights key metrics and data that investors and lenders seek, effectively communicating your business and vision.",
        },
        {
          heading: "Pitch Training",
          description:
            "A great idea and pitch deck aren't always enough. We prepare you to confidently present your business fundraising proposal, ensuring you're ready to win over investors.",
        },
        {
          heading: "Investor Outreach and Due Diligence",
          description:
            "We assist in identifying and approaching potential investors, guiding you through the due diligence process to ensure you're well-prepared for any investor questions or concerns.",
        },
        {
          heading: "Term Sheet and Negotiation Support",
          description:
            "After securing investor interest, we support you through negotiations to achieve the best possible terms for your business. We ensure you understand deal terms and make informed decisions.",
        },
        {
          heading: "Execution & Deal Closure",
          description:
            "We meticulously execute the fundraising strategy and guide you through each transaction step, ensuring a smooth process from sourcing investors to closing the deal.",
        },
      ];
      
  return (
    <>
      <div className="mb-20">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#d2042d",
            textDecoration: "underline",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Process
        </div>
        <div className="hidden md:flex justify-evenly w-full relative my-10">
          <div className="w-[28%] flex flex-col gap-16 mt-10">
            <div className="w-[25%] flex flex-col gap-4 absolute left-28  top-[10px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Strategy Development

              </h1>
              <p className="text-[12px] text-justify ">
              Our fundraising consultants will work with you to develop a business fundraising strategy individualized to your business and your goals. We will help you identify the best sources of capital for your business, and develop a plan for how to approach investors, lenders, and other potential sources of funding.

              </p>
            </div>
            <div className="w-[27%] flex flex-col gap-4 absolute left-10  top-[200px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Identifying Potential Investors or Lenders 

              </h1>
              <p className="text-[12px] text-justify">
              Our fundraising consultants will work with you to develop a business fundraising strategy individualized to your business and your goals. We will help you identify the best sources of capital for your business, and develop a plan for how to approach investors, lenders, and other potential sources of funding.

              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute left-32 top-[380px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Getting finances in Order 

              </h1>
              <p className="text-[12px] text-justify">
              Numbers matter to investors. Therefore, we help you present your finances and projected revenue strategically so you can increase your odds of getting funded.
              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute left-48 top-[520px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Execution & Deal Closure:


              </h1>
              <p className="text-[12px] text-justify">
              We execute the meticulously planned strategy and guide you through each step of the transaction process, ensuring a smooth journey from sourcing targets to deal closure.              </p>
            </div>
          </div>
          <div className="w-[35%]">
            <Image
              src="/process.png"
              alt="Process"
              width={2000}
              height={2000}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-[28%] flex flex-col gap-16 mt-10">
            <div className="w-[25%] flex flex-col gap-4 absolute right-28  top-[10px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
              Company Valuation 

              </h1>
              <p className="text-[12px] text-justify ">
              Knowing the value of your business before starting your business fundraising campaign will help you understand key drivers and metrics investors will look at, giving you more confidence when negotiating.

              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute right-10  top-[200px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Pitch Deck Development 

              </h1>
              <p className="text-[12px] text-justify">
              A well-crafted pitch deck is essential for any business fundraising effort. We'll help you develop a pitch deck that effectively communicates your business and vision, highlighting the key metrics and data that investors and lenders are looking for.

              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute right-32 top-[380px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
              Investor Outreach and Due Diligence


              </h1>
              <p className="text-[12px] text-justify">
              We'll help you identify and approach potential investors and guide you through the due .diligence process to ensure that you're well-prepared for any questions or concerns they may …have.

              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute right-48 top-[520px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
              Term Sheet and Negotiation Support


              </h1>
              <p className="text-[12px] text-justify">
              Once you've secured investor interest, we'll help you negotiate the best possible terms for your business. We'll work with you to understand the deal terms and ensure you make informed decisions.

              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute left-1/2  -translate-x-1/2 top-[640px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
              Pitch Training

              </h1>
              <p className="text-[12px] text-justify">
              WE PREPARE YOU TO PRESENT. A great idea and an equally excellent pitch deck are not always enough for investors. Therefore, we also train you to present your business fundraising proposal effectively to win investors.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-slate-500 mx-10 hidden md:block mt-20 "></div>

      <div className="md:hidden">
        <div style={{ padding: "10px" }} className="text-center">
          {sectionsData.map((section, index) => (
            <div key={index} style={{ marginBottom: "30px" }}>
              <h2 className="text-[#d2042d] font-bold text-base">
                {section.heading}
              </h2>
              <p className="text-sm font-semibold">{section.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="border-b-2 border-slate-500 mx-6  md:hidden"></div>
    </>
  );
};

export default FundProcess;
