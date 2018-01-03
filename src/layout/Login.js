import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    LoginContainer,
    LoginContent,
    Input,
    Icon,
    Button
} from '../styled-components/Style';
import IconSrc from '../asset/icons/head.jpg';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }
    login = ()=>{
        this.props.login();
        this.setState({
            redirect: true
        })
    }
    render(){
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to="/"/>
        }
        return (
            <LoginContainer>
                <LoginContent>
                    <Icon src={IconSrc} width="120px"></Icon>
                    <Input type="text" margin="24px 0 0 0" placeholder="用户名"/>
                    <Input type="password" margin="24px 0 24px 0" placeholder="密码"/>
                    <Button onClick={this.login}>登陆</Button>
                </LoginContent>
            </LoginContainer>
        )
    }
}

export default Login;