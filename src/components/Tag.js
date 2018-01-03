import React, {Component} from 'react';
import {LabelItem,Font} from '../styled-components/Style';

class Tag extends Component {
    constructor(props){
        super(props);
        this.colors = ["84b6eb","159818","e6e6e6","cc317c","c7def8","fbca04","006b75","9b59b6","fef2c0","c2e0c6"];
    }

    invertColor(color){
        let rgb = parseInt(color, 16);
        let r = (rgb >> 16) & 0xff;
        let g = (rgb >>  8) & 0xff;
        let b = (rgb >>  0) & 0xff;
        let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        
        return luma < 128 ? 'white' : 'black';
    }

    deleteTag = ()=>{
        console.log(this.props)
        let idOrTag = this.props.id || this.props.tag;
        this.props.deletedTag(idOrTag)
    }
    render(){
        const { tag } = this.props;
        let bgColor = this.colors[~~(Math.random()*(this.colors.length))];
        let fgColor = this.invertColor(bgColor);
        bgColor = '#'+bgColor;
        const style = {
            background: bgColor,
            color: fgColor
        }
        return (<LabelItem style={style}>{tag}
            <i onClick={this.deleteTag}>
            <Font className="fas fa-trash-alt" color={fgColor}></Font>
            </i>
        </LabelItem>)
    }
}
export default Tag;