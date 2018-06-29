import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

import Form from "./Components/Form";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


it("renders correctly", () => {
  const wrapper = shallow(
    <Form />
  );

  expect(wrapper).toMatchSnapshot();
});