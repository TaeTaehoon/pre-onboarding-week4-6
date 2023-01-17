import { shallowEqual, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  getCommentsInPage,
  getFullCommentsLength,
} from "../redux/slices/mainSlice";
import { AppDispatch } from "../redux/configureStore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";

function PageList() {
  const dispatch: AppDispatch = useDispatch();
  const pageNum = useSelector((state: RootState) => state.mainSlice.pages);
  const currPage = useSelector((state: RootState) => state.mainSlice.currPage);
  //useSelector로 가져온 데이터가 업데이트될때 useEffect가 실행이안됨,,,왜이러지?
  useEffect(() => {
    dispatch(getFullCommentsLength(currPage));
    dispatch(getCommentsInPage(currPage));
  }, [currPage]);

  return (
    <StListContainer>
      {pageNum.map((num: number) => {
        if (num === currPage) {
          return (
            <Page
              key={`page${num}`}
              onClick={() => {
                dispatch(getCommentsInPage(num));
              }}
              className="active-page"
            >
              {num}
            </Page>
          );
        } else {
          return (
            <Page
              key={`page${num}`}
              onClick={() => {
                dispatch(getCommentsInPage(num));
              }}
            >
              {num}
            </Page>
          );
        }
      })}
    </StListContainer>
  );
}

const StListContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
  .active-page {
    font-size: bold;
    background-color: #d0d0d7;
  }
`;

const Page = styled.button`
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  margin-top: 2rem;
  margin-right: 3px;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
`;

export default PageList;
