import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';
import Product from './components/product/Product';
import Dashboard from './components/dashboard/Dashboard';
import Cart from './components/cart/Cart';
import NavBarPanel from './components/navbar/NavBarPanel';

function App() {

  const AppLayout = () => {
    return (
      <Provider store={store}>
        <NavBarPanel />
        <Outlet />
      </Provider>
    )
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
