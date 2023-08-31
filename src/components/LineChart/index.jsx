import React from 'react';
import { LineChart, Line, XAxis,ResponsiveContainer,Tooltip,Legend,YAxis } from 'recharts';


function formatXAxis(value) {
    if(value === 1) return "L"
    if(value === 2) return "M"
    if(value === 3) return "M"
    if(value === 4) return "J"
    if(value === 5) return "V"
    if(value === 6) return "S"
    if(value === 7) return "D"

    return value
}
const CustomTooltipLine = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltipLine">
        <p className="label1">{` ${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};
function LineChartObjectif ({ sessions, xAxisDataKey, lineDataKey }) {      
         return (
          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <YAxis  domain={[-4,100]}  hide />

          <XAxis dataKey={xAxisDataKey} stroke="#f5faf569" tickFormatter={formatXAxis} axisLine={{ stroke: 'transparent' }} padding={{
           
           left: 5,
           top:20
        
         }}
         domain={[0,80]}
         />       

          <Tooltip content={<CustomTooltipLine/>}/>
          <Legend />
          <Line  type="monotone" name="Durée moyenne des sessions" dataKey={lineDataKey} stroke="white" activeDot={{ r: 2 }}  dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
              //  <ResponsiveContainer  width="100%" height="100%">
              //      <LineChart data={sessions}>
              //        <XAxis dataKey={xAxisDataKey} 
              //        stroke="#ffffff" 
              //        axisLine={{ stroke: 'transparent' }} 
              //         tickFormatter={formatXAxis} 
              //       />
              //       <Line type="monotone" domain={["dataMin", "dataMax + 1"]} dataKey={lineDataKey} stroke="#ffffff" 
              //         strokeWidth={2} dot={false}
              //        />
              //     </LineChart>
              //  </ResponsiveContainer>
         );
        
      }
    export default LineChartObjectif





