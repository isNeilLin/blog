import React, { PureComponent } from 'react';
import {Container} from '../styled-components/Style.js';
import Article from './Article.js';
class Articles extends PureComponent {
    render(){
        const articles = this.props.articles;
        return (
            <Container>
                {articles.map(article=>{
                    return <Article article={article} key={article.title}/>
                })}
            </Container>
        )
    }
}
export default Articles;