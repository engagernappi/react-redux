import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div class="ui container comments">
            <CommentDetail author="Sam"/>
            <CommentDetail author="Alex"/>
            <CommentDetail author="Jane"/>
            <CommentDetail author="Nappi"/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));