import { useEffect, useRef } from 'react'
import Quizzes_All from "../components/Quizzes_All"

export default function quizzes({user}) { 
/* disconnected until API is set up again
    let data = await fetch("/api/getavailablequizzes", {
        method: "GET",
        body: {user}
    })
*/
    return (
        <>
        <h1> Quizzes for {user.nickname} </h1>
        <Quizzes_All data = {[]}/>
        </>
    )
  }