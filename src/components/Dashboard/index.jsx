import React from "react"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import calories from "../../assets/calories-icon.png"
import glucide from"../../assets/carbs-icon.png"
import proteine from "../../assets/protein-icon.png"
import lipide from "../../assets/fat-icon.png"
import LineChartObjectif from "../LineChart";
import RadarChartPerformance from "../RadarChart";
import '../../style.css'
import Substrats from "../Substrats"
import BarChartActivity from "../BarChart";
import RadialBarScoreChart from "../RadialBarChart";

function Dashboard(){
  const { id } = useParams(); // Extract userId from URL parameter
  const [dataUser, setDataUser] = useState({});
  const [dataAverage, setDataAverage] = useState({});
  const [dataPerformance, setDataPerformance] = useState({});
  const [dataActivity, setDataActivity] = useState({});
  useEffect(() => {
    const fetchDatas = async () => {
      /////////////user////////////////////////
      const resUser = await fetch(`http://localhost:3000/user/${id}`); 
      const jsonDataUser = await resUser.json();
      setDataUser(jsonDataUser?.data);
      //////////////average////////////////////////
       const resAverage = await fetch(`http://localhost:3000/user/${id}/average-sessions`); 
      const jsonDataAverage = await resAverage.json();
      setDataAverage(jsonDataAverage?.data);
      //////////////performance////////////////////////
      const resPerformance = await fetch(`http://localhost:3000/user/${id}/performance`); 
      const jsonDataPerformance = await resPerformance.json();
      setDataPerformance(jsonDataPerformance?.data);
       console.log(jsonDataUser.data?.score?jsonDataUser.data?.score :jsonDataUser.data?.todayScore)
      ////////////activity////////////////////////
      const resActivity = await fetch(`http://localhost:3000/user/${id}/activity`); 
      const jsonDataActivity = await resActivity.json();
      setDataActivity(jsonDataActivity?.data);
      console.log(jsonDataActivity.data?.sessions)
   };
    fetchDatas();
  }, [id]);
return(
<div className="dashboard">
    <div className="title">
     <h1>Bonjour {dataUser.userInfos?.firstName} </h1> 
    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    <div className="flexContent">
    <div className="charts">
     <div className="poid">
      <p>Activité quotidienne</p>
     <BarChartActivity
     activity={dataActivity.sessions}
     dataKeyX="day"
     dataKeyY="kilogram"
     bar1="kilogram"
     bar2="calories"
     />
     </div>
    <div className="allObject">
             
    <div className="objectifs">

                <LineChartObjectif
                sessions={dataAverage.sessions}
                xAxisDataKey="day"
                lineDataKey="sessionLength"
                 />
           </div>
            <div className="radar">
              <RadarChartPerformance
              performance={dataPerformance.data}
              polarDataKey="kind"
              radarDataKey="value"
              />
            </div>
            <div className="kpi">
              <p>Score</p>
              <RadialBarScoreChart
             key={dataUser.id}
             scores={[{ x: dataUser.score || dataUser.todayScore }]} 
             score={`${dataUser.score*100 || dataUser.todayScore*100} %`}
             
              />
            </div>
            </div>
    </div>
    <div className="substrats">
    <Substrats 
    icon={calories} 
    title="calories"
    keyData={`${dataUser.keyData?.calorieCount} KCal`}
/>
    <Substrats 
    icon={proteine} 
    title="proteines"
    keyData={`${dataUser.keyData?.proteinCount} g`}


    />
    <Substrats 
    icon={glucide} 
    title="glucides"
    keyData={`${dataUser.keyData?.carbohydrateCount} g`}
    />
    <Substrats 
    icon={lipide} 
    title="lipides"
    keyData={`${dataUser.keyData?.lipidCount} g`}

    />
</div>


      {/* <div className="substrats">
        <div className="calories">
             <img src={calories} alt="" style={{width:60,height:60}}/>
             <div className="textCalorie">
               <p>calories</p>
            </div>
        </div>
        <div className="proteines">
             <img src={proteine} alt="" style={{width:60,height:60}}/>
             <div className="textCalorie">
               <p>calories</p>
            </div>
        </div>
        <div className="glucides">
             <img src={glucide} alt="" style={{width:60,height:60}}/>
             <div className="textCalorie">
               <p>calories</p>
            </div>
        </div>
        <div className="lipides">
             <img src={lipide} alt="" style={{width:60,height:60}}/>
             <div className="textCalorie">
               <p>calories</p>
            </div>
        </div> 
    </div> */}
    </div>
</div>
)
}
export default Dashboard