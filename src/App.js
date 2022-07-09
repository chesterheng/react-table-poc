import React from "react";
import { Affix, Layout, Menu } from "antd";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";
import { ColumnOrder } from "./components/ColumnOrder";
import { ColumnHiding } from "./components/ColumnHiding";
import { StickyTable } from "./components/StickyTable";
import "./App.css";

const { Header, Content, Sider } = Layout;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  console.log(location, pathname.substring(1) || "basic-table");
  const getItem = (key, label, path, icon, children) => ({
    key,
    label,
    onClick: () => {
      navigate(path);
    },
    icon,
    children,
  });

  const items = [
    getItem("basic-table", "Basic Table", "/basic-table"),
    getItem("sorting-table", "Sorting Table", "/sorting-table"),
    getItem("filtering-table", "Filtering Table", "/filtering-table"),
    getItem("pagination-table", "Pagination Table", "/pagination-table"),
    getItem("row-selection", "Row Selection", "/row-selection"),
    getItem("column-order", "Column Order", "/column-order"),
    getItem("column-hiding", "Column Hiding", "/column-hiding"),
    getItem("sticky-table", "Sticky Table", "/sticky-table"),
  ];

  return (
    <Layout>
      <Affix>
        <Header className="layout-header">React table v7 POC</Header>
      </Affix>
      <Layout>
        <Affix offsetTop={64}>
          <Sider className="layout-sider">
            <Menu
              theme="dark"
              selectedKeys={[pathname.substring(1) || "basic-table"]}
              mode="inline"
              items={items}
            />
          </Sider>
        </Affix>
        <Layout>
          <Content className="layout-content">
            <Routes>
              <Route index element={<BasicTable />} />
              <Route path="/basic-table" element={<BasicTable />} />
              <Route path="/sorting-table" element={<SortingTable />} />
              <Route path="/filtering-table" element={<FilteringTable />} />
              <Route path="/pagination-table" element={<PaginationTable />} />
              <Route path="/row-selection" element={<RowSelection />} />
              <Route path="/column-order" element={<ColumnOrder />} />
              <Route path="/column-hiding" element={<ColumnHiding />} />
              <Route path="/sticky-table" element={<StickyTable />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
