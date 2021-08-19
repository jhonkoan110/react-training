import classes from './Aside.module.scss';

export const Aside = ({ children }) => {
  return <aside className={classes.aside}>{children}</aside>;
};
