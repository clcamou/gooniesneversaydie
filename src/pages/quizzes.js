import { useEffect, useRef } from 'react'
import Quizzes_All from "../components/Quizzes_All"

export default async function quizzes({user}) { 
/* disconnected until API is set up again
    let data = await fetch("/api/getavailablequizzes", {
        method: "GET",
        body: {user}
    })
*/
let data = []
    return (
     <Quizzes_All data = {data}/>
    )
  }