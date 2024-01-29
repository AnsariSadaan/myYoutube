import React from 'react'

const commentsData = [
    {
        name: "Ansari Sadaan",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        replies: [
            {
                name: "Aman Shaikh",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
            {
                name: "Jeet Shaikh",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
            {
                name: "Pathan Shaikh",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
        ]
    },
    {
        name: "Ansari Sadaan",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        replies: [
            {
                name: "Rakesh jass",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
        ]
    },
    {
        name: "Ansari Sadaan",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        replies: [
            {
                name: "Suraj Lohar",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
        ]
    },
    {
        name: "Ansari Sadaan",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        replies: [
            {
                name: "Ansari Sadaan",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
        ]
    },
    {
        name: "Ansari Sadaan",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        replies: [
            {
                name: "Ansari Sadaan",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
        ]
    },
    {
        name: "Ansari Sadaan",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        replies: [
            {
                name: "Ansari Sadaan",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
                replies: []
            },
        ]
    },
]

const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
            <img className='w-12 h-12' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comments})=> {
    return comments.map((comment, index)=> (
        <div key={index}>
            <Comment  data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
}

const CommentsContaner = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments :</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContaner