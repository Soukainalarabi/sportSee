import React from 'react';
import Api from '../../datas';
import calories from '../../assets/calories-icon.png';
import glucide from '../../assets/carbs-icon.png';
import proteine from '../../assets/protein-icon.png';
import lipide from '../../assets/fat-icon.png';
import LineChartObjectif from '../LineChart';
import RadarChartPerformance from '../RadarChart';
import '../../style.css';
import Substrats from '../Substrats';
import BarChartActivity from '../BarChart';
import RadialBarScoreChart from '../RadialBarChart';

function Dashboard() {
  const {
    isLoading,
    dataUser,
    dataAverage,
    dataPerformance,
    dataActivity,
  } = Api();

  return (
    <div className="dashboard">

      <div className="title">
        <h1>Bonjour  </h1>
        <h2>{dataUser.userInfos && dataUser.userInfos.firstName}</h2>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏  </p>
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
                isLoading={isLoading}
                scores={isLoading ? [] : [{
                  x: dataUser.score ? dataUser.score : dataUser.todayScore,
                }]}
                score={isLoading ? '' : `${dataUser.score ? dataUser.score * 100 : dataUser.todayScore * 100} %`}
              />

            </div>
          </div>
        </div>
        <div className="substrats">
          {dataUser.keyData && dataUser.keyData.calorieCount && (
          <Substrats
            icon={calories}
            title="calories"
            keyData={`${dataUser.keyData.calorieCount} KCal`}
          />
          )}
          {dataUser.keyData && dataUser.keyData.proteinCount && (
          <Substrats
            icon={proteine}
            title="proteines"
            keyData={`${dataUser.keyData.proteinCount} g`}
          />
          )}
          {dataUser.keyData && dataUser.keyData.carbohydrateCount && (
          <Substrats
            icon={glucide}
            title="glucides"
            keyData={`${dataUser.keyData.carbohydrateCount} g`}
          />
          )}
          {dataUser.keyData && dataUser.keyData.lipidCount && (
          <Substrats
            icon={lipide}
            title="lipides"
            keyData={`${dataUser.keyData.lipidCount} g`}
          />
          )}
        </div>
      </div>

    </div>
  );
}
export default Dashboard;
