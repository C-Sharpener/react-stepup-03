import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    // <div>
    <div className={classes.container}>
      {/* <p>- CSS Modules -</p> */}
      <p className={classes.title}>- CSS Modules -</p>
      {/* <button>FIGHT!!</button> */}
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
