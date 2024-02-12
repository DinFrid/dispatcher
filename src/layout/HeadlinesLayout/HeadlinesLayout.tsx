import HeadlineCard, { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard'
import { HeadlinesBody, HeadlinesContainer } from './styles'

export interface HeadLinesLayoutProps {
    headlines : HeadlineCardProps[];
}

const HeadlinesLayout = ({headlines} : HeadLinesLayoutProps) => {
  return (
    <HeadlinesContainer>
      <HeadlinesBody>
        {headlines.map((headline, index) => (
            <HeadlineCard key={index} 
                url={headline.url} 
                date={headline.date}
                title={headline.title}
                content={headline.content}
                source={headline.source}
                />
        ))}
      </HeadlinesBody>
    </HeadlinesContainer>
  )
}

export default HeadlinesLayout