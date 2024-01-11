import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar";
import StyleAdminLayout from "./style";
import ProtectedRoute from "../../Auth/ProtectedAuth";

export const UserLayout = () => (
  <section>
    <Outlet />
  </section>
);

export const AdminLayout = () => (
  <ProtectedRoute>
    <StyleAdminLayout>
      <Sidebar />
      <Outlet />
    </StyleAdminLayout>
  </ProtectedRoute>
);
