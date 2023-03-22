import Policy from '../../components/shared/Policy';

export default function PurchasePolicyPage(props) {
  return <Policy page={props.page} />;
}

export async function getStaticProps() {
  const layout = 'main';
  const page = 'purchase_policy';
  return {
    props: {
      layout,
      page,
    },
  };
}
