import { Component, Fragment } from "react";
import NavbarComponent from "./NavbarComponent";
// import HomePageContent from "./HomePageContent";
import PageContent from "./PageContent";
import PropsDemo from "../Props/PropsDemo";

// <!-- Navigation Bar -->
// <!-- Content Halaman -->
// 1 JSX hanya boleh 1 element saja
export class HomePageComponent extends Component {
  render() {
    return (
      <Fragment>
        {/* <NavbarComponent homeLinkActive={true} /> */}
        {/* homeLinkActive tanpa nilai artinya sama dengan homeLinkActive={true} */}
        <NavbarComponent homeLinkActive />
        {/* <HomePageContent /> */}
        <PageContent title={"HOME PAGE TITLE"} content="HOME CONTENT" />
        <PropsDemo />
      </Fragment>
    );
  }
}

export default HomePageComponent;
