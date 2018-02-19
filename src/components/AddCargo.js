import React, { Component } from 'react'
import { PageHeader, Modal } from 'react-bootstrap'
import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Table } from 'react-bootstrap'
import  Button  from 'react-bootstrap-button-loader'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as parcelActions from '../actions/actions'

class AddCargo extends Component{
    constructor(props){
        super(props)

        this.fetchParcels = this.fetchParcels.bind(this)      
        this.saveRef = this.saveRef.bind(this)
        this.pushToWarehouse = this.pushToWarehouse.bind(this)
        this.state = {value: ''};
    }

    fetchParcels(){
        this.props.actions.fetchParcel(this.state.value)
        this.setState({value: ''})
    }

    pushToWarehouse(){
        this.props.actions.saveToWarehouse(this.props.parcels)
    }

    saveRef(event){
        this.setState({value: event.target.value});
    }


    render(){
        return(
            <div>
                <PageHeader className="main-table">
                    Add a pallet, bulk parcels or a single parcel
                </PageHeader>
                <div className="main-table">
                    <Form inline>
                        <FormGroup controlId="formInlineReference">
                            <ControlLabel>Reference ID</ControlLabel>{' '}
                            <FormControl type="text" value={this.state.value} onChange={this.saveRef} placeholder="reference id" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineWeight">
                            <ControlLabel>Control weight</ControlLabel>{' '}
                            <FormControl type="number" placeholder="control weight" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineTampered">
                            <ControlLabel>Tampered with</ControlLabel>{' '}
                            <Checkbox type="checkbox" />
                        </FormGroup>{' '}
                        <Button bsStyle="primary" onClick={this.fetchParcels} disabled={this.state.value.length > 0 ? false : true} loading={this.props.fetchingParcels}>Load information</Button>
                    </Form>
                    <div>

                        
                        {this.props.parcels.length > 0 ? 
                        <div className="margin-top-10">
                            <Table striped bordered condensed hover >
                                <thead>
                                    <tr>
                                        <th colSpan="1">REF_ID</th>
                                        <th colSpan="1">WEIGHT</th>
                                        <th colSpan="1">CONTENT</th>
                                        <th colSpan="1">DATE SHIPPED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    {this.props.parcels.map(item => {
                                    return(
                                        <tr>
                                            <td><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.id}</Link></td>
                                            <td><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.weight}</Link></td>
                                            <td><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.content}</Link></td>
                                            <td><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.dateShipped}</Link></td>
                                        </tr>   
                                    ) 
                                })}
                                  
                                </tbody>
                                    
                            </Table>
                            <Button md="2" bsStyle="primary" className="float-right" onClick={this.pushToWarehouse}>Save</Button>    </div> : null}
                            
                        
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(parcelActions, dispatch)
    }
}

function mapStateToProps(state, ownProps){
    console.log('STATE' + JSON.stringify(state))
    return {
        parcels: state.parcels,
        fetchingParcels: state.fetchReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCargo)