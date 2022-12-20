import HomePage from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Fail from '../pages/Fail';
import Cast from '../components/Cast/Cast';
import Description from '../components/Description/Description';

import { Routes, Route } from 'react-router-dom';
import { MainHeader } from './Header/Header';

export const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="description" element={<Description />} />
        </Route>
        <Route path="*" element={<Fail />} />
      </Routes>
    </>
  );
};
