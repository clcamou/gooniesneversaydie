import { useEffect } from 'react'
import Assignment_Hub from "../components/Assignment_Hub"

export default async function assignmenthub({ user }) {  

    let data = await fetch("/api/getallstudentassignments", {
        method: "GET",
        body: {
            user_id: user.user_id
        }
    })
    return (
     <Assignment_Hub data = {data}/>
    )
  }