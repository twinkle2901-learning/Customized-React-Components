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
  size?: "sm" | "md" | "lg";
}

export default function CDropdown({ items, label = "Dropdown", placement = "bottom-left", size = "md" }: CDropdownProps) {
  const [open, setOpen] = useState(false);
  const [dynamicPlacement, setDynamicPlacement] = useState(placement);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) =>
      menuRef.current && !menuRef.current.contains(e.target as Node) && setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to decide placement
  const calculatePlacement = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setDynamicPlacement(
          placement === "bottom-right" ? "top-right" : "top-left"
        );
      } else {
        setDynamicPlacement(placement);
      }
    }
  };

  // Recalculate when open, on scroll, or resize
  useEffect(() => {
    if (open) calculatePlacement();

    window.addEventListener("scroll", calculatePlacement);
    window.addEventListener("resize", calculatePlacement);

    return () => {
      window.removeEventListener("scroll", calculatePlacement);
      window.removeEventListener("resize", calculatePlacement);
    };
  }, [open, placement]);

  const handleItemClick = () => setOpen(false);

  // Map placement to Tailwind positioning classes
  const placementClasses: Record<string, string> = {
    "bottom-left": "top-full left-0 mt-1",
    "bottom-right": "top-full right-0 mt-1 left-auto",
    "top-left": "bottom-full left-0 mb-1",
    "top-right": "bottom-full right-0 mb-1",
  };

  // Map size to Tailwind font + padding
  const sizeClasses: Record<string, string> = {
    sm: "!text-sm !py-1 !px-3",
    md: "!text-base !py-2 !px-4",
    lg: "!text-lg !py-2.5 !px-5",
  };

  return (
    <div className="c-dropdown" ref={menuRef}>
      {/* wrapper for measuring button position */}
      <div ref={buttonRef}>
        <CButton
          // ref={buttonRef}
          icon={<FontAwesomeIcon icon={faChevronDown} size="2xs" />}
          label={label}
          classes={`dropdown-toggle ${sizeClasses[size]}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="true"
          aria-expanded={open}
        />
      </div>

      <div
        className={`dropdown-menu ${placementClasses[dynamicPlacement]} ${open ? "show" : ""
          }`}
      >
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