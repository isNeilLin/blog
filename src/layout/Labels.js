import React, { Component } from 'react';
import {
    ContentContainer,
    ArticleTitle
} from '../styled-components/Style.js';
import Lists from '../components/Lists';
import { inject } from 'mobx-react';

@inject('store')
class Labels extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const list = this.props.store.labelArticles
        return (
            <ContentContainer>
                <ArticleTitle>标签</ArticleTitle>
                <Lists list={list} type="fas fa-tag"></Lists>
            </ContentContainer>
        )
    }
}

export default Labels;