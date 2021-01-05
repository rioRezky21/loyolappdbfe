import Modal from 'react-modal'
import React from 'react'


class SK extends React.Component{
    render(){
      return (
        <div>
        <Modal isOpen={this.props.stateSK} onRequestClose={()=> this.props.showSK(false)} style={
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
                <img className="SK" src={this.props.fileSK}/>
            </div>
        </Modal>
      </div>
      );
    }
}
export default SK
  
  