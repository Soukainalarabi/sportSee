import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';

function formatXAxis(kind) {
  const kindMap = {
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity',
    2: 'energy',
    1: 'cardio',

  };
  return kindMap[kind].charAt(0).toUpperCase() + kindMap[kind].slice(1) || kind;
}
function RadarChartPerformance({ performance, polarDataKey, radarDataKey }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" data={performance} outerRadius="70%">
        <PolarGrid />
        <PolarAngleAxis
          dataKey={polarDataKey}
          tickFormatter={formatXAxis}
          tick={{
            fontSize: '10px', dy: 4, dx: -4, cx: 4, cy: -6,
          }}
          tickLine={false}
        />
        <Radar name="Mike" dataKey={radarDataKey} fill="#FF0101B2" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
RadarChartPerformance.propTypes = {
  performance: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
  polarDataKey: PropTypes.string,
  radarDataKey: PropTypes.string,
};
RadarChartPerformance.defaultProps = {
  performance: [],
  polarDataKey: '',
  radarDataKey: '',
};
export default RadarChartPerformance;
