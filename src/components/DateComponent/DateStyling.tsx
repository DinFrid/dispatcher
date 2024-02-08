import { DateRangePicker } from "rsuite";
import styled from "styled-components";

export const StyledDatePicker = styled(DateRangePicker)` &&{
    background-color: #FFF;
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.25px;
    display: flex;
    width: 189px;
    justify-content: space-between;
    align-items: center;
    height: 47px;

    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);

  ::-webkit-input-placeholder { 
    color: #5A5A89;
  }

  .rs-input-group {
      border-radius: 10px;  
      cursor: pointer;
      border: none;
      
      .rs-input-group-addon {
          color: #5A5A89;
      }
    }

    .rs-input-group.rs-input-group-inside .rs-input {
    color: #5A5A89;
  }
  
}
`;
