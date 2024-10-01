
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image"; 
import { FaCalendarAlt } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";


export default function Planning() {
     
    const funding = [{
        title: "Simplified Quarterly and Monthly Reporting",
        desc: "For simplified reporting, use Management Information Systems (MIS). We establish processes for reliable reporting, allowing you to focus on in-depth analysis and strategic insights. Ensure accurate forecasting across periods. Manage uncertainty by leveraging comprehensive reports across multiple departments and currencies. Gain insights into your company's performance to make informed decisions and drive long-term growth.",
        icon: <FaCalendarAlt />,
        bg: "/images/hero/ser1.jpg",
    },
    {
        title: "Working Solutions for Excel-Based Budgeting ",
        desc: "Create simple Excel budgets and contrast them with actual outcomes. Make better choices so that you can successfully adjust to shifting company situations.",
        icon: <RiFileExcel2Fill  />,
        bg: "/images/hero/ser2.jpg",
    },
    {
        title: "Effective Automation of Workflows",
        desc: "Use strong Excel formulas to automate chores and increase productivity. Align resources with growth-oriented strategic priorities.",
        icon: <FaRobot />,
        bg: "/images/hero/ser3.jpg",
    },
    {
        title: "Customized Training in Excel for Improved Proficiency",
        desc: " Enhance the abilities of your group with customized Excel instruction. Boost output, improve data analysis, and streamline .",
        icon: <FaBriefcase />,
        bg: "/images/hero/ser4.png",
    },
    {
        title: "Forecast with Confidence",
        desc: " Navigate an uncertain future with multi-period, multi-segment, and multi-currency reporting. We provide comprehensive insights into your business performance across different timeframes, divisions, and currencies. Make informed decisions for sustainable growth.",
        icon: <IoStatsChart  />,
        bg: "/images/hero/ser5.png",
    },
    {
        title: "Practical Budgeting",
        desc: " We develop easy to update budgets in excel, compare with actual results which enable smart decision making. This is crucial for navigating today's ever-changing business landscape. Make data-driven decisions with confidence.",
        icon: <FaMoneyBillWave  />,
        bg: "/images/hero/ser6.png",
    },
   
    ]


    return (
        
         <div className="w-full py-10 bg-[#f6f6f6]">
       <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl text-[#d2042d] font-bold flex justify-center mb-10 text-center" >
            Financial and Planning's Services
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
                <h3 className="text-2xl text-red-600 font-semibold p-2 text-center mt-4 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-lg">
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
            <h3 className="text-2xl text-red-600 font-semibold p-2 text-center mt-4 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-lg">
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
