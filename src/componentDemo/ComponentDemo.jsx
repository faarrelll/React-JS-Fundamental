// React Component itu nama filenya harus huruf besar didepan atau Kapital, terus Penamaannya pakai PascalCase

// Ada 2 Tipe cara pembuatan component: 1 Class Component (Cara lama) 2 Functional Component (Cara baru)

// import React from 'react'; harusnya setiap JSX itu import React terlebih dahulu, agar bisa jalan dengan system react
// Tapi di vite sudah otomatis di import
// import React from "react";
import { Component } from "react";
import WelcomeBoy from "./Welcome";
import WelcomeJSX from "./Jsx/WelcomeJSX";
import WelcomeStyle from "./Styling/WelcomeStyle";
import ConditionalRenderingDemo from "./ConditionalRendering/ConditionalRenderingDemo";

// class ComponentDemo extends React.Component {
class ComponentDemo extends Component {
  render() {
    return (
      <div>
        <h1>Component Demo</h1>
        {/* Compositiona Nature of Component = Komponen bisa terdiri dari berbagai dan beberapa component */}
        {/* Component seperti LEGO */}
        <WelcomeBoy />
        <WelcomeBoy />
        {/* masing2 WelcomeBoy adalah instance yang berbeda, indpendent satu dengan yang lainnya  */}
        <WelcomeBoy />
        {/* {other Components} */}
        <WelcomeJSX />
        <ConditionalRenderingDemo />
        <WelcomeStyle />
      </div>
    );
  }
}

export default ComponentDemo;
