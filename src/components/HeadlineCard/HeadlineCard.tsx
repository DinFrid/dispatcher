import { forwardRef, useState } from 'react';
import { StyledButton } from '../StyledButton/StyledButton';
import { ButtonContainer, FallbackNewsImage, FallbackNewsWrapper, NewsImage, NewsWrapper, StyledCard, StyledCardContent, StyledTypography, contentStyles, dateStyles, sourceStyles, titleStyles } from './styles';
import { Divider, useTheme } from '@mui/material';
import NavbarDesktopLogo from '../Navbar/NavbarDesktopLogo.svg';

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
  const [imageSrc, setImageSrc] = useState<string>(urlToImage);
  const [isFallback, setIsFallback] = useState<boolean>(false); 

  const handleImageError = () => {
    setImageSrc(NavbarDesktopLogo);
    setIsFallback(true); 
  };

  const onButtonClicked = () => {
    window.open(urlToDispatch, urlToDispatch)?.focus();
  };

  return (
    <StyledCard theme={theme} ref={ref}>
      {imageSrc ? 
      <NewsWrapper theme={theme}>
          <NewsImage 
            theme={theme} 
            src={imageSrc} 
            alt="News" 
            onError={handleImageError}
            isfallback={isFallback.toString()}
          /> 
      </NewsWrapper>
          : 
          <FallbackNewsWrapper theme={theme}>
            <FallbackNewsImage 
              theme={theme} 
              src={NavbarDesktopLogo} 
              alt="Fallback News" 
              onError={handleImageError}
            />
          </FallbackNewsWrapper>
        }
      
      
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
        <ButtonContainer theme={theme}>
          <StyledButton onClick={onButtonClicked} >
            NAVIGATE TO DISPATCH
          </StyledButton>
        </ButtonContainer>
      </StyledCardContent>
    </StyledCard>
  );
});

export default HeadlineCard;
