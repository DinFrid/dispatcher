import { DateRangePicker } from "rsuite";
import styled from "styled-components";

export const StyledDatePicker = styled(DateRangePicker)` &&{

    display: flex;
    width: 175px; 
    height: 47px;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        height: 44px 
      }

  ::-webkit-input-placeholder { 
    color: #5A5A89;
  }

  .rs-input-group {
      border-radius: 10px;  
      cursor: pointer;
      width: 175px; 
      height: 47px;
      font-family: 'Roboto';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.25px;
      
      ${({ theme }) => theme.breakpoints.up('sm')} {
        height: 44px 
      }
      
      .rs-input-group-addon {
        color: #5A5A89;
      }

      .rs-btn-close:focus, .rs-btn-close:hover {
        color: #5A5A89;
      }
    }

    .rs-input-group.rs-input-group-inside .rs-input {
    color: #5A5A89;
    padding-left: 15px;
  }
  
}
`;
