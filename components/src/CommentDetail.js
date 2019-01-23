import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    return (
        <div class="comment">
            <a href="/" class="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div class="content">
                <a href="/" class="author">{props.author}</a>
                <div class="metadata">
                    <span class="date">Today at 6:00PM</span>
                </div>
                <div class="text">Nice blog post!</div>
            </div>
        </div>
    );
};

export default CommentDetail;