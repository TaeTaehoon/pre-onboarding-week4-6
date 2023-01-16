import styled from "styled-components";

function PageList() {
  const pageArr = [];
  pageArr.push(
    <Page key="1" active={false}>
      1
    </Page>
  );
  return <StListContainer>{pageArr}</StListContainer>;
}

const StListContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
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
