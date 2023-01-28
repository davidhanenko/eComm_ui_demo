import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';

import { useCart } from '../../../context/cartState';
import { PlaceOrderStyles } from './PlaceOrderStyles';
import OrderItem from './order-item/OrderItem';

const CART_ITEM_QUERY = gql`
  query CART_ITEM_QUERY($id: ID!) {
    singleItems(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          itemTitle
          price
          size
          quantity
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          sizePrice {
            ... on ComponentItemDetailsItemDetails {
              id
              size
              price
              type
              value
              quantity
            }
          }
        }
      }
    }
  }
`;

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
                sizePrice {
                  ... on ComponentItemDetailsItemDetails {
                    id
                    size
                    price
                    quantity
                    type
                    type_value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function PlaceOrder() {
  const { cart, count } = useCart();

  const ids = cart.map(
    el => (el = el.cartId.split('-')[0])
  );

  const itemDetails = {};
  cart.forEach((el, i) => {
    itemDetails[i] = {
      id: el.cartId.split('-')[0],
      detailsId: el.itemDetailsId,
      qty: el.quantity
    };
  });

  const [createOrder, { loading, error, data }] =
    useMutation(CREATE_ORDER_MUTATION, {
      variables: {
        data: {
          charge: cart.reduce(
            (t, el) =>
              (t += el.price ? el.quantity * el.price : 0),
            0
          ),
          totalItems: count,
          item_details: JSON.stringify(itemDetails),
          single_items: [...ids],
        },
      },
    });

  const handleOrder = async () => await createOrder();

  return (
    <PlaceOrderStyles>
      {cart.map(orderItem => (
        <OrderItem
          orderItem={orderItem}
          key={orderItem.cartId}
        />
      ))}
      <button onClick={handleOrder}>confirm order</button>
    </PlaceOrderStyles>
  );
}
