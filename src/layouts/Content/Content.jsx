import { ContentHeader } from '../../components/ContentHeader/ContentHeader';
import { Feeds } from '../../components/Feeds/Feeds';
import { Stories } from '../../components/Stories/Stories';
import classes from './Content.module.scss';

export const Content = () => {
  return (
    <div className={classes.content}>
      <ContentHeader />
      <Stories />
      <Feeds />
    </div>
  );
};
