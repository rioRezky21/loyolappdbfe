import Modal from 'react-modal'
import React from 'react'
import './Popup.css'
import { BuatPassword } from './BuatPassword'
import { Col, Row } from 'react-bootstrap'


export class AturKontak extends React.Component {
    constructor(){
        super()
        this.state ={
            show : false,
            userPhone : 'phoneNumber',
            userEmail : 'email',
        }
    }

    popupState=(state) =>{
        this.setState({show : state})
    }
    

    render(){
      return (
      <div className="popup-atur-kontak">
        <Modal isOpen={this.props.state} style={
          {
            overlay : {
              backgroundColor: 'none'
            },
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
            
            <h1 className="head">Buat Akun Baru</h1>
  
            <container>
              <Row>
                <Col xs={5}>
                  <container className="circleFill" style={{ marginTop: "220px" }}>
                    <text className="text1">2</text>
                  </container>
                  <container className="circleEmpty1" style={{ marginTop: "120px" }}>
                    <text className="text2">1</text>
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
                    <label className="label1">Nomor Handphone</label>
                    <input className="input1" placeholder="Nomor Handphone"
                    type="text"
                    onChange={(e)=> this.setState({userPhone: e.target.value})}/>
                    <label className="label2">Email</label>
                    <input className="input2" placeholder="Email"
                    type="text"
                    onChange={(e)=> this.setState({userEmail: e.target.value})}/>
                  </form>

                  <BuatPassword state={this.state.show} stateShow={this.popupState}
                  userFullName={this.props.userFullName}
                  userName={this.props.userName}
                  userPhone={this.state.userPhone}
                  userEmail={this.state.userEmail}/>
                  <button1 className="selanjutnya" onClick={()=>this.popupState(true)}>SELANJUTNYA</button1>
                  <button1 className="sebelumnya" onClick={()=> this.props.stateShow(false)}>SEBELUMNYA</button1>
                </Col>
              </Row>
            </container>
          </div>
        </Modal>
      </div>
      );
    }
}
export default AturKontak
  
  