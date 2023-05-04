import React from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import './closeBtn.style.css';

export interface CloseButton {
  background: any;
  size: any;
  variant: any;
  iconColor: any;
}

export function CloseButton({
  background,
  size,
  variant,
  iconColor,
}: CloseButton) {
  return (
    <Button
      style={{
        backgroundColor: background ? background : '',
        width:
          size == 'small'
            ? '10px'
            : size == 'medium'
            ? '30px'
            : size == 'large'
            ? '44px'
            : '20px',
      }}
      variant={variant}
      size={size ? size : 'medium'}
    >
      <CloseIcon
        className="close-btn"
        style={{
          minWidth: 'auto',
          color: iconColor ? iconColor : '#F06F4A',
          fontSize:
            size == 'small'
              ? '12px'
              : size == 'medium'
              ? '14px'
              : size == 'large'
              ? '18px'
              : '14px',
        }}
      />
    </Button>
  );
}
