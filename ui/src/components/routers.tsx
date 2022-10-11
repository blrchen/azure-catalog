import { Route, Routes } from "react-router-dom";
import React from "react";
import AzureGeographies from "../pages/azure/geographies";
import AzureRegions from "../pages/azure/regions";
import AwsGeographies from "../pages/aws/geographies";
import AwsRegions from "../pages/aws/regions";
import About from "../pages/about";

export const routes = [
  {
    path: "/azure/geographies",
    Component: AzureGeographies,
  },
  {
    path: "/azure/regions",
    Component: AzureRegions,
  },
  {
    path: "/aws/geographies",
    Component: AwsGeographies,
  },
  {
    path: "/aws/regions",
    Component: AwsRegions,
  },
  {
    path: "/about",
    Component: About,
  },
];

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const getRoutes = (list: any) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const routes = list.map((item: any) => {
    const { path, Component } = item;
    return <Route key={path} path={path} element={<Component />} />;
  });

  return <Routes>{routes}</Routes>;
};
