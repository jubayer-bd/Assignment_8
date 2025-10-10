import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { NavProvider } from "./context/NavContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Move NavProvider *inside* RouterProvider context so it can access useLocation */}
    <RouterProvider router={router}>
      <NavProvider />
    </RouterProvider>
  </StrictMode>
);
