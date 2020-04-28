import { useEffect } from 'react'
import Assignment_Hub from "../components/Assignment_Hub"

export default function assignmenthub({ user }) {  

    /* disconnected until API is set back up
    let data = await fetch("/api/getallstudentassignments", {
        method: "GET",
        body: {
            user_id: user.user_id
        }
    })
    */
    return (
    <>
    <h1>Grades for {user.nickname}</h1>
     <Assignment_Hub data = {[]}/>
    </>
    )
  }