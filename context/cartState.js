import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [count, setCount] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [cartRefState, setCartRefState] = useState(null);
  const [modalCloseBtnRef, setModalCloseBtnRef] =
    useState(null);

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function openCart() {
    setIsCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        cart,
        setCart,
        count,
        setCount,
        totalCost,
        setTotalCost,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
        closeCart,
        openCart,
        cartRefState,
        setCartRefState,
        modalCloseBtnRef,
        setModalCloseBtnRef,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// custom hook to access cart state
function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
