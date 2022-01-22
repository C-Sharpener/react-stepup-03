/**@jsxRuntime classic */
/** @jsx jsx */
// import { jsx } from "@emotion/react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  return (
    // <div>
    <div css={containerStyle}>
      {/* <p>- Emotion -</p> */}
      <p css={titleStyle}>- Emotion -</p>
      {/* <button>FIGHT!!</button> */}
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cddf;
    color: #fff;
    cursor: pointer;
  }
`;
