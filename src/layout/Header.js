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
            searchValue: ''
        }
    }

    keyUp = (e)=>{
        this.setState({
            searchValue: e.target.value
        })
        if(e.keyCode===13){
            return this.search();
        }else if(!e.target.value){
            return this.cancelSearch();
        }
    }

    search = (e)=>{
        const value = this.state.searchValue;
        this.props.store.filterArticle(value);
    }

    cancelSearch = ()=>{
        this.props.store.filterArticle();
    }

    render(){
        const IconStyle = {
            width: '42px',
            verticalAlign: 'middle',
            padding: 0,
            border: 'none'
        }
        return (
        <div className="Header">
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
            <div className="Search-Area">
                <SearchInput type="text" placeholder="搜索..." onKeyUp={this.keyUp}/>
                <i className="searchIcon fas fa-search" onClick={this.search}></i>
            </div>
        </div>
        )
    }
}
export default Header;