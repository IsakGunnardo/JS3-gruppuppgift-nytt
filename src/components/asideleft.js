import "./aside.css";
import { useState } from "react";

export function AsideLeft() {

    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
    };


    return (
        <aside className="sidebar-left">
            <section>
                <ul className="sidebar-left-ul">
                    <li>Popular</li>
                </ul>
            </section>
            <section>
                <h6>TOPICS</h6>

                <ul className="sidebar-left-ul">
                    <li >   Gaming <input onClick={handleClick} className="checkbox arrow down" type="checkbox"/>
                        <ul className="sidebar-ul-toggle ul-in-ul" style={{ display: toggle ? 'none' : 'block' }}>
                            <li>  Valheim </li>
                            <li>  Ganshin Impact </li>
                            <li>  Minecraft </li>
                            <li>  Halo Infinite </li>
                            <li>  Call of Duty: Warzone </li>
                            <li>Path of Exile</li>
                            <li>Hollow Knight: SilkSong</li>
                            <li>Escape from Tarkov</li>
                            <li>Watch Dogs: Legion</li>
                        </ul>
                    </li>
                    <li >Sport
                        <ul className="sidebar-ul-toggle">
                            <li>NFL</li>
                            <li>NBA</li>
                            <li>Megan Anderson</li>
                            <li>Atlanta Hawks</li>
                            <li>Los Angeles Lakers</li>
                            <li>Boston Celtic</li>
                            <li>Arsenal F.C.</li>
                            <li>Philadelphia 76ers</li>
                            <li>Premier League</li>
                            <li>UFC</li>
                        </ul>

                    </li>
                    <li>Business
                        <ul className="sidebar-ul-toggle">
                        <li >GameStop</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>

                        </ul>

                    </li>
                    <li>Crypto
                        <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <li>Television
                        <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <li>Celebrity
                        <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <button className="sidebar-left-button">See more</button>
                </ul>
            </section>
            <footer>
                <h6>RESOURCES</h6>

                <ul className="sidebar-left-ul">
                    <li>About Reddit</li>
                    <li>Advertise</li>
                    <li>Help</li>
                    <button className="sidebar-left-button">See more</button>


                    <p className="sidebar-left-p">Reddit, inc. © 2023. All rights reserved.</p>


                </ul>

            </footer>
        </aside>
    )
}