import Modal from 'react-modal'
import React from 'react'
import close from '../../assets/images/close.svg'


class Rapor56 extends React.Component{
    constructor(){
      super()
      this.state ={
          raporSmt5:'',
          raporSmt6:'',
      }
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

    render(){
      return (
        <div>
        <Modal isOpen={this.props.stateRapor} onRequestClose={()=> this.props.showRapor(false)} style={
          {
            content:{
              position: 'absolute',
              maxWidth: '345px',
              maxHeight: '260px',
              margin: 'auto',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
            }
          }
        }>
            <div className="upload-rapor">
                <label className="title">UPLOAD RAPOR</label>
                <input className="upload-rapor-smt" type="file" id="uploadRapor5" onChange={this.rapor5Handler}/>
                <input className="upload-rapor-smt" type="file" id="uploadRapor6" onChange={this.rapor6Handler}/>
                <label className="button" htmlFor="uploadRapor5">UPLOAD RAPOR SEMESTER 5</label>
                <label className="button" style={{marginTop : '110px'}} htmlFor="uploadRapor6">UPLOAD RAPOR SEMESTER 6</label>
                <button className="button" style={{marginTop: '170px', marginLeft:'80px'}} onClick={()=>this.props.showRapor(false)}>SIMPAN</button>
            </div>
        </Modal>
      </div>
      );
    }
}
export default Rapor56