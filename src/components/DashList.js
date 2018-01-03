import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import {
    List,
    ListItem,
    Font
} from '../styled-components/Style';

class DashList extends Component {
    constructor(props){
        super(props);
        this.state = {
            linkStyle: {
                color:"rgb(247,247,247)",
                fontWeight:'200'
            },
            list: [
                {
                    title: '新建文章',
                    path: '/add',
                    font: 'fas fa-plus'
                },
                {
                    title: '博文管理',
                    path: '/list',
                    font: 'fas fa-file-alt'
                },
                {
                    title: '标签管理',
                    path: '/tags',
                    font: 'fas fa-tag'
                },
                {
                    title: '评论管理',
                    path: '/comments',
                    font: 'fas fa-comments'
                },
                {
                    title: '个人资料',
                    path: '/user',
                    font: 'fas fa-user'
                },
            ]
        }
    }
    render(){
        const {list, linkStyle} = this.state;
        return (
        <List width="232px" margin="16px 0">
           {
               list.map(item=>{
                   return <DashItem linkStyle={linkStyle} {...item} key={item.path}></DashItem>
               })
           }
        </List>
        )
    }
}

const DashItem = (props)=>(
    <ListItem align="center" hoverbackground="rgba(0,0,0,.1)">
        <Link to={props.path} style={props.linkStyle}>
            <Font className={props.font} color="rgb(247,247,247)" fontSize="14px">
            </Font>
            {props.title}
        </Link>
    </ListItem>
)

export default DashList;