import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <div >
       <Navbar />
      <h1 >this is the homepage</h1>
      <Footer />
    </div>
  );
}
