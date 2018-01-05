import React, { Component } from 'react';
import Articles from '../components/Articles.js';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {articles} = this.props.store;
        return (
            <div className="container">
                <Articles articles={articles} />
            </div>
        )
    }
}
export default Home;