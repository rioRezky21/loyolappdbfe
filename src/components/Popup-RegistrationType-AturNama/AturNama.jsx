import Modal from 'react-modal'
import React from 'react'
import './Popup.css'
import AturKontak from './AturKontak'
import { Col, Row } from 'react-bootstrap';


class AturNama extends React.Component{
    constructor(){
        super()
        this.state ={
            show : false,
            userFullName : 'userFullName',
            userName : 'nickname'
        }
    }

    popupState=(state) =>{
      this.setState({show : state})
    }

    render(){
      return (
        <div>
        <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
          {
            content:{
              position: 'absolute',
              maxWidth: '1035px',
              maxHeight: '548px',
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
          <div className="popup-atur-nama">
            <AturKontak state={this.state.show} stateShow={this.popupState}
            userFullName={this.state.userFullName}
            userName={this.state.userName}/>
  
            <h1 className="head">Buat Akun Baru</h1>
  
            <container>
              <Row>
                <Col xs={5}>
                  <container className="circleFill">
                    <text className="text1">1</text>
                  </container>
                  <container className="circleEmpty1">
                    <text className="text2">2</text>
                  </container>
                  <container className="circleEmpty2">
                    <text className="text3">3</text>
                  </container>
  
                  <line className="line1"></line>
                  <line className="line2"></line>
  
                  <text className="aturNama">Atur Nama</text>
                  <text className="aturKontak">Atur Kontak</text>
                  <text className="buatPassword">Buat Password</text>
                </Col>
                <Col xs={6}>
                  <form>
                    <label className="label1">Nama Lengkap</label>
                    <input className="input1"
                      name="userFullName"
                      type="text"
                      placeholder="Nama Lengkap"
                      onChange={(e)=> this.setState({userFullName: e.target.value})}/>
                    <label className="label2">Nama Panggilan</label>
                    <input className="input2"
                      name="userName"
                      type="text"
                      placeholder="Nama Panggilan"
                      onChange={(e)=> this.setState({userName: e.target.value})}/>
                    <button1 type="submit" className="selanjutnya" onClick={()=>this.popupState(true)}>SELANJUTNYA</button1>
                  </form>
                </Col>
              </Row>
            </container>
          </div>
        </Modal>
      </div>
      );
    }
}
export default AturNama
  
  