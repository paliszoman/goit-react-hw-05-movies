import { Link } from 'react-router-dom';
export const MoviesList = movies => {
  return (
    <main>
      <h1>Trending movies:</h1>
      <ul>
        {movies.map(m => (
          <li key={m.id}>
            <Link to={m.id}>{m.title || m.original_name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
