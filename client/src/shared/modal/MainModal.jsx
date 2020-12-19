import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomModal from './styled';
import { hideModal } from './redux/actions';
import withSpinner from '../hocs/withSpinner';

import SimpleExampleModal from '../../containers/ExampleContrainer/containers/ExampleModal/components/SimpleModal';
import CustomExampleModal from '../../containers/ExampleContrainer/containers/ExampleModal/components/CustomModal';

// Array contains all custom modals from app
// To successfully open modal, type prop in "showModal" action should match name from this array
const modals = {
  SimpleExampleModal,
  CustomExampleModal,
};

class MainModal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      type: PropTypes.string, // name of modal from modals array
      show: PropTypes.bool,
      modalProps: PropTypes.object,
      wrapperProps: PropTypes.shape({ modalStyleName: PropTypes.string, overlayStyleName: PropTypes.string }),
      loading: PropTypes.bool,
      error: PropTypes.shape({ message: PropTypes.string, data: PropTypes.any }),
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
  };

  getModalContent = (modalType, error) => {
    if (error) throw new Error(error);
    if (!modalType) throw new Error('modalType not specified');
    const ModalContent = modals[modalType];
    if (!ModalContent) throw new Error(`${modalType} not found in modals list`);
    return withSpinner(ModalContent);
  };

  handleCloseModal = () => {
    this.props.hideModal();
  };

  render() {
    const {
      show, modalProps, wrapperProps, type, loading, error,
    } = this.props.modal;

    if (!show) return null;

    const ModalContent = this.getModalContent(type, error);

    return (
      <CustomModal
        isOpen={show}
        onRequestClose={this.handleCloseModal}
        {...wrapperProps}
      >
        <ModalContent {...modalProps} isFetching={loading} />
      </CustomModal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
