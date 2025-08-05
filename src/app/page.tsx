import Header from "@/components/Header";
import Service from "@/components/Service";
import Navbar from "@/components/shared/Navbar";
import Appoinment from "@/components/Appoinment/Appoinment";
import Contact from "@/components/Contact";
import Footer from "@/components/shared/Footer";
import History from "@/components/History";
import Banner from "@/components/Banner";
import KeyFeatures from "@/components/KeyFeatures";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Header />
      </header>
      <Service />
      <Overview />
      <KeyFeatures />
      <Banner />
      <History />
      <Appoinment />
      <Contact />
      <Footer />
    </div>
  )
}
