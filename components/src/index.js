import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Sam"
                    content="Nice blog post! 1"
                    timeAgo="Today at 6:00PM"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Alex"
                    content="Nice blog post! 2"
                    timeAgo="Today at 4:00PM"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Jane"
                    content="Nice blog post! 3"
                    timeAgo="Today at 2:00AM"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));