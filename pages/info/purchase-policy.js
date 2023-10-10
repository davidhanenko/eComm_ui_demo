import Policy from '../../components/shared/Policy';

export default function PurchasePolicyPage(props) {
  return <Policy page={props.page} />;
}

export async function getStaticProps() {
  return {
    props: {
      layout: 'main',
      page: 'purchase_policy',
    },
  };
}
