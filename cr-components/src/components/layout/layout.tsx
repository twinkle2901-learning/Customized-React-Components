import React, { JSX } from "react";
import "./layout.scss";
import "./layout.scss";

interface CrLayoutProps {
  title?: string;
  body: JSX.Element;
}

function CrLayout({ title, body }: CrLayoutProps) {
  return (
    <>
      <div className="container">
        <div className="grid-rows-1">
          <div className="cr-component">
            {title && <h1 className="cr-component--title">{title}</h1>}
            <div className="cr-component--body">{body}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CrLayout;
