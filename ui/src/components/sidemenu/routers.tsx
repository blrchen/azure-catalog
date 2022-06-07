import { Route, Routes } from "react-router-dom";
import React from "react";
import AzureRegions from "../../pages/azure/regions";
import AwsRegions from "../../pages/aws/regions";
import About from "../../pages/about";

export const AZURE_REGIONS_FILE = '/data/azure/regions.json';
export const AWS_REGIONS_FILE = '/data/aws/regions.json';

export const routes = [
  {
    path: "/azure/regions",
    Component: AzureRegions,
  },
  {
    path: "/aws/regions",
    Component: AwsRegions,
  },
  {
    path: "/about",
    Component: About,
  }
];

export const getRoutes = (list: any) => {
  const routes = list.map((item: any) => {
    const { path, Component } = item;
    return (
      <Route
        key={ path }
        path={ path }
        element={ <Component /> }
      />
    );
  });

  return <Routes>{ routes }</Routes>;
};


