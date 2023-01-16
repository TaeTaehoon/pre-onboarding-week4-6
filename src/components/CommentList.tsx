import styled from "styled-components";

const data = [
  {
    id: 1,
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "abc_1",
    content: "UI 테스트는 어떻게 진행하나요",
    createdAt: "2020-05-01",
  },
  {
    id: 1,
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "abc_1",
    content: "UI 테스트는 어떻게 진행하나요",
    createdAt: "2020-05-01",
  },
];

function CommentList() {
  return (
    <>
      {data.map((comment, key) => (
        <StComment key={key}>
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
  padding: 7px 10px;
  text-align: left;
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
