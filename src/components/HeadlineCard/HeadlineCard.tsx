import { StyledButton } from '../StyledButton/StyledButton';
import { ButtonContainer, NewsImage, StyledCard, StyledCardContent, StyledTypography } from './styles';
import { contentStyles, dateStyles, fallbackImg, sourceStyles, titleStyles } from './consts';

export interface HeadlineCardProps {
    urlToImage: string;
    urlToDispatch: string;
    publishedAt: string;
    title: string;
    content: string;
    source: string;
}



const HeadlineCard = ({ urlToImage, urlToDispatch, publishedAt, title, content, source } : HeadlineCardProps) => {

  const onButtonClicked = () => {
    window.open(urlToDispatch, '_blank')?.focus();
  }

  return (
    <StyledCard>
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
};

export default HeadlineCard;
