import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardNotifikasiSudahMelakukanDaftarUlang.css'
import DropDown from './DropDown'
import PopupIDLine from './PopupIDLine'
import SK from './SK'
import SKL from './SKL'
import Rapor from './Rapor'
import FotoSmp from './FotoSmp'
import Axios from 'axios'
import Bantuan from './../Popup-Bantuan/PopupBantuanModal'
import Rapor56 from './Rapor56'


class AccountDashboardNotifikasiSudahMelakukanDaftarUlang extends React.Component{
    constructor(){
        super()
        this.state ={
            show : false,
            showSK: false,
            showSKL: false,
            showRapor: false,
            showLihatRapor: false,
            showFoto: false,
            showBantuan: false,
            siswaId: 4,
            idLine:'',
            minatPenjurusan:'',
            suratKeputusan:'',
            scanSkl:'',
            raporSmt5:'',
            raporSmt6:'',
            fotoSmp:'',
            raporValid: false,
            fotoValid: false,
            enableButton: true,
            data: 'kosong',
            buttonStyle: {marginTop: '615px', color:'#4f4f4f', backgroundColor: '#BDBDBD'}
        }
    }
  
    popupState=(state) =>{
        this.setState({show : state})
    }

    popupBantuan = (state) => {
        this.setState({showBantuan: state})
    }

    popupSK=(state) =>{
        this.setState({showSK : state})
    }

    popupSKL=(state) =>{
        this.setState({showSKL : state})
    }

    popupRapor=(state) =>{
        this.setState({showRapor : state})
    }

    popupLihatRapor=(state) =>{
        this.setState({showLihatRapor : state})
    }

    popupFoto=(state) =>{
        this.setState({showFoto : state})
    }

    idLineChange=(state) =>{
        this.setState({idLine : state})
    }

    peminatanChange=(state)=>{
        this.setState({minatPenjurusan: state})
    }

    rapor5Change=(state) =>{
        this.setState({raporSmt5 : state})
    }

    rapor6Change=(state) =>{
        this.setState({raporSmt6 : state})
    }

