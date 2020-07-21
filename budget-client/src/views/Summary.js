import React, { useState, useEffect } from "react";
import subDays from "date-fns/subDays";
import DatePicker from "react-date-picker";
import UserPageTemplate from "../templates/UserPageTemplate";
import Sidebar from "../components/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Summary = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/user/dashboard", {
        method: "POST",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.login);
      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  }
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getName();
  }, []);

  const MONTHS = [
    "STYCZEŃ",
    "LUTY",
    "MARZEC",
    "KWIECIEŃ",
    "MAJ",
    "CZERWIEC",
    "LIPIEC",
    "SIERPIEŃ",
    "WRZESIEŃ",
    "PAŹDZIERNIK",
    "LISTOPAD",
    "GRUDZIEŃ",
  ];
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [month, setMonth] = useState(startDate.getMonth());
  useEffect(() => {
    setMonth(startDate.getMonth());
  }, [startDate]);

  return (
    <>
      <Sidebar setAuth={setAuth} logout={logout} />
      <UserPageTemplate pageContext="summary">
        <h2> {MONTHS[month]}</h2>
        <h2>Welcome {name}</h2>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          value={startDate}
          maxDate={subDays(new Date(), 0)}
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          value={endDate}
          startDate={startDate}
          endDate={endDate}
          maxDate={subDays(new Date(), 0)}
        />
      </UserPageTemplate>
    </>
  );
};

export default Summary;
