import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useCurrentUserQuery } from "./redux/apiSlice";
import { setUser } from "./redux/authSlice";
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
import AdminStreamPage from "./pages/AdminPages/AdminStreamPage";
import AdminStorePage from "./pages/AdminPages/AdminStorePage";
import AdminConvertPage from "./pages/AdminPages/AdminConvertPage";
import AdminFellowshipPage from "./pages/AdminPages/AdminFellowshipPage";
import AdminDevotional from "./pages/AdminPages/AdminDevotional";
import AdminBranches from "./pages/AdminPages/AdminBranches";
import AdminDepartment from "./pages/AdminPages/AdminDepartment";
import AdminEventPage from "./pages/AdminPages/Event/AdminEventPage";
import AddEventPage from "./pages/AdminPages/Event/AddEventPage";
import LeadershipPage from "./pages/LeadershipPage";
import AdminRoute from "./components/Admin/AdminRoute";
import UserLoginPage from "./pages/UserLoginPage";
import AddPastSermonPage from "./pages/AdminPages/PastSermon/AddPastSermonPage";
import AdminPastSermonPage from "./pages/AdminPages/PastSermon/AdminPastSermonPage";
import EditPastSermonPage from "./pages/AdminPages/PastSermon/EditPastSermonPage";
import AdminTestimoyPage from "./pages/AdminPages/Testimony/AdminTestimoyPage";
import AddTestimony from "./pages/AdminPages/Testimony/AddTestimony";
import EditTestimony from "./components/Admin/Testimony/EditTestimony";

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
      <Route
        path="/"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route
          path="/admin-livestream"
          element={
            <AdminRoute>
              <AdminStreamPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-pastsermon"
          element={
            <AdminRoute>
              <AdminPastSermonPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-pastsermon/add-pastsermon"
          element={
            <AdminRoute>
              <AddPastSermonPage />
            </AdminRoute>
          }
        />
        <Route
          path="/edit-pastsermon"
          element={
            <AdminRoute>
              <EditPastSermonPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-events"
          element={
            <AdminRoute>
              <AdminEventPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-event/add-event"
          element={
            <AdminRoute>
              <AddEventPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-store"
          element={
            <AdminRoute>
              <AdminStorePage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-convert"
          element={
            <AdminRoute>
              <AdminConvertPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-fellowship"
          element={
            <AdminRoute>
              <AdminFellowshipPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-devotional"
          element={
            <AdminRoute>
              <AdminDevotional />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-branches"
          element={
            <AdminRoute>
              <AdminBranches />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-department"
          element={
            <AdminRoute>
              <AdminDepartment />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-testimonies"
          element={
            <AdminRoute>
              <AdminTestimoyPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-testimony/add-testimony"
          element={
            <AdminRoute>
              <AddTestimony />
            </AdminRoute>
          }
        />

        <Route
          path="/edit-testimony"
          element={
            <AdminRoute>
              <EditTestimony />
            </AdminRoute>
          }
        />
      </Route>
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/livechat" element={<LiveChatPage />} />
      <Route path="*" element={<ConstructionPage />} />
    </>
  )
);

const App = () => {
  const dispatch = useDispatch();
  const { data, isSuccess } = useCurrentUserQuery();

  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));
      console.log(data, "current data");
    }
  }, [isSuccess, data]);

  return <RouterProvider router={router} />;
};

export default App;
