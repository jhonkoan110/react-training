import classes from './Tags.module.scss';

export const Tags = () => {
  return (
    <div className={classes.tags}>
      <div className={classes['tags__item']}>About</div>
      <div className={classes['tags__item']}>Accessibility</div>
      <div className={classes['tags__item']}>Help Center</div>
      <div className={classes['tags__item']}>Privacy and Terms</div>
      <div className={classes['tags__item']}>Advertising</div>
      <div className={classes['tags__item']}>Business Services</div>
    </div>
  );
};
