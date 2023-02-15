import styled from 'styled-components';

const Styles404 = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  height: 50vh;
  position: relative;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    transform: translateX(-50%);
  }
`;

export default function Page404(props) {
  return (
    <Styles404>
      <h1>404 | Page Not Found</h1>
    </Styles404>
  );
}

export const getStaticProps = () => {
  const layout = 'main';

  return {
    props: {
      layout,
    },
  };
};
