import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, matchPath } from "react-router-dom";
import './App.css'
import MainLayout from './layouts/MainLayout';
import UploadLayout from './layouts/UploadLayout';
import BackLayout from './layouts/BackLayout';

function App() {

  return (
    <>
      <Router>


        {/* NavTopbar(네비게이션) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        {/* UploadTopbar(뒤로가기+게시하기) */}
        <Route element={<UploadLayout />}>
          <Route path="/accountbook" element={<AccountbookPage />} />
        </Route>

        {/* BackTopbar(뒤로가기) */}
        <Route element={<BackLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Topbar X */}
        
      </Router>
    </>
  )
}

export default App
