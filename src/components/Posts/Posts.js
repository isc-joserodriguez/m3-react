import React from 'react'

const Posts = ({ postList }) => {
    return (
        <div>
            {postList.map((el) => (
                <>
                    <br />
                    <div>{JSON.stringify(el)}</div>
                </>
            ))}
        </div>
    )
}

export default Posts
