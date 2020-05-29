import * as React from 'react';

const IsTabletContext = React.createContext({});

export const IsTabletContextProvider = ({children}) => {
  const state = React.useState(true);

  return (
    <IsTabletContext.Provider value={state}>
      {children}
    </IsTabletContext.Provider>
  );
};

export const useIsTablet = () => React.useContext(IsTabletContext);
