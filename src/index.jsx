import { StrictMode } from 'react/cjs/react.production.min';
import ReactDOM from 'react-dom';
import './index.css';
import Providers from './core/providers/Providers';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
