import { useDispatch } from "react-redux";
import styled from "styled-components";

import {
  getCommentsInPage,
  getFullCommentsLength,
} from "../redux/slices/mainSlice";
import { AppDispatch } from "../redux/configureStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { initType } from "../redux/slices/mainSlice";

function PageList() {
  const dispatch: AppDispatch = useDispatch();
  const pageNum = useSelector((state: initType) => state.mainSlice.pages);
  const currPage = useSelector((state: initType) => state.mainSlice.currPage);
  useEffect(() => {
    dispatch(getFullCommentsLength(1));
    dispatch(getCommentsInPage(1));
  }, [dispatch]);

  return (
    <StListContainer>
      {pageNum.map((num: number) => {
        if (num === currPage) {
          return (
            <Page
              key={`page${num}`}
              active={false}
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
              active={false}
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

const Page = styled.button<{ active: boolean }>`
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  margin-top: 2rem;
  margin-right: 3px;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
    background: gray;
    color: #fff;
    `}
  border-radius: 0.25rem;
`;

export default PageList;
