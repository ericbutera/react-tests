import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Bikes from "./Bikes";

// https://testing-library.com/docs/react-testing-library/cheatsheet
// https://reactjs.org/docs/testing-recipes.html

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const bike = {
    id: 1,
    brand: "Yeti",
    model: "SB100",
    image: "yeti-sb100.jpg",
  };
  const bikes = {
    bikes: [bike],
  };

  jest
    .spyOn(global, "fetch")
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(bikes) })
    );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Bikes id="1" />, container);
  });

  expect(container.textContent).toContain(bike.model);

  // remove the mock to ensure tests are completely isolated  global.fetch.mockRestore();});
  global.fetch.mockRestore();
});
