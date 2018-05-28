import React, { Component } from 'react';
import {
    AdminContentContainer,
    MarkdownEditor,
    MarkdownEditorTool,
    Font
} from '../styled-components/Style';
import marked, {Renderer} from 'marked';
import highlightjs from 'highlightjs';
import { inject } from 'mobx-react';

@inject('store')
class MyMarkdownEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorTool: {
                tools:['bold','italic','list','list-ol','quote-left','link','image','table','eye','arrows-alt'],
                size: 18,
                color: '#333'
            },
            fullscreen: false,
            preview: false,
            initialText: '',
            initialHtml: ''
        }
        this.editor = null;
        this.sel = window.getSelection();
        this.range = document.createRange();
        this.lastPosition = null;
    }

    componentDidMount(){
        console.log(this.props.content)
        this.setState({
            initialHtml: this.props.content || ''
        })
        const renderer = new Renderer();
        renderer.code = (code, language) => {
            const validLang = !!(language && highlightjs.getLanguage(language));
            const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
            return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
        };
        marked.setOptions({renderer});
    }

    bindToolClick = (tool)=>{
        const preInsert = {
            'bold': {
                insert: '****',
                range: 2
            },
            'italic': {
                insert: '__',
                range: 1,
            },
            'list': {
                insert: '- ',
                range: 2,
            },
            'list-ol': {
                insert: '1. ',
                range: 3,
            },
            'quote-left': {
                insert: '> ',
                range: 2,
            },
            'link': {
                insert: '[name](url)',
                start: 1,
                end: 5
            },
            'image': {
                insert: '![alt](src)',
                start: 2,
                end: 5
            },
            'table': {
                insert: `First Header | Second Header\n------------ | -------------\nContent cell 1 | Content cell 2\nContent column 1 | Content column 2\n`
            }
        }
        if(tool==='arrows-alt'){
            return this.checkFullScreen();
        }else if(tool==='eye'){
            return this.preview();
        }else{
            const {range, start, end, insert} = preInsert[tool];
            this.exec(insert);
            if(tool==='table') return;
            const node = this.lastPosition ? this.lastPosition.node : this.sel.focusNode;
            const lastOffset = this.lastPosition ? this.lastPosition.offset : insert.length;
            let posStart, posEnd;
            if(range){
                posStart =  posEnd = lastOffset - insert.length + range;
            }else{
                posStart = lastOffset - insert.length + start;
                posEnd = lastOffset - insert.length + end;
            }
            this.setRange(node,posStart,posEnd);
            this.range.setStart(node,posStart);
            this.range.setEnd(node,posEnd);
            this.sel.removeAllRanges();
            this.sel.addRange(this.range);
        }
    }

    exec = (arg)=>{
        this.editor.focus();
        if(!this.lastPosition){
            this.setRange(this.sel.focusNode);
            document.execCommand('insertText',false,arg);
            return;
        }
        const { node, offset } = this.lastPosition;
        this.setRange(node,offset,offset);
        document.execCommand('insertText',false,arg)
        this.select();
    }

    setRange = (node,start,end)=>{
        if(start){
            this.range.setEnd(node,start);
            this.range.setStart(node,end);
        }else{
            this.range.selectNodeContents(node);
            this.range.collapse()
        }
        this.sel.removeAllRanges();
        this.sel.addRange(this.range);
    }

    preview = ()=>{
        const content = this.editor.innerText;
        let preview = this.state.preview;
        if(!preview){
            const html = this.editor.innerHTML;
            const markedHtml = marked.parse(content);
            this.setState({
                preview: !preview,
                initialText: html,
                initialHtml: markedHtml
            })
        }else{
            const html = this.state.initialText;
            this.setState({
                preview: !preview,
                initialText: null,
                initialHtml: html
            })
        }
    }

    checkFullScreen = ()=>{
        let fullscreen = this.state.fullscreen;
        this.setState({
            fullscreen: !fullscreen
        })
    }

    select = ()=>{
        this.lastPosition = {
            node: this.sel.focusNode,
            offset: this.sel.focusOffset,
            collapsed: this.sel.isCollapsed
        }
    }

    setHtml = (html)=>{
        html = html || this.state.initialHtml;
        return {__html: html};
    }
    
    keyUp = (e)=>{
        if(e.keyCode===9){
            e.preventDefault();
            this.editor.focus();
            document.execCommand('insertText',false,'    ');    
        }
        this.props.store.changeCurArticle({
            content: this.editor.innerText
        })
    }


    render(){
        const style = {margin:'0 24px',padding:'0', flexGrow: 1};
        const {editorTool,fullscreen,initialHtml} = this.state;
        return (
            <AdminContentContainer style={style} className={fullscreen ? 'fullscreen' : ''} direction="column">
                <Tool editorTool={editorTool}
                    bindToolClick={this.bindToolClick}
                ></Tool>
                <MarkdownEditor contentEditable={true}
                onKeyUp={this.keyUp}
                dangerouslySetInnerHTML={this.setHtml()}
                innerRef={x=>{this.editor=x}}
                onSelect={this.select}
                ></MarkdownEditor>
            </AdminContentContainer>
        )
    }
}

class Tool extends Component {
    constructor(props){
        super(props)
    }
    onClick = (tool,e)=>{
        this.props.bindToolClick(tool)
    }
    render(){
        const {tools,size,color} = this.props.editorTool;
        return (
            <MarkdownEditorTool>
                {
                    tools.map(tool=>(
                        <i key={tool} onClick={this.onClick.bind(this,tool)}>
                        <Font className={`fas fa-${tool}`} 
                            fontSize={`${size}px`} 
                            color={color}
                            >
                        </Font></i>
                    ))
                }
            </MarkdownEditorTool>
        )
    }
}

export default MyMarkdownEditor;