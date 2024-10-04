
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image"; 
import { FaCalendarAlt } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";


export default function Planning() {
     
    const funding = [{
        title: "Custom Dashboards and KPI Trackers",
        desc: "Our FP&A experts design tailored reports and dashboards using top tools like Power BI, Tableau, and Excel, transforming complex data into clear, actionable insights for confident, data-driven decision making. ",
        icon: <FaCalendarAlt />,
        bg: "/images/hero/ser1.jpg",
    },
    {
        title: "Streamlined Monthly & Quarterly Reporting ",
        desc: "Utilize Management Information Systems (MIS) to simplify your reporting process. We establish standardized operating procedures (SOPs) for consistent reporting, allowing you to focus on analysis and gain financial clarity faster",
        icon: <RiFileExcel2Fill  />,
        bg: "/images/hero/ser2.jpg",
    },
    {
        title: "Confident Forecasting",
        desc: "Tackle uncertainty with comprehensive multi-period, multisegment, and multi-currency reporting. We provide deep insights into your business performance across various timeframes, divisions, and currencies, empowering informed decisions for sustainable growth. ",
        icon: <FaRobot />,
        bg: "/images/hero/ser3.jpg",
    },
    {
        title: "VBA-Free Workflow Automation",
        desc: " Save time and enhance productivity by automating daily repetitive tasks with powerful Excel formulas, allowing your team to concentrate on what truly matters. ",
        icon: <FaBriefcase />,
        bg: "/images/hero/ser4.png",
    },
    {
        title: "Practical Budgeting Solutions",
        desc: " Navigate an uncertain future with multi-period, multi-segment, and multi-currency reporting. We provide comprehensive insights into your business performance across different timeframes, divisions, and currencies. Make informed decisions for sustainable growth.",
        icon: <IoStatsChart  />,
        bg: "/images/hero/ser5.png",
    },
    {
        title: "Specialized Excel Training",
        desc: " Elevate your team's capabilities with our tailored Excel training programs that enhance productivity, data analysis skills, and process optimization, empowering them to achieve more ",
        icon: <FaMoneyBillWave  />,
        bg: "/images/hero/ser6.png",
    },
   
    ]


    return (
        
         <div className="w-full py-10 bg-[#f6f6f6]">
       <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl text-[#d2042d] font-bold flex justify-center mb-10 text-center" >
            Financial Planning Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {funding.map((fund, index) => {
    const isLastBox = index === funding.length - 1 && funding.length % 3 === 1;
    const isLastTwoBoxes = index >= funding.length - 2 && funding.length % 3 === 2;

    // If this is the first of the last two boxes, we render the wrapper
    if (isLastTwoBoxes && index === funding.length - 2) {
      return (
        <div key="last-two-wrapper" className="flex justify-center flex-col md:flex-row md:col-span-3 gap-4">
          {funding.slice(-2).map((fund, subIndex) => (
            <div
              key={`last-two-${subIndex}`}
              className="relative rounded-lg group mx-auto shadow-lg md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10 global-shadow"
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
                <h3 className="text-2xl text-red-600 font-semibold p-2 text-center mt-4 group-hover:mt-24 md:group-hover:mt-24 group-hover:text-lg">
                  {fund.title}
                </h3>
                <span className="mx-6 md:my-2 text-sm text-center opacity-0 group-hover:opacity-100 transition group-hover:duration-100 group-hover:delay-300 group-hover:text-[10px] md:group-hover:text-[12px]">
                  {fund.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Default rendering for all other items
    if (!isLastTwoBoxes) {
      return (
        <div
          key={index}
          className={`relative rounded-lg group mx-auto shadow-lg md:w-[365px] h-[24rem] md:h-[365px] overflow-hidden hover:shadow-2xl mb-10 global-shadow ${
            isLastBox ? 'md:col-span-3 md:flex md:justify-center' : ''
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
            <h3 className="text-2xl text-red-600 font-semibold p-2 text-center mt-4 group-hover:mt-24 md:group-hover:mt-24 group-hover:text-lg">
              {fund.title}
            </h3>
            <span className="mx-6 md:my-2 text-sm text-center opacity-0 group-hover:opacity-100 transition group-hover:duration-100 group-hover:delay-300 group-hover:text-[10px] md:group-hover:text-[12px]">
              {fund.desc}
            </span>
          </div>
        </div>
      );
    }

    return null; // Safeguard to not render anything if it's not needed
  })}
</div>
       </div>
        </div>
       
    );
    }
