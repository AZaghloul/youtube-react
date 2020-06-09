import React from "react";
import { render } from "@testing-library/react";
import MobileFilter from "./Mobile-Filter";
import "@testing-library/jest-dom/extend-expect";

it("Should render Upload Date DDL with default value 'any time' ", () => {
  const { getByTestId } = render(
    <MobileFilter
      filter={{
        type: "all",
        uploadDate: "any time",
        sortBy: "Relevance",
      }}
      handleFilterChange={() => {}}
    />
  );

  const uploadDateDDL = getByTestId("uploadDate");
  expect(uploadDateDDL).toHaveValue("any time");
});

it("Should render Type DDL with default value 'all' ", () => {
  const { getByTestId } = render(
    <MobileFilter
      filter={{
        type: "all",
        uploadDate: "any time",
        sortBy: "Relevance",
      }}
      handleFilterChange={() => {}}
    />
  );

  const uploadDateDDL = getByTestId("type");
  expect(uploadDateDDL).toHaveValue("all");
});
