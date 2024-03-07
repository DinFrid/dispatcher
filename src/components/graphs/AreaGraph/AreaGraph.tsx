import { Area, AreaChart, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import HorizontalLine from '../HorizontalLine';
import { StyledCard, StyledTypography } from './styles';
import { AreaGraphData } from './types';
import GraphEmptyState from '../../../layout/EmptyState/GraphEmptyState';
import { LoadingContainer, LoadingText } from '../../../layout/LoadingState/styles';

export interface AreaGraphProps {
  data: AreaGraphData[];
  title: string;
  isEmptyState: boolean;
  emptyStateMessage: string;
  isLoading: boolean;
}
  

const AreaGraph = ({ data, title, isEmptyState, emptyStateMessage, isLoading }: AreaGraphProps) => {
    return (
      <StyledCard>
        <div style={{margin: '25px 15px', display: 'flex', flexDirection: 'column', width: '100%', height: '60px'}}>
            <StyledTypography>{title}</StyledTypography>
            <HorizontalLine/>
        </div>
        {isLoading ? (
          <LoadingContainer>
            <LoadingText>Loading...</LoadingText>
          </LoadingContainer>
        ) : !isEmptyState ? (
          <ResponsiveContainer width="100%" height="65%">
            <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00B9FF" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#0058B9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#5A5A89", fontFamily: 'Roboto', fontSize: '13px', fontWeight: '700' }}
                interval="preserveStartEnd"
                padding={{ left: 0, right: 0 }}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
              <Area type="monotone" dataKey="sourcesNumber" stroke="#0058B9" strokeWidth={4} fillOpacity={0.15} fill="url(#colorGradient)" isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <GraphEmptyState message={emptyStateMessage}/>
        )}
      </StyledCard>
    );
  };
  
export default AreaGraph;
