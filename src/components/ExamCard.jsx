import React, { useState, useEffect } from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import Loader from "./Loader";
import axios from "axios";
import { Helmet } from "react-helmet";

const ExamCard = () => {
  const [generalNoti, setGeneralNoti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://cgu-backend-jfqtsw4jt-thecoderadi.vercel.app/en"
      );
      setGeneralNoti(data);
      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      setError(true);
      setErrorMsg("Something Went Wrong | Please try again later");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Exam Notification</title>
      </Helmet>
      <div className="mainContentCard">
        <div className="containerOfCard">
          <div className="goBack">
            <Link to="/">Back</Link>
          </div>

          {loading ? (
            <Loader />
          ) : (
            generalNoti.map((item) => (
              <Card event={item.event} s_date={item.p_date} key={item._id} />
            ))
          )}
          {error ? <h1 className="errorKey">{errorMsg}</h1> : null}
        </div>
      </div>
    </>
  );
};

export default ExamCard;
