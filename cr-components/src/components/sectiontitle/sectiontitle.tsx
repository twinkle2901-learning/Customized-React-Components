import React, { JSX } from "react";
import "./sectiontitle.scss";

interface IProps {
  title: string;
  description?: string;
  rightsec?: JSX.Element;
  classes?: string;
}

function CSectionTitle({ title, description, rightsec, classes }: IProps) {
  return (
    <>
      <div className={`c-sectitle ${classes || ""}`}>
        <div className="c-secleft">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
        {rightsec && <div className="c-secright">{rightsec}</div>}
      </div>
    </>
  );
}

export default CSectionTitle;
