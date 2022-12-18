import { Routes, Route } from 'react-router-dom';
import { MainHeader } from './Header/Header';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Fail } from '../pages/Fail';

export const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<Fail />} />
      </Routes>
    </>
  );
};
