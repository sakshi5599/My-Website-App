import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DemoLifeCycle from "./components/DemoLifeCycle/DemoLifeCycle";
import DidMountLifeCycle from "./components/RenderLifeCycleExample/DidMountLifeCycle";
import LifeCycleUpdate from "./components/LifeCycleUpdate/LifeCycleUpdate";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";
import ComponentUnmount from "./components/ComponentUnmount/ComponentUnmount";
import UseStateexample from "./components/ComponentUnmount1/Hooks/UseStateexample";
import UseEffectExam2 from "./components/ComponentUnmount1/Hooks/UseEffectExam2";
import UseEffectProps from "./components/ComponentUnmount1/Hooks/UseEffectProps";
import Demo from "./ArrayHandle/Demo";
import Demo2 from "./ArrayHandle/Demo2";
import Demo3 from "./ArrayHandle/Demo3";
import ReuseCom from "./Reusecomponent/ReuseCom";
import Example from "./FragmentFolder/Example";
import Parent1 from "./ParentAndChild/Parent1";
import Pure from "./purecomponent/Pure1";
import UseMemoDemo from "./UseMemoDemo";
import Ref from "./Referencefolder/Ref";
import Ref2 from "./Referencefolder/Ref2";
import ParentForwardRef from "./Referencefolder/ParentForwardRef";
import Controlledexample from "./controlledfolder/Controlledexample";
import Uncontrolledexample from "./Uncontrolledexample";
import SimpleHOC from "./HOCfolder/SimpleHOC";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Routingfolder/Navbar";
import About from "./Routingfolder/About";
import Contact from "./Routingfolder/Contact";
import Home from "./Routingfolder/Home";
import PageNotFound from "./Routingfolder/PageNotFound";
import DynamicRoutingexample from "./Routingfolder/DynamicRoutingexample";
import DynamicRoute from "./Routingfolder/DynamicRoute";
import Student from "./ApiHandle/Student";
import PostExample from "./ApiHandle/PostExample";
import State1 from "./previousStatefolder/State1";
import PropsParent from "./previousStatefolder/PropsChild";
import PropsChild from "./previousStatefolder/PropsChild";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DemoLifeCycle />
    <DidMountLifeCycle />
    <LifeCycleUpdate />
    <ShouldComponentUpdate />
    <UseStateexample />
    <UseEffectExam2 />
    <ComponentUnmount />
    <Demo />
    <UseEffectProps />

    <Demo2 />
    <Demo3 />
    <ReuseCom />
    <Example />

    <Parent1 />

    <Pure />
    <UseMemoDemo />
    <Ref />
    <Ref2 />
    <ParentForwardRef/>
  <Controlledexample/>
  <Uncontrolledexample/>
  <SimpleHOC/>
 */}

  {/* <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="/About" element={<About/>}>About</Route>
    <Route path="/Contact" element={<Contact/>}>Contact</Route>
    <Route path="*" element={<PageNotFound/>}>PageNotFound</Route>

  </Routes>
  </BrowserRouter> 
  */}
  {/* <BrowserRouter> 
  <DynamicRoutingexample/>
  <Routes>
    <Route path="/DynamicRoute/:id" element={<DynamicRoute/>} ></Route>
  </Routes>

  </BrowserRouter>
  */}
  {/* <Student/>
  <PostExample/> */}
  {/* <State1/> */}

  <PropsParent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
