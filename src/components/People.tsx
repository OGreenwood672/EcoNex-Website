
import "./People.scss";

export default function People() {

    return (
        <div>
            <h1 id="founders-title">Founders</h1>
            <div id="founders-section">
                <a href="https://www.linkedin.com/in/greenwood672">
                    <div className="person-info">
                        <img src="./Sriram.png" alt="Sriram Sundar"/>
                        <h3>Sriram Sundar</h3>
                        <p>CEO</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/greenwood672">
                    <div className="person-info">
                        <img src="./Greenwood.png" alt="Oliver Greenwood"/>
                        <h3>Oliver Greenwood</h3>
                        <p>CTO</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/greenwood672">
                    <div className="person-info">
                        <img src="./Vik.png" alt="Vikramaditya Singh"/>
                        <h3>Vikramaditya Singh</h3>
                        <p>Some text</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/greenwood672">
                    <div className="person-info">
                        <img src="./Umair.png" alt="Umair Mobarik"/>
                        <h3>Umair Mobarik</h3>
                        <p>Some text</p>
                    </div>
                </a>
            </div>
            <div className="whitespace" />
        </div>
    )

}