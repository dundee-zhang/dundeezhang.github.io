export default function Footer() {
    return (
        <div>
            <footer className="app-footer">
                <span className="glow">
                    <p>Dundee Zhang 2025 - All Rights Reserved</p>
                </span>
                <ul className="social-cons">
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/dundeezhang/"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-linkedin-in footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://github.com/dundeezhang"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-github footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://instagram.com/dundeehz"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-instagram footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="mailto:contact@dundeezhang.com"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-regular fa-envelope footer-icons"></i>
                            </div>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
