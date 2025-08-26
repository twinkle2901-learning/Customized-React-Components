import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./dropdown.scss";
import CButton from "../buttons/button";

type DropdownItem = {
  label: string;
  href: string;
};

interface CDropdownProps {
  items: DropdownItem[];
  label?: string; // optional so you can customize button text
  placement?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export default function CDropdown({ items, label = "Dropdown", placement = "bottom-left" }: CDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) =>
      menuRef.current && !menuRef.current.contains(e.target as Node) && setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu after clicking an item
  const handleItemClick = () => setOpen(false);

  // Map placement to Tailwind positioning classes
  const placementClasses: Record<string, string> = {
    "bottom-left": "top-full left-0 mt-2",
    "bottom-right": "top-full right-0 mt-2 left-auto",
    "top-left": "bottom-full left-0 mb-2",
    "top-right": "bottom-full right-0 mb-2",
  };

  return (
    <div className="c-dropdown" ref={menuRef}>
      <CButton
        icon={<FontAwesomeIcon icon={faChevronDown} size="2xs" />}
        label={label}
        classes="dropdown-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
      />

      <div className={`dropdown-menu ${placementClasses[placement]} ${open ? "show" : ""}`}>
        {items.map((item, idx) => (
          <a
            key={idx}
            className="dropdown-item"
            href={item.href}
            onClick={handleItemClick}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

