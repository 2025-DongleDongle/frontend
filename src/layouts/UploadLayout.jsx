import UploadTopbar from '../components/topbar/NavTopbar';
import { Outlet } from 'react-router-dom';

export default function UploadLayout() {
  return (
    <>
      <NavTopbar />
      <Outlet /> {/* ← 여기에 각 페이지가 들어감 */}
    </>
  );
}