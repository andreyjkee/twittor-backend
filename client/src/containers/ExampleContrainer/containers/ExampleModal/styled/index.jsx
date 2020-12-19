import React from 'react';
import styled from 'react-emotion';

export const StyledModalContent = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 15px;
  min-width: 500px;
  min-height: 500px;
  background: white;
`;

export const StyledClose = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  cursor: pointer;
  right: 10px;
`;

export const IconStyle = styled.svg`
  width: 24px;
  height: 24px;
`;

export const CloseIcon = () => (
  <IconStyle viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </IconStyle>
);
