import { useEffect } from "react";
import { Chart as ChartJs , CategoryScale , LinearScale  , LineElement , Title , Tooltip , Legend , PointElement} from "chart.js/auto"; 
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import Customer from "./assets/customer-service.png"
import Fund from "./assets/fund.png"
import Revenue from "./assets/revenue.png"
import Startup from "./assets/startup.png"
import { color } from "chart.js/helpers";

ChartJs.register( CategoryScale , LinearScale  , LineElement , Title , Tooltip , Legend , PointElement);

function Dashboard() {
  const option = {
    
  }
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // X-axis labels
    datasets: [
      {
        label: "Expenses", 
        fill : true , 
        tension: 0.4,
        data: [64854, 54628, 117238, 82830, 91208, 103609, 90974, 82919, 62407, 82528, 56979, 87436], // Revenue data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data3 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // X-axis labels
    datasets: [
      {
        label: "Customers", 
        fill : true , 
        tension: 0.4,
        data: [3488, 5462, 1172, 8283, 9120, 10360, 9974, 7299, 2407, 8528, 5979, 8736], // Revenue data
      
        borderWidth: 1,
      },
    ],
  }
  const data2 = {
    labels: [], // X-axis labels
    datasets: [
      {
      

        tension: 0.4,
        data: [89,11], 
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // X-axis labels
    datasets: [
      {
        label: "Revenue", 
        fill : true , 
        tension: 0.4,
        data: [64854, 54628, 117238, 82830, 91208, 103609, 90974, 82919, 62407, 82528, 56979, 87436], 
        backgroundColor: 'rgba(240, 90, 34, 0.4)',
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (

    <div style = {{backgroundColor:"#FFF2E1"}}>
    
      
		

      <div className="p-10 min-h-screen  min-w-screen flex flex-row items-center justify-center content-center gap-4 flex-wrap ">
     
      <div className = "flex gap-4 w-full justify-center">
        <div className="flex bg-white rounded-2xl gap-4 w-[63%] p-4   shadow-2xl">
          <div className=" flex bg-gray-100 font-mono">
            <img src={Startup} />
          </div>
          <div className="flex flex-col w-full  justify-center items-center">
            <div className="text-4xl font-sans text-blue-900 font-bold mb-3">
                <h1>FENIX</h1>
            </div>
            <div className=" text-gray-800  font-semibold mb-6">
           <p> An innovative platform transforming the way businesses manage their operations through cutting-edge AI and cloud solutions, driving efficiency and scalability for companies of all sizes.</p>
            </div>
            <div className="flex flex-col justify-start">
            {/* <div className="text-gray-600 mb-4 ">
              <b>Founded </b>: 2021  
            </div><div className="text-gray-600 mb-4">
              <b>Email </b>: fenix@gmail.com  
            </div> */}
            </div>
            <div>

            </div>
          </div>
        </div>
        <div>

        </div>

        <div class="bg-white rounded-2xl shadow-2xl p-4 p-8 gap-3  flex flex-col justify-center items-center">
          <div className="text-lg font-bold  leading-6 text-orange-600 " >GMS CREDIT</div>
          <div className=" flex h-[80%]">
            <Doughnut option = {option} data = {data2} />
          </div>
        </div>
      </div>

      <div className="w-full gap-10 p-8 flex flex-row justify-center items-center">
        <div className="bg-white rounded-2xl flex  shadow-xl p-8 gap-3 h-[50%] w-[26%] flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={Revenue} alt="Logo" className="h-16 w-16 mb-2" />
            <h2 className="text-black text-xl font-semibold" style={{color : "#f05a22"}}>REVENUE</h2>
            <p className="text-2xl text-black font-semibold " style={{color : "#1fb04c"}}>₹923900</p>
          </div>
        </div>
        
        <div className=" flex bg-white rounded-2xl shadow-xl p-8 gap-3 h-[50%] w-[26%] flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={Fund} alt="Logo" className="h-16 w-16 mb-2" />
            <h2 className="text-xl text-black font-semibold" style={{color : "#f05a22"}}>FUNDINGS</h2>
            <p className="text-2xl text-black font-semibold" style={{color : "#1fb04c"}}>₹570000</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl flex shadow-xl p-8 gap-3 h-[50%] w-[26%] flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={Customer} alt="Logo" className="h-16 w-16 mb-2" />
            <h2 className="text-xl text-black font-semibold" style={{color : "#f05a22"}}>CLIENTS</h2>
            <p className="text-2xl text-black font-semibold" style={{color : "#1fb04c"}}>5587</p>
          </div>
        </div>
      </div>
      
        <div class="bg-white rounded-2xl shadow-2xl p-4 w-[82%] p-8 gap-3 h-[50%] flex flex-col justify-center items-center">
          <div className="text-lg font-bold  leading-6 text-green-800" >REVENUE</div>
          <div className="w-[90%] h-[90%] flex items-center justify-center">
            <Line option = {option} data = {data1}/>
          </div>
        </div>
  
        <div class="bg-white rounded-2xl shadow-xl p-4 w-[40%] p-8 gap-3 h-[50%] flex flex-col justify-center items-center">
          <div className="text-lg font-bold  leading-6 text-orange-600 " >EXPENSES</div>
          <div className="w-full h-full flex items-center justify-center">
            <Bar option = {option} data = {data} />
          </div>
        </div>
        <div class="bg-white rounded-2xl  shadow-xl p-4 w-[40%] p-8 gap-3 h-[50%] flex flex-col justify-center items-center">
          <div className="text-lg font-bold  leading-6 text-green-800 " >CUSTOMERS</div>
          <div className="w-full h-full flex items-center justify-center">
            <Bar option = {option} data = {data3} />
          </div>
        </div>
     
    </div>
    </div>
  );
}

export default Dashboard;
