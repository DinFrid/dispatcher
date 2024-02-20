import { useEffect, useState } from 'react';
import PieGraph from '../../components/Graphs/PieGraph/PieGraph';
import AreaGraph from '../../components/Graphs/AreaGraph/AreaGraph';
import { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard';
import { GraphsContainer } from './styles';
import { PieData } from '../../components/Graphs/PieGraph/types';
import { AreaGraphData } from '../../components/Graphs/AreaGraph/types';
import { GRAPHS_EMPTY_STATE_MESSAGE } from './consts';

export interface GraphsLayoutProps {
    areaTitle: string;
    pieTitle: string;
    headlines: HeadlineCardProps[]; 
    isEmptyState : boolean;
}

const GraphsLayout = ({ areaTitle, pieTitle, headlines, isEmptyState }: GraphsLayoutProps) => {
    const [pieData, setPieData] = useState<PieData[]>([]);
    const [areaData, setAreaData] = useState<AreaGraphData[]>([]);

    const getMonthName = (dateString: string): string => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short' });
  };

    useEffect(() => {
      const sourceCounts = new Map<string, number>();

      headlines.forEach(headline => {
          const sourceName = headline.source; 
          const currentCount = sourceCounts.get(sourceName) ?? 0;
          sourceCounts.set(sourceName, currentCount + 1);
      });

      const totalCount = headlines.length;
      const calculatedData = Array.from(sourceCounts).map(([label, count]) => ({
          label,
          value: parseFloat(((count / totalCount) * 100).toFixed(2)) 
      }));

      calculatedData.sort((a, b) => b.value - a.value);

      setPieData(calculatedData);
  }, [headlines]);

  useEffect(() => {
    const monthCounts = new Map<string, number>();

    headlines.forEach(headline => {
        const monthName = getMonthName(headline.publishedAt);
        const currentCount = monthCounts.get(monthName) ?? 0;
        monthCounts.set(monthName, currentCount + 1);
    });

    const calculatedAreaData: AreaGraphData[] = Array.from(monthCounts, ([date, sourcesNumber]) => ({
        date,
        sourcesNumber
    })).sort((a, b) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months.indexOf(a.date) - months.indexOf(b.date);
    });

    setAreaData(calculatedAreaData);
}, [headlines]);

return (
    <GraphsContainer>
        <PieGraph data={pieData} title={pieTitle} label={headlines.length} isEmptyState={isEmptyState} emptyStateMessage={GRAPHS_EMPTY_STATE_MESSAGE} />
        <AreaGraph data={areaData} title={areaTitle} isEmptyState={isEmptyState} emptyStateMessage={GRAPHS_EMPTY_STATE_MESSAGE}/>
    </GraphsContainer>
);
};

export default GraphsLayout;
