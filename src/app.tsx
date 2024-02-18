import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header";
import Destinations from "./pages/Destinations";
import Footer from "./components/footer";
import DestinationTemplate from "./pages/destination/template";
import Articles from "./pages/Articles";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/destinations" Component={Destinations} />
        <Route path="/destinations/:slug" Component={DestinationTemplate} />
        <Route path="/articles" Component={Articles} />
      </Routes>
      <Footer />
    </>
  );
}
