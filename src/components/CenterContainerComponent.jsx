import React from "react";

const CenterContainerComponent = (props) => {
  return <div style={styles.container}>{props.children}</div>;
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default CenterContainerComponent;
