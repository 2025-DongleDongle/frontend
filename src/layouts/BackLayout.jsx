import BackTopbar from '../components/topbar/BackTopbar';
import { Outlet } from 'react-router-dom';

export default function BackLayout() {
  return (
    <>
      <BackTopbar />
      <Outlet /> {/* ← 여기에 각 페이지가 들어감 */}
    </>
  );
}