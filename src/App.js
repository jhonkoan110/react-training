import { Main } from './layouts/Main';
import { UserMenu } from './layouts/UserMenu';
import { Content } from './layouts/Content';
import { FriendsMenu } from './layouts/FriendsMenu';
import './App.scss';

const App = () => {
  return (
    <Main>
      <UserMenu />
      <Content />
      <FriendsMenu />
    </Main>
  );
};

export default App;
