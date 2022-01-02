import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainPage from './modules/mainPage/MainPage';
import LoadingScreen from './core/components/LoadingScreen';

import { useUtils } from './core/providers/UtilsProvider';

export default function App() {
  const { loading: [loading] } = useUtils();

  return (
    <div className="w-full h-screen bg-gray-300">
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <MainPage />
            )}
          />
          <Route
            path="/home"
            element={(
              <Navigate replace to="/" />
            )}
          />

        </Routes>
      </Router>

      {loading && <LoadingScreen />}
    </div>
  );
}
