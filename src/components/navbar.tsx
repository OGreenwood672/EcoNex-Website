import { animateScroll as scroll } from "react-scroll";

import "./navbar.scss";

export default function Navbar() {

    const handleClickScroll: any = (elem: string): void => {
        const element: (HTMLElement | null) = document.getElementById(elem);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center"});
        }
    };


    return (
        <nav className="nav show-nav" id="navbar">
            <ol className="nav-content">
                <div onClick={() => document.getElementsByClassName("App")[0].scrollTo({top: 0, behavior: "smooth"})}>
                    <img onClick={() => scroll.scrollToTop()} className="logo logo-slideleft" src="./EcoNexIcon.png" alt="EcoNex">
                </img>
                </div>
                <ol className="nav-items">
                    <li className="nav-item underline nav-slidedown" onClick={() => handleClickScroll("about")}>
                        <p>Who We Are</p>
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