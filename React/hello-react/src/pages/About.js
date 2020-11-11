import React from 'react';
import './About.css'

import Profile from './Profile.png'
import NewCalendar from './calendar/NewCalendar'

const About = () => {
    return (
        <div>
            <div class="ui grid">
                <div class="row">
                    <div class="six wide column" className="image">
                        <img class="disabled medium ui image" src={Profile} />
                    </div>
                    <div class="ten wide column" className="profile" style={{ fontSize: "24px" }}>
                        <p style={{ margin: 0 }}><strong>Profile</strong></p>
                        <div class="ui segment" style={{ height: "11.5rem" }}>
                            <p style={{ lineHeight: "25px" }}>
                                <strong>이름</strong> : <br />
                                <strong>Email</strong> : <br />
                                <strong>관심분야</strong> : <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="six wide column" className="todo">
                        <div class="ui segment" style={{ height: "19.5rem" }}>
                            <p style={{ fontSize: "18px" }}>
                                <strong>Todo List</strong>
                            </p>
                            <p>
                                오늘의 Todo를 작성하시오.
                            </p>
                        </div>
                    </div>
                    <div class="ten wide column" className="calendar">
                        <NewCalendar />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;