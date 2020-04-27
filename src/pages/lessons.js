import React from 'react'
import Lessons_OverView from '../components/Lesson_Hub'


function LessonsCard({ user }) {
    return (
        <>
        <h1> Lessons for {user.nickname} </h1>
        <Lessons_OverView data = {[]}/>
        </>
    )
}

export default LessonsCard