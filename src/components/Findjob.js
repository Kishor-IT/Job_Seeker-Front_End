import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export default function Findjob() {

  const [professionalData, setProfessionalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const results = professionalData.filter((el) =>
        el.Position.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(professionalData);
    }
  }, [searchTerm, professionalData]);

  const fetchProfessionalData = async () => {
    try {
      const response = await axios.get("http://localhost:8085/product");
      setProfessionalData(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching professional data:", error);
    }
  };

  const remove = async (Job) => {
    try {
      await axios.delete('http://localhost:8085/product/'+Job);
      console.log("removed " + Job);
      const updatedData = professionalData.filter((el) => el.Job !== Job);
      setProfessionalData(updatedData);
      setSearchResults(updatedData);
    } catch (error) {
      console.error("Error removing job:", error);
    }
  };

  const meg=async()=>{
    alert("Applied successfully");
    alert("You Will Receive an email shortly !!!")
  }


  return (
    <div className="bg-peach">
      <div className="card ms-7" style={{ margin: "10px" }}>
        <div className="card-body bg-dark text-white">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by position"
          />
          <button className="btn btn-success" onClick={() => setSearchTerm("")}>
            RESET
          </button>
        </div>
      </div>
      {searchResults.map((el) => (
        <div className="card ms-7" style={{ margin: "20px", width:"70%", marginBottom:"30px" ,marginLeft:"15%",}} key={el.Job}>
          <div className="row-g-0">
           
              <div className="card-body bg-dark text-white">
              <p className="card-text">Job: {el.Job}</p>
                <p className="card-text">Position : {el.Position}</p>
                <p className="card-text">Company : {el.Company}</p>
                <p className="card-text">Location : {el.Location}</p>
                <p className="card-text">Salary : {el.Salary}</p>
                <button className="btn btn-primary" onClick={()=>meg()}>APPLY FOR JOB</button>
                <button className="btn btn-danger" onClick={() => remove(el.Job)}> REMOVE</button>
               </div>
          </div>
          </div>
      ))}
    </div>
  );
}