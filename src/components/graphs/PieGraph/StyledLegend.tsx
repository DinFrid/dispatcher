
import styled from 'styled-components';

type LegendProps = {
    value?: string;
    entry: any;
};

const LegendText = styled.span`
  display: inline-block;
  color: #030035;
  font-family: 'Roboto';
  font-size: 14px; 
  width: 100px;
  height: 20px;
  font-weight: 400;
  line-height: 20px;
  margin-right: 180px;
  margin-left: 8px;
  padding-left: 10px;
`;

const LegendValue = styled.span`
  font-family: 'Roboto';
  color: #9FA2B4;
  font-size: 15px; 
  font-weight: 400;
  line-height: 20px;
  margin-right: 5px;
`;

const StyledLegend = ({entry} : LegendProps) => {
  const { label = '', value: entryValue = '' } = entry.payload || {};

  return (
    <>
      <LegendText >
        {label}
      </LegendText>
      <LegendValue>
        {`${entryValue}%`}
      </LegendValue>
    </>
  )
};

export default StyledLegend;
