import "./App.css";
import Home from "../src/components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import { Helmet } from "react-helmet";
import ProtectedRoute from "./protectedRoutes";
import Sliver from "./components/Sliver";
import Banner from "./components/Banner";
import Addsliver from "./components/Sliver/Addsliver";
import Editsliver from "./components/Sliver/Editsliver";
import Addbanner from "./components/Banner/Addbanner";
import Editbanner from "./components/Banner/Editbanner";
import Career from "./components/Career";
import Addcareer from "./components/Career/Addcareer";
import Editcareer from "./components/Career/Editcareer";
import Golden from "./components/Golden";
import Addgolden from "./components/Golden/Addgolden";
import Editgolden from "./components/Golden/Editgolden";
import Addgoldenproducts from "./components/GoldenProducts/Addgoldenproducts";
import Goldenproducts from "./components/GoldenProducts";
import Editgoldenproducts from "./components/GoldenProducts/Editgoldenproducts";
import Sliverproducts from "./components/SliverProducts";
import Editsliverproducts from "./components/SliverProducts/Editsliverproducts";
import Addsliverproducts from "./components/SliverProducts/Addsliverproducts";
import Contact from "./components/Contact";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
          </Route>
          <Route exact path="/sliver" element={<ProtectedRoute />}>
            <Route
              path="/sliver"
              element={
                <>
                  <Sliver />
                </>
              }
            />
          </Route>
          <Route exact path="/sliver/add" element={<ProtectedRoute />}>
            <Route
              path="/sliver/add"
              element={
                <>
                  <Addsliver />
                </>
              }
            />
          </Route>
          <Route exact path="/sliver/edit" element={<ProtectedRoute />}>
            <Route
              path="/sliver/edit"
              element={
                <>
                  <Editsliver />
                </>
              }
            />
          </Route>
          <Route exact path="/golden" element={<ProtectedRoute />}>
            <Route
              path="/golden"
              element={
                <>
                  <Golden />
                </>
              }
            />
          </Route>
          <Route exact path="/golden/add" element={<ProtectedRoute />}>
            <Route
              path="/golden/add"
              element={
                <>
                  <Addgolden />
                </>
              }
            />
          </Route>
          <Route exact path="/golden/edit" element={<ProtectedRoute />}>
            <Route
              path="/golden/edit"
              element={
                <>
                  <Editgolden />
                </>
              }
            />
          </Route>
          <Route exact path="/goldenproducts" element={<ProtectedRoute />}>
            <Route
              path="/goldenproducts"
              element={
                <>
                  <Goldenproducts />
                </>
              }
            />
          </Route>
          <Route exact path="/goldenproducts/add" element={<ProtectedRoute />}>
            <Route
              path="/goldenproducts/add"
              element={
                <>
                  <Addgoldenproducts />
                </>
              }
            />
          </Route>
          <Route exact path="/goldenproducts/edit" element={<ProtectedRoute />}>
            <Route
              path="/goldenproducts/edit"
              element={
                <>
                  <Editgoldenproducts />
                </>
              }
            />
          </Route>
          <Route exact path="/sliverproducts" element={<ProtectedRoute />}>
            <Route
              path="/sliverproducts"
              element={
                <>
                  <Sliverproducts />
                </>
              }
            />
          </Route>

          <Route exact path="/sliverproducts/add" element={<ProtectedRoute />}>
            <Route
              path="/sliverproducts/add"
              element={
                <>
                  <Addsliverproducts />
                </>
              }
            />
          </Route>
          <Route exact path="/sliverproducts/edit" element={<ProtectedRoute />}>
            <Route
              path="/sliverproducts/edit"
              element={
                <>
                  <Editsliverproducts />
                </>
              }
            />
          </Route>
          
          <Route exact path="/contact" element={<ProtectedRoute />}>
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            />
          </Route>
         
          <Route exact path="/banner" element={<ProtectedRoute />}>
            <Route
              path="/banner"
              element={
                <>
                  <Banner />
                </>
              }
            />
          </Route>

          <Route exact path="/banner/add" element={<ProtectedRoute />}>
            <Route
              path="/banner/add"
              element={
                <>
                  <Addbanner />
                </>
              }
            />
          </Route>
          <Route exact path="/banner/edit" element={<ProtectedRoute />}>
            <Route
              path="/banner/edit"
              element={
                <>
                  <Editbanner />
                </>
              }
            />
          </Route>
          <Route exact path="/career" element={<ProtectedRoute />}>
            <Route
              path="/career"
              element={
                <>
                  <Career />
                </>
              }
            />
          </Route>

          <Route exact path="/career/add" element={<ProtectedRoute />}>
            <Route
              path="/career/add"
              element={
                <>
                  <Addcareer />
                </>
              }
            />
          </Route>
          <Route exact path="/career/edit" element={<ProtectedRoute />}>
            <Route
              path="/career/edit"
              element={
                <>
                  <Editcareer />
                </>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <Helmet>
        <script
          async
          defer
          src="../../../buttons.github.io/buttons.js"
        ></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/js/dashboards-analytics.js"></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/js/main.js"></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/vendor/libs/apex-charts/apexcharts.js"></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/vendor/js/menu.js"></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/vendor/js/bootstrap.js"></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/vendor/libs/popper/popper.js"></script>
        <script src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/vendor/libs/jquery/jquery.js"></script>
      </Helmet>
    </>
  );
}
