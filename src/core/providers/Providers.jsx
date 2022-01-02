import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import UtilsProvider from './UtilsProvider';

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UtilsProvider>
        {children}
      </UtilsProvider>
    </QueryClientProvider>

  );
}
Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
