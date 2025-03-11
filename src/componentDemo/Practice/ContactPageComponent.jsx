import { Component, Fragment } from "react";
import NavbarComponent from "./NavbarComponent";
import HomePageContent from "./HomePageContent";
import PageContent from "./PageContent";

// <!-- Navigation Bar -->
// <!-- Content Halaman -->
// 1 JSX hanya boleh 1 element saja
export class ContactPageComponent extends Component {
  render() {
    return (
      <Fragment>
        <NavbarComponent contactLinkActive />

        {/* <HomePageContent /> */}
        <PageContent title={"HOME PAGE TITLE"} content="HOME CONTENT" />
      </Fragment>
    );
  }
}

export default ContactPageComponent;
