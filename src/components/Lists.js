import React, { Component } from 'react';
import {
    ListTitle,
    Font,
    List
} from '../styled-components/Style.js';
import Item from './Item';
class Lists extends Component {
    render(){
        return this.props.list.map(item=>{
            return (<div key={item.title}>
                <ListTitle>
                    <Font className={this.props.type} color="#293c55">
                    </Font>{item.title} ({item.articles.length})
                </ListTitle>
                <List>
                    {item.articles.map(article=>{
                        return <Item article={article} key={article.title}/>
                    })}
                </List>
            </div>)
        })
    }
}

export default Lists;