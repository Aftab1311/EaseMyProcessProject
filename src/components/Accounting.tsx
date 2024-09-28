
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image";
import { FaBuildingFlag } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";




export default function Compilance() {

  const funding = [{
    title: "End-to-End Accounting Solutions",
    desc: "Experience seamless and precise accounting support tailored to your business needs. Our offerings include effortless daily record-keeping, accurate month-end or year-end adjustments, automated reconciliations, and a smooth transition to cloud-based accounting solutions.",
    icon: <FaBuildingFlag />,
    bg: "/images/hero/ser1.jpg",
  },
  {
    title: "Comprehensive Financial Reporting",
    desc: "Ensure your financial statements meet the highest standards with our expertise in compliance with I-GAAP and IFRS standards, delivering detailed and transparent financial statements.",
    icon: <FaUserTie />,
    bg: "/images/hero/ser2.jpg",
  },
  {
    title: "Strategic Board Pack Preparation",
    desc: "Empower your board with compelling and insightful materials designed to support strategic decision-making and drive your business forward. We provide comprehensive financial analysis, key performance indicator (KPI) dashboards, market and competitive insights, and customized reporting and presentations.",
    icon: <FaFileInvoiceDollar />,
    bg: "/images/hero/ser3.jpg",
  },
  {
    title: "Specialized Compliance Solutions",
    desc: "Navigate India's complex regulatory landscape with confidence through our comprehensive GST and TDS compliance services. We ensure accurate monthly calculations and challan deposits, timely returns (monthly/quarterly), litigation support, and secretarial compliance management.",
    icon: <FaCreditCard />,
    bg: "/images/hero/ser4.png",
  },
  {
    title: "Expert Audit Support Services",
    desc: "Facilitate a smooth audit process with our dedicated support, ensuring your financials are ready for review by Big 4 or other reputable audit firms. Our services encompass pre-audit preparation, review, and coordination with auditors.",
    icon: <FaMapSigns />,
    bg: "/images/hero/ser5.png",
  },
  {
    title: "Accounts Receivable Management",
    desc: "Streamline your cash flow and ensure timely collections with our comprehensive accounts receivable services. We handle efficient invoice generation and distribution, proactive follow-up and collections, customer account reconciliation, and aging reports.",
    icon: <IoStatsChart  />,
    bg: "/images/hero/ser6.png",
  },
  {
    title: "Accounts Payable Management",
    desc: "Optimize your payment processes and maintain strong supplier relationships with our expert accounts payable services, including accurate invoice processing, timely payment scheduling, supplier reconciliation, and expense tracking and reporting.",
    icon: <HiMiniClipboardDocumentCheck  />,
    bg: "/images/hero/ser7.jpg",
  },

  ]


  return (

    <div className="w-full py-10 bg-[#f6f6f6]">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-5xl text-[#d2042d] font-bold flex justify-center mb-10 text-center" >
          Accounting and Compilance's Services
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
