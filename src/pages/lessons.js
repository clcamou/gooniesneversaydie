import React from 'react'
import Lessons_OverView from '../components/Assignment_Hub'


function LessonsCard({ user }) {
    return (
        <>
        <h1> Lessons for {user.nickname} </h1>
        <Lessons_OverView/>
        </>
    )
}

export default LessonsCard