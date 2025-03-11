import React, { Component } from "react";
import HomePageComponent from "./HomePageComponent";

// const person = {
//   name: "John",
// };

// console.log(person["name"]); // hasilnya John

const CONSTANTS = {
  PAGE_ROUTE: {
    HOME: "HOME",
    PRODUCTS: "PRODUCTS",
    CONTACTS: "CONTACTS",
  },
};

const { PAGE_ROUTE } = CONSTANTS;

const ProductPageComponent = (props) => {
  return <div>ProductPageComponent</div>;
};

const ContactsPageComponent = (props) => {
  return <div>ContactsPageComponent</div>;
};

// bisa pakai if else, Switch Case atau Object (seperti map) seperti ini
const routeToComponentMap = {
  [PAGE_ROUTE.HOME]: HomePageComponent,
  [PAGE_ROUTE.PRODUCTS]: ProductPageComponent,
  [PAGE_ROUTE.CONTACTS]: ContactsPageComponent,
};

const renderPageComponentByRoute = (pageRoute) => {
  const Component = routeToComponentMap[pageRoute];
  return <Component />; // returnnya element
};

export class DummyWebComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageRoute: PAGE_ROUTE.HOME,
    };
  }

  render() {
    return (
      <div style={styles.container}>
        {/* Navigation Bar */}
        <nav
          style={{
            display: "flex",
            backgroundColor: "yellow",
            padding: "2rem",
            // justifyContent: "flex-start" default mirip inline
            justifyContent: "space-between",
          }}
        >
          <div>BRAND LOGO: GOSLING#5</div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => {
                this.setState({
                  pageRoute: PAGE_ROUTE.HOME,
                });
              }}
            >
              Home
            </button>
            <button
              onClick={() => {
                this.setState({
                  pageRoute: PAGE_ROUTE.PRODUCTS,
                });
              }}
            >
              Products
            </button>
            <button
              onClick={() => {
                this.setState({
                  pageRoute: PAGE_ROUTE.CONTACTS,
                });
              }}
            >
              Contacts
            </button>
          </div>
        </nav>

        {/* Page Content */}
        {/* renderPageComponentByRoute(this.state.pageRoute) = <Component /> */}
        {renderPageComponentByRoute(this.state.pageRoute)}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // flex: 1 / 3, kalau tidak ada maka akan ikut kontent
    // backgroundColor: "yellow",
  },
};

export default DummyWebComponent;
