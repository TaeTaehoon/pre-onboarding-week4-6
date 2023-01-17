import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../redux/configureStore";

import { initType } from "../redux/slices/mainSlice";
import { comment } from "../redux/slices/mainSlice";

function CommentList() {
  const comments = useSelector((state: initType) => state.mainSlice.comments);
  const dispatch: AppDispatch = useDispatch();
  console.log(comments);
  return (
    <>
      {comments.map((comment: comment) => (
        <StComment key={comment.id}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <StCreatedAt>{comment.createdAt}</StCreatedAt>

          <StContent>{comment.content}</StContent>

          <StButton>
            <a>수정</a>
            <a>삭제</a>
          </StButton>
        </StComment>
      ))}
    </>
  );
}

const StComment = styled.div`
  text-align: left;
  font-size: 1.5rem;
  padding: 7px 10px;
  :nth-of-type(1) {
    border-top: 0.2rem solid black;
  }
  border-bottom: 0.2rem solid black;
  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const StCreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const StContent = styled.div`
  margin: 10px 0;
`;

const StButton = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

export default CommentList;
