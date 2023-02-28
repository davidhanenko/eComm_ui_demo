import RequestOrder from '../components/order/order-request/request-order/RequestOrder';

export default function RequestOrderPage(props) {
  return <RequestOrder />;
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
