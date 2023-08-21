import React from 'react'
import "@appwrite.io/pink"; // optionally, add icons import "@appwrite.io/pink-icons";
import "@appwrite.io/pink-icons";

const dashboard = () => {
    return (
        <div className="side-nav">
            <div className="side-nav-main">
                <section className="drop-section">
                    <ul className="drop-list">
                        <li className="drop-list-item">
                            <a className="drop-button is-selected" href="">
                                <span className="icon-home" aria-hidden="true"></span>
                                <span className="text">My Profile</span>
                            </a>
                        </li>
                        <li className="drop-list-item">
                            <a className="drop-button" href="">
                                <span className="icon-user-group" aria-hidden="true"></span>
                                <span className="text">My Connection</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="side-nav-bottom">
                <section className="drop-section">
                    <a className="drop-button" href="">
                        <span className="icon-cog" aria-hidden="true"></span>
                        <span className="text">Menu item</span>
                    </a>
                </section>
            </div>
        </div>

    )
}

export default dashboard
