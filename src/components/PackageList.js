import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PackageList extends Component{
    constructor(props){
        super(props)

        this.mockData = [
            {
                'REF_ID' : "yOkKP1",
                'Recieved': "2018-01-22",
                'Locatiov': "H3-13",
                'Issue': true 
            },
            {
                'REF_ID' : "3jc6yx",
                'Recieved': "2018-01-14",
                'Locatiov': "H3-11",
                'Issue': false 
            },
            {
                'REF_ID' : "1sggoa",
                'Recieved': "2018-01-01",
                'Locatiov': "H2-01",
                'Issue': false 
            },
            {
                'REF_ID' : "VtZdZm",
                'Recieved': "2018-01-03",
                'Locatiov': "H2-02",
                'Issue': true 
            }
        ]
    }

    render(){
        return(
            <div className="main-table">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th colSpan="1">REF_ID</th>
                            <th colSpan="1">LOCATION</th>
                            <th colSpan="1">RECIEVED</th>
                            <th colSpan="1">NEEDS ATTENTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.mockData.map(item => {
                            return(
                                <tr>
                                    <td><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.REF_ID}</Link></td>
                                    <td><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.Locatiov}</Link></td>
                                    <td><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.Recieved}</Link></td>
                                    <td className={item.Issue ? 'issue' : null}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>{item.Issue ? 'Needs to be resolved' : null }</Link></td>
                                </tr>   
                            )
                        })}
                    </tbody>
            </Table>
          </div>
        )
    }
}