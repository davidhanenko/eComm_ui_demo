import Policy from '../../components/shared/Policy';

export default function ReturnPolicyPage(props) {
  return <Policy page={props.page} />;
}

export async function getStaticProps() {

  return {
    props: {
      layout: 'main',
      page: 'privacy_policy',
    },
  };
}
