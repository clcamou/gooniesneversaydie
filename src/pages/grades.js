import { useEffect } from 'react'
import Assignment_Hub from "../components/Assignment_Hub"

export default async function assignmenthub({ user }) {  

    /* disconnected until API is set back up
    let data = await fetch("/api/getallstudentassignments", {
        method: "GET",
        body: {
            user_id: user.user_id
        }
    })
    */
   let data = []
    return (
     <Assignment_Hub data = {data}/>
    )
  }