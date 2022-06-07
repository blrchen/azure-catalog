import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import SideMenu from "./components/sidemenu/siteMenu";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { getRoutes, routes } from "./components/sidemenu/routers";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout style={ { minHeight: "100vh" } }>
        <SideMenu />
        <Layout>
          <Header />
          <Content>
            <div style={{ minHeight: 600 }}>
              { getRoutes(routes) }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@ Blair Chen</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
