import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function formatXAxis(day) {
    if (day === '2020-07-01') return 1;
    if (day === '2020-07-02') return 2;
    if (day === '2020-07-03') return 3;
    if (day === '2020-07-04') return 4;
    if (day === '2020-07-05') return 5;
    if (day === '2020-07-06') return 6;
    if (day === '2020-07-07') return 7;
    return day
}  
const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0].value} kg`}</p>
        <p className="desc">{` ${payload[1].value} kcal`}</p>
      </div>
    );
  }
  return null;
};
// function diviseContent (value) {
//   if(value > 70) return value/2
//   return value
// }
function BarChartActivity ({activity,dataKeyX,dataKeyY,bar1,bar2}) {
    return (
      <ResponsiveContainer width="90%" height="60%" margin="auto" paddingTop="60px" >
        <BarChart
          width={50}
          height={300}
          data={activity}
          barSize={10}
          barCategoryGap="20%"
        >
          
          <XAxis dataKey={dataKeyX} 
          tickFormatter={formatXAxis} 
          axisLine={{ stroke: '#DEDEDE' }} 
          dy={1}
      />


          <YAxis dataKey={bar1}  orientation="right" axisLine={{ stroke: 'transparent' }}  domain={[0, 500]}

/>
<CartesianGrid x="inherit" strokeDasharray="3" />
          <Bar name="Poids (kg)" dataKey={bar1} fill="black" radius={[10, 10, 0, 0]} />
          <Bar  name="Calories brulées (kCal)"dataKey={bar2} fill="red"  radius={[10, 10, 0, 0]}/>
          <Legend verticalAlign="top" align="end" />
          <Tooltip content={<CustomTooltip/>}        
          allowEscapeViewBox= {{x:true,y:true}}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
export default BarChartActivity
