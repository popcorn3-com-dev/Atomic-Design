import { BrowserRouter } from 'react-router';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from './components/templates/DefaultLayout';

const user = {
  name: "ゆうた",
  image: "https://plus.unsplash.com/premium_photo-1676389281733-aaefab0e7907",
  email: "aaaa@aaaa.com",
  phone: "000-999-9999",
  company: {
    name: "鈴木商事"
  },
  website: "https://google.com"
};

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
