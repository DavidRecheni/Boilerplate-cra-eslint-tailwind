import {
  createContext, useContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

const utilsContext = createContext();

export default function UtilsProvider({ children }) {
  const loading = useState(false);
  const modal = useState({ open: false });

  const staticValues = useMemo(() => ({ loading, modal }), []);

  return (
    <utilsContext.Provider value={staticValues}>
      {children}
    </utilsContext.Provider>
  );
}

UtilsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUtils = () => useContext(utilsContext);
