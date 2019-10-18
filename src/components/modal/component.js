import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class Modal extends React.Component {

    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      modal: PropTypes.object.isRequired
    };

    render() {
        const {isOpen} = this.props.modal;
        if (!isOpen) return null;
            return (
                <div>
                    <div className='modal fade'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <button type='button' className='close'><span>&times;</span></button>
                                    <h4 className='modal-title'>Modal title</h4>
                                </div>
                                <div className='modal-body'>
                                    <p>One fine body&hellip;</p>
                                </div>
                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-default'>Close</button>
                                    <button type='button' className='btn btn-primary'>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );


    }


}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default connect(mapStateToProps)(Modal);