import { RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";
import Spin from "./components/Spin";
import { Suspense } from "react";
import router from './routes/ProvideRoutes.jsx';

function App() {

  return (
    <Suspense fallback={<Spin />}>
      <RouterProvider router={router()}>
      </RouterProvider>
    </Suspense>
  )
}

export default App