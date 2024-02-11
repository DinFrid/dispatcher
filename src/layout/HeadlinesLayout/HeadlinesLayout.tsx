import HeadlineCard, { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard'
import { HeadlinesContainer } from './styles'

export interface HeadLinesLayoutProps {
    headlines : HeadlineCardProps[];
}

const HeadlinesLayout = ({headlines} : HeadLinesLayoutProps) => {
  return (
    <HeadlinesContainer>
        {headlines.map((headline, index) => (
            <HeadlineCard key={index} 
                url={headline.url} 
                date={headline.date}
                title={headline.title}
                content={headline.content}
                source={headline.source}
                />
        ))}
    </HeadlinesContainer>
  )
}

export default HeadlinesLayout