import React, { Component } from 'react'

export default class NavBar extends Component{
    render(){
        return(
            <div className="navbar-container">
                <ul className="navbar-ul">
                    <li>Home</li>
                    <li>Tickets</li>
                    <li>Search Parcel</li>
                    <li>Login</li>
                </ul>
            </div>
        )
    }
}