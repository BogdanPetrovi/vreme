import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Senzor from "./routes/Senzor";

export const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/senzor/:id', element: <Senzor />}
])