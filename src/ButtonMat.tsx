import React from 'react';
import Button from '@mui/material/Button';

export interface ButtonMat {
  color: any;
  background: any;
  size: any;
  text: any;
  variant: any;
  outlineColor: any;
  mainColor: any;
}

export function ButtonMat({
  color,
  background,
  size,
  text,
  variant,
  outlineColor,
  mainColor,
}: ButtonMat) {
  return (
    <Button
      style={{
        backgroundColor: background ? background : '',
        color: color ? color : '',
        borderColor: outlineColor,
      }}
      variant={variant}
      size={size}
      color={mainColor}
    >
      {text}
    </Button>
  );
}
