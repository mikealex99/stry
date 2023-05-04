import React from 'react';
import Button from '@mui/material/Button';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';

export interface ButtonO {
  color: any;
  background: any;
  size: any;
  text: any;
  variant: any;
  outlineColor: any;
}

export function ButtonO({
  color,
  background,
  size,
  text,
  variant,
  outlineColor,
}: ButtonO) {
  function sizeSm() {
    return size === 'sm' ? true : false;
  }
  function sizeMd() {
    return size === 'md' ? true : false;
  }
  function sizeLg() {
    return size === 'lg' ? true : false;
  }
  function sizeXlg() {
    return size === 'xlg' ? true : false;
  }
  function size2Xlg() {
    return size === '2xlg' ? true : false;
  }
  function textCol() {
    console.log(background);
    return background == '#FCDFD7'
      ? '#D65631'
      : background == '#FACFC3'
      ? '#BE4C2B'
      : background == '#FDEFEB'
      ? '#F7AF9B'
      : color;
  }

  return (
    <Button
      style={{
        backgroundColor: background ? background : '',
        color: textCol(),
        minWidth: sizeSm()
          ? '162px'
          : sizeMd()
          ? '166px'
          : sizeLg()
          ? '181px'
          : sizeXlg()
          ? '185px'
          : size2Xlg()
          ? '228px'
          : '150',
        fontSize: sizeSm()
          ? '12px'
          : sizeMd()
          ? '13px'
          : sizeLg()
          ? '14px'
          : sizeXlg()
          ? '15px'
          : size2Xlg()
          ? '18px'
          : '12px',
        borderColor: outlineColor ? outlineColor : '',
      }}
      variant={variant}
      startIcon={
        <RadioButtonUncheckedRoundedIcon style={{ fontSize: '14px' }} />
      }
      endIcon={<RadioButtonUncheckedRoundedIcon style={{ fontSize: '14px' }} />}
    >
      {text}
    </Button>
  );
}
