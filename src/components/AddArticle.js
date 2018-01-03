import React, { Component } from 'react';
import {
    AdminContentContainer,
    AddArticleHeader,
    AddArticleTitle,
    SmallButton,
    Text
} from '../styled-components/Style';
import MarkdownArea from './MarkdownEditor.js';
import SelectTags from './SelectTags';

class AddArticle extends Component {
    render(){
        return (
            <AdminContentContainer direction="column">
                <AddArticleHeader>
                    <AddArticleTitle type="text" placeholder="添加标题..."/>
                    <div>
                        <SmallButton color="#fff" background="#0f8ee9">
                            发布
                        </SmallButton>
                        <SmallButton color="#fff" background="#00a853">保存</SmallButton>
                        <SmallButton color="#fff" background="#f04639">返回</SmallButton>
                    </div>
                </AddArticleHeader>
                <SelectTags></SelectTags>
                <AddSummary></AddSummary>
                <MarkdownArea></MarkdownArea>
            </AdminContentContainer>
        )
    }
}

function AddSummary(props){
    return (
        <AdminContentContainer style={{margin:'0 24px',flexGrow: 0}}>
            <label style={{flexShrink: 0}}>摘要:</label>
            <Text placeholder="正文摘要..."></Text>
        </AdminContentContainer>
    )
}

export default AddArticle;