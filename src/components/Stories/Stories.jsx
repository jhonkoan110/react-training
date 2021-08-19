import classes from './Stories.module.scss';

export const Stories = () => {
  return (
    <div className={classes.stories}>
      <div className={classes['stories__heading']}>
        <h1 className={classes['stories__heading__title']}>Stories</h1>
        <button className={classes['stories__heading__watch-all-button']}>Watch all</button>
      </div>
      <div className={classes['stories__container']}>
        <div className={classes['stories__container__block']}>
          <div className={classes['stories__container__block__avatar']}></div>
          <div className={classes['stories__container__block__name']}>Name</div>
        </div>
        <div className={classes['stories__container__block']}>
          <div className={classes['stories__container__block__avatar']}></div>
          <div className={classes['stories__container__block__name']}>Name</div>
        </div>
        <div className={classes['stories__container__block']}>
          <div className={classes['stories__container__block__avatar']}></div>
          <div className={classes['stories__container__block__name']}>Name</div>
        </div>
        <div className={classes['stories__container__block']}>
          <div className={classes['stories__container__block__avatar']}></div>
          <div className={classes['stories__container__block__name']}>Name</div>
        </div>
        <div className={classes['stories__container__block']}>
          <div className={classes['stories__container__block__avatar']}></div>
          <div className={classes['stories__container__block__name']}>Name</div>
        </div>
        <div className={classes['stories__container__block']}>
          <div className={classes['stories__container__block__avatar']}></div>
          <div className={classes['stories__container__block__name']}>Name</div>
        </div>
        <div className={classes['stories__container__block']}>
          <div className={classes['stories__container__block__avatar']}></div>
          <div className={classes['stories__container__block__name']}>Name</div>
        </div>
      </div>
    </div>
  );
};
