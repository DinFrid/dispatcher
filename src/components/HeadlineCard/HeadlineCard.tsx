import { forwardRef } from 'react';
import { StyledButton } from '../StyledButton/StyledButton';
import { ButtonContainer, NewsImage, StyledCard, StyledCardContent, StyledTypography, contentStyles, dateStyles, sourceStyles, titleStyles } from './styles';
import { fallbackImg } from './consts';
import { useTheme } from '@mui/material';

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
  const theme = useTheme();

  const onButtonClicked = () => {
    window.open(urlToDispatch, urlToDispatch)?.focus();
  };

  // const renderImg = async () => {
  //   try {
  //     // axios ....
  //   } catch (err) {

  //   }
  // }

  // console.log('urlToImage', urlToImage)
  return (
    <StyledCard theme={theme} ref={ref}>
      <NewsImage theme={theme} src={urlToImage} fallbackImage={fallbackImg} alt="News" />

      <StyledCardContent theme={theme}>
        <StyledTypography theme={theme} styles={dateStyles}>
          {publishedAt}
        </StyledTypography>
        <StyledTypography theme={theme} styles={titleStyles}>
          {title}
        </StyledTypography>
        <StyledTypography theme={theme} styles={sourceStyles}>
          {source}
        </StyledTypography>
        <StyledTypography theme={theme} styles={contentStyles}>
          {content}
        </StyledTypography>
        <ButtonContainer>
          <StyledButton onClick={onButtonClicked} >
            NAVIGATE TO DISPATCH
          </StyledButton>
        </ButtonContainer>
      </StyledCardContent>
    </StyledCard>
  );
});

export default HeadlineCard;
