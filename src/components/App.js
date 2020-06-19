import React from "react";
import DataManage from "./DataManage";
import StorageStatus from "./StorageStatus";

export default function App() {
  return (
    <div className="container-flex">
      <div className="container">
        <DataManage />
        <StorageStatus />
      </div>
      <div className="bg"></div>
    </div>
  );
}
