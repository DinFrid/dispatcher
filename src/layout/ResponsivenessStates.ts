import { useMediaQuery, useTheme } from "@mui/material";

export const theme = useTheme();
export const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
export const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
export const isDesktop = useMediaQuery(theme.breakpoints.up('md'));