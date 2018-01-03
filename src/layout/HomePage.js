import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'
import {
    FlexBlock
} from '../styled-components/Style';
import DashBoardComponent from '../components/DashBoard';
import NoMatch from './404.js';
import AddArticle from '../components/AddArticle';
import MangeArticle from '../components/MangeArticle';
import MangeTags from '../components/MangeTags';
import MangeComments from '../components/MangeComments';
import MangeInfo from '../components/MangeInfo';
import EditorArticle from '../components/EditorArticle';

class HomePage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <FlexBlock>
                <DashBoardComponent></DashBoardComponent>
                <Switch>
                    <Route path="/" exact component={AddArticle}/>
                    <Route path="/add" component={AddArticle}/>
                    <Route path="/list" component={MangeArticle}/>
                    <Route path="/tags" component={MangeTags}/>
                    <Route path="/comments" component={MangeComments}/>
                    <Route path="/user" component={MangeInfo}/>
                    <Route path="/editor/:id" component={EditorArticle}/>
                    <Route component={NoMatch}/>
                </Switch>
            </FlexBlock>
        )
    }
}

export default HomePage;