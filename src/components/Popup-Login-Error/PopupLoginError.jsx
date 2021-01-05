import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import './PopupLoginErrorCSS.css'

export default class PopupLoginError extends React.Component {

    render(){
        return (
          <div>
            <Modal show={this.props.state} onHide={() => this.props.gantiState(false)} contentClassName="popup-error">
                <Modal.Body className="badan-error">
                    <h1 className='header-error'>
                        Login Gagal
                    </h1>
                    <h2 className='content-error'>
                        Email atau password anda salah
                    </h2>
                </Modal.Body>
            </Modal>
          </div>
        );
    }
}