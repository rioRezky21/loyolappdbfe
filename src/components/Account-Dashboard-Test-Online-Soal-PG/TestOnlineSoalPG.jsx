import React, { Component } from 'react'
import './TestOnlineSoalPGCSS.css'
import {ProgressBar, Container, Button} from 'react-bootstrap'
import Axios from 'axios'
import Timer from './Timer'
import Timer2 from './Timer2'

export default class TestOnlineSoalPG extends Component {
    constructor() {
        super()
        this.state = {
            noSoal: 1,
            totalSoal: 10,
            soal: "",
            pilihanA: "",
            pilihanB: "",
            pilihanB: "",
            pilihanC: "",
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

    componentDidMount() {
        const urlGet = 'http://localhost:8090/api/soalPilihanGanda/readAll?filter=soal_ganda_id = '+ this.state.noSoal +'&orderby&top&skip'
        Axios.get(urlGet).then(respone => {
            console.log(respone)
            this.setState({
                soal: respone.data.items[0].pertanyaanGanda,
                pilihanA : respone.data.items[0].pilihanA,
                pilihanB : respone.data.items[0].pilihanB,
                pilihanC : respone.data.items[0].pilihanC,
                pilihanD : respone.data.items[0].pilihanD
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
                    pilihanA : respone.data.items[0].pilihanA,
                    pilihanB : respone.data.items[0].pilihanB,
                    pilihanC : respone.data.items[0].pilihanC,
                    pilihanD : respone.data.items[0].pilihanD
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
        }
    }

    render() {

        return (
            <div className="tes-online-soal-pg">
                <Container className='main-body'>
                <div className="header">
                    <Timer2 />  
                    
                </div>
                <div className='content'>
                    <div className='status'>
                        <p className="halaman">{this.state.noSoal} | {this.state.totalSoal}</p>
                        <Timer timeOut={this.timeOutHandler} next={this.state.next} soal={this.noSoalHandler} newSoal={this.newSoalHandler} />
                        
                    </div>
                    <div className='soal-pg'>

                    <p>{this.state.soal}</p>

                    </div>
                    <div className="jawaban-pg">
                        <Button className='jawab' variant='warning' onClick={()=> this.setState({jawaban: 'a'})}>
                            <p className='huruf'>A.</p>
                            <p className='answer'>{this.state.pilihanA}</p>
                        </Button>
                        <Button className='jawab' variant='warning' onClick={()=> this.setState({jawaban: 'b'})}>
                            <p className='huruf'>B.</p>
                            <p className='answer'>{this.state.pilihanB}</p>
                        </Button>
                        <Button className='jawab' variant='warning' onClick={()=> this.setState({jawaban: 'c'})}>
                            <p className='huruf'>C.</p>
                            <p className='answer'>{this.state.pilihanC}</p>
                        </Button>
                        <Button className='jawab' variant='warning' onClick={()=> this.setState({jawaban: 'd'})}>
                            <p className='huruf'>D.</p>
                            <p className='answer'>{this.state.pilihanD}</p>
                        </Button>
                    </div>
                </div>
                <a href="#" className='footer' onClick={()=> this.setState({noSoal: this.state.noSoal += 1 , next: true, newSoal: true, submit: true})}>
                    >
                </a>
                
            </Container>
            </div>
        )
    }
}
