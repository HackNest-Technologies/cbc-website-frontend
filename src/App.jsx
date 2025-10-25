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
import CategoriesPage from "./pages/CategoriesPage";
import BookStorePage from "./pages/BookStorePage";
import WelcomePage from "./pages/WelcomePage";
import NewConvertPage from "./pages/NewConvertPage";
import NewMemberPage from "./pages/NewMemberPage";
import CounsellingPage from "./pages/CounsellingPage";
import MembershipPage from "./pages/MembershipPage";
import StudyPage from "./pages/StudyPage";
import PastSermonPage from "./pages/PastSermonPage";
import LivePage from "./pages/LivePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* Define your routes here */}
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/give" element={<GivePage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/departments-group" element={<DepartGroupPage />} />
      <Route path="/house-fellowship" element={<HouseFellowPage />} />
      <Route path="/store" element={<BookStorePage />} />
      <Route path="/store/:id" element={<CategoriesPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/new-member" element={<NewMemberPage />} />
      <Route path="/new-convert" element={<NewConvertPage />} />
      <Route path="/counselling" element={<CounsellingPage />} />
      <Route path="/membership-login" element={<MembershipPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/live" element={<LivePage />} />

      <Route path="/past-sermon" element={<PastSermonPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
