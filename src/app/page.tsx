import Header from "@/components/Header";
import Service from "@/components/Service";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Header />
      </header>
      <Service />
    </div>
  )
}
