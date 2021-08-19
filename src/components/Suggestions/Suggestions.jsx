import { SuggestionItem } from './SuggestionItem/SuggestionItem';
import classes from './Suggestions.module.scss';

//TODO: вынести кнопку в отдельный компонент

export const Suggestions = () => {
  return (
    <div className={classes.suggestions}>
      <h2 className={classes['suggestions__heading']}>Suggestions for you</h2>
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <button className={classes['suggestions__view-all-button']}>View All</button>
    </div>
  );
};
