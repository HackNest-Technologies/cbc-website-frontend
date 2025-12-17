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
import AdminStorePage from "./pages/AdminPages/Store/AdminStorePage";
import AdminConvertPage from "./pages/AdminPages/AdminConvertPage";
import AdminFellowshipPage from "./pages/AdminPages/AdminFellowshipPage";
import AdminDevotional from "./pages/AdminPages/AdminDevotional";
import AdminBranches from "./pages/AdminPages/AdminBranches";
import AdminDepartment from "./pages/AdminPages/AdminDepartment";
import AdminEventPage from "./pages/AdminPages/Event/AdminEventPage";
import AddEventPage from "./pages/AdminPages/Event/AddEventPage";
import LeadershipPage from "./pages/LeadershipPage";
import AuthRedirect from "./components/PrivateRoute/AuthRedirect";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import UserRoute from "./components/PrivateRoute/UserRoute";
import UserLoginPage from "./pages/UserLoginPage";
import AddPastSermonPage from "./pages/AdminPages/PastSermon/AddPastSermonPage";
import AdminPastSermonPage from "./pages/AdminPages/PastSermon/AdminPastSermonPage";
import EditPastSermonPage from "./pages/AdminPages/PastSermon/EditPastSermonPage";
import AdminTestimoyPage from "./pages/AdminPages/Testimony/AdminTestimoyPage";
import AddTestimony from "./pages/AdminPages/Testimony/AddTestimony";
import EditTestimony from "./components/Admin/Testimony/EditTestimony";
import AdminCategoryPage from "./pages/AdminPages/Store/Category/AdminCategoryPage";
import EditCategoryPage from "./pages/AdminPages/Store/Category/EditCategoryPage";
import ProductsCategoryPage from "./pages/AdminPages/Store/ProductsCategoryPage";
import EditBookItemPage from "./pages/AdminPages/Store/EditBookItemPage";
import CreateCategoryPage from "./pages/AdminPages/Store/Category/CreateCategoryPage";
import AddProductsPage from "./pages/AdminPages/Store/AddProductsPage";
import AddStreamPage from "./pages/AdminPages/Stream/AddStreamPage";
import ShowStreamLinkPage from "./pages/AdminPages/Stream/ShowStreamLinkPage";
import EditStreamPage from "./pages/AdminPages/Stream/EditStreamPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🔹 AUTH DECISION ROUTE */}
      <Route path="/" element={<AuthRedirect />} />

      {/* 🔹 PUBLIC WEBSITE */}
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

      {/*  ADMIN AREA (PROTECTED ONCE) */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route path="admin-livestream" element={<ShowStreamLinkPage />} />
        <Route
          path="admin-livestream/add-livestream"
          element={<AddStreamPage />}
        />
        <Route path="edit-livestream" element={<EditStreamPage />} />
        <Route path="admin-pastsermon" element={<AdminPastSermonPage />} />
        <Route
          path="admin-pastsermon/add-pastsermon"
          element={<AddPastSermonPage />}
        />
        <Route path="edit-pastsermon" element={<EditPastSermonPage />} />
        <Route path="admin-events" element={<AdminEventPage />} />
        <Route path="admin-event/add-event" element={<AddEventPage />} />
        <Route path="book-category" element={<AdminCategoryPage />} />
        <Route
          path="book-category/add-category"
          element={<CreateCategoryPage />}
        />
        <Route path="edit-category" element={<EditCategoryPage />} />
        <Route path="products" element={<ProductsCategoryPage />} />
        <Route path="edit-product" element={<EditBookItemPage />} />
        <Route path="products/add-product" element={<AddProductsPage />} />
        <Route path="admin-store" element={<AdminStorePage />} />
        <Route path="admin-convert" element={<AdminConvertPage />} />
        <Route path="admin-fellowship" element={<AdminFellowshipPage />} />
        <Route path="admin-devotional" element={<AdminDevotional />} />
        <Route path="admin-branches" element={<AdminBranches />} />
        <Route path="admin-department" element={<AdminDepartment />} />
        <Route path="admin-testimonies" element={<AdminTestimoyPage />} />
        <Route
          path="admin-testimonies/add-testimony"
          element={<AddTestimony />}
        />
        <Route path="edit-testimony" element={<EditTestimony />} />
      </Route>

      {/* 🔹 AUTH & MISC */}
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/livechat" element={<LiveChatPage />} />
      <Route path="*" element={<ConstructionPage />} />
    </>
  )
);

const App = () => {
  const dispatch = useDispatch();
  const { data, isSuccess } = useCurrentUserQuery();
  console.log(data, " outside current user fetching ");

  useEffect(() => {
    console.log("useEffect fired", { isSuccess, data });

    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));
      console.log(data, "inside current data");
      console.log("hello");
    }
  }, [isSuccess, data]);

  return <RouterProvider router={router} />;
};

export default App;
