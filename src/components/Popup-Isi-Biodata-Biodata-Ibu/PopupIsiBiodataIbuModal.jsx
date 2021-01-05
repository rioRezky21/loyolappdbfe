import React, { useState } from 'react'
import Modal from 'react-modal'
import './PopupIsiBiodataIbuCSS.css'
import axios from 'axios'
import Check from '../../assets/images/checklist.png'


class PopupIsiBiodataIbuModal extends React.Component{  
    constructor(){
        super()
        this.state={
            showCompoDataIbu : false,
            showCompoDataDiri : true,
            showCompoDataAyah : false,
            selected: 'option1',
            emptyInput : "",
            namaLengkap : '',
            agama : '',
            alamat : '',
            kecamatan : '',
            kota : '',
            noHp : '',
            email : '',
            uploadFoto : '',
            namaIbu : '',
            alamatIbu : '',
            agamaIbu : '',
            kecamatanIbu : '',
            kotaIbu : '',
            noHpIbu : '',
            emailIbu : '',
            namaAyah : '',
            agamaAyah : '',
            alamatAyah : '',
            kecamatanAyah : '',
            kotaAyah : '',
            noHpAyah : '',
            emailAyah : '',
            showImage : false

        }
    }
    handleFile=(foto)=>{
        let file = foto.target.files[0]
        console.log(foto.target.files[0])
        this.setState({
            uploadFoto : file
        })
    }
    uploadFile(){
        const urlPost = 'http://localhost:8090/api/calonSiswa/updateBiodataTest'
        const fromData = new FormData();
        fromData.append('uploadFoto', this.state.uploadFoto)
        fromData.append('namaSiswa', this.state.namaLengkap)
        axios.post(urlPost, fromData)
        .then(res=> console.log(res))
    }
    saveTo(e){
        const urlPost = 'http://localhost:8090/api/calonSiswa/updateBiodata'
        const data = {
            ortuNamaIbu : this.state.namaIbu,
            ortuAgamaIbu : this.state.agamaIbu,
            ortuAlamatIbu : this.state.alamatIbu,
            ortuKecamatanIbu : this.state.kecamatanIbu,
            ortuKotaIbu : this.state.kotaIbu,
            ortuHpIbu : this.state.noHpIbu,
            ortuEmailIbu : this.state.emailIbu,
            ortuNamaAyah : this.state.namaAyah,
            ortuAgamaAyah : this.state.agamaAyah,
            ortuAlamatAyah : this.state.alamatAyah,
            ortuKecamatanAyah : this.state.kecamatanAyah,
            ortuKotaAyah : this.state.kotaAyah,
            ortuHpAyah : this.state.noHpAyah,
            ortuEmailAyah : this.state.emailAyah,
            namaSiswa : this.state.namaLengkap,
            agama : this.state.agama,
            alamatSiswa : this.state.alamat,
            kecamatan : this.state.kecamatan,
            kota : this.state.kota,
            hpSiswa : this.state.noHp,
            emailSiswa : this.state.email,
            fotoSiswa : this.state.uploadFoto
        }
        axios.post(urlPost, data)
        console.log(data)
    }
    saveAllData(){
        this.uploadFile()
        this.saveTo()
    }
    dataIbu(){
        this.setState({ showCompoDataIbu:true})
        this.setState({ showCompoDataDiri:false})
        this.setState({ showCompoDataAyah:false})
    }
    dataDiri(){
        this.setState({ showCompoDataIbu:false})
        this.setState({ showCompoDataDiri:true})
        this.setState({ showCompoDataAyah:false})
    }
    dataAyah(){
        this.setState({ showCompoDataIbu:false})
        this.setState({ showCompoDataDiri:false})
        this.setState({ showCompoDataAyah:true})
    }
    onChangeValue(event) {
        console.log(event.target.value);
    }
    showChecklistIbu(){
        if (this.state.namaIbu === '' || this.state.alamatIbu === ''
        || this.state.agamaIbu === '' || this.state.kecamatanIbu === ''
        || this.state.kotaIbu === '' || this.state.emailIbu === ''
        || this.state.noHpIbu === '') {
            return true
        }
        else {
            return false
        }
    }
    showChecklistAyah(){
        if (this.state.namaAyah === '' || this.state.alamatAyah === ''
        || this.state.agamaAyah === '' || this.state.kecamatanAyah === ''
        || this.state.kotaAyah === '' || this.state.emailAyah === ''
        || this.state.noHpAyah === '') {
            return true
        }
        else {
            return false
        }
    }
    render(){
    return(
        <div className="popupIsiBiodataIbu">
            <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
              {
                  content: {
                    position: 'absolute',
                    width: '1248px',
                    height: '712px',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    outline: 'none',
                    padding: '20px',
                    margin: 'auto'
                  }
              }
            }>      
                <form>
                    <div onChange={this.onChangeValue}>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" name="biodata" checked={this.state.selected === 'option1'}
                            onChange={(e) => this.setState({ selected: e.target.value })} className="popupIsiBiodataIbuBiodataDiriButton"
                            onClick={()=> this.dataDiri()}/>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2" name="biodata" checked={this.state.selected === 'option2'}
                            onChange={(e) => this.setState({ selected: e.target.value })} className="popupIsiBiodataIbuDataIbuButton"
                            onClick={()=> this.dataIbu()}/>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option3" name="biodata" checked={this.state.selected === 'option3'}
                            onChange={(e) => this.setState({ selected: e.target.value })} className="popupIsiBiodataIbuDataAyahButton"
                            onClick={()=> this.dataAyah()}/>
                        </label>
                    </div>
                    </div>
                </form>
                <img className="popupIsiBiodataIbuCheckList1" src={Check} hidden={this.showChecklistIbu()}></img>
                <img className="popupIsiBiodataIbuCheckList2" src={Check} hidden={this.showChecklistAyah()}></img>
                <div>
                <input type="file" className="popupIsiBiodataIbuUploadFoto" id="uploadFotoDiri" name="uploadFotoDiri" onChange={(foto) => this.handleFile(foto)}></input>

                    <form onSubmit={(e) => this.saveTo(e)}>
                        {
                        this.state.showCompoDataDiri?
                    
                        <form>
                            <label className="popupIsiBiodataIbuNamaIbu">Nama Lengkap</label> 
                            <input value={( this.state.namaLengkap )} className="popupIsiBiodataIbuInputNamaIbu" type="text" id="namaLengkap" name = "namaLengkap" onChange = {(e) => this.setState({ namaLengkap : e.target.value })}></input>
                            <label className="popupIsiBiodataIbuAlamatIbu">Alamat</label> 
                            <input value={( this.state.alamat )} className="popupIsiBiodataIbuInputAlamatIbu" type="text" id="alamat" name="alamat" onChange = {(e) => this.setState({ alamat : e.target.value })}></input>
                            <label className="popupIsiBiodataIbuAlamatIbuKecamatan">Kecamatan</label> 
                            <input value={( this.state.kecamatan )} className="popupIsiBiodataIbuInputAlamatIbuKecamatan" type="text" id="kecamatan" name="kecamatan" onChange = {(e) => this.setState({ kecamatan : e.target.value })}></input>
                            <label className="popupIsiBiodataIbuNomorHP">Nomor Handphone</label> 
                            <input value={( this.state.noHp )}className="popupIsiBiodataIbuInputNomorHP" type="text" id="noHp" name="noHp" onChange = {(e) => this.setState({ noHp : e.target.value })}></input>
                            <label className="popupIsiBiodataIbuAgama">Agama</label> 
                            <select value={( this.state.agama )} className="popupIsiBiodataIbuInputAgama" id="agama" name="agama" onChange = {(e) => this.setState({ agama : e.target.value })}>
                                <option value=""></option>
                                <option value="Islam">Islam</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Protestan">Protestan</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Budha">Budha</option>
                            </select>
                            <label className="popupIsiBiodataIbuKotaKabupaten">Kota/Kabupaten</label> 
                            <input value={( this.state.kota )} className="popupIsiBiodataIbuInputKotaKabupaten" type="text" id="kota" name="kota" onChange = {(e) => this.setState({ kota : e.target.value })}></input>
                            <label className="popupIsiBiodataIbuEmail">Email</label> 
                            <input value={( this.state.email )} className="popupIsiBiodataIbuInputEmail" type="text" id="email" name="email" onChange = {(e) => this.setState({ email : e.target.value })}></input>
                            <label className="popupIsiBiodataIbuUploadFotoDiri">Upload Foto Diri</label>
                            <whitebox className="whiteBoxHidder"></whitebox>
                        </form>
                        :null
                        }  

                        {
                        this.state.showCompoDataIbu?
                        <form>
                            <label className="popupIsiBiodataIbuNamaIbu">Nama Ibu</label> 
                            <input value={( this.state.namaIbu )} className="popupIsiBiodataIbuInputNamaIbu" type="text" id="name" name="name" onChange={(e)=> this.setState({ namaIbu : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuAlamatIbu">Alamat</label> 
                            <input value={( this.state.alamatIbu )} className="popupIsiBiodataIbuInputAlamatIbu" type="text" id="alamat" name="alamat" onChange={(e)=> this.setState({ alamatIbu : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuAlamatIbuKecamatan">Kecamatan</label> 
                            <input value={( this.state.kecamatanIbu )} className="popupIsiBiodataIbuInputAlamatIbuKecamatan" type="text" id="kecamatan" name="kecamatan" onChange={(e)=> this.setState({ kecamatanIbu : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuNomorHP">Nomor Handphone</label> 
                            <input value={( this.state.noHpIbu )} className="popupIsiBiodataIbuInputNomorHP" type="text" id="noHp" name="noHp" onChange={(e)=> this.setState({ noHpIbu : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuAgama">Agama</label> 
                            <select value={( this.state.agamaIbu )} className="popupIsiBiodataIbuInputAgama" id="agama" name="agama" onChange = {(e) => this.setState({ agamaIbu : e.target.value })}>
                                <option value=""></option>
                                <option value="Islam">Islam</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Protestan">Protestan</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Budha">Budha</option>
                            </select>
                            <label className="popupIsiBiodataIbuKotaKabupaten">Kota/Kabupaten</label> 
                            <input value={( this.state.kotaIbu )} className="popupIsiBiodataIbuInputKotaKabupaten" type="text" id="kotaKabupaten" name="kotaKabupaten" onChange={(e)=> this.setState({ kotaIbu : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuEmail">Email</label> 
                            <input value={( this.state.emailIbu )} className="popupIsiBiodataIbuInputEmail" type="text" id="email" name="email" onChange={(e)=> this.setState({ emailIbu : e.target.value})}></input> 
                            <whitebox className="whiteBoxHidder2"></whitebox>
                        </form>
                        :null
                        } 

                        {
                        this.state.showCompoDataAyah?
                        <form>
                            <label className="popupIsiBiodataIbuNamaIbu">Nama Ayah</label> 
                            <input value={( this.state.namaAyah )} className="popupIsiBiodataIbuInputNamaIbu" type="text" id="name" name="name" onChange={(e)=> this.setState({ namaAyah : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuAlamatIbu">Alamat</label> 
                            <input value={( this.state.alamatAyah )} className="popupIsiBiodataIbuInputAlamatIbu" type="text" id="alamat" name="alamat" onChange={(e)=> this.setState({ alamatAyah : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuAlamatIbuKecamatan">Kecamatan</label> 
                            <input value={( this.state.kecamatanAyah )} className="popupIsiBiodataIbuInputAlamatIbuKecamatan" type="text" id="kecamatan" name="kecamatan" onChange={(e)=> this.setState({ kecamatanAyah : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuNomorHP">Nomor Handphone</label> 
                            <input value={( this.state.noHpAyah )} className="popupIsiBiodataIbuInputNomorHP" type="text" id="noHp" name="noHp" onChange={(e)=> this.setState({ noHpAyah : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuAgama">Agama</label> 
                            <select value={( this.state.agamaAyah )} className="popupIsiBiodataIbuInputAgama" id="agama" name="agama" onChange = {(e) => this.setState({ agamaAyah : e.target.value })}>
                                <option value=""></option>
                                <option value="Islam">Islam</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Protestan">Protestan</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Budha">Budha</option>
                            </select>
                            <label className="popupIsiBiodataIbuKotaKabupaten">Kota/Kabupaten</label> 
                            <input value={( this.state.kotaAyah )} className="popupIsiBiodataIbuInputKotaKabupaten" type="text" id="kotaKabupaten" name="kotaKabupaten" onChange={(e)=> this.setState({ kotaAyah : e.target.value})}></input>
                            <label className="popupIsiBiodataIbuEmail">Email</label> 
                            <input value={( this.state.emailAyah )} className="popupIsiBiodataIbuInputEmail" type="text" id="email" name="email" onChange={(e)=> this.setState({ emailAyah : e.target.value})}></input>
                            <whitebox className="whiteBoxHidder2"></whitebox>
                        </form>
                        :null
                        } 
                        <button className="popupIsiBiodataIbuSimpanButton" onClick={()=> this.saveAllData()}>
                            <text className="popupIsiBiodataIbuSimpanButtonText">Simpan</text>
                        </button>
                    </form>
                </div>
            </Modal>

        </div>
    );
        }
}

export default PopupIsiBiodataIbuModal