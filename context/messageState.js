import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MessageStateProvider({ children }) {

  const [message, setMessage] = useState(null);

  return (
    <LocalStateProvider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// custom hook to access cart state
function useMessage() {
  const all = useContext(LocalStateContext);
  return all;
}

export { MessageStateProvider, useMessage };
