import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      {/* Fixed navbar — takes it out of flow, so we need padding-top below */}
      <Navbar />

      {/*
        pt-[88px]: navbar pill = 72px + py-4 top = 16px → 88px clears the bar
        leaving just 8px of breathing room before content starts.
      */}
      <main className="flex-1 pt-[88px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
