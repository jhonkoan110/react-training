import classes from './Main.module.scss';

export const Main = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};
