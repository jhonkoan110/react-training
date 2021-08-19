import classes from './ContactItem.module.scss';

export const ContactItem = () => {
  return (
    <div className={classes['contact-item']}>
      <div className={classes['contact-item__avatar']} />
      <div className={classes['contact-item__info']}>
        <p className={classes['contact-item__info__username']}>Julie Mendez</p>
        <p className={classes['contact-item__info__address']}>Memphis, TN, US</p>
      </div>
      <div className={classes['contact-item__chat-icon']} />
    </div>
  );
};
