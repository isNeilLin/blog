import React, { Component } from 'react';
import {
    ContentContainer,
    ArticleTitle
} from '../styled-components/Style.js';
import Lists from '../components/Lists';
import { inject } from 'mobx-react';

@inject('store')
class Archive extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.store.archives;
        return (<ContentContainer>
            <ArticleTitle>归档</ArticleTitle>
            <Lists list={list} type="fas fa-archive"></Lists>
        </ContentContainer>)
    }
}

export default Archive;