export default function FallbackPage(props) {
  return <h1>fallback</h1>;
}

export const getServerSideProps = ctx => {
  const layout = 'main';

  return {
    props: {
      layout,
    },
  };
};
