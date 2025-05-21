import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import OverviewPage from "./components/pages/OverviewPage";
import AuthorDetailPage from "./components/pages/AuthorDetailPage";
import AuthorEditPage from "./components/pages/AuthorEditPage";
import AuthorCreatePage from "./components/pages/AuthorCreatePage";

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
