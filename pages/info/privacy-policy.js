import Policy from '../../components/shared/Policy';

export default function ReturnPolicyPage(props) {
  return <Policy page={props.page} />;
}

export async function getStaticProps() {
  const layout = 'main';
  const page = 'return_policy';
  return {
    props: {
      layout,
      page,
    },
  };
}