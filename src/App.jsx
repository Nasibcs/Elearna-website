import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CoursesCards from "./Components/CoursesCards/CoursesCards";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Instructor from "./Components/Instructor/Instructor";
import HomeOne from "./Components/HomeOne/HomeOne"; // ✅ دا اضافه کړه
import LearnGalary from "./Components/learn/LearnGalary";
import TopCatagories from "./Components/TopCatagories/TopCatagories";
import OnlineCourses from "./Components/OnlineCourses/OnlineCourses";
import OnlineLearning from "./Components/OnlineLearning/OnlineLearning";
import Offering from "./Components/Offering/Offering";
import Testmonial from "./Components/Testmonial/Testmonial";
import TrendingCourses from "./Components/TrendingCourses/TrendingCourses";
import AboutOne from "./Components/AboutOne/AboutOne";
import OurStory from "./Components/OurStory/OurStory";
import AboutCard from "./Components/AboutCards/AboutCard";
import AboutOffer from "./Components/AboutOffer/AboutOffer";
import BecameInstructor from "./Components/BecameInstructor/BecameInstructor";
import LindaGrady from "./Components/LindaGrady/LindaGrady";
import AboutInstructures from "./Components/AboutInstructors/AboutInstructures";
import BlogTwo from "./Components/BlogTwo/BlogTwo";
import AboutTwoGalary from "./Components/AboutTwoGalary/AboutTwoGalary";
import ContactOne from "./Components/ContactOne/ContactOne";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import AskedQuestion from "./Components/AskedQuestions/AskedQuestion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function App() {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/blogone" element={<Home />} />
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <CoursesCards />
              <Instructor />
            </>
          }
        />

        {/* HomeOne Page */}
        <Route
          path="/homeone"
          element={
            <>
              <HomeOne />
              <LearnGalary />
              <TopCatagories />
              <OnlineCourses />
              <OnlineLearning />
              <Offering />
              <Testmonial />
              <TrendingCourses />
            </>
          }
        />

        <Route
          path="/aboutone"
          element={
            <>
              <AboutOne />
              <OurStory />
              <AboutCard />
              <AboutOffer />
              <BecameInstructor />
              <LindaGrady />
              <AboutInstructures />
            </>
          }
        />
        <Route
          path="/blogtwo"
          element={
            <>
              <BlogTwo />
              <AboutTwoGalary />
              <AboutInstructures/>
            </>
          }
        />
        <Route
          path="/contactone"
          element={
            <>
              <ContactOne />
              <ContactForm />
              <ContactDetails/>
              <AskedQuestion/>
            </>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}
