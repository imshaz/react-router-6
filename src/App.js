import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./wireframe.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<NonAuthorizedLayout />} />
        <Route path="/" element={<AuthorizedLayout />}>
          <Route index element={<DashboardLayout />} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="settings" element={<SettingsPage />} />
            <Route path="search" element={<SearchResultsPage />} />
          </Route>
          <Route path="products" element={<ProductsLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function AuthorizedLayout() {
  return (
    <div className="authorized-layout">
      <div>
        <header>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Products</Link>
          <Link to="/auth">Logout</Link>
        </header>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

const DashboardLayout = () => (
  <div className="dashboard-layout">
    <aside />
    <div className="content">
      <nav>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/dashboard/search">Search</Link>
      </nav>
      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  </div>
);

const ProductsLayout = () => (
  <div className="products-layout">
    <main>
      <div />
      <div />
      <div />
      <div />
      <div />
    </main>
  </div>
);

const SettingsPage = () => (
  <div className="settings-page">
    <div />
    <div />
  </div>
);

const SearchResultsPage = () => (
  <div className="search-results-page">
    <div />
    <div />
    <div />
  </div>
);
function NonAuthorizedLayout() {
  return (
    <div className="unauthorized-layout">
      <main>
        <Link to="/">Login</Link>
      </main>
    </div>
  );
}
export default App;
