import PropTypes from 'prop-types';

export const Searchbar = ({ takeQuery }) => {
  return (
    <main>
      <form onSubmit={takeQuery}>
        <input type="text" name="name" required />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};
Searchbar.propTypes = { takeQuery: PropTypes.func.isRequired };
