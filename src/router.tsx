import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import UpdateProjecView from "./views/projects/UpdateProjecView";
import ProjectDetailView from "./views/projects/ProjectDetailView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" index element={<DashboardView />} />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route path="/projects/:projectId" element={<ProjectDetailView />} />
          <Route path="/projects/:projectId/edit" element={<UpdateProjecView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
