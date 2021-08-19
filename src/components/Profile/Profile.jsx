import classes from './Profile.module.scss';

export const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes['heading']}>
        <div className={classes['heading__avatar']}></div>
        <div className={classes['heading__username']}>Cyndy Lillibridge</div>
        <div className={classes['heading__address']}>Torrance, CA, United States</div>
      </div>
      <div className={classes['info']}>
        <div className={classes['info__block']}>
          <div className={classes['info__block__number']}>368</div>
          <div className={classes['info__block__title']}>Posts</div>
        </div>
        <div className={classes['info__block']}>
          <div className={classes['info__block__number']}>184.3K</div>
          <div className={classes['info__block__title']}>Followers</div>
        </div>
        <div className={classes['info__block']}>
          <div className={classes['info__block__number']}>1.04M</div>
          <div className={classes['info__block__title']}>Following</div>
        </div>
      </div>
    </div>
  );
};
