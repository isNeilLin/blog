import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListItem
} from '../styled-components/Style.js';
function Item(props){
    const article = props.article;
    return (
        <ListItem>
            <Link to={'article/'+article.title}>{article.date} {article.title}</Link>
        </ListItem>
    )
}

export default Item