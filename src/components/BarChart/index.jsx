import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

function formatXAxis(day) {
  if (day === '2020-07-01') return 1;
  if (day === '2020-07-02') return 2;
  if (day === '2020-07-03') return 3;
  if (day === '2020-07-04') return 4;
  if (day === '2020-07-05') return 5;
  if (day === '2020-07-06') return 6;
  if (day === '2020-07-07') return 7;
  return day;
}
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0].value} kg`}</p>
        <p className="desc">{` ${payload[1].value} kcal`}</p>
      </div>
    );
  }
  return null;
}
function BarChartActivity({
  activity, dataKeyX, bar1, bar2,
}) {
  return (
    <ResponsiveContainer width="80%" height="60%" paddingTop="60px" paddingLeft="60px">
      <BarChart
        data={activity}
        barSize={10}
        barGap={10}
        width={100}
        height={300}
      >
        <CartesianGrid strokeDasharray="3" />
        <Tooltip
          content={<CustomTooltip />}
          allowEscapeViewBox={{ x: true, y: true }}
        />
        <XAxis
          dataKey={dataKeyX}
          tickFormatter={formatXAxis}
          axisLine={{ stroke: '#DEDEDE' }}
          padding={{ left: 13, right: 13 }}
        />
        <YAxis
          dataKey={bar1}
          orientation="right"
          axisLine={{ stroke: 'transparent' }}
          padding={{
            left: 5,
          }}
          domain={[0, 500]}
        />
        <Bar name="Poids (kg)" dataKey={bar1} fill="black" radius={[10, 10, 0, 0]} />
        <Bar name="Calories brulées (kCal)" dataKey={bar2} fill="red" radius={[10, 10, 0, 0]} />
        <Legend verticalAlign="top" align="end" />
      </BarChart>
    </ResponsiveContainer>
  );
}
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
};
CustomTooltip.defaultProps = {
  active: false,
  payload: [],

};
BarChartActivity.propTypes = {
  activity: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
  dataKeyX: PropTypes.string,
  bar1: PropTypes.string,
  bar2: PropTypes.string,

};

BarChartActivity.defaultProps = {
  activity: [],
  dataKeyX: '',
  bar1: '',
  bar2: '',

};
export default BarChartActivity;
