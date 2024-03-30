import SideNav from "./components/HomePage/SideNav";
import TodaySection from "./components/HomePage/TodaySection";
import Navbar from "./components/Navbar";
import HeroSlide from "./components/HomePage/HeroSlide";
import Category from "./components/HomePage/Category";
import BestSelling from "./components/HomePage/BestSelling";
import Banner from "./components/HomePage/Banner";
import OurProduct from "./components/HomePage/OurProduct";
import Featured from "./components/HomePage/Featured";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/HomePage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
