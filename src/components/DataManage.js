import React from "react";
import logo from "../images/logo.svg";
import iconDocument from "../images/icon-document.svg";
import iconFolder from "../images/icon-folder.svg";
import iconUpload from "../images/icon-upload.svg";

export default function DataManage() {
  console.log(logo);
  return (
    <div className="flex-item --data-manage">
      <div className="data-manage">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="buttons">
          <button className="btn btn--document">
            <img src={iconDocument} alt="" />
          </button>
          <button className="btn btn--folder">
            <img src={iconFolder} alt="" />
          </button>
          <button className="btn btn--upload">
            <img src={iconUpload} alt="" />
            <input type="file" />
          </button>
        </div>
      </div>
    </div>
  );
}
