import React, {Component} from 'react';
import axios from 'axios';
import marked, {Renderer} from 'marked';
import highlightjs from 'highlightjs';
import MarkdownArea from './MarkdownEditor.js';
import SelectTags from './SelectTags';
import {
    AdminContentContainer,
    AddArticleHeader,
    AddArticleTitle,
    SmallButton,
    LabelList,
    LabelItem,
    AddLabel,
    Text
} from '../styled-components/Style.js';
import '../asset/css/monokai-sublime.min.css';
import '../asset/css/markdown.css';
const renderer = new Renderer();

class EditorArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [
                {
                    title: 'fasdfasdgsad',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2015-09-12',
                    labels: ['nodejs','react','electron'],
                    content: '# hello'
                },
                {
                    title: 'rqwewqetqwetwqetweq',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2016-09-12',
                    labels: ['nodejs','react','electron'],
                    content: '# hello'
                },
                {
                    title: 'rqwerqwetqweadsgas',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2017-04-02',
                    labels: ['nodejs','react','electron'],
                    content: '# hello'
                },{
                    title: 'gasdgasdfasdfasdfasd',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2017-06-18',
                    labels: ['nodejs','react','electron'],
                    content: '# hello'
                },
                {
                    title: 'bzxcbxczzxcvzxcvzx',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2015-10-12',
                    labels: ['nodejs','react','electron'],
                    content: '# hello'
                }
            ]
        }
    }
    render(){
        const match = this.props.match;
        const articleID = match.params.id;
        const article = this.state.articles.find(item=>{
            return item.title===articleID;
        })
        return (
            <AdminContentContainer direction="column">
            <AddArticleHeader>
                <AddArticleTitle type="text" placeholder="添加标题..." defaultValue={article.title}/>
                <div>
                    <SmallButton color="#fff" background="#0f8ee9">
                        发布
                    </SmallButton>
                    <SmallButton color="#fff" background="#00a853">保存</SmallButton>
                    <SmallButton color="#fff" background="#f04639">返回</SmallButton>
                </div>
            </AddArticleHeader>
            <SelectTags tags={article.labels}></SelectTags>
            <AddSummary summary={article.summary}></AddSummary>
            <MarkdownArea content={article.content}></MarkdownArea>
        </AdminContentContainer>
        )
    }
}

function AddSummary(props){
    let defaultValue = props.summary || '';
    return (
        <AdminContentContainer style={{margin:'0 24px',flexGrow: 0}}>
            <label style={{flexShrink: 0}}>摘要:</label>
            <Text placeholder="正文摘要..." defaultValue={defaultValue}></Text>
        </AdminContentContainer>
    )
}

export default EditorArticle;