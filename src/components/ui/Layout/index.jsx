import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar";
import StyleAdminLayout from "./style";

export const UserLayout = () => (
  <section>
    <Outlet />
  </section>
);

export const AdminLayout = () => (
  <StyleAdminLayout>
    <Sidebar />
    <Outlet />
  </StyleAdminLayout>
);
