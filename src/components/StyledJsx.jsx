export const StyledJsx = () => {
  return (
    <>
      {/* <div> */}
      <div className="container">
        {/* <p>- Styled JSX -</p> */}
        <p className="title">- Styled JSX -</p>
        {/* <button>FIGHT!!</button> */}
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          // &:hover {
          //   background-color: #46cddf;
          //   color: #fff;
          //   cursor: pointer;
          // }
      `}</style>
    </>
  );
};
