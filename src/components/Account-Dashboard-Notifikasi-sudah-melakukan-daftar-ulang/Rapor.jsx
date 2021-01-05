import Modal from 'react-modal'
import React from 'react'


class Rapor extends React.Component{
    render(){
      return (
        <div>
        <Modal isOpen={this.props.stateLihatRapor} onRequestClose={()=> this.props.showLihatRapor(false)} style={
          {
            content:{
              position: 'absolute',
              maxWidth: '1175px',
              maxHeight: '785px',
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
            <div className="lihat-sk">
                <img className="SK" src={this.props.fileRapor5}/>
                <img className="SK" style={{marginLeft:'20px'}} src={this.props.fileRapor6}/>
            </div>
        </Modal>
      </div>
      );
    }
}
export default Rapor