    skHandler=(e)=>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({suratKeputusan: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    sklHandler=(e)=>{
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState === 2){
                this.setState({scanSkl: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    rapor5Handler=(e)=>{
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState === 2){
                this.setState({raporSmt5: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    rapor6Handler=(e)=>{
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState === 2){
                this.setState({raporSmt6: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    fotoHandler=(e)=>{
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState === 2){
                this.setState({fotoSmp: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    changeButton(){
        this.setState({enableButton: false})
    }

    changeData(){
        this.setState({data: 'ada'})
    }

    changeButtonStyle(){
        this.setState({ buttonStyle: {marginTop: '615px', color:'#24326b', backgroundColor: '#ffe500'}})
    }

    componentDidMount() {
        const urlGet = 'http://25.10.143.231:8090/api/daftarUlangLoadData/view?filter=siswaId=4&orderby=&top=&skip=&parent_code='
        Axios.get(urlGet).then(response => {
            console.log(response)
            this.setState({
                idLine: response.data.items[0].dusIdLine,
                minatPenjurusan: response.data.items[0].minatPenjurusan,
                suratKeputusan:response.data.items[0].suratKeputusan,
                scanSkl:response.data.items[0].scanSkl,
                raporSmt5:response.data.items[0].raporSmt5,
                raporSmt6:response.data.items[0].raporSmt6,
                fotoSmp: response.data.items[0].fotoSmp
            })
            console.log(this.state)
        })
    }

    componentWillUpdate(props , state){
        if (state.data === 'kosong'){
            if(state.raporSmt5.length >= 1 && state.raporSmt6.length >= 1 && state.fotoSmp.length >= 1){
                console.log('updated!' , state)
                this.changeButton()
                this.changeData()
                this.changeButtonStyle()
            }
        }
    }

    saveTo(e){
        e.preventDefault()
        const urlPut = 'http://25.10.143.231:8090/api/dafulSiswa'
        const urlPost = 'http://25.10.143.231:8090/api/daful/rapor'
        const daful = {
            siswaId: this.state.siswaId,
            idLine: this.state.idLine,
            minatPenjurusan: this.state.minatPenjurusan,
            suratKeputusan: this.state.suratKeputusan,
            scanSkl: this.state.scanSkl,
            fotoSmp: this.state.fotoSmp
        }
        const data ={
            siswaId: this.state.siswaId,
            raporSmt5: this.state.raporSmt5,
            raporSmt6: this.state.raporSmt6
        }
        Axios.post(urlPut, daful)
        Axios.post(urlPost, data)
    }

    render(){
        return(
            <div className="content-notif-sudah-daful">
                <div className="account-dashboard" style={{height:'1100px', backgroundColor: '#F5F6FA'}}>
                    <div className="container-account-dashboard" style={{backgroundColor: '#F5F6FA'}}>
                        <a href="/account-dashboard">
                            <img class="header-logo" src={Logo}></img>
                        </a>
                        <header>
                            <h1 class="greet">Halo, Aaron</h1>
                        </header>
                        <ul>
                            <Bantuan state={this.state.showBantuan} stateShow={this.popupBantuan}/>
                            <li class="bantuan" style={{position: 'abolsute', marginTop: '-130px'}}><a href="#" onClick={() => this.popupBantuan(true)}>Bantuan</a></li>
                            <li class="logout" style={{position: 'abolsute', marginTop: '-130px'}}><a href="/landing-page-screen">Logout</a></li>
                        </ul>
                        <main>
                            <div className="main-content-notif-daful">
                                <text className="nama-jalur">Jalur Prestasi</text>
                                <p className="paragraph">Satu langkah lagi untuk menjadi bagian dari
                                SMA Kolese Loyola Semarang.
                                Silahkan input data dan upload berkas2 yang tertera dibawah ini.</p>
                                <container className="box">
                                    <text className="title">Tahap Akhir</text>
                                    <form onSubmit={(e) => this.saveTo(e)}>
                                        <point1>
                                            <ellipse className="dot"/>
                                            <text className="subtitle">Pengisian ID Line</text>
                                            <button className="button" onClick={()=>this.popupState(true)}>ISI DATA</button>
                                            <PopupIDLine state={this.state.show} stateShow={this.popupState} stateId={this.idLineChange}/>
                                        </point1>
                                        <point2>
                                            <ellipse className="dot" style={{marginTop: '180px'}}/>
                                            <text className="subtitle" style={{marginTop: '178px'}}>Pemilihan minat jurusan</text>
                                            <DropDown statePeminatan={this.peminatanChange}/>
                                        </point2>
                                        <point3>
                                            <ellipse className="dot" style={{marginTop: '250px'}}/>
                                            <text className="subtitle" style={{marginTop: '248px'}}>Upload foto surat keputusan</text>
                                            <input className="upload-sk" type="file" id="uploadSK" onChange={this.skHandler}/>
                                            <label className="button" style={{marginTop: '255px'}} htmlFor="uploadSK">UPLOAD ULANG</label>
                                            <text className="link"><a href="#">Download SK</a></text>
                                            <SK stateSK={this.state.showSK} showSK={this.popupSK} fileSK={this.state.suratKeputusan}/>
                                            <text className="link" style={{marginLeft:'130px'}}><a href="#" onClick={()=>this.popupSK(true)}>Lihat Foto</a></text>
                                        </point3>
                                        <point4>
                                            <ellipse className="dot" style={{marginTop: '340px'}}/>
                                            <text className="subtitle" style={{marginTop: '338px'}}>Upload foto scan SKL</text>
                                            <input className="upload-sk" type="file" id="uploadSKL" onChange={this.sklHandler}/>
                                            <label className="button" style={{marginTop: '345px'}} htmlFor="uploadSKL">UPLOAD ULANG</label>
                                            <SKL stateSKL={this.state.showSKL} showSKL={this.popupSKL} fileSKL={this.state.scanSkl}/>
                                            <text className="link" style={{marginTop: '365px'}} onClick={()=>this.popupSKL(true)}><a href="#">Lihat Foto</a></text>
                                        </point4>
                                        <point5>
                                            <ellipse className="dot" style={{marginTop: '430px'}}/>
                                            <text className="subtitle" style={{marginTop: '428px'}}>Upload foto scan rapor smt 5 & 6</text>
                                            <label className="button" style={{marginTop: '435px'}} onClick={()=> this.popupRapor(true)}>UPLOAD</label>
                                            <Rapor56 stateRapor={this.state.showRapor} showRapor={this.popupRapor} fileRapor5={this.state.raporSmt5} fileRapor6={this.state.raporSmt6}/>
                                            <input className="upload-sk" type="file" id="uploadRapor5" onChange={this.rapor5Handler}/>
                                            <input className="upload-sk" type="file" id="uploadRapor6" onChange={this.rapor6Handler}/>
                                            <Rapor stateLihatRapor={this.state.showLihatRapor} showLihatRapor={this.popupLihatRapor} fileRapor5={this.state.raporSmt5} fileRapor6={this.state.raporSmt6}/>
                                            <text className="link" style={{marginTop: '455px'}} onClick={()=>this.popupLihatRapor(true)}><a href="#">Lihat Foto</a></text>
                                        </point5>
                                        <point6>
                                            <ellipse className="dot" style={{marginTop: '520px'}}/>
                                            <text className="subtitle" style={{marginTop: '518px'}}>Upload pass foto smp</text>
                                            <input className="upload-sk" type="file" id="uploadFoto" onChange={this.fotoHandler}/>
                                            <label className="button" style={{marginTop: '525px'}} htmlFor="uploadFoto">UPLOAD</label>
                                            <FotoSmp stateFoto={this.state.showFoto} showFoto={this.popupFoto} fileFoto={this.state.fotoSmp}/>
                                            <text className="link" style={{marginTop: '545px'}} onClick={()=>this.popupFoto(true)}><a href="#">Lihat Foto</a></text>
                                        </point6>
                                        <button className="button" disabled={this.state.enableButton} type="submit" style={this.state.buttonStyle}>KIRIM</button>
                                    </form>
                                </container>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountDashboardNotifikasiSudahMelakukanDaftarUlang