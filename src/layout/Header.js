import React, { Component } from 'react';
import { SearchInput,Icon } from '../styled-components/Style.js';
import {
  NavLink
} from 'react-router-dom';
import IconSrc from '../asset/icons/head.jpg';

class Header extends Component {
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
                <SearchInput type="text" placeholder="搜索..."/>
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
        )
    }
}
export default Header;