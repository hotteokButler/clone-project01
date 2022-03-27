import React, { useEffect, useState } from 'react';
import Comment from './commet';

const CommentsList = (props) => {
  return (
    <>
      <p className="comment-title">댓글</p>
      {props.comments &&
        props.comments.map((list) => {
          const dataList = list.snippet.topLevelComment.snippet;
          return (
            <Comment
              key={Math.random()}
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
