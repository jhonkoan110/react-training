import { CreateNewPostButton } from '../CreateNewPostButton/CreateNewPostButton';
import { Search } from '../Search/Search';
import classes from './ContentHeader.module.scss';

export const ContentHeader = () => {
  return (
    <header className={classes.header}>
      <Search />
      <CreateNewPostButton />
    </header>
  );
};
