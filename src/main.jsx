import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Favorites from './components/Favorites';

const router = createHashRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'calendar', element: <Calendar /> },
    { path: 'catalog', element: <Catalog /> },
    { path: 'cart', element: <Cart /> },
    { path: 'favorites', element: <Favorites /> }
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
