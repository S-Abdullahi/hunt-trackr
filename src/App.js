import {
  AddJobs,
  AllJobs,
  Error,
  Home,
  Landing,
  Login,
  Profile,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Home />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/add-jobs" element={<AddJobs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
