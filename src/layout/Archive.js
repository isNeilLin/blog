import React, { Component } from 'react';
import {
    ContentContainer,
    ArticleTitle
} from '../styled-components/Style.js';
import Lists from '../components/Lists';
class Archive extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    title: '2017',
                    articles: [
                        {
                            title: 'NGUI源码学习——UISprite-1',
                            date: '2017-2-10'
                        },
                        {
                            title: 'NGUI源码学习——UISprite-2',
                            date: '2017-3-10'
                        },
                        {
                            title: 'NGUI源码学习——UISprite-3',
                            date: '2017-4-10'
                        }
                    ]
                },
                {
                    title: '2016',
                    articles: [
                        {
                            title: 'NGUI源码学习——UISprite-1',
                            date: '2017-2-10'
                        },
                        {
                            title: 'NGUI源码学习——UISprite-2',
                            date: '2017-3-10'
                        },
                        {
                            title: 'NGUI源码学习——UISprite-3',
                            date: '2017-4-10'
                        }
                    ]
                },
                {
                    title: '2015',
                    articles: [
                        {
                            title: 'NGUI源码学习——UISprite-1',
                            date: '2017-2-10'
                        },
                        {
                            title: 'NGUI源码学习——UISprite-2',
                            date: '2017-3-10'
                        },
                        {
                            title: 'NGUI源码学习——UISprite-3',
                            date: '2017-4-10'
                        }
                    ]
                }
            ]
        }
    }
    render(){
        return (<ContentContainer>
            <ArticleTitle>归档</ArticleTitle>
            <Lists list={this.state.list} type="fas fa-archive"></Lists>
        </ContentContainer>)
    }
}

export default Archive;