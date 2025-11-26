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
import ConstructionPage from "./pages/ConstructionPage";
import LiveChatPage from "./pages/LiveChatPage";
import AdminLayout from "./layouts/AdminLayout";
// import AdminEventPage from "./pages/AdminPages/AdminEventPage";
import AdminStreamPage from "./pages/AdminPages/AdminStreamPage";
import AdminPastSermonPage from "./pages/AdminPages/AdminPastSermonPage";
import AdminStorePage from "./pages/AdminPages/AdminStorePage";
import AdminConvertPage from "./pages/AdminPages/AdminConvertPage";
import AdminFellowshipPage from "./pages/AdminPages/AdminFellowshipPage";
import AdminDevotional from "./pages/AdminPages/AdminDevotional";
import AdminBranches from "./pages/AdminPages/AdminBranches";
import AdminDepartment from "./pages/AdminPages/AdminDepartment";
import TestimonyPage from "./pages/AdminPages/TestimonyPage";
import AdminEventPage from "./pages/AdminPages/Event/AdminEventPage";
import AddEventPage from "./pages/AdminPages/Event/AddEventPage";
import LeadershipPage from "./pages/LeadershipPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        {/* Define your routes here */}
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
                <Route path="/leadership" element={<LeadershipPage />} />

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
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="admin/live-stream" element={<AdminStreamPage />} />
        <Route path="admin/past-sermon" element={<AdminPastSermonPage />} />
        <Route path="admin/admin-events" element={<AdminEventPage />} />
        <Route  path="events/add-events" element={<AddEventPage />} />

        <Route path="admin/store" element={<AdminStorePage />} />
        <Route path="admin/convert" element={<AdminConvertPage />} />
        <Route path="admin/fellowship" element={<AdminFellowshipPage />} />
        <Route path="admin/devotional" element={<AdminDevotional />} />
        <Route path="admin/branches" element={<AdminBranches />} />
        <Route path="admin/department" element={<AdminDepartment />} />
        <Route path="admin/testimonies" element={<TestimonyPage />} />
      </Route>

      <Route path="/livechat" element={<LiveChatPage />} />
      <Route path="*" element={<ConstructionPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
