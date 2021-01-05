import React, { Component } from 'react'
import './TestSoalPGBergambarCSS.css'
import {ProgressBar, Container} from 'react-bootstrap'
import Gambar from '../../assets/images/britt-gaiser-hSAlu33padA-unsplash1.png'

export default class TestSoalPGBergambar extends Component {
    render() {
        return (
            <div className="tes-online-soal-bergambar">
                <Container className='main-body'>
                <div className="header">  
                    <p className='jam'>Jam ujian berakhir:<span className='waktu'>01 jam : 29 menit</span></p>
                </div>
                <div className='content'>
                    <div className='status'>
                        <p className="halaman">02 | 10</p>
                        <p className='timer'>10</p>
                        <ProgressBar className='progress' now={20} variant='danger'/>
                    </div>
                    <div className='soal-pg'>
                        <img className="gambar" src={Gambar}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor dui turpis, interdum vestibulum sapien vehicula non. Integer vulputate lacus eget urna gravida sollicitudin. Aliquam eu dui ut tortor dictum efficitur. Pellentesque pretium semper </p>
                    </div>
                    <div className="jawaban-pg">
                        <a href="#" className='jawab'>
                            <p className='huruf'>A.</p>
                            <p className='answer'>Answer A</p>
                        </a>
                        <a href="#" className='jawab'>
                            <p className='huruf'>B.</p>
                            <p className='answer'>Answer B</p>
                        </a>
                        <a href="#" className='jawab'>
                            <p className='huruf'>C.</p>
                            <p className='answer'>Answer C</p>
                        </a>
                        <a href="#" className='jawab'>
                            <p className='huruf'>D.</p>
                            <p className='answer'>Answer D</p>                        
                        </a>
                    </div>
                </div>
                <a href="#" className='footer'>
                    >
                </a>
            </Container>
            </div>
        )
    }
}
