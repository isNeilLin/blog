import styled from 'styled-components';
import { media } from './media';

export const SearchInput = styled.input`
    outline: none;
    margin-right: 4px;
    font-size: 16px;
    border: none;
    height: 24px;
    background: transparent;
    color: rgb(247,247,247);
    border-bottom: 1px solid rgb(247,247,247);
`;

export const Container = styled.div`
    width: 80%;
    max-width: 80%;
    margin: 30px auto;
    ${
        media.phone`
            width: 95%;
            max-width: 95%;
        `
    }
`;

export const ArticleCard = styled.div`
    width: 100%;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    padding: 16px 24px;
    margin: 48px 0;
    box-sizing: border-box;
    &:hover {
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26), 0 2px 10px 0 rgba(0,0,0,0.24);
    }
`;

export const ArticleTitle = styled.h2`
    width: 100%;
    font-size: 24px;
    color: #333;
    margin: 16px 0;
`;

export const ArticleDate = styled.div`
    color: #2d72ec;
    opacity: 0.8;
    font-size: 16px;
    font-family: monospace;
    font-weight: 900;
    margin: 0;
    display: flex;
    line-height: 24px;
`;
export const FlexBlock = styled.div.attrs({
    direction: props=>props.direction || 'row'
})`
    display: flex;
    flex-direction: ${props=>props.direction};
`;

export const ArticleLabel = styled.p`
    padding: 0 10px;
    background: #3F51B5;;
    color: #CDDC39;
    font-size: 12px;
    margin: 0px 5px;
    border-radius: 20px;
    width: auto;
    height: 24px;
    line-height: 24px;
    font-family: Menlo;
`;

export const ViewSource = styled.div.attrs({
    className: 'view-source'
})`
    height: 60px;
    line-height: 60px;
`;

export const ContentContainer = styled.div`
    width: 800px;
    max-width: 800px;
    margin: 24px auto;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    padding: 24px 30px;
    ${
        media.phone`
            width: 100%;
            max-width: 100%;
            padding: 24px 16px;
        `
    }
`;

export const ArticleText = styled.div`
    word-break: break-word;
    margin-top: 12px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 60px;
`;

export const ListTitle = styled.div`
    height: 44px;
    line-height: 44px;
    color: #293c55;
`
export const List = styled.ul.attrs({
    width: props=>props.width || '100%',
    margin: props=>props.margin || '0'
})`
    list-style: none;
    margin: ${props=>props.margin};
    padding: 0;
    width: ${props=>props.width};
`
export const ListItem = styled.li.attrs({
    color: props=>props.color || '#2d72ec',
    background: props=>props.background || '',
    hovercolor: props=>props.hovercolor || props.color || '#2d72ec',
    hoveropacity: props=>props.hoveropacity || 1,
    hoverbackground: props=>props.hoverbackground || props.background || '',
    align: props=>props.align || 'left'
})`
    height: 44px;
    line-height: 44px;
    color: ${props=>props.color};
    background: ${props=>props.background};
    text-align: ${props=>props.align};
    &:hover {
        opacity: ${props=>props.hoveropacity};;
        color: ${props=>props.hovercolor};
        background: ${props=>props.hoverbackground};
    }
`
export const Font = styled.i.attrs({
    fontSize: props => props.fontSize || '16px',
    color: props=>props.color || 'rgb(247,247,247)'
})`
    margin: 0 6px;
    font-size: ${props=>props.fontSize};
    color: ${props=>props.color};
`

export const Summary = styled.div`
    margin-top: 20px;
`;

export const HeaderContainer = styled.div`
    padding: 40px 15px 0px;
    height: 370px;
    background: #293c55;
    text-align: center;
`

export const Icon = styled.img`
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 50%;
`

export const HeaderH1 = styled.h1`
    color: rgb(247,247,247);
    ${
        media.phone`
            margin: 0;
        `
    }

`;
export const HeaderP = styled.p`
    color: rgb(247,247,247);
    margin-top: -10px;
    margin-bottom: 20px;
`

