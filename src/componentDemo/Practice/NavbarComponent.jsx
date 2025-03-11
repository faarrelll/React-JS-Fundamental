import { Component } from "react";


export class NavbarComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Malang Gosling#5
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={
                    this.props.homeLinkActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    this.props.studentsLinkActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="students.html"
                >
                  Students
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    this.props.aboutLinkActive ? "nav-link active" : "nav-link"
                  }
                  href="about.html"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    this.props.contactLinkActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="contact.html"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
