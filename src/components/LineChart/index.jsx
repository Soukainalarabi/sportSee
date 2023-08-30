import React from 'react';
import { LineChart, Line, XAxis,ResponsiveContainer } from 'recharts';


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

function LineChartObjectif ({ sessions, xAxisDataKey, lineDataKey }) {
  
        
        return (
            <>
               
                <ResponsiveContainer  width="100%" height="100%">
                  <LineChart data={sessions}>
                    <XAxis dataKey={xAxisDataKey} 
                    stroke="#ffffff" 
                    axisLine={{ stroke: 'transparent' }} 
                     tickFormatter={formatXAxis} 
                     />
                    <Line type="monotone" dataKey={lineDataKey} stroke="#ffffff" 
                    strokeWidth={2} dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
            </>
        );
      }
    export default LineChartObjectif





