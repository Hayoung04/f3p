import styled from "styled-components";

const Button = styled.button`
  backgroundcolor: red;
`;

export default function Test() {
  return (
    <>
      <div className="hello"> hello world</div>
      <Button>hello world</Button>
      <a href="/test1/cccc">링크!</a>
      {/* <button>버튼</button> */}
    </>
  );
}
