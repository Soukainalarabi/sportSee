import React, { useState } from 'react';
import {
  LineChart, Line, ReferenceArea, XAxis, ResponsiveContainer, Tooltip, Legend, YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

function formatXAxis(value) {
  switch (value) {
    case 1:
      return 'L';
    case 2:
      return 'M';
    case 3:
      return 'M';
    case 4:
      return 'J';
    case 5:
      return 'V';
    case 6:
      return 'S';
    case 7:
      return 'D';
    default:
      return value;
  }
}
function CustomTooltipLine({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltipLine">
        <p className="label1">{` ${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}
function LineChartObjectif({ sessions, xAxisDataKey, lineDataKey }) {
  const [x, setX] = useState(1);
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
        onMouseMove={(props) => {
          if (props.activeTooltipIndex && x !== (props.activeTooltipIndex + 1)) {
            setX(props.activeTooltipIndex + 1);
          } else if (!props.activeTooltipIndex) {
            setX(1);
          }
        }}
      >
        <YAxis domain={[-4, 100]} hide />
        <XAxis
          dataKey={xAxisDataKey}
          stroke="#f5faf569"
          tickFormatter={formatXAxis}
          axisLine={{ stroke: 'transparent' }}
          padding={{

            left: 5,
            top: 20,

          }}
          domain={[0, 80]}
        />
        <ReferenceArea opacity={0.19} fill="black" x1={x} x2={7} y2={120} ifOverflow="visible" />

        <Tooltip content={<CustomTooltipLine />} cursor={{ stroke: 'red', strokeWidth: 2 }} position={{ y: 0 }} />
        <Legend fill="red" />
        <Line type="monotone" name="Durée moyenne des sessions" dataKey={lineDataKey} stroke="white" activeDot={{ r: 2 }} dot={false} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
CustomTooltipLine.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
};
CustomTooltipLine.defaultProps = {
  active: false,
  payload: [],

};
LineChartObjectif.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
  xAxisDataKey: PropTypes.string,
  lineDataKey: PropTypes.string,
  activeTooltipIndex: PropTypes.string,
};
LineChartObjectif.defaultProps = {
  sessions: [],
  xAxisDataKey: '',
  lineDataKey: '',
  activeTooltipIndex: '',
};
export default LineChartObjectif;
