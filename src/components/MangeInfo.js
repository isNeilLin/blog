import React, {Component} from 'react';
import axios from 'axios';
import marked, {Renderer} from 'marked';
import highlightjs from 'highlightjs';
import MarkdownArea from './MarkdownEditor.js';
import {
    AdminContentContainer,
    SmallButton
} from '../styled-components/Style.js';
import '../asset/css/monokai-sublime.min.css';
import '../asset/css/markdown.css';
const renderer = new Renderer();


class MangeInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            info: `# This is Neil And are you?`
        } 
    }
    render(){
        return (
            <AdminContentContainer direction={'column'}>
                <MarkdownArea content={this.state.info}>
                </MarkdownArea>
                <div style={{'margin':'16px 0 0 24px'}}>
                    <SmallButton color="#fff" background="#0f8ee9">保存</SmallButton>
                    <SmallButton color="#fff" background="#00a853">取消</SmallButton>
                </div>
            </AdminContentContainer>
        )
    }
}

export default MangeInfo;