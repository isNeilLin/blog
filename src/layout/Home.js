import React, { Component } from 'react';
import Articles from '../components/Articles.js';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.store)
        console.log(this.props.store.articles)
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