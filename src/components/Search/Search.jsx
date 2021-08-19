import classes from './Search.module.scss';

export const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes['search__left-icon']} />
      <input className={classes['search__input']} type="text" placeholder="Search..." />
      <div className={classes['search__right-icon']} />
    </div>
  );
};
