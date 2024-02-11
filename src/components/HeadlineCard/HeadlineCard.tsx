import { StyledButton } from '../StyledButton/StyledButton';
import { NewsImage, StyledCard, StyledCardContent, StyledTypography } from './styles';
import { contentStyles, dateStyles, sourceStyles, titleStyles } from './consts';

export interface HeadlineCardProps {
    url: string;
    date: string;
    title: string;
    content: string;
    source: string;
}

const styledButtonProps = {
    onClick: () => console.log('Navigate Button clicked'),
    variant: "contained" as "contained",
  };

const HeadlineCard = ({ url, date, title, content, source } : HeadlineCardProps) => {
  return (
    <StyledCard>
      <NewsImage src={url} alt="News" />
      <StyledCardContent>
        <StyledTypography styles={dateStyles}>
          {date}
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
        
        <div style={{alignSelf:'flex-end'}}>
          <StyledButton {...styledButtonProps}>
            NAVIGATE TO DISPATCH
          </StyledButton>
        </div>
      </StyledCardContent>
        
    </StyledCard>
  );
};

export default HeadlineCard;
