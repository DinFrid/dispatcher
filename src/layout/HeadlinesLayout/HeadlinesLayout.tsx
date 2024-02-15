import React, { ForwardedRef } from "react";
import HeadlineCard, { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard'
import { HeadlinesBody, HeadlinesContainer } from './styles'

export interface HeadLinesLayoutProps {
    headlines : HeadlineCardProps[];
}

const HeadlinesLayout = React.forwardRef(({headlines} : HeadLinesLayoutProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <HeadlinesContainer>
      <HeadlinesBody>
        {headlines.map((headline, index) => {

          const isLastHeadline = index === headlines.length - 1;
          return (
            <HeadlineCard
              key={index}
              urlToImage={headline.urlToImage}
              urlToDispatch={headline.urlToDispatch}
              publishedAt={headline.publishedAt}
              title={headline.title}
              content={headline.content}
              source={headline.source}

              {...(isLastHeadline ? { ref: ref } : {})}
            />
          );
        })}
      </HeadlinesBody>
    </HeadlinesContainer>
  )
});

export default HeadlinesLayout