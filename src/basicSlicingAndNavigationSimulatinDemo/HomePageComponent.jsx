import React, { Component } from "react";

export class HomePageComponent extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}> Header </div>
        <div style={styles.contentContainer}>
          <div style={styles.sidebar}> Sidebar</div>
          <div style={styles.headlineArticleContainer}>
            <div style={styles.headline}>Headline</div>
            <div style={styles.article}>Article</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "lightblue",
    textAlign: "center",
    padding: "20px 0",
  },
  contentContainer: {
    backgroundColor: "lightgreen",
    display: "flex",
    flex: 1,
    border: "5px solid blue",
  },
  sidebar: {
    display: "flex",
    // width: "33vw" sama dengan flex: 1 dari total 3 (1/3 = 0.33
    flex: 1,
    // width: "500px"
    backgroundColor: "coral",

    justifyContent: "center",
    alignItems: "center",
  },
  headlineArticleContainer: {
    display: "flex",
    // width: "66vw" sama dengan flex: 2 dari total 3 (2/3 = 0.66)
    flex: 2,
    // width: "1000px"
    backgroundColor: "lightyellow",
    flexDirection: "column",
  },
  headline: {
    padding: "10px",
    backgroundColor: "pink",
    display: "flex",
    justifyContent: "center",
  },
  article: {
    backgroundColor: "brown",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default HomePageComponent;
