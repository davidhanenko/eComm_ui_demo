import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { useCart } from '../../../context/cartState';
import { PlaceOrderStyles } from './PlaceOrderStyles';
import OrderItem from './order-item/OrderItem';

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($data: OrderInput!) {
    createOrder(data: $data) {
      data {
        id
        attributes {
          charge
          totalItems
          item_details
          single_items {
            data {
              id
              attributes {
                itemTitle
              }
            }
          }
        }
      }
    }
  }
`;

export default function PlaceOrder() {
  const { cart, count, totalCost } = useCart();

  const ids = cart.map(
    el => (el = el.cartId.split('-')[0])
  );

  const tax = totalCost * 0.08875;
  const charge = (totalCost + tax).toFixed(2);

  const itemDetails = {};

  cart.forEach((el, i) => {
    itemDetails[i] = {
      id: el.cartId.split('-')[0],
      detailsId: el.itemDetailsId,
      qty: el.quantity,
    };
  });

  const [createOrder, { loading, error, data }] =
    useMutation(CREATE_ORDER_MUTATION, {
      variables: {
        data: {
          charge: totalCost,
          totalItems: count,
          item_details: JSON.stringify(itemDetails),
          single_items: [...ids],
        },
      },
    });

  const handleOrder = async () => await createOrder();

  return (
    <PlaceOrderStyles>
      <section className='items-section'>
        {cart.map(orderItem => (
          <OrderItem
            orderItem={orderItem}
            key={orderItem.cartId}
          />
        ))}
      </section>

      <section className='charge-section'>
        <p>Total cost - ${totalCost.toFixed(2)}</p>
        <p>Tax - ${tax.toFixed(2)}</p>
        <p>Total to charge - ${charge}</p>

        <button onClick={handleOrder} disabled={loading}>
          confirm order
        </button>
      </section>
    </PlaceOrderStyles>
  );
}
