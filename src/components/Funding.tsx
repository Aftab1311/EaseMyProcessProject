import { FaHandHoldingUsd } from "react-icons/fa";
import { GiAngelWings } from "react-icons/gi";
import { FaLandmarkDome } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";
import { PiGraphBold } from "react-icons/pi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

import Image from "next/image";

export default function Funding() {
  //   For Accounting Purposes: Compliance with IFRS, US GAAPs, and IndAS
  //   standards.
  // o For Tax Purposes: Adherence to Rule 11UA / 11UB of Income - tax Rules and
  // transfer pricing regulations in India.
  // o For Corporate Law and FEMA Compliance: Accurate valuations to meet
  // Indian corporate and foreign exchange regulations.
  const funding = [
    {
      title: "Private Seed Funds",
      desc: `Startup India Seed Fund Scheme used to raise equity capital of INR 10 Lacs and above`,
      icon: <MdOutlineBusinessCenter />,
      bg: "/images/hero/ser7.jpg",
    },
    {
      title: "Venture Capital ",
      desc: `We help you formulate business fundraising strategy highlighting your business' value and growth potential investors, inspiring them to inject capital.
. 
`,
      icon: <FaHandHoldingUsd />,
      bg: "/images/hero/ser1.jpg",
    },
    {
      title: "Angel Investing",
      desc: `Highlight the potential of your startup to angel investors and secure the funding you need to get your idea off the ground and grow more rapidly.
`,
      icon: <GiAngelWings />,
      bg: "/images/hero/ser3.jpg",
    },
    {
      title: "Debt Capital",
      desc: `Create a powerful business fundraising strategy that will help you secure borrowed funds on a long-term or short-term basis, depending on your needs.`,
      icon: <FaLandmarkDome />,
      bg: "/images/hero/ser4.png",
    },
//     {
//       title: "Valuation for Mergers and Restructuring",
//       desc: `Valuation for Mergers and Restructuring: Navigate mergers, spin-offs, and 
// restructuring with confidence. Our precise valuation insights help determine fair swap 
// ratios and strategic paths for successful transitions`,
//       icon: <IoStatsChart />,
//       bg: "/images/hero/ser2.jpg",
//     },
//     {
//       title: "IBBI Registered Valuations",
//       desc: `Rely on our expertise as registered valuers under the 
// Companies Act, 2013, and Insolvency & Bankruptcy guidelines, ensuring accuracy 
// and adherence to regulatory standards`,
//       icon: <MdAutoGraph />,
//       bg: "/images/hero/ser5.png",
//     },
//     {
//       title: "Valuations Under SEBI & SE Regulations",
//       desc: `Navigate regulatory 
// complexities with precision. We offer valuation services that comply with SEBI and 
// stock exchange regulations, ensuring regulatory adherence and credibility. 
// `,
//       icon: <PiGraphBold />,
//       bg: "/images/hero/ser6.png",
//     },
//     {
//       title: "Valuation of Legal Entities, Shares, and Complex Securities",
//       desc: `For Accounting Purposes: Compliance with IFRS, US GAAPs, and IndAS 
// standards. For Tax Purposes: Adherence to Rule 11UA/11UB of Income-tax Rules and 
// transfer pricing regulations in India.
// `,
//       icon: <FaMoneyBillWave />,
//       bg: "/images/hero/ser8.jpg",
//     },
  ];

  return (
    <div className="w-full py-10 bg-[#f6f6f6]">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl text-[#d2042d] font-bold flex justify-center mb-10 text-center">
          Types of Funding
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {funding.map((fund, index) => (
            <div
              key={index}
              className={`relative rounded-lg group mx-auto shadow-lg w-80 h-[20rem] overflow-hidden hover:shadow-2xl mb-10 global-shadow ${
                funding.length % 3 !== 0 && index >= funding.length - 2
                  ? "md:mx-14"
                  : ""
              }`}
            >
              <Image
                src={fund.bg}
                alt={fund.title}
                width={1000}
                height={1000}
                className=""
              />
              <div className="w-full h-[120px] group-hover:h-full flex items-center flex-col duration-500 bg-white absolute bottom-0 group-hover:bottom-1/5 left-0">
                <div className="absolute -mt-6 group-hover:mt-8 md:group-hover:mt-10 bg-red-600 transition group-hover:duration-300 group-hover:rounded-xl group-hover:border-2 group-hover:border-red-600 p-2 rounded-full text-3xl text-white mx-auto shadow-xl group-hover:bg-white group-hover:text-red-600">
                  {fund.icon}
                </div>
                <h3 className="text-2xl text-red-600 font-semibold p-2 text-center mt-4 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-xl">
                  {fund.title}
                </h3>
                <span className="mx-6 md:my-2 text-sm text-center opacity-0 group-hover:opacity-100 transition group-hover:duration-100 group-hover:delay-300 group-hover:text-[12px] md:group-hover:text-sm">
                  {fund.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
