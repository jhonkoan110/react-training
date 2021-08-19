import { Requests } from '../../components/Requests';
import { Divider } from '../../components/Divider';
import { Aside } from '../Aside/Aside';
import classes from './FriendsMenu.module.scss';
import { Suggestions } from '../../components/Suggestions/Suggestions';
import { Followers } from '../../components/Followers/Followers';
import { Tags } from '../../components/Tags/Tags';

export const FriendsMenu = () => {
  return (
    <Aside>
      <Requests />
      <Divider />
      <Suggestions />
      <Divider />
      <Followers />
      <Divider />
      <Tags />
    </Aside>
  );
};
