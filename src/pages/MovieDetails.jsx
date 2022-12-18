import { useParams } from 'react-router-dom';
export const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <main>
      <ul className="movie-list">
        <li className="movie-list__item">
          <img src="https://via.placeholder.com/960x240" alt=""></img>
        </li>
        <li className="movie-list__item">
          <h1>A</h1>
        </li>
        <li className="movie-list__item">
          <p></p>
        </li>
        <li className="movie-list__item">
          <h2>A</h2>
        </li>
        <li className="movie-list__item">
          <p></p>
        </li>
        <li className="movie-list__item">
          <h2>A</h2>
        </li>
        <li className="movie-list__item">
          <p></p>
        </li>
      </ul>
    </main>
  );
};
