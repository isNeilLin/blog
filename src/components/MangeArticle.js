import React, { Component } from 'react';
import {
    FlexBlock,
    ArticlesList,
    ArticlesItem
} from '../styled-components/Style';
import {Link} from 'react-router-dom';

class MangeArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [
                {
                    title: 'fasdfasdgsad',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2015-09-12'
                },
                {
                    title: 'rqwewqetqwetwqetweq',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2016-09-12'
                },
                {
                    title: 'rqwerqwetqweadsgas',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2017-04-02'
                },{
                    title: 'gasdgasdfasdfasdfasd',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2017-06-18'
                },
                {
                    title: 'bzxcbxczzxcvzxcvzx',
                    summary: 'fsfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdgasdgsadgasdgasdgasdgasdgasdgasdgasgasdgasdgasdgas',
                    date: '2015-10-12'
                }
            ]
        }
    }
    render(){
        const articles = this.state.articles;
        return (
            <FlexBlock style={{flexGrow:1}} direction="column">
                <Filters></Filters>
                <ArticlesList>
                    {
                        articles.map(article=>(<Article 
                            key={article.title} 
                            article={article}>
                        </Article>))
                    }
                </ArticlesList>
            </FlexBlock>
        )
    }
}

function Article(props){
    let article = props.article;
    let style = {
        'margin': '0px',
        'padding': '0px',
        'fontFamily': 'monospace',
        'overflow': 'hidden',
        'textOverflow': 'ellipsis'
    }
    let h3Style = Object.assign({},style,{'fontWeight':'200'})
    let summaryStyle = Object.assign({},style,{'fontSize':'16px'})
    let dateStyle = Object.assign({},style,{'fontSize':'14px',color:'#2d72ec'})
    return (
        <ArticlesItem>
            <FlexBlock>
                <div style={{flexGrow: 1}}>
                    <h3 style={h3Style}>{article.title}</h3>
                    <p style={summaryStyle}>{article.summary}</p>
                    <p style={dateStyle}>{article.date}</p>
                </div>
                <div style={{width: '200px', textAlign:'center',lineHeight:'79px'}}>
                    <span style={{color:'#2d72ec',margin:'0 4px',cursor:'pointer'}}>
                        <Link to={`editor/${article.title}`}>编辑</Link>
                    </span>
                    <span>|</span>
                    <span style={{color:'#F44336',margin:'0 4px',cursor:'pointer'}}>删除</span>
                </div>
            </FlexBlock>
        </ArticlesItem>
    )
}

function Filters(props){
    return (
        <FlexBlock style={{
            padding:"24px 24px 12px 24px"
        }}>
            <select name="分类" defaultValue="published" style={{marginRight:'8px'}}>
                <option value="published">已发布</option>
                <option value="drafts">未发布</option>
                <option value="trash">回收站</option>
            </select>
            <select name="标签" defaultValue="all" style={{marginRight:'8px'}}>
                <option value="all">所有标签</option>
                <option value="nodejs">nodejs</option>
                <option value="javascript">javascript</option>
                <option value="python">python</option>
                <option value="php">php</option>
                <option value="java">java</option>
                <option value="golang">golang</option>
                <option value="other">other</option>
            </select>
            <select name="排序" defaultValue="date" style={{marginRight:'8px'}}>
                <option value="date">创建日期正序</option>
                <option value="date-reverse">创建日期倒序</option>
                <option value="title">标题排序</option>
            </select>
        </FlexBlock>
    )
}
export default MangeArticle;