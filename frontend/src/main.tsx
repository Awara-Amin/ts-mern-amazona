import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App.tsx"
import "./index.css"
import HomePage from "./pages/HomePage.tsx"
import ProductPage from "./pages/ProductPage.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { StoreProvider } from "./Store"
import CartPage from "./pages/CartPage"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import ShippingAddressPage from "./pages/ShippingAddressPage"
import PaymentMethodPage from "./pages/PaymentMethodPage"
import ProtectedRoute from "./components/ProtectedRoute"
import PlaceOrderPage from "./pages/PlaceOrderPage.tsx"
// import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from "./pages/OrderPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      {/* <Route path="shipping" element={<ShippingAddressPage />} /> */}
      {/* <Route path="payment" element={<PaymentMethodPage />} /> */}
      <Route path="" element={<ProtectedRoute />}>
        <Route path="shipping" element={<ShippingAddressPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
        <Route path="placeorder" element={<PlaceOrderPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
      </Route>

      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
)

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </StoreProvider>
  </StrictMode>
)
