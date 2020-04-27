import React, { useState } from 'react';
import { render } from 'react-dom';



function Dashboard({ user, loading }) {
   
    return (
            <div>
                {!loading &&
                    (user ? (
                        <div className="dashboard-container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card">
                                        <h4><a href="/api/lessons">Lessons</a></h4>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card">
                                        <h4><a href="/grades">Grades</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card">
                                        <h4><a href="/quizzes">Quizzes</a></h4>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card">
                                        <h4><a href="/profile">Profile</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <>
                                <h4>Please login to begin</h4>
                            </>

                        ))}

                <style jsx>{`
         h4 {
           color: wh;
           text-align: center;
           padding: 20px
         }
       `}</style>
            </div>
    )
}

export default Dashboard