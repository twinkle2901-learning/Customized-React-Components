import React, { useEffect, useRef, useState } from "react";
import "./dropdown.scss";
import CButton from "../buttons/button";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CDropdown() {

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <div className="c-dropdown" ref={menuRef}>
        <CButton
          icon={<FontAwesomeIcon icon={faChevronDown} size="2xs" />}
          label="Dropdown"
          classes="dropdown-toggle"
          // onClick={() => setOpen(!open)}
          aria-haspopup="true"
          aria-expanded={open}
        />

        <div className={`dropdown-menu ${open ? "show" : ""}`}>
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    </>
  );
}

export default CDropdown;
