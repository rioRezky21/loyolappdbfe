import React from 'react'
import axios from 'axios'
import Logo from '../../assets/images/alfa.png'
import { Container } from 'react-bootstrap'
import './LupaPassword.css'

class LupaPassword extends React.Component{

    constructor() {
        super()
        this.state = {
            show : false,
            userEmail : '',
            subject : '',
            text : '',
            showError : false
        }
    }

    saveTo(dbase) {
        dbase.preventDefault()
        const urlPost = 'http://localhost:8090/api/email'
        const params = new URLSearchParams({ userEmail: this.state.userEmail }).toString();
        const dataEmail = new FormData();
        dataEmail.append('email', this.state.userEmail)
        dataEmail.append('subject', 'Test')
        dataEmail.append('text', 'http://localhost:3000/LupaPasswordNewLink?' + params)

        axios.post(urlPost, dataEmail)
    }

    emailState = (state) => {
        this.setState({show : state})
    }

    render() {
        return(
            <div className = 'lupaPassword'>
                <Container className = 'containerLupaPassword'> 
                    <form onSubmit={(dbase) => this.saveTo(dbase)}>
                        <label>
                            <h1 className = 'header1'>Lupa Password?</h1>
                            <h2 className = 'header2'>Link untuk mengganti password anda akan dikirimkan ke email yang anda input</h2>
                        </label>

                        <div className = 'email'>
                            <img className = 'alfa' src = {Logo}/>
                            <input className = 'input' type = 'email' placeholder = 'Email' onChange = {(dbase) => this.setState({userEmail: dbase.target.value})}/>
                        </div>

                        <button type = 'submit' className = 'kirim'>KIRIM</button>
                    </form>
                </Container>
            </div>
        )
    }
}

export default LupaPassword