import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../redux/configureStore";

import {
  submitForm,
  postComment,
  updateComment,
} from "../redux/slices/mainSlice";
import { comment } from "../redux/slices/mainSlice";
import { RootState } from "../redux/configureStore";
function Form() {
  const dateStr = new Intl.DateTimeFormat("ko-KR")
    .formatToParts(Date.now())
    .filter((el) => !el.value.includes("."))
    .map((el) => (Number(el.value) < 10 ? "0" + el.value : el.value))
    .join("-");
  const editContents = useSelector(
    (state: RootState) => state.mainSlice.editContents
  );
  const [userInput, setUserInput] = useState<comment>({
    id: -1,
    profile_url: "",
    author: "",
    content: "",
    createdAt: dateStr,
  });

  const dispatch: AppDispatch = useDispatch();
  const userInputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    console.log(e.target.value);
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.id === -1) {
      dispatch(postComment(userInput));
    } else {
      dispatch(updateComment(userInput));
    }

    setUserInput({
      id: -1,
      profile_url: "",
      author: "",
      content: "",
      createdAt: dateStr,
    });
  };
  useEffect(() => {
    setUserInput({ ...userInput, ...editContents });
  }, [editContents?.id]);
  console.log(userInput);
  return (
    <StFormBody>
      <form onSubmit={submitFormHandler}>
        <div className="form-head-group">
          <input
            type="text"
            name="profile_url"
            placeholder="https://picsum.photos/id/1/50/50"
            value={userInput.profile_url}
            onChange={userInputHandler}
            required
          />

          <input
            type="text"
            name="author"
            value={userInput.author}
            placeholder="?????????"
            onChange={userInputHandler}
          />
        </div>
        <input
          type="text"
          name="createdAt"
          placeholder="20xx-0x-0x"
          defaultValue={dateStr}
          onChange={userInputHandler}
        />
        <textarea
          name="content"
          placeholder="??????"
          value={userInput.content}
          onChange={userInputHandler}
          required
        ></textarea>

        <button>??????</button>
      </form>
    </StFormBody>
  );
}

const StFormBody = styled.div`
  & > form {
    padding: 1.5rem 1rem;
    margin-bottom: 50px;
    border: 0.1rem solid black;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-head-group {
      display: flex;
      margin: 0.5rem 1% 1rem 1%;
      width: 98%;
      height: 3rem;
      input {
        :nth-of-type(1) {
          flex: 2;
        }
        :nth-of-type(2) {
          flex: 1;
          margin-left: 0.5rem;
        }
      }
    }
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
    margin-bottom: 10px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 5px 1%;
    width: 98%;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

export default Form;
