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
                                    <h4><a href="/lessons"><img src="https://i.ibb.co/9vLXnY3/homework.png" alt="homework" border="0" width={30}></img>Lessons</a></h4>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card">
                                    <h4><a href="/grades"><img src="https://i.ibb.co/y6z6tZj/grades.png" alt="grades" border="0" width={30}></img>Grades</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <div className="card">
                                    <h4><a href="/quizzes"><img src="https://i.ibb.co/Tv1hk0c/test.png" alt="test" border="0" width={30}></img>Quizzes</a></h4>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card">
                                    <h4><a href="/profile"><img src="https://i.ibb.co/XFBjpwg/account.png" alt="account" border="0" width={30}></img>Profile</a></h4>
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
           color: cadetblue;
           text-align: center;
           padding: 20px
         }
         .card {
             background-color: cadetblue;
         }
         a {
            color: seashell;
         }
       `}</style>

        </div>
    )
}

export default Dashboard