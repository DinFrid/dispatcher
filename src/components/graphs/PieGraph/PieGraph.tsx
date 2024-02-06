import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { Card, Typography } from '@mui/material';
import styled from 'styled-components';
import StyledLegend from './StyledLegend';

interface PieData {
  value: number;
  label: string;
}

export interface PieGraphProps {
  data: PieData[];
  label: string;
}

const CustomCard = styled(Card)`
  && {
    width: 412px;
    height: 378px;
    border-radius: 20px;
    border: 1px solid #D9DBE9;
    padding: 25px 15px 25px 25px;
    box-sizing: border-box;

    .recharts-legend-wrapper {
        
        .recharts-default-legend{
            display: flex;
            flex-direction: column;
            gap: 11px;
            padding-left: 10px !important;
        }
    }
  }
`;

const StyledTypography = styled(Typography)`
  && {
    width: 89px;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
    font-family: 'Roboto';
    font-weight: 700;
  }
`;

const COLORS = ['#FF9800', '#030035', '#E8E8E8', '#343A6E', '#DDF3FE'];

const renderColorfulLegendText = (value: string, entry: any) => {
    return <StyledLegend entry={entry}></StyledLegend>
  };

const PieGraph: React.FC<PieGraphProps> = ({ data, label }) => {

  return (
    <CustomCard>
      <StyledTypography>Sources</StyledTypography>
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       <text style={{width: '26px', height: '16px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '12px', lineHeight: '16px'}}
            x="50%" y="24%" color='black' textAnchor="middle" dominantBaseline="middle">
                {label}
            </text>
        <Legend formatter={renderColorfulLegendText} align='left' iconType='circle' iconSize={5} />
      </PieChart>
    </CustomCard>
  );
};

export default PieGraph;