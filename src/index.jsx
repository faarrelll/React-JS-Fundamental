import { createRoot } from "react-dom/client";
// import ConditionalRenderingDemo from "./componentDemo/ConditionalRendering/ConditionalRenderingDemo";
// import WelcomeStyle from "./componentDemo/Styling/WelcomeStyle";
import ComponentDemo from "./componentDemo/ComponentDemo";
import HomePageComponent from "./componentDemo/Practice/HomePageComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import CounterComponent from "./componentDemo/StateAndLifeCycle/CounterComponent";
import ContainerComponent from "./componentDemo/StateAndLifeCycle/ContainerComponent";
import UpdaterFunctionContainer from "./componentDemo/StateAndLifeCycle/UpdaterFunctionContainer";

import "./index.css";
import StatefulVsStatelessComponent from "./componentDemo/StateAndLifeCycle/StatefulVsStatelessComponent/StatefulVsStatelessComponent";
import FormDemoComponent from "./componentDemo/FormAndList/FormDemoComponent";
import ListDemoComponent from "./componentDemo/FormAndList/ListDemoComponent";
import DummyWebComponent from "./basicSlicingAndNavigationSimulatinDemo/DummyWebComponent";
import WrapperComponent from "./advance/WrapperComponent";
import HocDemoComponent from "./advance/hoc/HocDemoComponent";
import UseEffectDemo from "./advance/hooks/UseEffectDemo";
import CustomHookDemo from "./advance/hooks/CustomHookDemo";
import ContextIndex from "./advance/context/ContextIndex";
import HooksV2Index from "./advance/hooksV2";
import { NextUIProvider } from "@nextui-org/react";
import AuthRoutingIndex from "./advance/auth";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// bisa self closing tag
// ConditionalRenderingDemoInstance = new ConditionalRenderingDemo(props)
// root.render(<ComponentDemo />);
// root.render(<HomePageComponent />);
// root.render(<CounterComponent />);
// root.render(<ContainerComponent />);
// root.render(<UpdaterFunctionContainer />);
// root.render(<StatefulVsStatelessComponent />);
// root.render(<FormDemoComponent />);
// root.render(<ListDemoComponent />);
// root.render(<DummyWebComponent />);
// root.render(
//   <WrapperComponent>
//     <h1>H1</h1>
//     <h2>H2</h2>
//     <h3>H3</h3>
//   </WrapperComponent>
// );

// root.render(<HocDemoComponent />);
// root.render(<UseEffectDemo />);
// root.render(<ContainerComponent />);
// root.render(<CustomHookDemo />);

// root.render(<ContextIndex />);
root.render(<AuthRoutingIndex />);

// eslint-disable-next-line react/no-deprecated
// import { render } from "react-dom";

// const domNode = document.getElementById("root");
// render(<HooksV2Index />, domNode);

// root.render(
//   <StrictMode>
//     <HooksV2Index />
//   </StrictMode>
// );

// Ini
// root.render(
//   <StrictMode>
//     <HomePageComponent />
//   </StrictMode>
// );
