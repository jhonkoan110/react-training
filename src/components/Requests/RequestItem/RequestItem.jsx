import classes from './RequestItem.module.scss';

export const RequestItem = () => {
  return (
    <div className={classes['request-item']}>
      <div className={classes['request-item__user']}>
        <div className={classes['request-item__user__avatar']} />
        <div className={classes['request-item__user__text']}>
          <span className={classes['request-item__user__text__name']}>Lauralee Quintero</span> wants to add you to
          friends
        </div>
      </div>
      <div className={classes['request-item__buttons']}>
        <button className={classes['request-item__buttons__accept']}>Accept</button>
        <button className={classes['request-item__buttons__decline']}>Decline</button>
      </div>
    </div>
  );
};
