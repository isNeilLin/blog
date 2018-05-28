import React, { Component } from 'react';
import { SearchInput,Icon } from '../styled-components/Style.js';
import {
  NavLink
} from 'react-router-dom';
import IconSrc from '../asset/icons/head.jpg';
import { inject } from 'mobx-react';

@inject('store')
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: '',
            showInput: false,
            menu: false
        }
    }

    keyUp = (e)=>{
        this.setState({
            searchValue: e.target.value
        })
        if(e.keyCode===13){
            const value = this.state.searchValue;
            this.props.store.filterArticle(value);
            this.setState({
                showInput: false
            })
        }else if(!e.target.value){
            return this.cancelSearch();
        }
    }
    showMenu = ()=>{
        this.setState({
            menu: !this.state.menu
        })
    }
    search = (e)=>{
        console.log(this.state.showInput)
        if(!this.state.showInput){
            this.setState({
                showInput: true
            })
            console.log(this.state)
        }else{
            const value = this.state.searchValue;
            this.props.store.filterArticle(value);
            this.setState({
                showInput: false
            })
        }
    }

    cancelSearch = ()=>{
        this.props.store.filterArticle();
    }

    render(){
        console.log(this.state.showInput)
        const IconStyle = {
            width: '42px',
            verticalAlign: 'middle',
            padding: 0,
            border: 'none'
        }
        const SearchArea = ()=>{
            if(this.state.showInput){
                return (<div className="Search-Area">
                    <SearchInput type="text" placeholder="搜索..." onKeyUp={this.keyUp}/>
                    <span onClick={this.search}><i className="searchIcon fas fa-search"></i></span>
            </div>)
            }else{
                return (<div className="Search-Area">
                    <span onClick={this.search}><i className="searchIcon fas fa-search"></i></span>
                </div>)
            }
        }
        const PhoneMenu = ()=>{
            if(this.state.menu){
                return (
                    <div className="phoneMenuContent" onClick={this.showMenu}> 
                        <div className="phone-Header-Tab">
                            <NavLink to="/" exact activeClassName="active">
                            <i className="TabIcon fas fa-home"></i>
                            首页</NavLink>
                        </div>
                        <div className="phone-Header-Tab">
                            <NavLink to="/archive" activeClassName="active">
                            <i className="TabIcon fas fa-archive"></i>
                            归档</NavLink>
                        </div>
                        <div className="phone-Header-Tab">
                            <NavLink to="/labels" activeClassName="active">
                            <i className="TabIcon fas fa-tags"></i>
                            标签</NavLink>
                        </div>
                        <div className="phone-Header-Tab">
                            <NavLink to="/about" activeClassName="active">
                            <i className="TabIcon fas fa-user"></i>
                            关于</NavLink>
                        </div>
                    </div>
                )
            }else{
                return '';
            }
        }
        return (
        <div className="Header">
            <span onClick={this.showMenu}><i className="fas fa-bars phoneMenu"></i></span>
            <div className="AuthorTitle"><Icon src={IconSrc} style={IconStyle}/> Neil</div>
            <div className="Header-Tab">
                <NavLink to="/" exact activeClassName="active">
                <i className="TabIcon fas fa-home"></i>
                首页</NavLink>
            </div>
            <div className="Header-Tab">
                <NavLink to="/archive" activeClassName="active">
                <i className="TabIcon fas fa-archive"></i>
                归档</NavLink>
            </div>
            <div className="Header-Tab">
                <NavLink to="/labels" activeClassName="active">
                <i className="TabIcon fas fa-tags"></i>
                标签</NavLink>
            </div>
            <div className="Header-Tab">
                <NavLink to="/about" activeClassName="active">
                <i className="TabIcon fas fa-user"></i>
                关于</NavLink>
            </div>
            <SearchArea/>
            <PhoneMenu/>
        </div>
        )
    }
}
export default Header;