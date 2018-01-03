import React, { Component } from 'react';
import axios from 'axios';
import {
    AdminContentContainer,
    List,
    Input
} from '../styled-components/Style.js';
import Tag from './Tag';
class MangeTags extends Component {
    constructor(props){
        super(props);
        this.state = {
            tags: ['golang','python','nodeJS','es6','React','ReactNative',
                'Vue','Angular','AddArticle.js','Article.js','Articles.js',
                'DashBoard.js','DashList.js','EditorArticle.js','Item.js',
                'Labels.js','Lists.js','MangeArticle.js','MangeComments.js',
                'Tag.js','SelectTags.js','MarkdownEditor.js','MangeTags.js',
                'MangeInfo.js'
            ]
        };
    }

    deletedTag = (tag)=>{
        let tags = this.state.tags;
        tags = tags.filter(item=>item!==tag);
        this.setState({
            tags
        })
    }

    addTag = (e)=>{
        console.log(e.target.value);
    }

    render(){
        const tags = this.state.tags;
        const ContainerStyle = {
            padding:'24px'
        }
        const ListStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            maxHeight: '70%',
            overflowY: 'auto',
            marginBottom: '16px'
        }
        const ItemStyle = {
            width: 'auto'
        }
        return (
            <AdminContentContainer direction="column" style={ContainerStyle}>
                <List style={ListStyle}>
                    {tags.map(tag=>(<Tag tag={tag} key={tag} style={ItemStyle}
                        deletedTag={this.deletedTag}>
                    </Tag>))}
                </List>
                <Input placeholder="添加标签" onKeyDown={this.addTag}/>
            </AdminContentContainer>
        )
    }
}

export default MangeTags;