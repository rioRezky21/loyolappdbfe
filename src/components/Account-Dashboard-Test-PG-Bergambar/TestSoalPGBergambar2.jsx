import React, { Component } from 'react'
import './TestSoalPGBergambar2CSS.css'
import {ProgressBar, Container, Button} from 'react-bootstrap'
import Gambar1 from '../../assets/images/gambar1.png'
import Gambar2 from '../../assets/images/gambar2.png'
import Gambar3 from '../../assets/images/gambar3.png'
import Gambar4 from '../../assets/images/gambar4.png'
import Zoom from '../../assets/images/zoom_in_24px.png'
import Timer from './Timer'
import Timer2 from './Timer2'
import Axios from 'axios'

export default class TestSoalPGBergambar2 extends Component {
    constructor(){
        super()
        this.state ={
            noSoal: 1,
            totalSoal: 10,
            soal:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor dui turpis, interdum vestibulum sapien vehicula non. Integer vulputate lacus eget urna gravida sollicitudin. Aliquam eu dui ut tortor dictum efficitur. Pellentesque pretium semper mattis. Suspendisse laoreet enim eget hendrerit placerat. Quisque at ligula ac sapien mattis pretium. Aliquam aliquet, massa at porttitor lacinia, metus nunc  porttitor nisi, ut suscipit dui dolor vitae quam.',
            pilA: Gambar1,
            pilB: Gambar2,
            pilC: Gambar3,
            pilD: Gambar4,
            next: false,
            newSoal: false,
            jawaban: '',
            submit: false
        }
    }

    timeOutHandler=(state) =>{
        this.setState({next : state})
    }

    noSoalHandler=(state) =>{
        this.setState({noSoal: this.state.noSoal += state})
    }

    newSoalHandler=(state)=>{
        this.setState({newSoal: state})
    }

    movePage(){
        document.location.href="account-dashboard-tes-online-ujian-akademik-result"
    }

    submitJawabanHandler=(state)=>{
        this.setState({submit: state})
    }

    componentDidMount() {
        const urlGet = 'http://localhost:8090/api/soalPilihanGanda/readAll?filter=soal_ganda_id = '+ this.state.noSoal +'&orderby&top&skip'
        Axios.get(urlGet).then(respone => {
            console.log(respone)
            this.setState({
                soal: respone.data.items[0].pertanyaanGanda,
                // pilA : respone.data.items[0].pilihanA,
                // pilB : respone.data.items[0].pilihanB,
                // pilC : respone.data.items[0].pilihanC,
                // pilD : respone.data.items[0].pilihanD
            })
        })
    }

    componentWillUpdate(props , state){
        if (state.newSoal === true){
            const urlGet = 'http://localhost:8090/api/soalPilihanGanda/readAll?filter=soal_ganda_id = '+ this.state.noSoal +'&orderby&top&skip'
            Axios.get(urlGet).then(respone => {
                console.log(respone)
                this.setState({
                    soal: respone.data.items[0].pertanyaanGanda,
                    // pilA : respone.data.items[0].pilihanA,
                    // pilB : respone.data.items[0].pilihanB,
                    // pilC : respone.data.items[0].pilihanC,
                    // pilD : respone.data.items[0].pilihanD
                })
            })
            this.setState({newSoal: false})
        }

        if(state.noSoal === 11){
            this.movePage()
        }

        if(state.submit === true){
            const urlPost = 'http://localhost:8090/api/jawabanPG/postJawaban'
            const data = {
                calonSiswa:{
                    siswaId : 4
                },
                soalPilihanGanda:{
                    soalGandaId: this.state.noSoal -= 1
                },
                jawabanSiswaGanda: this.state.jawaban,
                createdBy: 4
            }
            Axios.post(urlPost, data)
            this.setState({submit: false})
            this.setState({jawaban: ''})
        }
    }

    render() {
        return (
            <div className="tes-online-soal-bergambar-2">
                <Container className='main-body'>
                <div className="header">  
                    <Timer2/>
                </div>
                <div className='content'>
                    <div className='status'>
                        <p className="halaman">{this.state.noSoal} | {this.state.totalSoal}</p>
                        <Timer timeOut={this.timeOutHandler} next={this.state.next} soal={this.noSoalHandler} newSoal={this.newSoalHandler} submit={this.submitJawabanHandler}/>
                    </div>
                    <div className='soal-pg'>
                    <p>{this.state.soal}</p>
                    </div>
                    <div className="jawaban-pg">
                        <a href="#" className='jawabs'>
                            <img src={this.state.pilA} className='jawab' onClick={()=> this.setState({jawaban: 'a'})}/>
                            <p className='huruf'>A.</p>
                            <a href="#" className="zoom"><img src={Zoom}/></a>
                        </a>
                        <a href="#" className='jawabs'>
                            <img src={this.state.pilB} className='jawab' onClick={()=> this.setState({jawaban: 'b'})}/>
                            <p className='huruf'>B.</p>
                            <a href="#" className="zoom"><img src={Zoom}/></a>
                        </a>
                        <a href="#" className='jawabs'>
                            <img src={this.state.pilC} className='jawab' onClick={()=> this.setState({jawaban: 'c'})}/>
                            <p className='huruf'>C.</p>
                            <a href="#" className="zoom"><img src={Zoom}/></a>
                        </a>
                        <a href="#" className='jawabs'>
                            <img src={this.state.pilD} className='jawab' onClick={()=> this.setState({jawaban: 'd'})}/>
                            <p className='huruf'>D.</p>
                            <a href="#" className="zoom"><img src={Zoom}/></a>
                        </a>
                    </div>
                </div>
                <a href="#" className='footer' onClick={()=> this.setState({noSoal: this.state.noSoal += 1 , next: true, newSoal: true, submit: true})}>
                    {'>'}
                </a>
            </Container>
            </div>
        )
    }
}
