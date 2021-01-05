import Modal from 'react-modal'
import React from 'react'


class FotoSmp extends React.Component{
    render(){
      return (
        <div>
        <Modal isOpen={this.props.stateFoto} onRequestClose={()=> this.props.showFoto(false)} style={
          {
            content:{
              position: 'absolute',
              maxWidth: '600px',
              maxHeight: '790px',
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
                <img className="SK" src={this.props.fileFoto}/>
            </div>
        </Modal>
      </div>
      );
    }
}
export default FotoSmp