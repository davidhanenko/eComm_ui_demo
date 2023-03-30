import OrderPlaced from '../components/order/order-placed/OrderPlaced';


export default function OrderPlacedPage(props) {
  return <OrderPlaced />;
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
