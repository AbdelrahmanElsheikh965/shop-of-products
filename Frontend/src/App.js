import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
