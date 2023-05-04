import React from 'react';
import Button from '@mui/material/Button';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

export interface ActiveButton {
  color: any;
  background: any;
  size: any;
  text: any;
  variant: any;
  outlineColor: any;
  greenDot: any;
}

export function ActiveButton({
  color,
  background,
  size,
  text,
  variant,
  outlineColor,
  greenDot,
}: ActiveButton) {
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

  return (
    <Button
      style={{
        backgroundColor: background ? background : '',
        color: color ? color : '',
        minWidth: sizeSm()
          ? '124px'
          : sizeMd()
          ? '128px'
          : sizeLg()
          ? '143px'
          : sizeXlg()
          ? '147px'
          : size2Xlg()
          ? '2178px'
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
        <FiberManualRecordRoundedIcon
          style={{ color: greenDot ? '#12B76A' : '#FFFFFF', fontSize: '11px' }}
        />
      }
    >
      {text}
    </Button>
  );
}
