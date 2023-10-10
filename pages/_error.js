import styled from 'styled-components';

const Styles = styled.div`
  margin-top: var(--navHeight);
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
    <Styles>
      <h1>500 | Server error, we'll be back ASAP</h1>
    </Styles>
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
