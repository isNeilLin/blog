import React, { Component } from 'react';
import axios from 'axios';
import marked, {Renderer} from 'marked';
import highlightjs from 'highlightjs';
import {
    ContentContainer,
    ArticleText,
    ArticleTitle,
    ArticleDate,
    Toc
} from '../styled-components/Style.js';
import Labels from '../components/Labels';
import '../asset/css/monokai-sublime.min.css';
import '../asset/css/markdown.css';
const renderer = new Renderer();
const tocObj = { 
    add: function(text, level) {
        var anchor = `#toc${level}${++this.index}`;
        this.toc.push({ anchor: anchor, level: level, text: text });
        return anchor;
    },
    toHTML: function() {
        let levelStack = [];
        let result = '';
        const addStartUL = () => { result += '<ul>'; };
        const addEndUL = () => { result += '</ul>\n'; };
        const addLI = (anchor, text) => { result += '<li><a href="#'+anchor+'">'+text+'<a></li>\n'; };

        this.toc.forEach(function (item) {
        let levelIndex = levelStack.indexOf(item.level);
        // 没有找到相应level的ul标签，则将li放入新增的ul中
        if (levelIndex === -1) {
            levelStack.unshift(item.level);
            addStartUL();
            addLI(item.anchor, item.text);
        } // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
        else if (levelIndex === 0) {
            addLI(item.anchor, item.text);
        } // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
        else {
            while (levelIndex--) {
            levelStack.shift();
            addEndUL();
            }
            addLI(item.anchor, item.text);
        }
        });
        // 如果栈中还有level，全部出栈打上闭合标签
        while(levelStack.length) {
        levelStack.shift();
        addEndUL();
        }
        // 清理先前数据供下次使用
        this.toc = [];
        this.index = 0;
        return result;
    },
    toc: [], 
    index: 0
};

class ArticleContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
            {
                title: 'NGUI源码学习——UISprite-1',
                date: '2017-06-17',
                labels: ['javascript','nodejs'],
                summary: 'UISprite是NGUI最基本的图片显示控件之一。它的基类UIBasicSprite承载了绝大多数的显示逻辑，本文记录其各种填充方法的原理。要显示一个sprite，必定会有一个管理sprite的图集，最后会记录UIAtlas的一些基本要点。\n【参考版本：NGUI 3.6.9】',
                content: ''
            },
            {
                title: 'NGUI源码学习——UISprite-2',
                date: '2017-06-17',
                labels: ['javascript','nodejs'],
                summary: 'UISprite是NGUI最基本的图片显示控件之一。它的基类UIBasicSprite承载了绝大多数的显示逻辑，本文记录其各种填充方法的原理。要显示一个sprite，必定会有一个管理sprite的图集，最后会记录UIAtlas的一些基本要点。\n【参考版本：NGUI 3.6.9】',
                content: ''
            },
            {
                title: 'NGUI源码学习——UISprite-3',
                date: '2017-06-17',
                labels: ['javascript','nodejs'],
                summary: 'UISprite是NGUI最基本的图片显示控件之一。它的基类UIBasicSprite承载了绝大多数的显示逻辑，本文记录其各种填充方法的原理。要显示一个sprite，必定会有一个管理sprite的图集，最后会记录UIAtlas的一些基本要点。\n【参考版本：NGUI 3.6.9】',
                content: ''
            }
            ],
            toc: ''
        } 
        this.text = null;
        this.initMarked();
    }
    componentDidMount(){
        const md = 'https://raw.githubusercontent.com/isNeilLin/note/master/README.md'
        axios.get(md)
            .then(res=>{
                const html = marked.parse(res.data);
                this.setState(state=>({
                    list: state.list.map(item=>{
                        item.content = html;
                        return item;
                    }),
                    toc: tocObj.toHTML()
                }))
            }).catch(e=>{
                console.log(e)
            })
    }

    initMarked(){
        renderer.heading = function(text, level, raw) {
            var anchor = tocObj.add(text, level);
            return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`; 
        };
        renderer.code = (code, language) => {
            const validLang = !!(language && highlightjs.getLanguage(language));
            const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
            return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
        };
        marked.setOptions({renderer})
    }

    render(){
        const match = this.props.match;
        const toc = this.state.toc;
        const article = this.state.list.filter(item=>{
            return item.title = match.params.title;
        })[0];
        function createMarkup(){
            return {__html: article.content}
        }
        function createToc(){
            return {__html: toc}
        }
        return (
            <ContentContainer>
                <ArticleText>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDate>{article.date}
                <Labels labels={article.labels}/>
                </ArticleDate>
                <ArticleText dangerouslySetInnerHTML={createMarkup()}></ArticleText>
                {createToc().__html ? 
                <Toc dangerouslySetInnerHTML={createToc()}></Toc>
                : ''}
                <div className="LinkTo">上一篇: {article.title}</div>
                <div className="LinkTo">下一篇: {article.title}</div>
                </ArticleText>
            </ContentContainer>
        )
    }
}

export default ArticleContent;