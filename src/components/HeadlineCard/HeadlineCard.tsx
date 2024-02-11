import { Typography } from '@mui/material';
import { StyledButton } from '../StyledButton/StyledButton';
import { NewsImage, StyledCard, StyledCardContent } from './styles';

interface HeadlineCardProps {
    imageUrl: string;
    date: string;
    headline: string;
    summary: string;
    source: string;
}

const styledButtonProps = {
    onClick: () => console.log('Navigate Button clicked'),
    variant: "contained" as "contained",
  };

const HeadlineCard = ({ imageUrl, date, headline, summary, source } : HeadlineCardProps) => {
  return (
    <StyledCard>
      <NewsImage src={imageUrl} alt="News" />
      <StyledCardContent>
        <Typography sx={{width:'126px', height:'22px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', lineHeight: '22px', letterSpacing: '0.25px', color: '#5A5A8980'}}>
          {date}
        </Typography>
        <Typography sx={{width:'470px', height:'42px', fontFamily: 'Roboto', fontWeight: '700', fontSize: '18px', lineHeight: '21.09px', color: '#14142B'}}>
          {headline}
        </Typography>
        <Typography sx={{width:'67px', height:'22px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', lineHeight: '22px', color: '#5A5A8980'}}>
          {source}
        </Typography>
        <Typography  sx={{width:'711px', height:'32px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', lineHeight: '16.41px', color: '#5A5A89'}}>
          {summary}
        </Typography>
        
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
