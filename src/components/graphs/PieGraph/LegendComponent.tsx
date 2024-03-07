import styled from 'styled-components';
import { PieData } from './types';
import { COLORS } from './consts';

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  overflow-y: scroll;
  max-height: 112px;
  gap:10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

const ColorBox = styled.span`
  width: 5px;
  height: 5px;
  display: inline-block;
  margin-right: 8px;
  border-radius: 3px;
`;

const LegendText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Roboto';
  font-size: 14px;
  color: #030035;
  max-width: 150px;
  margin-left: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const LegendValue = styled.span`
  margin-left: auto;
  font-family: 'Roboto';
  font-weight: 400;
  color: #9FA2B4;
  font-size: 15px;
  margin-right: 15px;
`;

export const LegendComponent: React.FC<{ data: PieData[] }> = ({ data }) => {
    return (
    <LegendContainer>
      {data.map((entry, index) => (
        <LegendItem key={index}>
          <ColorBox style={{ backgroundColor: COLORS[index % COLORS.length] }} />
          <LegendText>{entry.label}</LegendText>
          <LegendValue>{`${entry.value}%`}</LegendValue>
        </LegendItem>
      ))}
    </LegendContainer>
  );
};
