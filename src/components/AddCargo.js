import React, { Component } from 'react'
import { PageHeader, Modal } from 'react-bootstrap'
import { Form, FormGroup, ControlLabel, FormControl, Button, Checkbox, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as parcelActions from '../actions/actions'

class AddCargo extends Component{
    constructor(props){
        super(props)

        this.showState = this.showState.bind(this)
        this.fetchParcels = this.fetchParcels.bind(this)      
    }

    showState(){
        console.log(this.props)
    }

    fetchParcels(){
        console.log(this.props)
        this.props.actions.fetchParcel()
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
                            <FormControl type="text" placeholder="reference id" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineWeight">
                            <ControlLabel>Control weight</ControlLabel>{' '}
                            <FormControl type="number" placeholder="control weight" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineTampered">
                            <ControlLabel>Tampered with</ControlLabel>{' '}
                            <Checkbox type="checkbox" />
                        </FormGroup>{' '}
                        <Button bsStyle="primary" onClick={this.fetchParcels}>Load information</Button>
                    </Form>
                    <div>

                        <div className="margin-top-10">
                            <Table striped bordered condensed hover >
                                <thead>
                                    <tr>
                                        <th colSpan="1">REF_ID</th>
                                        <th colSpan="1">LOCATION</th>
                                        <th colSpan="1">RECIEVED</th>
                                        <th colSpan="1">NEEDS ATTENTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                              
                                </tbody>
                            </Table>
                            <Button className="float-right" md={2} bsStyle="primary" type="submit" onClick={this.showState}>Save</Button>
                        </div>
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
    return {
        parcels: state.parcels
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCargo)