import NavTopbar from '../components/topbar/NavTopbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <NavTopbar />
      <Outlet /> {/* ← 여기에 각 페이지가 들어감 */}
    </>
  );
}