import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="uo container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 06:00PM" comment="Nice blog post" image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Kushal" timeAgo="Today at 03:57PM" comment="Good try" image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Katherine" timeAgo="Yesterday at 11:30AM" comment="Interested" image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);