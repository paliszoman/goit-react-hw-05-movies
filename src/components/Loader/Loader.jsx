import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Triangle
      height="180"
      width="180"
      color="#3f51b5"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      wrapperClassName
      visible
    />
  );
};
