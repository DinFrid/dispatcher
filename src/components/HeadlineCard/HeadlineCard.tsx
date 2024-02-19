import  { forwardRef } from 'react';
import { StyledButton } from '../StyledButton/StyledButton';
import { ButtonContainer, NewsImage, StyledCard, StyledCardContent, StyledTypography, contentStyles, dateStyles, sourceStyles, titleStyles } from './styles';
import { fallbackImg } from './consts';

export interface HeadlineCardProps {
  urlToImage: string;
  urlToDispatch: string;
  publishedAt: string;
  title: string;
  content: string;
  source: string;
}

const HeadlineCard = forwardRef<HTMLDivElement, HeadlineCardProps>(({
  urlToImage,
  urlToDispatch,
  publishedAt,
  title,
  content,
  source,
}, ref) => {
  const onButtonClicked = () => {
    window.open(urlToDispatch, urlToDispatch)?.focus();
  };


  return (
    <StyledCard ref={ref}>
      <NewsImage src={urlToImage} fallbackImage={fallbackImg} alt="News" />
      <StyledCardContent>
        <StyledTypography styles={dateStyles}>
          {publishedAt}
        </StyledTypography>
        <StyledTypography styles={titleStyles}>
          {title}
        </StyledTypography>
        <StyledTypography styles={sourceStyles}>
          {source}
        </StyledTypography>
        <StyledTypography styles={contentStyles}>
          {content}
        </StyledTypography>
        <ButtonContainer>
          <StyledButton onClick={onButtonClicked}>
            NAVIGATE TO DISPATCH
          </StyledButton>
        </ButtonContainer>
      </StyledCardContent>
    </StyledCard>
  );
});

export default HeadlineCard;