export const Toc = styled.div`
    position: fixed;
    top: 100px;
    right: 0px;
    width: 200px;
    ul {
        list-style: none;
        padding: 0 16px;
        box-sizing: border-box;
        width: 100%;
        margin:0;
        overflow: auto;
        white-space: nowrap;
    }
`
export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
`
export const LoginContent = styled.div`
    width: 300px;
    height: 300px;
    background: rgb(247,247,247);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    padding: 16px 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    text-align: center;
`

export const Input = styled.input.attrs({
    margin: props => props.margin || '0'
})`
    outline: none;
    width: 100%;
    height: 32px;
    border: 1px solid #d9d9d9;
    background: #fff;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 4px 11px;
    box-sizing: border-box;
    margin: ${props=>props.margin};
    border-radius: 4px;    
    &:hover {
        border-color: #1890ff;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 36px;
    line-height: 36px;
    background: #1890ff;
    border-radius: 4px;    
    color: #fff;
    &:hover {
        opacity: 0.8;
    }
`
export const DashBoard = styled.div`
    height: 100vh;
    background: #293c55;
    color: rgba(255,255,255,0.45);
    padding: 24px 0px;
    box-sizing: border-box;
    width: 232px;
    text-align: center;
`

export const BackToBlog = styled.button`
    width: 200px;
    margin: 16px;
    height: 32px;
    background: rgba(255,255,255,.1);
    border: none;
    border-radius: 5px;
    outline:none;
`
export const CustomLink = styled.a`
    color: rgba(247,247,247,.8);
    display: block;
    width: 200px;
    height: 32px;
    line-height: 32px;
    &:hover {
        color: rgb(247,247,247);
    }
`

export const AdminContentContainer = styled(FlexBlock)`
    flex-grow: 1;
    padding: 24px 0;
`

export const AddArticleHeader = styled.div`
    height: 44px;
    display: flex;
    padding: 0 24px;
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;
`
export const AddArticleTitle = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 20px;
`

export const SmallButton = styled.button.attrs({
    color: props=>props.color || '#fff',
    background: props=>props.background || '#2d72ec',
    width: props=>props.width || '72px',
    padding: props=>props.padding || '0'
})`
    width: ${props=>props.width};
    height: 32px;
    margin: 2px 4px;
    border: 1px solid ${props=>props.color};
    border-radius: 16px;
    padding: ${props=>props.padding};
    color: ${props=>props.color};
    background: ${props=>props.background};
    &:hover {
        opacity: 0.8;
    }
`

export const LabelList = styled.ul`
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    margin: 0 0 0 6px;
    padding: 0;
    height: 32px;
`
export const LabelItem = styled.li`
    margin: 4px;
    padding: 3px 5px;
    box-sizing: border-box;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    color: #444;
    height: 32px;
    cursor: pointer;
`

export const AddLabel = styled.input`
    outline: none;
    padding: 3px 5px;
    font-size: 14px;
    width: 120px;
    height: 32px;
    line-height:32px;
    border:none;
    border-radius: 3px;
`

export const Text = styled.textarea`
    margin-left: 6px;
    flex-grow: 1;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    height: 84px;
    padding: 8px;
    box-sizing: border-box;
    outline: none;
    resize: none;
    font-size: 16px;
`
export const MarkdownEditor = styled.div`
    flex-grow: 1;
    overflow: auto;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    padding: 8px 16px;
    outline: none;
`

export const MarkdownEditorTool = styled.div`
    margin-bottom: 8px;
`

export const ArticlesList = styled.ul`
    padding: 0;
    padding-top: 16px;
    width: auto;
    box-sizing: border-box;
    margin: 16px 24px;
    list-style: none;
    overflow: auto;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.26);
`

export const ArticlesItem = styled.li`
    height: 95px;
    padding: 0 16px;
    box-sizing: border-box;
    border-bottom:1px solid #e8e8e8;
    margin: 0;
    cursor: default;
`