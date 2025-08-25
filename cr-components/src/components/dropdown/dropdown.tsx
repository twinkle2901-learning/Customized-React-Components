import React from "react";
import "./dropdown.scss";
import CButton from "../buttons/button";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CDropdown() {
  return (
    <>
      <div className="c-dropdown">
        <CButton icon={<><FontAwesomeIcon icon={faChevronDown} size="2xs" /></>}
          label="Dropdown"
        //   className="dropdown-toggle"
        //   id="dropdownMenuButton"
        //   data-toggle="dropdown"
        //   aria-haspopup="true"
        //   aria-expanded="false"
        ></CButton>
        {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div> */}
      </div>
    </>
  );
}

export default CDropdown;
