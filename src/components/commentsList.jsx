import React, { useEffect, useState } from 'react';
import Comment from './commet';

const CommentsList = (props) => {
  console.log(props.comments);
  return (
    <>
      <p>댓글</p>
      {props.comments &&
        props.comments.map((list) => {
          const dataList = list.snippet.topLevelComment.snippet;
          return (
            <Comment
              key={dataList.updatedAt}
              authorName={dataList.authorDisplayName}
              authorProfile={dataList.authorProfileImageUrl}
              commentLikes={dataList.likeCount}
              commentDisLikes={dataList.commentDisLikes}
              commentTxt={dataList.textOriginal}
            />
          );
        })}
    </>
  );
};

export default CommentsList;
