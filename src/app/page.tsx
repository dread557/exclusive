import SideNav from "../components/HomePage/SideNav";
import TodaySection from "../components/HomePage/TodaySection";
import Navbar from "./layouts/Navbar";
import HeroSlide from "../components/HomePage/HeroSlide";
import Category from "../components/HomePage/Category";
import BestSelling from "../components/HomePage/BestSelling";
import Banner from "../components/HomePage/Banner";
import OurProduct from "../components/HomePage/OurProduct";
import Featured from "../components/HomePage/Featured";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "./layouts/Footer";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main>
        <section className="flex">
          <SideNav />
          <HeroSlide />
        </section>
        <TodaySection />
        <Category />
        <BestSelling />
        <Banner />
        <OurProduct />
        <Featured />
        <ScrollToTop />
      </main>
    </MainLayout>
  );
}
