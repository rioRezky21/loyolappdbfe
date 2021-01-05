import React from 'react'
import Modal from 'react-modal'

export class Berhasil extends React.Component{
    render(){
        return(
            <div>
                <Modal isOpen={this.props.state} style={
                    {
                        overlay : {
                            backgroundColor: 'grey'
                        },
                        content:{
                            position: 'absolute',
                            maxWidth: '551px',
                            maxHeight: '211px',
                            margin: 'auto',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '20px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }
                }>
                    <div className="berhasil">
                        <text className="notif">Pembuatan akun berhasil</text>
                        <a href="/landing-page-screen">
                        <button className="exit" onClick={()=> this.props.stateShow(false)}>OK</button>
                        </a>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Berhasil