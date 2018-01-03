import React from 'react';
import { Link } from 'react-router-dom';
import {
    ContentContainer,
    ArticleTitle
} from '../styled-components/Style.js';

function NoMatch(props){
    return (
        <ContentContainer>
            <ArticleTitle>404</ArticleTitle>
            <ArticleTitle>您要找的页面不翼而飞...</ArticleTitle>
            <Link to="/">回到主页</Link>
        </ContentContainer>
    )
}

export default NoMatch;