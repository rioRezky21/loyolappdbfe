import Modal from 'react-modal'
import React from 'react'

class PopupIDLine extends React.Component {
  constructor(){
    super()
    this.state ={
      show : false,
      id:''
    }
  }
  
    simpan(){
      this.props.stateId(this.state.id)
      this.props.stateShow(false)
    }
    render(){
      return (
        <div>
        <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
          {
            content:{
              position: 'absolute',
              maxWidth: '551px',
              maxHeight: '211px',
              margin: 'auto',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }
        }>
          <div className="popup-id-line">
              <text className="title">ID Line</text>
              <input className="id"
              placeholder="ID Line"
              onChange={(e)=> this.setState({id: e.target.value})}/>
              <button className="save-id-line" onClick={()=>this.simpan()}>SIMPAN</button>
          </div>
        </Modal>
      </div>
      );

    }
}
export default PopupIDLine
