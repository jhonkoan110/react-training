import classes from './Followers.module.scss';

export const Followers = () => {
  return (
    <div className={classes.followers}>
      <div className={classes['followers__icons']}>
        <div className={classes['followers__icons__item']} />
        <div className={classes['followers__icons__item']} />
        <div className={classes['followers__icons__item']} />
        <div className={classes['followers__icons__item']} />
        <div className={classes['followers__icons__item']} />
        <div className={classes['followers__icons__item']} />
        <div className={classes['followers__icons__item']} />
        <div className={classes['followers__icons__item']} />
      </div>
      <div className={classes['followers__info']}>
        <div className={classes['followers__info__number']}>184.3K</div>
        <div className={classes['followers__info__text']}>Followers</div>
      </div>
      <div className={classes['followers__description']}>Active now on your profile</div>
    </div>
  );
};
