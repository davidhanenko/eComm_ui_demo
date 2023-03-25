import About from '../components/about/About';

export default function AboutPage(props) {
  return <About />;
}

export async function getStaticProps(props) {
  return {
    props: {
      layout: 'main',
    },
  };
}
