import React, { useState } from 'react';
import { Button, IconButton, List } from '@mui/material';
import FiltersIconSVG from './FiltersIconSVG';
import { StyledButton, StyledDrawer, StyledText } from './styles';
import { DropdownItem } from '../../../components/StyledDropdown/types';

export interface MobileFiltersButtonProps {
    onFilterChange : (label : string, value : string) => void;
    filters : MobileFilter[];
    disabledFilters : Set<string>;
}

export type MobileFilter = {
  label : string;
  items ?: DropdownItem[];
}

export const MobileFiltersButton: React.FC<MobileFiltersButtonProps> = ({
  onFilterChange,
  filters,
  disabledFilters,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<MobileFilter | null>(null);

  const toggleDrawer = (open: boolean) => () => {
      setIsDrawerOpen(open);
      if (!open) {
          setCurrentFilter(null);
      }
  };

  const handleSelectItem = (label: string, value: string) => {
      onFilterChange(label, value);

      setCurrentFilter(null); 
  };

  const handleSelectFilter = (filter: MobileFilter) => {
      setCurrentFilter(filter);
  };

  const renderFilters = () => (
      <List>
          {filters.map((filter) => (
              <StyledButton sx={{borderBottom: '0.5px solid #D9DBE9'}} key={filter.label} onClick={() => handleSelectFilter(filter)} disabled={disabledFilters.has(filter.label)}>
                  <StyledText isnone='false' primary={filter.label} />
              </StyledButton>
          ))}
      </List>
  );

  const renderFilterItems = (filter: MobileFilter) => (
      <>
      
          <Button sx={{}} onClick={() => setCurrentFilter(null)}>Back</Button>
          <List>
            <StyledButton onClick={() => handleSelectItem(filter.label,'none')}>
              <StyledText isnone='true' primary={'(None)'} />
            </StyledButton>
              {filter.items && filter.items.map((item) => (
                  <StyledButton key={item.value} onClick={() => handleSelectItem(filter.label, item.value)}>
                      <StyledText isnone='false' primary={item.label} />
                  </StyledButton>
              ))}
          </List>
      </>
  );

  return (
      <>
          <IconButton onClick={toggleDrawer(true)}>
              <FiltersIconSVG />
          </IconButton>
          <StyledDrawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                      width: '50vw',
                      boxSizing: 'border-box',
                  },
              }}
          >
              {currentFilter ? renderFilterItems(currentFilter) : renderFilters()}
          </StyledDrawer>
      </>
  );
};

export default MobileFiltersButton;