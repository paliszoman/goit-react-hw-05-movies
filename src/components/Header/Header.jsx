import { Header, Link } from './Header.styled';

export const MainHeader = () => {
  return (
    <Header>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Header>
  );
};
