import React from 'react'
import Logo from '../../assets/images/ellipse.png'
import './MulaiUjianActiveState.css'
import Container from 'react-bootstrap/Container'

class MulaiUjianActiveState extends React.Component {

   render() {
       return (
           <Container className = 'mulaiUjianActiveState'>

                <label>
                    <h1 className = 'header'>Catatan Ujian</h1>
                </label>

                <div className = 'catatanUjian1'>
                    <img className = 'image' src = {Logo}/>
                    <h2 className = 'catatan'>Durasi pengerjaan ujian adalah 1 jam 30 menit.</h2>
                </div> 

                <div className = 'catatanUjian2'>
                    <img className = 'image' src = {Logo}/>
                    <h2 className = 'catatan'>Ujian terdiri dari 40 soal pilihan ganda dan 5 soal essai. </h2>
                </div> 

                <div className = 'catatanUjian3'>
                    <h2 className = 'catatan'>Ujian dimulai dalam : </h2>
                </div> 

                <div className = 'catatanUjian4'>
                    <h2 className = 'catatan'>00 Hari : 00 Jam : 00 Menit : 00 Detik </h2>
                    <button type = 'submit' className = 'mulaiUjian'>Mulai Ujian</button>
                </div>      
           </Container>
       )
   }
}


export default MulaiUjianActiveState;