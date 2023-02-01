import About from '../components/about/About';

export default function AboutPage(props) {
  return <About />;
}

export async function getServerSideProps(props) {
  let layout = 'main';
  return {
    props: {
      layout,
    },
  };
}
