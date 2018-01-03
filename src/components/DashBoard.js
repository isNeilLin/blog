import React, { Component } from 'react';
import {
    DashBoard,
    Icon,
    BackToBlog,
    CustomLink,
} from '../styled-components/Style'
import IconSrc from '../asset/icons/head.jpg';
import DashList from './DashList';
class DashBoardComponent extends Component {
    render(){
        return (
        <DashBoard>
            <Icon width="80px" src={IconSrc}></Icon>
            <BackToBlog>
                <CustomLink href="/">博客首页</CustomLink>
            </BackToBlog>
            <DashList></DashList>
        </DashBoard>
        )
    }
}

export default DashBoardComponent;