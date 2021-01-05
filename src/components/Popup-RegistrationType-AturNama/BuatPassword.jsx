import Modal from 'react-modal'
import React from 'react'
import './Popup.css'
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Berhasil from './Berhasil'


export class BuatPassword extends React.Component {
    constructor(){
        super()
        this.state ={
            show : false,
            userPassword : '',
            confirmPassword:'',
            passwordError:''
        }
    }

    saveTo(e){
      e.preventDefault()
      const isValid = this.validate();
      if (isValid){
        const urlPost = 'http://localhost:8090/api/users/create'
        const data = {
            valid: 'valid',
            userFullName: this.props.userFullName,
            userName: this.props.userName,
            userPhone: this.props.userPhone,
            userEmail: this.props.userEmail,
            userPassword: this.state.userPassword,
            confirmPassword: this.state.confirmPassword
        }
        axios.post(urlPost, data)
      }
    }

    validate =()=>{
      let passwordError= "Password tidak sesuai";

      if(this.state.userPassword === this.state.confirmPassword){
        passwordError = '';
      }

      if (passwordError){
        this.setState({passwordError});
        return false;
      }

      return true;
    }

    handleSubmit= event =>{
      event.preventDefault();
      const isValid = this.validate();
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
                  <container className="circleFill" style={{ marginTop: "320px" }}>
                    <text className="text1">3</text>
                  </container>
                  <container className="circleEmpty1" style={{ marginTop: "120px" }}>
                    <text className="text2">1</text>
                  </container>
                  <container className="circleEmpty2" style={{ marginTop: "220px" }}>
                    <text className="text3">2</text>
                  </container>
  
                  <line className="line1"></line>
                  <line className="line2"></line>
  
                  <text className="aturNama">Atur Nama</text>
                  <text className="aturKontak">Atur Kontak</text>
                  <text className="buatPassword">Buat Password</text>
                </Col>
                <Col xs={6}>
                  <form onSubmit={(e) => this.saveTo(e)}>
                    <label className="label1">Password</label>
                    <input className="input1" placeholder="Password"
                    type="password"
                    onChange={(e)=> this.setState({userPassword: e.target.value})}/>
                    <label className="label2">Ulangi Password</label>
                    <input
                    className="input2"
                    placeholder="Password"
                    type="password"
                    onChange={(e)=> this.setState({confirmPassword: e.target.value})}
                    />
                    <div className="warn">{this.state.passwordError}</div>
                    <Button className="selanjutnya" type="submit" onClick={()=>this.popupState(this.validate())}>SELESAI</Button>
                    <Berhasil state={this.state.show} stateShow={this.popupState}/>
                  </form>
                  <Button className="sebelumnya" onClick={()=> this.props.stateShow(false)}>SEBELUMNYA</Button>
                </Col>
              </Row>
            </container>
          </div>
        </Modal>
      </div>
      );
    }
}
export default BuatPassword
  
  