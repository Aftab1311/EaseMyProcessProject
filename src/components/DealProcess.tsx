import Image from "next/image";
import React from "react";

const DealProcess = () => {
  const sectionsData = [
    {
      heading: "Trageting",
      description:
        "Identify targets or buyers in sectors and markets that align with your investment strategy",
    },
    {
      heading: "Valuation",
      description:
        "Using internationally accepted valuation approaches (Income approach, Market approach, Milestone approach)",
    },
    {
      heading: "Due diligence support",
      description:
        "Liaising with parties for smooth workflow, timely discussions on red flags and Corporate Tax Due Diligence ",
    },
    {
      heading: "Deal Structuring",
      description:
        "Structuring of deals from tax/regulatory standpoint including advice on legal structure of business entity.",
    },
    {
      heading: "Transaction implementation support ",
      description:
        " Review of transaction documents",
    },
  ];
  return (
    <>
      <div>
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
            <div className="w-[25%] flex flex-col gap-4 absolute left-28  top-[60px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Targeting
              </h1>
              <p className="text-sm text-justify ">
              Identify targets or buyers in sectors and markets that align with your investment strategy
              </p>
            </div>
            <div className="w-[27%] flex flex-col gap-4 absolute left-10  top-[260px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Valuation
              </h1>
              <p className="text-sm text-justify">
              Using internationally accepted valuation approaches (Income approach, Market approach, Milestone approach)
              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute left-48 top-[460px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Due diligence support
              </h1>
              <p className="text-sm text-justify">
              Liaising with parties for smooth workflow, timely discussions on red flags and Corporate Tax Due Diligence.
              </p>
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
            <div className="w-[25%] flex flex-col gap-4 absolute right-20 top-[60px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
              Deal Structuring
              </h1>
              <p className="text-sm text-justify ">
              Structuring of deals from tax/regulatory standpoint including advice on legal structure of business entity.
              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute right-14  top-[260px]">
              <h1 className="text-[#d2042d] text-base font-bold">
              Transaction implementation support 
              </h1>
              <p className="text-sm text-justify">
              "Review of transaction documents"
              </p>
            </div>
            {/* <div className="w-[25%] flex flex-col gap-4 absolute right-48 top-[460px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
                Graphic Design
              </h1>
              <p className="text-sm text-justify">
                We transform your content into a visually engaging presentation
                with impactful visuals, data visualizations, and a consistent
                design aesthetic.
              </p>
            </div> */}
          </div>
        </div>
        <div className="border-b-2 border-slate-500 mx-10 hidden md:block"></div>
      </div>
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

export default DealProcess;
