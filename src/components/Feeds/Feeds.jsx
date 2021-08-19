import classes from './Feeds.module.scss';

export const Feeds = () => {
  return (
    <div className={classes.feeds}>
      <div className={classes['feeds__heading']}>
        <h2 className={classes['feeds__heading__title']}>Feeds</h2>
        <div className={classes['feeds__heading__buttons']}>
          <button className={classes['feeds__heading__buttons__button']}>Popular</button>
          <button className={classes['feeds__heading__buttons__button']}>Latest</button>
        </div>
      </div>
    </div>
  );
};
