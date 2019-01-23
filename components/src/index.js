import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatar={faker.image.avatar()} author="Sam" content="Nice blog post! 1" timeAgo="Today at 6:00PM" />
            <CommentDetail avatar={faker.image.avatar()} author="Alex" content="Nice blog post! 2" timeAgo="Today at 4:00PM" />
            <CommentDetail avatar={faker.image.avatar()} author="Jane" content="Nice blog post! 3" timeAgo="Today at 2:00AM" />
            <CommentDetail avatar={faker.image.avatar()} author="Nappi" content="Nice blog post! 4" timeAgo="Yesterday at 7:00PM" />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));