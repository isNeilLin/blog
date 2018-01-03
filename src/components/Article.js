import React, {Component} from 'react';
import { 
    ArticleCard,
    ArticleTitle,  
    ArticleDate,
    ViewSource,
    Summary
} from '../styled-components/Style.js';
import {Link} from 'react-router-dom';
import Labels from './Labels'

class Article extends Component {
    render(){
        const article = this.props.article;
        return (
            <ArticleCard key={article.title}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDate>
                {article.date}
                <Labels labels={article.labels}/>
                </ArticleDate>
                <Summary>{article.summary}</Summary>
                <ViewSource>
                    <Link to={`article/${article.title}`}>阅读原文</Link>
                </ViewSource>
            </ArticleCard>
        )
    }
}
export default Article;