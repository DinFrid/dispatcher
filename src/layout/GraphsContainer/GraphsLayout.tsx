import PieGraph from '../../components/Graphs/PieGraph/PieGraph'
import { GraphsContainer } from './styles'
import AreaGraph from '../../components/Graphs/AreaGraph/AreaGraph';
import { PieData } from '../../components/Graphs/PieGraph/types';
import { AreaGraphData } from '../../components/Graphs/AreaGraph/types';

export interface GraphsLayoutProps {
    areaData: AreaGraphData[];
    areaTitle: string;
    pieData: PieData[];
    pieTitle: string;
    pieLabel?: string;
}

const GraphsLayout = ({areaData, areaTitle, pieData, pieTitle, pieLabel} : GraphsLayoutProps) => {
  return (
    <GraphsContainer>
        <PieGraph data={pieData} title={pieTitle} label={pieLabel}/>
        <AreaGraph data={areaData} title={areaTitle}/>
    </GraphsContainer>
  )
}

export default GraphsLayout