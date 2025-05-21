import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OverviewPage from "./pages/OverviewPage";
import AuthorDetailPage from "./pages/AuthorDetailPage";
import AuthorEditPage from "./pages/AuthorEditPage";
import AuthorCreatePage from "./pages/AuthorCreatePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/authors" element={<OverviewPage />} />
        <Route path="/authors/:id" element={<AuthorDetailPage />} />
        <Route path="/authors/:id/edit" element={<AuthorEditPage />} />
        <Route path="/author/create/" element={<AuthorCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
