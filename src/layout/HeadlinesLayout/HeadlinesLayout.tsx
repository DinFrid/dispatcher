import React, { ForwardedRef } from "react";
import HeadlineCard, { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard'
import { HeadlinesBody, HeadlinesContainer } from './styles'
import BodyEmptyState from "../EmptyState/BodyEmptyState";
import { useTheme } from "@mui/material";
import { LoadingContainer, LoadingText } from "../LoadingState/styles";

export interface HeadLinesLayoutProps {
    headlines : HeadlineCardProps[];
    isEmptyState : boolean;
    emptyStateMessage : string;
    isLoading : boolean;
}

const HeadlinesLayout = React.forwardRef(({headlines, isEmptyState, emptyStateMessage, isLoading} : HeadLinesLayoutProps, ref: ForwardedRef<HTMLDivElement>) => {
  const theme = useTheme();

  
  return (
    <HeadlinesContainer theme={theme}>
      <HeadlinesBody className="HeadlinesBody" > 
        {isLoading ? 
        (
          <LoadingContainer>
            <LoadingText>Loading...</LoadingText>
          </LoadingContainer>
        ) 
        : 
        <>
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
        </>}
        
      </HeadlinesBody>
    </HeadlinesContainer>
  )
});

export default HeadlinesLayout