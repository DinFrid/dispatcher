import React, { ForwardedRef } from "react";
import HeadlineCard, { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard'
import { HeadlinesBody, HeadlinesContainer } from './styles'
import BodyEmptyState from "../EmptyState/BodyEmptyState";
import { useTheme } from "@mui/material";

export interface HeadLinesLayoutProps {
    headlines : HeadlineCardProps[];
    isEmptyState : boolean;
    emptyStateMessage : string;
}

const HeadlinesLayout = React.forwardRef(({headlines, isEmptyState, emptyStateMessage} : HeadLinesLayoutProps, ref: ForwardedRef<HTMLDivElement>) => {
  const theme = useTheme();
  
  return (
    <HeadlinesContainer theme={theme}>
      <HeadlinesBody >
        {!isEmptyState ? headlines.map((headline, index) => {

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
        }) : (
          <BodyEmptyState message={emptyStateMessage}/>
        )}
      </HeadlinesBody>
    </HeadlinesContainer>
  )
});

export default HeadlinesLayout