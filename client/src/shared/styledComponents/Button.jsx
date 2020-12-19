import styled from 'react-emotion';
import { darken } from 'polished';

const primaryButtonColor = '#5FA1DB';
const cancelButtonColor = '#F3F3F3';

const PrimaryButton = styled.button`
  background-color: ${primaryButtonColor};
  border: none;
  color: white;
  border-radius: 4px;
  padding: 7px 12px;
  transition: 0.3s;
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
  
  &:not([disabled]) {
    cursor: pointer;
    
    &:hover, &:active, &:focus {
      background-color: ${darken(0.1, primaryButtonColor)};
    }
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const CancelButton = styled(PrimaryButton)`
  background-color: ${cancelButtonColor};
  color: grey;
  
  &:not([disabled]) {
    &:hover, &:active, &:focus {
      background-color: ${darken(0.1, cancelButtonColor)};
    }
  }
`;

export default PrimaryButton;

export {
  PrimaryButton,
  CancelButton,
};
