import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GeneralCard from "./components/GeneralCard";
import Header from "./components/Header";
import ExamCard from "./components/ExamCard";
import SecondHome from "./components/SecondHome";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>CGU-The Best Engineering College</title>
      </Helmet>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SecondHome />} />
          <Route path="/general" element={<GeneralCard />} />
          <Route path="/exam" element={<ExamCard />} />
          <Route path="*" element={<div>Not Found | GO Back</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
