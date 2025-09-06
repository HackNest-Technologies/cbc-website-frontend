import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GivePage from "./pages/GivePage";
import EventPage from "./pages/EventPage";
import DepartGroupPage from "./pages/DepartGroupPage";
import HouseFellowPage from "./pages/HouseFellowPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* Define your routes here */}
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/give" element={<GivePage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/departments-group" element={<DepartGroupPage />} />
            <Route path="/house-fellowship" element={<HouseFellowPage />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
