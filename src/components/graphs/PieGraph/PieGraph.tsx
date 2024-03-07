import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import HorizontalLine from '../HorizontalLine';
import { PieGraphContainer, StyledTypography } from './styles';
import { COLORS } from './consts';
import { PieData } from './types';
import GraphEmptyState from '../../../layout/EmptyState/GraphEmptyState';
import { LegendComponent } from './LegendComponent';
import { LoadingContainer, LoadingText } from '../../../layout/LoadingState/styles';

export interface PieGraphProps {
  data: PieData[];
  title: string;
  label?: number;
  isEmptyState: boolean;
  emptyStateMessage: string;
  isLoading: boolean;
}

const PieGraph: React.FC<PieGraphProps> = ({
  data,
  title,
  label,
  isEmptyState,
  emptyStateMessage,
  isLoading,
}) => {
  return (
    <PieGraphContainer className="PieGraphContainer">
      <StyledTypography>{title}</StyledTypography>
      <HorizontalLine />
      {isLoading ? (
        <LoadingContainer>
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
      ) : !isEmptyState ? (
        <>
          <PieChart width={350} height={140} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              isAnimationActive={false}
              stroke=""
              innerRadius={54}
              outerRadius={62}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell style={{ outline: 'none' }} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <text
              style={{
                width: '26px',
                height: '16px',
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '16px',
              }}
              x="50%"
              y="45%"
              color="black"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {label}
            </text>

            <text
              style={{
                width: '26px',
                height: '16px',
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '16px',
              }}
              x="50%"
              y="55%"
              color="black"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Results
            </text>
          </PieChart>
          <LegendComponent data={data}></LegendComponent>
        </>
      ) : (
        <GraphEmptyState message={emptyStateMessage} />
      )}
    </PieGraphContainer>
  );
};

export default PieGraph
