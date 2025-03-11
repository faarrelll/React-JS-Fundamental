import { Component, Fragment } from "react";
import NavbarComponent from "./NavbarComponent";
import PageContent from "./PageContent";

const aboutPageContentProps = {
  title: "ABOUT PAGE TITLE",
  content: "About Content",
};

// <!-- Navigation Bar -->
// <!-- Content Halaman -->
// 1 JSX hanya boleh 1 element saja
export class AboutPageComponent extends Component {
  render() {
    return (
      <Fragment>
        <NavbarComponent />

        {/* bisa pakai Spread operator ... jika props nya banyak dan cape nulis */}
        <PageContent {...aboutPageContentProps} />
      </Fragment>
    );
  }
}

export default AboutPageComponent;
