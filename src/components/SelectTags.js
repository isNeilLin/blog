import React, { Component } from 'react';
import {
    AdminContentContainer,
    LabelList,
    AddLabel
} from '../styled-components/Style';
import Tag from './Tag';

class SelectTags extends Component {
    constructor(props){
        super(props);
        this.state = {
            tags: this.props.tags || ['Vue','React','Meteor','MongoDB','NodeJS','Python']
        }
    }

    deletedTag = (idOrTag)=>{
        let tags = this.state.tags;
        tags = tags.filter(item=>{
            return item!==idOrTag;
        })
        this.setState({
            tags
        })
    }

    addTag = (e)=>{
        if(e.keyCode===13){
            e.preventDefault();
            let value = e.target.value.toString().trim();
            console.log(value);
            let tags = this.state.tags;
            tags.push(value);
            e.target.value = '';
            this.setState({
                tags
            })
        }
    }

    render(){
        const tags = this.state.tags
        return (
            <AdminContentContainer style={{margin:'0 24px',paddingBottom:'0',flexGrow:0}}>
                <label style={{marginTop:'8px',flexShrink: 0}}>标签:</label>
                <LabelList>
                    {tags.map(tag=><Tag key={tag} tag={tag} deletedTag={this.deletedTag}></Tag>)}
                </LabelList>
                <AddLabel type="text" placeholder="添加标签..." onKeyUp={this.addTag}/>
            </AdminContentContainer>
        )
    }
}

export default SelectTags;