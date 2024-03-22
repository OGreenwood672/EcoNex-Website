
import "./navbar.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props: any) {

    const handleClickScroll: any = (elem: string): void => {
        const element: (HTMLElement | null) = document.getElementById(elem);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center"});
        }
    };


    return (
        <nav className="nav show-nav" id="navbar">
            <ol className="nav-content">
                <div className="left-nav-items">
                    <img onClick={() => document.getElementsByClassName("App")[0].scrollTo({top: 0, behavior: "smooth"})} className="logo logo-slideleft" src="./EcoNexIcon.png" alt="EcoNex" />
                    <div className="light-mode" onClick={props.changeLightMode}>
                        <FontAwesomeIcon icon={faSun} />
                    </div>
                </div>
                <ol className="nav-items">
                    <li className="nav-item underline nav-slidedown" onClick={() => handleClickScroll("about")}>
                        <p>Our Mission</p>
                    </li>
                    <li className="nav-item underline nav-slidedown" onClick={() => handleClickScroll("founders-section")}>
                        <p>Our People</p>
                    </li>
                    <li className="nav-item underline nav-slidedown" onClick={() => handleClickScroll("footer")}>
                        <p>Contact</p>
                    </li>
                </ol>
            </ol>
        </nav>
    )

}