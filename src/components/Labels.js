import React from 'react';
import { FlexBlock,ArticleLabel } from '../styled-components/Style';
function Labels(props){
    const labels = props.labels
    return (
        <FlexBlock>
            {labels.map(label=>{
                return (<ArticleLabel key={label}>{label}</ArticleLabel>)
            })}
        </FlexBlock>
    )
}

export default Labels;