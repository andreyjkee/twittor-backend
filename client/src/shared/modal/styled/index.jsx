import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { css } from 'react-emotion';

Modal.setAppElement('#app');

export const defaultModalStyle = css`
 position: absolute;
 top: 100px;
 left: 50%;
 right: auto;
 bottom: auto;
 transform: translateX(-50%);
`;

export const defaultOverlayStyle = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 0.3);
`;

const CustomModal = ({
  children, modalStyleName, overlayStyleName, ...other
}) => (
  <Modal className={modalStyleName} overlayClassName={overlayStyleName} {...other}>{children}</Modal>
);

CustomModal.propTypes = {
  children: PropTypes.element.isRequired,
  modalStyleName: PropTypes.string,
  overlayStyleName: PropTypes.string,
};
CustomModal.defaultProps = {
  modalStyleName: defaultModalStyle,
  overlayStyleName: defaultOverlayStyle,
};

export default CustomModal;
