import Header from "@/components/Header";
import Service from "@/components/Service";
import Navbar from "@/components/shared/Navbar";
import Appoinment from "@/components/Appoinment/Appoinment";
import Contact from "@/components/Contact";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Header />
      </header>
      <Service />
      <Appoinment />
      <Contact />
      <Footer />
    </div>
  )
}
