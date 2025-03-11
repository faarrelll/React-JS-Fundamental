import React from "react";

class PageContent extends React.Component {
  render() {
    console.log("PageContent ke render");

    return (
      <div className="mt-8">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default PageContent;
