import React,{Component} from "react";
import {Link} from 'react-router-dom';//allow us to link to differet components

export default class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link to='/' className="navbar-brand">ExerTracker</Link> 
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item active">
                      <Link to="/" className="nav-link">
                          Exercises
                      </Link>
                    </li>
                    <li className="navbar-item">
                     <Link to="/create" className="nav-link">
                         Create Exercise Log
                         </Link>
                    </li>
                    <li className="navbar-item">
                     <Link to="/user" className="nav-link">
                         Create User
                         </Link>
                    </li>
                </ul>
                </div>
            </nav>       
             );
    }
}