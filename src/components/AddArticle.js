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
import { inject } from 'mobx-react';

@inject('store')
class AddArticle extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.store.changeCurArticle({
            title: '',
            summary: '',
            labels: [],
            content: ''
        })
    }

    inputTitle = (e)=>{
        let value = e.target.value;
        this.props.store.changeCurArticle({
            title: value
        })
    }

    inputSummary = (value)=>{
        this.props.store.changeCurArticle({
            summary: value
        })
    }

    publish = ()=>{
        let date = new Date().toLocaleString().replace(/\//g,'-');
        this.props.store.changeCurArticle({
            date: date,
            publish: true
        })
        this.props.store.addArticle(this.props.store.curArticle)
        console.log(this.props.store.articles)
    }

    save = ()=>{
        let date = new Date().toLocaleString().replace(/\//g,'-');
        this.props.store.changeCurArticle({
            date: date,
            publish: false
        })
        this.props.store.addArticle(this.props.store.curArticle)
        console.log(this.props.store.articles)
    }

    render(){
        const {title, labels, content, summary} = this.props.store.curArticle;
        return (
            <AdminContentContainer direction="column">
                <AddArticleHeader>
                    <AddArticleTitle type="text" 
                    defaultValue = {title}
                    onInput={this.inputTitle}
                    placeholder="添加标题..."/>
                    <div>
                        <SmallButton color="#fff" background="#0f8ee9" onClick={this.publish}>
                            发布
                        </SmallButton>
                        <SmallButton color="#fff" background="#00a853" onClick={this.save}>保存</SmallButton>
                        <SmallButton color="#fff" background="#f04639">返回</SmallButton>
                    </div>
                </AddArticleHeader>
                <SelectTags tags={labels}></SelectTags>
                <AddSummary summary={summary} inputSummary={this.inputSummary}></AddSummary>
                <MarkdownArea content={content}></MarkdownArea>
            </AdminContentContainer>
        )
    }
}

function AddSummary(props){
    return (
        <AdminContentContainer style={{margin:'0 24px',flexGrow: 0}}>
            <label style={{flexShrink: 0}}>摘要:</label>
            <Text placeholder="正文摘要..." defaultValue={props.summary}
            onInput={(e)=>props.inputSummary(e.target.value)}
            ></Text>
        </AdminContentContainer>
    )
}

export default AddArticle;