import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AccountDashBoardPengisianDataAkademik.css'
import Logo from '../../assets/images/logo-loyola.png'
import Back from '../../assets/images/back.png'
import Check from '../../assets/images/checklist.png'
import PopupKetentuan from './../Popup-Ketentuan/PopupKetentuan'
import Bantuan from '../../components/Popup-Bantuan/PopupBantuanModal'
import Axios from 'axios'

const positionKetentuan = {
    content : {
        marginTop: '200px',
        marginLeft: '500px'
    }
}

class AccountDashBoardPengisianDataAkademik extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            showBantuan: false,
            siswaId: 76,
            rapor: [],
            agama: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            ppkn: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            bindo: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            binggris: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            math: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            ipa: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            ips: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            penjas: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            seni: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            bdaerah: {
                matpelId: '',
                kkm7: '',
                kelas71: '',
                kelas72: '',
                kkm8: '',
                kelas81: '',
                kelas82: '',
            },
            hideCheck: false,
            persentage: 0,
            agamaFull: true,
            showCheck: true,
            checkingIPS: false,
            checkingIPA: false
        }
    }

    popupKetentuanInt = (state) => {
        this.setState({ show: state })
    }

    showBantuan = (state) => {
        this.setState({showBantuan: state})
    }

    goBack() {
        window.history.back();
    }

    persentage = () => {
        this.setState({persentage: this.state.persentage += 10})
    }

    setNilaiAgama() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 4) {
                this.setState({
                    agama: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiPpkn() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 7) {
                this.setState({
                    ppkn: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiBindo() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 1) {
                this.setState({
                    bindo: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiBinggris() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 2) {
                this.setState({
                    binggris: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiMath() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 3) {
                this.setState({
                    math: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiIpa() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 5) {
                this.setState({
                    ipa: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiIps() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 6) {
                this.setState({
                    ips: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiPenjas() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 9) {
                this.setState({
                    penjas: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiSeni() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 17) {
                this.setState({
                    seni: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    setNilaiBdaerah() {
        this.state.rapor.map(rapor => {
            if (rapor.matpelId === 10) {
                this.setState({
                    bdaerah: {
                        matpelId: rapor.matpelId,
                        kkm7: rapor.kkmKelas7,
                        kelas71: rapor.kelas71,
                        kelas72: rapor.kelas72,
                        kkm8: rapor.kkmKelas8,
                        kelas81: rapor.kelas81,
                        kelas82: rapor.kelas82
                    }
                })
            }
        })
    }

    validationAgama() {
        if (this.state.agama.kkm7 === null || this.state.agama.kkm7.length < 1 ||
            this.state.agama.kelas71 === null || this.state.agama.kelas71.length < 1 ||
            this.state.agama.kelas72 === null || this.state.agama.kelas72.length < 1 ||
            this.state.agama.kkm8 === null || this.state.agama.kkm8.length < 1 ||
            this.state.agama.kelas81 === null || this.state.agama.kelas81.length < 1 ||
            this.state.agama.kelas82 === null || this.state.agama.kelas82.length < 1) {
            // this.state.hideCheck = true;
            return true;
        } else {
            // this.persentage()
            return false;
            // this.state.hideCheck = false;
        }
    }

    validationPpkn() {
        if (this.state.ppkn.kkm7 === null || this.state.ppkn.kkm7.length < 1 ||
            this.state.ppkn.kelas71 === null || this.state.ppkn.kelas71.length < 1 ||
            this.state.ppkn.kelas72 === null || this.state.ppkn.kelas72.length < 1 ||
            this.state.ppkn.kkm8 === null || this.state.ppkn.kkm8.length < 1 ||
            this.state.ppkn.kelas81 === null || this.state.ppkn.kelas81.length < 1 ||
            this.state.ppkn.kelas82 === null || this.state.ppkn.kelas82.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    validationBindo() {
        if (this.state.bindo.kkm7 === null || this.state.bindo.kkm7.length < 1 ||
            this.state.bindo.kelas71 === null || this.state.bindo.kelas71.length < 1 ||
            this.state.bindo.kelas72 === null || this.state.bindo.kelas72.length < 1 ||
            this.state.bindo.kkm8 === null || this.state.bindo.kkm8.length < 1 ||
            this.state.bindo.kelas81 === null || this.state.bindo.kelas81.length < 1 ||
            this.state.bindo.kelas82 === null || this.state.bindo.kelas82.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    validationBinggris() {
        if (this.state.binggris.kkm7 === null || this.state.binggris.kkm7.length < 1 ||
            this.state.binggris.kelas71 === null || this.state.binggris.kelas71.length < 1 ||
            this.state.binggris.kelas72 === null || this.state.binggris.kelas72.length < 1 ||
            this.state.binggris.kkm8 === null || this.state.binggris.kkm8.length < 1 ||
            this.state.binggris.kelas81 === null || this.state.binggris.kelas81.length < 1 ||
            this.state.binggris.kelas82 === null || this.state.binggris.kelas82.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    validationMath() {
        if (this.state.math.kkm7 === null || this.state.math.kkm7.length < 1 ||
            this.state.math.kelas71 === null || this.state.math.kelas71.length < 1 ||
            this.state.math.kelas72 === null || this.state.math.kelas72.length < 1 ||
            this.state.math.kkm8 === null || this.state.math.kkm8.length < 1 ||
            this.state.math.kelas81 === null || this.state.math.kelas81.length < 1 ||
            this.state.math.kelas82 === null || this.state.math.kelas82.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    validationIpa() {
        if (this.state.ipa.kkm7 === null || this.state.ipa.kkm7.length < 1 ||
            this.state.ipa.kelas71 === null || this.state.ipa.kelas71.length < 1 ||
            this.state.ipa.kelas72 === null || this.state.ipa.kelas72.length < 1 ||
            this.state.ipa.kkm8 === null || this.state.ipa.kkm8.length < 1 ||
            this.state.ipa.kelas81 === null || this.state.ipa.kelas81.length < 1 ||
            this.state.ipa.kelas82 === null || this.state.ipa.kelas82.length < 1) {
                if (this.state.checkingIPA === true){
                    this.setState({persentage: this.state.persentage -= 5})
                    this.setState({checkingIPA: false})
                }
            return true;
        } else {
            if (this.state.checkingIPA === false){
                this.setState({persentage: this.state.persentage += 5})
                this.setState({checkingIPA: true})
            }
            return false;
        }
    }

    validationIps() {
        if (this.state.ips.kkm7 === null || this.state.ips.kkm7.length < 1 ||
            this.state.ips.kelas71 === null || this.state.ips.kelas71.length < 1 ||
            this.state.ips.kelas72 === null || this.state.ips.kelas72.length < 1 ||
            this.state.ips.kkm8 === null || this.state.ips.kkm8.length < 1 ||
            this.state.ips.kelas81 === null || this.state.ips.kelas81.length < 1 ||
            this.state.ips.kelas82 === null ||  this.state.ips.kelas82.length < 1) {
            // this.state.hideCheck = true;
            if (this.state.checkingIPS === true){
                this.setState({persentage: this.state.persentage -= 5})
                this.setState({checkingIPS: false})
            }
            return true;
        } else {
            // this.persentage()
            // this.state.hideCheck = false;
            if (this.state.checkingIPS === false){
                this.setState({persentage: this.state.persentage += 5})
                this.setState({checkingIPS: true})
            }
            return false;
        }
    }

    validationPenjas() {
        if (this.state.penjas.kkm7 === null || this.state.penjas.kkm7.length < 1 ||
            this.state.penjas.kelas71 === null || this.state.penjas.kelas71.length < 1 ||
            this.state.penjas.kelas72 === null || this.state.penjas.kelas72.length < 1 ||
            this.state.penjas.kkm8 === null || this.state.penjas.kkm8.length < 1 ||
            this.state.penjas.kelas81 === null || this.state.penjas.kelas81.length < 1 ||
            this.state.penjas.kelas82 === null || this.state.penjas.kelas82.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    validationSeni() {
        if (this.state.seni.kkm7 === null || this.state.seni.kkm7.length < 1 ||
            this.state.seni.kelas71 === null || this.state.seni.kelas71.length < 1 ||
            this.state.seni.kelas72 === null || this.state.seni.kelas72.length < 1 ||
            this.state.seni.kkm8 === null || this.state.seni.kkm8.length < 1 ||
            this.state.seni.kelas81 === null || this.state.seni.kelas81.length < 1 ||
            this.state.seni.kelas82 === null || this.state.seni.kelas82.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    validationBdaerah() {
        if (this.state.bdaerah.kkm7 === null || this.state.bdaerah.kkm7.length < 1 ||
            this.state.bdaerah.kelas71 === null || this.state.bdaerah.kelas71.length < 1 ||
            this.state.bdaerah.kelas72 === null || this.state.bdaerah.kelas72.length < 1 ||
            this.state.bdaerah.kkm8 === null || this.state.bdaerah.kkm8.length < 1 ||
            this.state.bdaerah.kelas81 === null || this.state.bdaerah.kelas81.length < 1 ||
            this.state.bdaerah.kelas82 === null || this.state.bdaerah.kelas82.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    countCheck() {
    }

    componentDidMount() {
        const urlGet = 'http://localhost:8090/api/calonSiswa/rapor/' + this.state.siswaId
        Axios.get(urlGet).then(response => {
            console.log(response)
            this.setState({
                rapor: response.data.data
            })
            {this.setNilaiAgama()}
            {this.setNilaiPpkn()}
            {this.setNilaiBindo()}
            {this.setNilaiBinggris()}
            {this.setNilaiMath()}
            {this.setNilaiIpa()}
            {this.setNilaiIps()}
            {this.setNilaiPenjas()}
            {this.setNilaiSeni()}
            {this.setNilaiBdaerah()}
        })
    }


    saveTo(db) {
        db.preventDefault()
        const urlPost = 'http://localhost:8090/ai/calonSiswa/update/rapor/' + this.state.siswaId
        const data = {
            
        }
    }

    render() {
        return(
            <div className='primary'>
                <PopupKetentuan state = {this.state.show} popupKetentuanInt = {this.popupKetentuanInt} style={positionKetentuan}/>
                <Bantuan state={this.state.showBantuan} stateShow={this.showBantuan}/>
                <Container className='container-pengisian-data-akademik' fluid>
                    <Row>
                        <Col>
                        {/* <per>{JSON.stringify(this.state, null, 2)}</per> */}
                            <div className='Topbar'>
                                <img id='logo' src={Logo} alt="LogoLoyola"/>
                                <span id='Halo'>Halo, Aaron</span>
                                <a href='#' id='Bantuan' onClick={()=> this.showBantuan(true)}>Bantuan</a>
                                <a href='landing-page-screen' id='LogOut'>LogOut</a>
                            </div>
                            <div className='back'>
                                <a href='#' className='back-vector' onClick={this.goBack}>
                                    <img src={Back} alt='Back'/>
                                </a>
                            </div>
                            <div>
                                <span id='DataAkademik'>Data Akademik ({this.state.persentage}%)</span>
                                <a href='#' id='Ketentuan' onClick={() => this.popupKetentuanInt(true)}>KETENTUAN</a>
                            </div>
                            <div>
                                <span className='MataPelajaran'>Mata Pelajaran</span>
                                <span id='KelasVII'>Kelas VII</span>
                                <span id='KKM-VII'>KKM</span>
                                <span id='Smt-1-VII'>Smt 1</span>
                                <span id='Smt-2-VII'>Smt 2</span>
                                <span id='KelasVIII'>Kelas VIII</span>
                                <span id='KKM-VIII'>KKM</span>
                                <span id='Smt-1-VIII'>Smt 1</span>
                                <span id='Smt-2-VIII'>Smt 2</span>
                                <hr id="hr"></hr>
                            </div>
                            <div className='Frame25'>
                                <div className='agama'>
                                    <span>Pendidikan Agama</span>
                                    <img className='correct-agama' src={Check} alt='Check' hidden={this.state.showCheck}
                                    onChange={()=> this.persentage()}/>
                                </div>
                                <div className='ppkn'>
                                    <span>PPKn</span>
                                    <img className='correct-ppkn' src={Check} alt='Check' hidden={this.validationPpkn()}
                                    onClick={()=> this.persentage()}/>
                                </div>
                                <div className='Group24'>
                                    <span className='bindo'>B.Indonesia</span>
                                    <img className='correct-bindo' src={Check} alt='Check' hidden={this.validationBindo()}/>
                                </div>
                                <div className='bing'>
                                    <span>B.Inggris</span>
                                    <img className='correct-bing' src={Check} alt='Check' hidden={this.validationBinggris()}/>
                                </div>
                                <div className='math'>
                                    <span>Matematika</span>
                                    <img className='correct-math' src={Check} alt='Check' hidden={this.validationMath()}/>
                                </div>
                                <div className='ipa'>
                                    <span>IPA</span>
                                    <img className='correct-ipa' src={Check} alt='Check' hidden={this.validationIpa()}/>
                                </div>
                                <div className='ips'>
                                    <span>IPS</span>
                                    <img className='correct-ips' src={Check} alt='Check' hidden={this.validationIps()}/>
                                </div>
                                <div className='penjaskes'>
                                    <span>Penjaskes</span>
                                    <img className='correct-penjas' src={Check} alt='Check' hidden={this.validationPenjas()}/>
                                </div>
                                <div className='kesenian'>
                                    <span>Kesenian</span>
                                    <img className='correct-seni' src={Check} alt='Check' hidden={this.validationSeni()}/>
                                </div>
                                <div className='bdaerah'>
                                    <span>Bahasa Daerah</span>
                                    <img className='correct-bdaerah' src={Check} alt='Check' hidden={this.validationBdaerah()}/>
                                </div>
                            </div>
                            <div className='Frame32'>
                                <div className='Group14'>
                                    {/* PENDIDIKAN AGAMA ID = 4 */}
                                    <form onSubmit={(db)=> this.saveTo(db)}>
                                        <div>
                                            <input 
                                                className='Frame26' 
                                                placeholder={this.state.agama.kkm7} 
                                                onChange={(db) => this.setState({
                                                    agama: {
                                                        matpelId: this.state.agama.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.agama.kelas71,
                                                        kelas72: this.state.agama.kelas72,
                                                        kkm8: this.state.agama.kkm8,
                                                        kelas81: this.state.agama.kelas81,
                                                        kelas82: this.state.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='Frame27' 
                                                placeholder={this.state.agama.kelas71} 
                                                onChange={(db) => this.setState({
                                                    agama: {
                                                        matpelId: this.state.agama.matpelId,
                                                        kkm7: this.state.agama.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.agama.kelas72,
                                                        kkm8: this.state.agama.kkm8,
                                                        kelas81: this.state.agama.kelas81,
                                                        kelas82: this.state.agama.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='Frame28' 
                                                placeholder={this.state.agama.kelas72} 
                                                onChange={(db) => this.setState({
                                                    agama: {
                                                        matpelId: this.state.agama.matpelId,
                                                        kkm7: this.state.agama.kkm7,
                                                        kelas71: this.state.agama.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.agama.kkm8,
                                                        kelas81: this.state.agama.kelas81,
                                                        kelas82: this.state.agama.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='Frame29' 
                                                placeholder={this.state.agama.kkm8} 
                                                onChange={(db) => this.setState({
                                                    agama: {
                                                        matpelId: this.state.agama.matpelId,
                                                        kkm7: this.state.agama.kkm7,
                                                        kelas71: this.state.agama.kelas71,
                                                        kelas72: this.state.agama.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.agama.kelas81,
                                                        kelas82: this.state.agama.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='Frame30' 
                                                placeholder={this.state.agama.kelas81} 
                                                onChange={(db) => this.setState({
                                                    agama: {
                                                        matpelId: this.state.agama.matpelId,
                                                        kkm7: this.state.agama.kkm7,
                                                        kelas71: this.state.agama.kelas71,
                                                        kelas72: this.state.agama.kelas72,
                                                        kkm8: this.state.agama.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.agama.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='Frame31' 
                                                placeholder={this.state.agama.kelas82} 
                                                onChange={(db) => this.setState({
                                                    agama: {
                                                        matpelId: this.state.agama.matpelId,
                                                        kkm7: this.state.agama.kkm7,
                                                        kelas71: this.state.agama.kelas71,
                                                        kelas72: this.state.agama.kelas72,
                                                        kkm8: this.state.agama.kkm8,
                                                        kelas81: this.state.agama.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group15'>
                                            <input 
                                                className='G15Frame26' 
                                                placeholder={this.state.ppkn.kkm7} 
                                                onChange={(db) => this.setState({
                                                    ppkn: {
                                                        matpelId: this.state.ppkn.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.ppkn.kelas71,
                                                        kelas72: this.state.ppkn.kelas72,
                                                        kkm8: this.state.ppkn.kkm8,
                                                        kelas81: this.state.ppkn.kelas81,
                                                        kelas82: this.state.ppkn.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G15Frame27' 
                                                placeholder={this.state.ppkn.kelas71} 
                                                onChange={(db) => this.setState({
                                                    ppkn: {
                                                        matpelId: this.state.ppkn.matpelId,
                                                        kkm7: this.state.ppkn.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.ppkn.kelas72,
                                                        kkm8: this.state.ppkn.kkm8,
                                                        kelas81: this.state.ppkn.kelas81,
                                                        kelas82: this.state.ppkn.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G15Frame28' 
                                                placeholder={this.state.ppkn.kelas72} 
                                                onChange={(db) => this.setState({
                                                    ppkn: {
                                                        matpelId: this.state.ppkn.matpelId,
                                                        kkm7: this.state.ppkn.kkm7,
                                                        kelas71: this.state.ppkn.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.ppkn.kkm8,
                                                        kelas81: this.state.ppkn.kelas81,
                                                        kelas82: this.state.ppkn.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G15Frame29' 
                                                placeholder={this.state.ppkn.kkm8} 
                                                onChange={(db) => this.setState({
                                                    ppkn: {
                                                        matpelId: this.state.ppkn.matpelId,
                                                        kkm7: this.state.ppkn.kkm7,
                                                        kelas71: this.state.ppkn.kelas71,
                                                        kelas72: this.state.ppkn.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.ppkn.kelas81,
                                                        kelas82: this.state.ppkn.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G15Frame30' 
                                                placeholder={this.state.ppkn.kelas81} 
                                                onChange={(db) => this.setState({
                                                    ppkn: {
                                                        matpelId: this.state.ppkn.matpelId,
                                                        kkm7: this.state.ppkn.kkm7,
                                                        kelas71: this.state.ppkn.kelas71,
                                                        kelas72: this.state.ppkn.kelas72,
                                                        kkm8: this.state.ppkn.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.ppkn.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G15Frame31' 
                                                placeholder={this.state.ppkn.kelas82} 
                                                onChange={(db) => this.setState({
                                                    ppkn: {
                                                        matpelId: this.state.ppkn.matpelId,
                                                        kkm7: this.state.ppkn.kkm7,
                                                        kelas71: this.state.ppkn.kelas71,
                                                        kelas72: this.state.ppkn.kelas72,
                                                        kkm8: this.state.ppkn.kkm8,
                                                        kelas81: this.state.ppkn.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group16'>
                                            <input 
                                                className='G16Frame26' 
                                                placeholder={this.state.bindo.kkm7} 
                                                onChange={(db) => this.setState({
                                                    bindo: {
                                                        matpelId: this.state.bindo.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.bindo.kelas71,
                                                        kelas72: this.state.bindo.kelas72,
                                                        kkm8: this.state.bindo.kkm8,
                                                        kelas81: this.state.bindo.kelas81,
                                                        kelas82: this.state.bindo.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G16Frame27' 
                                                placeholder={this.state.bindo.kelas71} 
                                                onChange={(db) => this.setState({
                                                    bindo: {
                                                        matpelId: this.state.bindo.matpelId,
                                                        kkm7: this.state.bindo.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.bindo.kelas72,
                                                        kkm8: this.state.bindo.kkm8,
                                                        kelas81: this.state.bindo.kelas81,
                                                        kelas82: this.state.bindo.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G16Frame28' 
                                                placeholder={this.state.bindo.kelas72} 
                                                onChange={(db) => this.setState({
                                                    bindo: {
                                                        matpelId: this.state.bindo.matpelId,
                                                        kkm7: this.state.bindo.kkm7,
                                                        kelas71: this.state.bindo.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.bindo.kkm8,
                                                        kelas81: this.state.bindo.kelas81,
                                                        kelas82: this.state.bindo.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G16Frame29' 
                                                placeholder={this.state.bindo.kkm8} 
                                                onChange={(db) => this.setState({
                                                    bindo: {
                                                        matpelId: this.state.bindo.matpelId,
                                                        kkm7: this.state.bindo.kkm7,
                                                        kelas71: this.state.bindo.kelas71,
                                                        kelas72: this.state.bindo.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.bindo.kelas81,
                                                        kelas82: this.state.bindo.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G16Frame30' 
                                                placeholder={this.state.bindo.kelas81} 
                                                onChange={(db) => this.setState({
                                                    bindo: {
                                                        matpelId: this.state.bindo.matpelId,
                                                        kkm7: this.state.bindo.kkm7,
                                                        kelas71: this.state.bindo.kelas71,
                                                        kelas72: this.state.bindo.kelas72,
                                                        kkm8: this.state.bindo.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.bindo.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G16Frame31' 
                                                placeholder={this.state.bindo.kelas82} 
                                                onChange={(db) => this.setState({
                                                    bindo: {
                                                        matpelId: this.state.bindo.matpelId,
                                                        kkm7: this.state.bindo.kkm7,
                                                        kelas71: this.state.bindo.kelas71,
                                                        kelas72: this.state.bindo.kelas72,
                                                        kkm8: this.state.bindo.kkm8,
                                                        kelas81: this.state.bindo.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group17'>
                                            <input 
                                                className='G17Frame26' 
                                                placeholder={this.state.binggris.kkm7} 
                                                onChange={(db) => this.setState({
                                                    binggris: {
                                                        matpelId: this.state.binggris.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.binggris.kelas71,
                                                        kelas72: this.state.binggris.kelas72,
                                                        kkm8: this.state.binggris.kkm8,
                                                        kelas81: this.state.binggris.kelas81,
                                                        kelas82: this.state.binggris.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G17Frame27' 
                                                placeholder={this.state.binggris.kelas71} 
                                                onChange={(db) => this.setState({
                                                    binggris: {
                                                        matpelId: this.state.binggris.matpelId,
                                                        kkm7: this.state.binggris.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.binggris.kelas72,
                                                        kkm8: this.state.binggris.kkm8,
                                                        kelas81: this.state.binggris.kelas81,
                                                        kelas82: this.state.binggris.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G17Frame28' 
                                                placeholder={this.state.binggris.kelas72} 
                                                onChange={(db) => this.setState({
                                                    binggris: {
                                                        matpelId: this.state.binggris.matpelId,
                                                        kkm7: this.state.binggris.kkm7,
                                                        kelas71: this.state.binggris.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.binggris.kkm8,
                                                        kelas81: this.state.binggris.kelas81,
                                                        kelas82: this.state.binggris.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G17Frame29' 
                                                placeholder={this.state.binggris.kkm8} 
                                                onChange={(db) => this.setState({
                                                    binggris: {
                                                        matpelId: this.state.binggris.matpelId,
                                                        kkm7: this.state.binggris.kkm7,
                                                        kelas71: this.state.binggris.kelas71,
                                                        kelas72: this.state.binggris.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.binggris.kelas81,
                                                        kelas82: this.state.binggris.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G17Frame30' 
                                                placeholder={this.state.binggris.kelas81} 
                                                onChange={(db) => this.setState({
                                                    binggris: {
                                                        matpelId: this.state.binggris.matpelId,
                                                        kkm7: this.state.binggris.kkm7,
                                                        kelas71: this.state.binggris.kelas71,
                                                        kelas72: this.state.binggris.kelas72,
                                                        kkm8: this.state.binggris.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.binggris.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G17Frame31' 
                                                placeholder={this.state.binggris.kelas82} 
                                                onChange={(db) => this.setState({
                                                    binggris: {
                                                        matpelId: this.state.binggris.matpelId,
                                                        kkm7: this.state.binggris.kkm7,
                                                        kelas71: this.state.binggris.kelas71,
                                                        kelas72: this.state.binggris.kelas72,
                                                        kkm8: this.state.binggris.kkm8,
                                                        kelas81: this.state.binggris.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group18'>
                                            <input 
                                                className='G18Frame26' 
                                                placeholder={this.state.math.kkm7} 
                                                onChange={(db) => this.setState({
                                                    math: {
                                                        matpelId: this.state.math.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.math.kelas71,
                                                        kelas72: this.state.math.kelas72,
                                                        kkm8: this.state.math.kkm8,
                                                        kelas81: this.state.math.kelas81,
                                                        kelas82: this.state.math.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G18Frame27' 
                                                placeholder={this.state.math.kelas71} 
                                                onChange={(db) => this.setState({
                                                    math: {
                                                        matpelId: this.state.math.matpelId,
                                                        kkm7: this.state.math.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.math.kelas72,
                                                        kkm8: this.state.math.kkm8,
                                                        kelas81: this.state.math.kelas81,
                                                        kelas82: this.state.math.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G18Frame28' 
                                                placeholder={this.state.math.kelas72} 
                                                onChange={(db) => this.setState({
                                                    math: {
                                                        matpelId: this.state.math.matpelId,
                                                        kkm7: this.state.math.kkm7,
                                                        kelas71: this.state.math.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.math.kkm8,
                                                        kelas81: this.state.math.kelas81,
                                                        kelas82: this.state.math.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G18Frame29' 
                                                placeholder={this.state.math.kkm8} 
                                                onChange={(db) => this.setState({
                                                    math: {
                                                        matpelId: this.state.math.matpelId,
                                                        kkm7: this.state.math.kkm7,
                                                        kelas71: this.state.math.kelas71,
                                                        kelas72: this.state.math.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.math.kelas81,
                                                        kelas82: this.state.math.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G18Frame30' 
                                                placeholder={this.state.math.kelas81} 
                                                onChange={(db) => this.setState({
                                                    math: {
                                                        matpelId: this.state.math.matpelId,
                                                        kkm7: this.state.math.kkm7,
                                                        kelas71: this.state.math.kelas71,
                                                        kelas72: this.state.math.kelas72,
                                                        kkm8: this.state.math.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.math.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G18Frame31' 
                                                placeholder={this.state.math.kelas82} 
                                                onChange={(db) => this.setState({
                                                    math: {
                                                        matpelId: this.state.math.matpelId,
                                                        kkm7: this.state.math.kkm7,
                                                        kelas71: this.state.math.kelas71,
                                                        kelas72: this.state.math.kelas72,
                                                        kkm8: this.state.math.kkm8,
                                                        kelas81: this.state.math.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group19'>
                                            <input 
                                                className='G19Frame26' 
                                                placeholder={this.state.ipa.kkm7} 
                                                onChange={(db) => this.setState({
                                                    ipa: {
                                                        matpelId: this.state.ipa.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.ipa.kelas71,
                                                        kelas72: this.state.ipa.kelas72,
                                                        kkm8: this.state.ipa.kkm8,
                                                        kelas81: this.state.ipa.kelas81,
                                                        kelas82: this.state.ipa.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G19Frame27' 
                                                placeholder={this.state.ipa.kelas71} 
                                                onChange={(db) => this.setState({
                                                    ipa: {
                                                        matpelId: this.state.ipa.matpelId,
                                                        kkm7: this.state.ipa.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.ipa.kelas72,
                                                        kkm8: this.state.ipa.kkm8,
                                                        kelas81: this.state.ipa.kelas81,
                                                        kelas82: this.state.ipa.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G19Frame28' 
                                                placeholder={this.state.ipa.kelas72} 
                                                onChange={(db) => this.setState({
                                                    ipa: {
                                                        matpelId: this.state.ipa.matpelId,
                                                        kkm7: this.state.ipa.kkm7,
                                                        kelas71: this.state.ipa.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.ipa.kkm8,
                                                        kelas81: this.state.ipa.kelas81,
                                                        kelas82: this.state.ipa.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G19Frame29' 
                                                placeholder={this.state.ipa.kkm8} 
                                                onChange={(db) => this.setState({
                                                    ipa: {
                                                        matpelId: this.state.ipa.matpelId,
                                                        kkm7: this.state.ipa.kkm7,
                                                        kelas71: this.state.ipa.kelas71,
                                                        kelas72: this.state.ipa.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.ipa.kelas81,
                                                        kelas82: this.state.ipa.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G19Frame30' 
                                                placeholder={this.state.ipa.kelas81} 
                                                onChange={(db) => this.setState({
                                                    ipa: {
                                                        matpelId: this.state.ipa.matpelId,
                                                        kkm7: this.state.ipa.kkm7,
                                                        kelas71: this.state.ipa.kelas71,
                                                        kelas72: this.state.ipa.kelas72,
                                                        kkm8: this.state.ipa.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.ipa.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G19Frame31' 
                                                placeholder={this.state.ipa.kelas82} 
                                                onChange={(db) => this.setState({
                                                    ipa: {
                                                        matpelId: this.state.ipa.matpelId,
                                                        kkm7: this.state.ipa.kkm7,
                                                        kelas71: this.state.ipa.kelas71,
                                                        kelas72: this.state.ipa.kelas72,
                                                        kkm8: this.state.ipa.kkm8,
                                                        kelas81: this.state.ipa.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group20'>
                                            <input 
                                                className='G20Frame26' 
                                                placeholder={this.state.ips.kkm7} 
                                                onChange={(db) => this.setState({
                                                    ips: {
                                                        matpelId: this.state.ips.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.ips.kelas71,
                                                        kelas72: this.state.ips.kelas72,
                                                        kkm8: this.state.ips.kkm8,
                                                        kelas81: this.state.ips.kelas81,
                                                        kelas82: this.state.ips.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G20Frame27' 
                                                placeholder={this.state.ips.kelas71} 
                                                onChange={(db) => this.setState({
                                                    ips: {
                                                        matpelId: this.state.ips.matpelId,
                                                        kkm7: this.state.ips.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.ips.kelas72,
                                                        kkm8: this.state.ips.kkm8,
                                                        kelas81: this.state.ips.kelas81,
                                                        kelas82: this.state.ips.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G20Frame28' 
                                                placeholder={this.state.ips.kelas72} 
                                                onChange={(db) => this.setState({
                                                    ips: {
                                                        matpelId: this.state.ips.matpelId,
                                                        kkm7: this.state.ips.kkm7,
                                                        kelas71: this.state.ips.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.ips.kkm8,
                                                        kelas81: this.state.ips.kelas81,
                                                        kelas82: this.state.ips.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G20Frame29' 
                                                placeholder={this.state.ips.kkm8} 
                                                onChange={(db) => this.setState({
                                                    ips: {
                                                        matpelId: this.state.ips.matpelId,
                                                        kkm7: this.state.ips.kkm7,
                                                        kelas71: this.state.ips.kelas71,
                                                        kelas72: this.state.ips.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.ips.kelas81,
                                                        kelas82: this.state.ips.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G20Frame30' 
                                                placeholder={this.state.ips.kelas81} 
                                                onChange={(db) => this.setState({
                                                    ips: {
                                                        matpelId: this.state.ips.matpelId,
                                                        kkm7: this.state.ips.kkm7,
                                                        kelas71: this.state.ips.kelas71,
                                                        kelas72: this.state.ips.kelas72,
                                                        kkm8: this.state.ips.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.ips.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G20Frame31' 
                                                placeholder={this.state.ips.kelas82} 
                                                onChange={(db) => this.setState({
                                                    ips: {
                                                        matpelId: this.state.ips.matpelId,
                                                        kkm7: this.state.ips.kkm7,
                                                        kelas71: this.state.ips.kelas71,
                                                        kelas72: this.state.ips.kelas72,
                                                        kkm8: this.state.ips.kkm8,
                                                        kelas81: this.state.ips.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group21'>
                                            <input 
                                                className='G21Frame26' 
                                                placeholder={this.state.penjas.kkm7} 
                                                onChange={(db) => this.setState({
                                                    penjas: {
                                                        matpelId: this.state.penjas.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.penjas.kelas71,
                                                        kelas72: this.state.penjas.kelas72,
                                                        kkm8: this.state.penjas.kkm8,
                                                        kelas81: this.state.penjas.kelas81,
                                                        kelas82: this.state.penjas.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G21Frame27' 
                                                placeholder={this.state.penjas.kelas71} 
                                                onChange={(db) => this.setState({
                                                    penjas: {
                                                        matpelId: this.state.penjas.matpelId,
                                                        kkm7: this.state.penjas.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.penjas.kelas72,
                                                        kkm8: this.state.penjas.kkm8,
                                                        kelas81: this.state.penjas.kelas81,
                                                        kelas82: this.state.penjas.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G21Frame28' 
                                                placeholder={this.state.penjas.kelas72} 
                                                onChange={(db) => this.setState({
                                                    penjas: {
                                                        matpelId: this.state.penjas.matpelId,
                                                        kkm7: this.state.penjas.kkm7,
                                                        kelas71: this.state.penjas.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.penjas.kkm8,
                                                        kelas81: this.state.penjas.kelas81,
                                                        kelas82: this.state.penjas.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G21Frame29' 
                                                placeholder={this.state.penjas.kkm8} 
                                                onChange={(db) => this.setState({
                                                    penjas: {
                                                        matpelId: this.state.penjas.matpelId,
                                                        kkm7: this.state.penjas.kkm7,
                                                        kelas71: this.state.penjas.kelas71,
                                                        kelas72: this.state.penjas.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.penjas.kelas81,
                                                        kelas82: this.state.penjas.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G21Frame30' 
                                                placeholder={this.state.penjas.kelas81} 
                                                onChange={(db) => this.setState({
                                                    penjas: {
                                                        matpelId: this.state.penjas.matpelId,
                                                        kkm7: this.state.penjas.kkm7,
                                                        kelas71: this.state.penjas.kelas71,
                                                        kelas72: this.state.penjas.kelas72,
                                                        kkm8: this.state.penjas.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.penjas.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G21Frame31' 
                                                placeholder={this.state.penjas.kelas82} 
                                                onChange={(db) => this.setState({
                                                    penjas: {
                                                        matpelId: this.state.penjas.matpelId,
                                                        kkm7: this.state.penjas.kkm7,
                                                        kelas71: this.state.penjas.kelas71,
                                                        kelas72: this.state.penjas.kelas72,
                                                        kkm8: this.state.penjas.kkm8,
                                                        kelas81: this.state.penjas.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group22'>
                                            <input 
                                                className='G22Frame26' 
                                                placeholder={this.state.seni.kkm7} 
                                                onChange={(db) => this.setState({
                                                    seni: {
                                                        matpelId: this.state.seni.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.seni.kelas71,
                                                        kelas72: this.state.seni.kelas72,
                                                        kkm8: this.state.seni.kkm8,
                                                        kelas81: this.state.seni.kelas81,
                                                        kelas82: this.state.seni.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G22Frame27' 
                                                placeholder={this.state.seni.kelas71} 
                                                onChange={(db) => this.setState({
                                                    seni: {
                                                        matpelId: this.state.seni.matpelId,
                                                        kkm7: this.state.seni.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.seni.kelas72,
                                                        kkm8: this.state.seni.kkm8,
                                                        kelas81: this.state.seni.kelas81,
                                                        kelas82: this.state.seni.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G22Frame28' 
                                                placeholder={this.state.seni.kelas72} 
                                                onChange={(db) => this.setState({
                                                    seni: {
                                                        matpelId: this.state.seni.matpelId,
                                                        kkm7: this.state.seni.kkm7,
                                                        kelas71: this.state.seni.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.seni.kkm8,
                                                        kelas81: this.state.seni.kelas81,
                                                        kelas82: this.state.seni.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G22Frame29' 
                                                placeholder={this.state.seni.kkm8} 
                                                onChange={(db) => this.setState({
                                                    seni: {
                                                        matpelId: this.state.seni.matpelId,
                                                        kkm7: this.state.seni.kkm7,
                                                        kelas71: this.state.seni.kelas71,
                                                        kelas72: this.state.seni.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.seni.kelas81,
                                                        kelas82: this.state.seni.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G22Frame30' 
                                                placeholder={this.state.seni.kelas81} 
                                                onChange={(db) => this.setState({
                                                    seni: {
                                                        matpelId: this.state.seni.matpelId,
                                                        kkm7: this.state.seni.kkm7,
                                                        kelas71: this.state.seni.kelas71,
                                                        kelas72: this.state.seni.kelas72,
                                                        kkm8: this.state.seni.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.seni.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G22Frame31' 
                                                placeholder={this.state.seni.kelas82} 
                                                onChange={(db) => this.setState({
                                                    seni: {
                                                        matpelId: this.state.seni.matpelId,
                                                        kkm7: this.state.seni.kkm7,
                                                        kelas71: this.state.seni.kelas71,
                                                        kelas72: this.state.seni.kelas72,
                                                        kkm8: this.state.seni.kkm8,
                                                        kelas81: this.state.seni.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <div className='Group23'>
                                            <input 
                                                className='G23Frame26' 
                                                placeholder={this.state.bdaerah.kkm7} 
                                                onChange={(db) => this.setState({
                                                    bdaerah: {
                                                        matpelId: this.state.bdaerah.matpelId,
                                                        kkm7: db.target.value,
                                                        kelas71: this.state.bdaerah.kelas71,
                                                        kelas72: this.state.bdaerah.kelas72,
                                                        kkm8: this.state.bdaerah.kkm8,
                                                        kelas81: this.state.bdaerah.kelas81,
                                                        kelas82: this.state.bdaerah.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G23Frame27' 
                                                placeholder={this.state.bdaerah.kelas71} 
                                                onChange={(db) => this.setState({
                                                    bdaerah: {
                                                        matpelId: this.state.bdaerah.matpelId,
                                                        kkm7: this.state.bdaerah.kkm7,
                                                        kelas71: db.target.value,
                                                        kelas72: this.state.bdaerah.kelas72,
                                                        kkm8: this.state.bdaerah.kkm8,
                                                        kelas81: this.state.bdaerah.kelas81,
                                                        kelas82: this.state.bdaerah.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G23Frame28' 
                                                placeholder={this.state.bdaerah.kelas72} 
                                                onChange={(db) => this.setState({
                                                    bdaerah: {
                                                        matpelId: this.state.bdaerah.matpelId,
                                                        kkm7: this.state.bdaerah.kkm7,
                                                        kelas71: this.state.bdaerah.kelas71,
                                                        kelas72: db.target.value,
                                                        kkm8: this.state.bdaerah.kkm8,
                                                        kelas81: this.state.bdaerah.kelas81,
                                                        kelas82: this.state.bdaerah.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G23Frame29' 
                                                placeholder={this.state.bdaerah.kkm8} 
                                                onChange={(db) => this.setState({
                                                    bdaerah: {
                                                        matpelId: this.state.bdaerah.matpelId,
                                                        kkm7: this.state.bdaerah.kkm7,
                                                        kelas71: this.state.bdaerah.kelas71,
                                                        kelas72: this.state.bdaerah.kelas72,
                                                        kkm8: db.target.value,
                                                        kelas81: this.state.bdaerah.kelas81,
                                                        kelas82: this.state.bdaerah.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G23Frame30' 
                                                placeholder={this.state.bdaerah.kelas81} 
                                                onChange={(db) => this.setState({
                                                    bdaerah: {
                                                        matpelId: this.state.bdaerah.matpelId,
                                                        kkm7: this.state.bdaerah.kkm7,
                                                        kelas71: this.state.bdaerah.kelas71,
                                                        kelas72: this.state.bdaerah.kelas72,
                                                        kkm8: this.state.bdaerah.kkm8,
                                                        kelas81: db.target.value,
                                                        kelas82: this.state.bdaerah.kelas82
                                                    }
                                                })}/>
                                            <input 
                                                className='G23Frame31' 
                                                placeholder={this.state.bdaerah.kelas82} 
                                                onChange={(db) => this.setState({
                                                    bdaerah: {
                                                        matpelId: this.state.bdaerah.matpelId,
                                                        kkm7: this.state.bdaerah.kkm7,
                                                        kelas71: this.state.bdaerah.kelas71,
                                                        kelas72: this.state.bdaerah.kelas72,
                                                        kkm8: this.state.bdaerah.kkm8,
                                                        kelas81: this.state.bdaerah.kelas81,
                                                        kelas82: db.target.value
                                                    }
                                                })}/>
                                        </div>
                                        <button className='saveNilai' type='submit'>Simpan</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashBoardPengisianDataAkademik