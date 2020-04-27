import { useEffect } from "react";
import Assignment_Hub from "../components/Assignment_Hub";
import { Router } from "express";

function assignmenthub({ user }) {
    const [assignments] = useState("");
    
    let data = fetch("/api/getallstudentassignments", {
        method: "GET",
        body: JSON.stringify({
            assignments
        })
    });
    Router.pull("/");
    

    return (
      <div>
      <Assignment_Hub data = {data}/>
      </div>
    );
  }
  
  export default assignmenthub;