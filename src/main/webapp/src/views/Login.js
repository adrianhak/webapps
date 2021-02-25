/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import './Login.css';
import InputPage from '../components/TextInput';
import { useState }
from 'react';
import Home from '../views/Home.js';
import About from '../views/About.js';
import App from '../App.js';
import TextInput from '../components/TextInput';

import { Switch, Route, withRouter }
from 'react-router-dom';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Divider } from 'primereact/divider';

import ReactDOM from 'react-dom';

import React, { Component }
from 'react';
import { InputText }
from "primereact/inputtext";
import { Button }
from "primereact/button";
import { Checkbox }
from "primereact/checkbox";
import { RadioButton }
from "primereact/radiobutton";
import fresh from '../images/fresh.jpg';
import fresh2 from '../images/fresh2.jpg';
import fresh3 from '../images/fresh3.jpg';
import fresh4 from '../images/fresh4.jpg';

class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            showRegFields:false
        }
    }
    navigate = (path) => {
        this.props.history.push(path);
    }
    
    toggleReg = () =>{
        this.setState({
            showRegFields:!this.state.showRegFields
        })
    }
   
    render() {

        const loginButton = <Button label="Login" onClick={() => this.navigate('/home')} ></Button>
        const toggleButton = <Button label="Click to register!" onClick={() => this.toggleReg()} ></Button>
        const regButton = <Button label="Register" onClick={() => this.navigate('/home')} ></Button>

        return (
                <div>
                
                    <div  className="split left">
                        <div className="background" class="left-background">
                            <div class="container" >
                
                                <img src={fresh}/>
                                <img src={fresh2}/>
                                <img src={fresh3}/>
                                <img src={fresh4}/>
                
                            </div>
                        </div>
                
                    </div>
                
                    <div  className="split right">
                        <div className="card" class="card" >
                            <div class="logo">
                                <h2 class = "login-logo">Login</h2>
                            </div>
                
                            <div className="text-input">
                
                                <div className="p-username" class="username-input">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-user"></i>
                                        </span>
                                        <InputText placeholder="Username" />
                                    </div>
                                </div>
                                <div className="p-password" class="password-input">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">**</span>
                                        <InputText placeholder="Password" />              
                                    </div>
                                </div>
                            </div>
                
                      
                            <div className="p-logButton">
                                <a href="/resetPassword/new">Forgot password?</a>
                                <div className="Login">
                                    <div className="btnLogIn">{loginButton}</div>
                                </div>
                            </div>
                           
                            <div className="register">
                                <h3 class='child inline-block-child'>No account?</h3>
                                <div class='child inline-block-child'>{toggleButton} </div>
                                
                                    {
                                    this.state.showRegFields?
                                    <div className="text-input">
               
                                        <div className="p-username" class="username-input">
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-user"></i>
                                                </span>
                                                <InputText placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="p-password" class="password-input">
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">**</span>
                                                <InputText placeholder="Password" />              
                                            </div>
                                        </div>
                                        <div className="p-password" class="password-input">
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">**</span>
                                                <InputText placeholder="Repeat password" />              
                                            </div>
                                        </div>
                                        <div>{regButton}</div>

                                    </div>
                                    :null
                                    }
                            </div>
                        </div>
                    </div>
                </div>

                );

    }

}
export default withRouter(Login);
