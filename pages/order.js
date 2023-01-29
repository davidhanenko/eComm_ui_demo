import PlaceOrder from '../components/order/place-order/PlaceOrder';

export default function PlaceOrderPage(props) {
  return <PlaceOrder />;
}

export async function getStaticProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
