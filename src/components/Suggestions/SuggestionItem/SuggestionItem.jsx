import classes from './SuggestionItem.module.scss';

export const SuggestionItem = () => {
  return (
    <div className={classes['suggestion-item']}>
      <div className={classes['suggestion-item__avatar']} />
      <div className={classes['suggestion-item__info']}>
        <p className={classes['suggestion-item__info__username']}>Julie Mendez</p>
        <p className={classes['suggestion-item__info__address']}>Memphis, TN, US</p>
      </div>
      <div className={classes['suggestion-item__chat-icon']} />
    </div>
  );
};
