import { Card, Typography } from '@mui/material';
import { Area, AreaChart, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import HorizontalLine from '../HorizontalLine';

interface AreaGraphData {
  date: string;
  sourcesNumber: number;
}

export interface AreaGraphProps {
  data: AreaGraphData[];
  title: string;
}

const StyledTypography = styled(Typography)`
  && {
    position: relative;
    width: 89px;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
    font-family: 'Roboto';
    font-weight: 700;
  }
`;

const StyledCard = styled(Card)`
  && {
    width: 412px;
    height: 355px;
    border-radius: 20px;
    border: 1px solid #D9DBE9;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
  

const AreaGraph = ({ data, title }: AreaGraphProps) => {
    return (
      <StyledCard>
        <div style={{margin: '25px 15px', display: 'flex', flexDirection: 'column', width: '90px', height: '60px'}}>
            <StyledTypography>{title}</StyledTypography>
            <HorizontalLine/>
        </div>
        <ResponsiveContainer width="100%" height="65%">
          <AreaChart data={data}  width={382} height={150} >
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
            <Area type="monotone" dataKey="sourcesNumber" stroke="#0058B9" strokeWidth={4} fillOpacity={0.15} fill="url(#colorGradient)" />
          </AreaChart>
          </ResponsiveContainer>
      </StyledCard>
    );
  };
  
  export default AreaGraph;
