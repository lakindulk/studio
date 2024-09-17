// React imports
import React from "react";

// Third Party Imports
import { Typography } from '@mui/material';

// Project Components
import { theme } from "../../config/ThemeConfig";

const CustomTypography = ({ variant, color, children, ...rest }) => {
  
  // Access the typography styles from the theme
  const typographyStyles = theme.typography[variant] || {};

  // Override the color if provided via props
  const customStyle = {
    ...typographyStyles,
    color: color || typographyStyles.color || 'inherit',
    wordWrap: 'break-word',
  };

  return (
    <Typography sx={customStyle} {...rest}>
      {children}
    </Typography>
  );
};

export default CustomTypography;