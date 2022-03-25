import React, { memo, useEffect, useState } from 'react';
import comment from './css/comment.module.css';

const Comment = memo((props) => {
  const [name, getName] = useState(null);
  const [profile, getProfile] = useState(null);
  const [likes, setLikes] = useState(null);
  const [disLikes, setDisLikes] = useState(null);
  const [commentTxt, getCommentTxt] = useState(null);

  useEffect(() => {
    getName(props.authorName);
    getProfile(props.authorProfile);
    setLikes(props.commentLikes);
    setDisLikes(props.commentDisLikes ? props.commentDisLikes : 0);
    getCommentTxt(props.commentTxt);
  }, []);

  return (
    <div className={comment.card}>
      <figure className={comment.profile}>
        <img src={profile} alt="프로필이미지" />
      </figure>
      <p className={comment.text}>
        <span className={comment.name}>{name}</span>
        <span className={comment.commentText}>{commentTxt}</span>
      </p>
      <p className={comment.buttons}>
        <button className={comment.like}>
          <i className={`fa-regular fa-thumbs-up ${comment.color}`}></i>
          <span>{likes}</span>
        </button>
        <button className={comment.dislike}>
          <i className={`fa-regular fa-thumbs-down ${comment.color}`}></i>
          <span>{disLikes}</span>
        </button>
        <button className={comment.reply}>답글</button>
      </p>
    </div>
  );
});
export default Comment;
