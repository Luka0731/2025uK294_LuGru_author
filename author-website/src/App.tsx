import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OverviewPage from './pages/OverviewPage';
import AuthorDetailPage from './pages/AuthorDetailPage';
import AuthorEditPage from './pages/AuthorEditPage';
import AuthorCreatePage from './pages/AuthorCreatePage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/authors/new" element={<PrivateRoute><AuthorCreatePage /></PrivateRoute>}/>
          <Route path="/authors/:id" element={<PrivateRoute><AuthorDetailPage /></PrivateRoute>}/>
          <Route path="/authors" element={<PrivateRoute><OverviewPage /></PrivateRoute>}/>
          <Route path="/authors/:id/edit" element={<PrivateRoute><AuthorEditPage /></PrivateRoute>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
