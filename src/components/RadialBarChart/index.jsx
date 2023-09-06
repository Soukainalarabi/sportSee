import React from 'react';
import PropTypes from 'prop-types';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import Loader from '../Loader';

function RadialBarScoreChart({ scores, score, isLoading }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {isLoading ? ( // Si isLoading est true, affichez le loader
        <Loader />
      ) : (
        <RadialBarChart
          width={143}
          height={143}
          data={scores}
          innerRadius={80}
          barSize={12}
          startAngle={90}
          endAngle={450}
          fill="black"
        >

          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />

          <RadialBar
            cornerRadius={15}
            fill="red"
            dataKey="x"
            clockWise={false}
          />

          <circle cx="50%" cy="50%" r="75" fill="white" />

          <text x={281 / 2} y={258 / 2} textAnchor="middle" dominantBaseline="middle" className="progress-label">
            <tspan x={281 / 2} y={258 / 2} fill="black" fontSize="26px" fontWeight="bold">{score}</tspan>
            <tspan x={281 / 2} dy="25px" fill="#74798C" fontSize="16px">de votre </tspan>
            <tspan x={275 / 2} dy="25px" fill="#74798C" fontSize="16px">objectif</tspan>
          </text>

        </RadialBarChart>
      )}

    </ResponsiveContainer>
  );
}
RadialBarScoreChart.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
  score: PropTypes.string,
  isLoading: PropTypes.bool,
};

RadialBarScoreChart.defaultProps = {
  scores: [],
  score: '',
  isLoading: true,
};
export default RadialBarScoreChart;
