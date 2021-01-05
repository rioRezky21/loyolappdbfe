import React from 'react'
import polygon from '../../assets/images/Polygon.png'
import { Form } from 'react-bootstrap'

export class DropDown extends React.Component{
    constructor(){
        super()
        this.state={
            ipa:'',
            dataIPA:'IPA',
            dataIPS: 'IPS',
            data: 'kosong'
        }
    }

    setIPA(){
        this.props.statePeminatan(this.state.dataIPA);
    }

    setIPS(){
        this.props.statePeminatan(this.state.dataIPS)
    }

    changeData(){
        this.setState({data: 'ada'})
    }

    componentWillUpdate(props , state){
        if (state.data === 'kosong'){
            if(state.ipa === 'IPA'){
                this.setIPA()
                this.changeData()
            }

            if(state.ipa === 'IPS'){
                this.setIPS()
                this.changeData()
            }
        }
    }

    render(){
        return(
            <div>
                <Form className="form-notif-daful">
                    <Form.Group controlId="exampleForm.SelectCustom" className="group">
                        <img class="polygon-button" src={polygon}></img>
                        <Form.Control as="select" custom className="control" onChange={(e)=>this.setState({ipa:e.target.value})}>
                        <option className="opsi"></option> 
                        <option className="opsi" value="IPA">IPA</option>
                        <option className="opsi" value="IPS">IPS</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


export default DropDown
