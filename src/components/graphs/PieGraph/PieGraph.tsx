import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import StyledLegend from './StyledLegend';
import HorizontalLine from '../HorizontalLine';
import { PieGraphContainer, StyledTypography } from './styles';
import { COLORS } from './consts';

export interface PieData {
  value: number;
  label: string;
}

export interface PieGraphProps {
  data: PieData[];
  title: string;
  label?: string;
}

const renderLegend = (value: string, entry: any) => {
    return <StyledLegend entry={entry}></StyledLegend>
  };

const PieGraph: React.FC<PieGraphProps> = ({ data, title, label }) => {

  return (
    <PieGraphContainer>
      <StyledTypography>{title}</StyledTypography>
        <HorizontalLine/>
      <PieChart width={372} height={275} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={data}
          cx="50%"
          cy="40%"
          isAnimationActive={false}
          stroke=""
          innerRadius={54}
          outerRadius={62}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell style={{outline: 'none'}} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       <text style={{width: '26px', height: '16px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '12px', lineHeight: '16px'}}
            x="50%" y="24%" color='black' textAnchor="middle" dominantBaseline="middle">
                {label}
            </text>
        <Legend formatter={renderLegend} align='left' iconType='circle' iconSize={5} />
      </PieChart>
    </PieGraphContainer>
  );
};

export default PieGraph;
