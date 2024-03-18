import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu_items">
        <div className="dropdown">
          <button
            style={{ width: "150px" }}
            className={`dropdown-toggle ${isOpen ? "flipped" : ""}`}
            onClick={toggleDropdown}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                d="M346 110a34 34 0 00-68 0v34h34a34 34 0 0034-34zm-112 0a34 34 0 10-34 34h34z"
              ></path>
              <path d="M234 144h44v112h164a22 22 0 0022-22v-68a22 22 0 00-22-22h-59.82A77.95 77.95 0 00256 55.79 78 78 0 00129.81 144H70a22 22 0 00-22 22v68a22 22 0 0022 22h164zm44-34a34 34 0 1134 34h-34zm-112 0a34 34 0 1168 0v34h-34a34 34 0 01-34-34zm112 370h132a22 22 0 0022-22V288H278zM80 458a22 22 0 0022 22h132V288H80z"></path>
            </svg>
            <span>REWARDS</span>

            <span class={`dropdown-icon ${isOpen ? "open" : ""}`}>
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                height={20}
                width={20}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <ul className={`${isOpen ? "drop" : "hide"}`}>
          <li>RAKEBACK</li>
          <li>PROMO CODES</li>
        </ul>
      </div>
    </>
  );
}
