import styled from "styled-components";

function Form() {
  const dateArr = new Intl.DateTimeFormat("ko-KR")
    .formatToParts(Date.now())
    .filter((el) => !el.value.includes("."));
  const dateStr = dateArr
    .map((el) => (Number(el.value) < 10 ? "0" + el.value : el.value))
    .join("-");
  return (
    <StFormBody>
      <form>
        <div className="form-head-group">
          <input
            type="text"
            name="profile_url"
            placeholder="https://picsum.photos/id/1/50/50"
            required
          />

          <input type="text" name="author" placeholder="작성자" />
        </div>
        <input
          type="text"
          name="createdAt"
          placeholder="20xx-0x-0x"
          value={dateStr}
        />
        <textarea name="content" placeholder="내용" required></textarea>

        <button type="submit">등록</button>
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
