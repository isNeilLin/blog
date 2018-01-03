import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import {
    ContentContainer,
    HeaderContainer,
    Icon,
    HeaderH1,
    HeaderP,
    ArticleText,
    Font
} from '../styled-components/Style.js';
import IconSrc from '../asset/icons/head.jpg';
import '../asset/css/monokai-sublime.min.css';
import '../asset/css/markdown.css';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            github: 'https://github.com/isNeilLin',
            weibo: 'https://github.com/isNeilLin',
            twitter: 'https://github.com/isNeilLin',
            info: null
        }
    }
    componentDidMount(){
        const md = 'https://raw.githubusercontent.com/facebookincubator/create-react-app/master/README.md';
        axios.get(md)
            .then(res=>{
                const html = marked.parse(res.data);
                this.setState({
                    info: html
                })
            }).catch(e=>{
                console.log(e)
            })
    }
    render(){
        const info = this.state.info;
        function createMarkup(){
            return {__html: info}
        }
        return (
            <ContentContainer>
                <HeaderContainer>
                    <Icon src={IconSrc} width="160px"></Icon>
                    <HeaderH1>Neil Lin</HeaderH1>
                    <HeaderP>.........</HeaderP>
                    <a href={this.state.github} target="_blank">
                    <Font className="fab fa-github" fontSize="28px" color="rgb(247,247,247)">
                    </Font>
                    </a>
                    <a href={this.state.weibo} target="_blank">
                    <Font className="fab fa-weibo" fontSize="28px" color="rgb(247,247,247)">
                    </Font>
                    </a>
                    <a href={this.state.twitter} target="_blank">
                    <Font className="fab fa-twitter" fontSize="28px" color="rgb(247,247,247)">
                    </Font>
                    </a>
                </HeaderContainer>
                <ArticleText dangerouslySetInnerHTML={createMarkup()}></ArticleText>
            </ContentContainer>
        )
    }
}
export default About;