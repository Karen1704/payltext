// src/index.test.js
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

jest.mock('react-dom', () => ({
  createRoot: jest.fn(() => ({ render: jest.fn() })),
}));

jest.mock('./reportWebVitals');

test('renders App component', () => {
  require('./index.js');
  expect(ReactDOM.createRoot).toHaveBeenCalled();
  expect(ReactDOM.createRoot().render).toHaveBeenCalledWith(<App />);
});

test('calls reportWebVitals', () => {
  require('./index.js');
  expect(reportWebVitals).toHaveBeenCalled();
});
```

```javascript
// src/reportWebVitals.test.js
import reportWebVitals from './reportWebVitals';

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

test('calls web-vitals functions', () => {
  const onPerfEntry = jest.fn();
  reportWebVitals(onPerfEntry);
  const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');
  expect(getCLS).toHaveBeenCalledWith(onPerfEntry);
  expect(getFID).toHaveBeenCalledWith(onPerfEntry);
  expect(getFCP).toHaveBeenCalledWith(onPerfEntry);
  expect(getLCP).toHaveBeenCalledWith(onPerfEntry);
  expect(getTTFB).toHaveBeenCalledWith(onPerfEntry);
});

