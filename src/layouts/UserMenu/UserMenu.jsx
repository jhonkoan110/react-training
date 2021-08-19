import { Aside } from '../Aside/Aside';
import { Profile } from '../../components/Profile/Profile';
import classes from './UserMenu.module.scss';
import { Divider } from '../../components/Divider/Divider';
import { Menu } from '../../components/Menu/Menu';
import { Contacts } from '../../components/Contacts/Contacts';

export const UserMenu = () => {
  return (
    <Aside>
      <Profile />
      <Divider />
      <Menu />
      <Divider />
      <Contacts />
    </Aside>
  );
};
