import React from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import Logo from '../../assets/images/lock.png'
import './LupaPasswordNewLink.css'

export default class LupaPasswordNewLink extends React.Component {

    constructor() {
        super()
        this.state = {
            show : false,
            userPassword : '',
            confirmPassword : ''
        }
    }

    saveTo(dbase) {
        dbase.preventDefault()
        const isValid = this.validate();
        if (isValid) {
            const params = new URLSearchParams(window.location.search)
            const urlPost = 'http://localhost:8090/api/forgotPassword'
            const dataPassword = new FormData();
            dataPassword.append('email', params.get('userEmail'))
            dataPassword.append('password', this.state.userPassword)
            dataPassword.append('confirmPassword', this.state.confirmPassword)

            axios.post(urlPost, dataPassword)
        }
    }

    validate = ()=> {
        let passwordError = "Password tidak sesuai";
  
        if (this.state.userPassword == this.state.confirmPassword){
            passwordError = '';
        }
  
        if (passwordError){
            this.setState({passwordError});
            return false;
        }
  
        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
    }

    passwordState = (state) => {
        this.setState({show : state})
    }
    
    render() {
        return (
            <div className = 'lupaPassNewLink'>
                <Container className = 'containerLupaPassNewLink'>
                    <form onSubmit={(dbase) => this.saveTo(dbase)}>
                        <label>
                            <h2 className = 'header'>Tambahkan password baru</h2>
                        </label>

                        <div className = 'pass'>
                            <img className = 'image' src = { Logo }/>
                            <input className = 'inputPass' type = 'password' placeholder = 'Password baru' onChange={(dbase) => this.setState({userPassword: dbase.target.value})}/>
                        </div>
                
                        <div className = 'ulangiPassword'>
                            <img className = 'image' src = { Logo }/>
                            <input className = 'inputPass' type = 'password' placeholder = 'Ulangi password baru' onChange={(dbase) => this.setState({confirmPassword: dbase.target.value})}/>
                        </div>

                        <div className = "error"> {this.state.passwordError} </div>
                
                        <button type = 'submit' className = 'submitPassword'>TAMBAHKAN PASSWORD</button>
                    </form>
                </Container>
            </div>
        )
    }
}