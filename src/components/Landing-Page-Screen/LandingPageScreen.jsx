import React, { Component } from 'react'
import './LandingPageScreenCSS.css'
import Logo from '../../assets/images/logo-loyola.png'
import {Container} from 'react-bootstrap'
import PopupRegis from './../Popup-RegistrationType-AturNama/AturNama'
import PopupError from './../Popup-Login-Error/PopupLoginError'
import axios from 'axios'

export default class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            email : 'email',
            password : 'password',
            show : false,
            showError : false
        }
    }

    saveTo(e) {
        e.preventDefault()
        const urlPost = 'http://25.11.46.231:8090/api/loyolaLogin/login'
        const data = {
            email : this.state.email,
            password : this.state.password
        }
        axios.post(urlPost, data)
        .then(response => {
            //console.log(response);
            if (response.data.Message === "Login As Student Is Successful") {
                window.location = '/Account-Dashboard'
            }
        })
        .catch(error => {
            if (error.response.data.error === "Login Failed") {
                this.setState({showError : true})
            }
        })
    }

    popupState=(state) =>{
        this.setState({show : state})
    }

    popupError=(state) =>{
        this.setState({showError : false})
    }

    render() {
        return (
            <div className = "landing-page">
                <PopupRegis state={this.state.show} stateShow={this.popupState}/>
                <PopupError state={this.state.showError} gantiState={this.popupError}/>
                <Container className="main-body-landing">
                <div className="container-landing">
                    <div className="content-landing">
                        <img className="header-logo-landing" src={Logo}></img>
                        <h1 className="h1-landing">Selamat Datang di PPDB</h1>
                        <h2 className="h2-landing">SMA Kolese Loyola</h2>
                        <h2 className="h2-landing">Semarang</h2>
                        <div className="daftar-landing">
                            <span className="ingin-mendaftar">Ingin Mendaftar?</span>
                            <button className="btn-sign-up-landing signup" onClick={()=>this.popupState(true)}>KLIK DISINI</button>
                        </div>
                    </div>
                </div>
                <div className="container-landing">
                    <div className="box-form-landing">
                        <p className="login-box">Login</p>
                        <form onSubmit={(e) => this.saveTo(e)} className="form-login-landing">
                            <label className="label-landing email-landing">
                                <input
                                    className="input-landing"
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    id="email"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    required
                                />
                            </label>
                            <br/>
                            <label className="label-landing password-landing">
                                <input
                                    className="input-landing"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                    required
                                />
                            </label>
                            <a href="http://localhost:3000/lupaPassword" className="forget-password-landing">*lupa password?</a><br/>
                            <button type='submit' className="btn-sign-up-landing signup" onClick={()=>this.popupError(this.state.showError)}>MASUK KE AKUN</button> 
                        </form>
                    </div>
                </div>
                </Container> 
            </div>
        )
    }
}
