import { useEffect, useState } from 'react';
import PieGraph from '../../components/Graphs/PieGraph/PieGraph';
import AreaGraph from '../../components/Graphs/AreaGraph/AreaGraph';
import { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard';
import { GraphsContainer } from './styles';
import { PieData } from '../../components/Graphs/PieGraph/types';
import { AreaGraphData } from '../../components/Graphs/AreaGraph/types';
import { GRAPHS_EMPTY_STATE_MESSAGE } from './consts';
import { useMediaQuery, useTheme } from '@mui/material';

export interface GraphsLayoutProps {
    areaTitle: string;
    pieTitle: string;
    headlines: HeadlineCardProps[]; 
    isEmptyState : boolean;
    isLoading : boolean;
}

const GraphsLayout = ({ areaTitle, pieTitle, headlines, isEmptyState, isLoading }: GraphsLayoutProps) => {
    const [pieData, setPieData] = useState<PieData[]>([]);
    const [areaData, setAreaData] = useState<AreaGraphData[]>([]);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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
    const monthCounts = new Map();
    headlines.forEach(headline => {
        const monthName = getMonthName(headline.publishedAt);
        monthCounts.set(monthName, (monthCounts.get(monthName) ?? 0) + 1);
    });

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (monthCounts.size === 1 || monthCounts.size === 2) {
        const sortedMonths = Array.from(monthCounts.keys()).sort((a, b) => months.indexOf(a) - months.indexOf(b));
        const firstMonthIndex = months.indexOf(sortedMonths[0]);
        const lastMonthIndex = monthCounts.size === 2 ? months.indexOf(sortedMonths[1]) : firstMonthIndex;

        if (firstMonthIndex > 0) {
            monthCounts.set(months[firstMonthIndex - 1], 0);
        }

        if (lastMonthIndex < 11) {
            monthCounts.set(months[lastMonthIndex + 1], 0);
        }
    }

    const calculatedAreaData: AreaGraphData[] = Array.from(monthCounts, ([date, sourcesNumber]) => ({
        date,
        sourcesNumber
    })).sort((a, b) => months.indexOf(a.date) - months.indexOf(b.date));

    setAreaData(calculatedAreaData);
}, [headlines]);





return isDesktop ? (
    <GraphsContainer>
        <PieGraph data={pieData} title={pieTitle} label={headlines.length} isEmptyState={isEmptyState} emptyStateMessage={GRAPHS_EMPTY_STATE_MESSAGE} isLoading={isLoading} />
        <AreaGraph data={areaData} title={areaTitle} isEmptyState={isEmptyState} emptyStateMessage={GRAPHS_EMPTY_STATE_MESSAGE} isLoading={isLoading}/>
    </GraphsContainer>
) : null;
};

export default GraphsLayout;
