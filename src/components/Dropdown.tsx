"use client";
import React, { useState, useRef } from "react";
import { useClickOutside } from "@/utils/hooks/UseClickOutSide";
import { IDropDownProps } from "@/utils/interfaces/index";
import { AiOutlineCheck } from "react-icons/ai";

const DropDown: React.FC<IDropDownProps> = ({
  active,
  setActive,
  availableLanguages,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeDropdown = () => {
    setOpen(false);
  };

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className='relative inline-block text-left'>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center'
      >
        {active.lang}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 ${open ? "transform rotate-180" : ""}`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      {open && (
        <div className='origin-top-right z-10 absolute left-0 mt-2 w-44 rounded-lg shadow-lg text-black bg-white ring-1 ring-black ring-opacity-5'>
          <ul
            className='py-2 text-sm text-gray-800'
            aria-labelledby='dropdownDefaultButton'
          >
            {availableLanguages.map((item, index) => (
              <li
                className='flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100'
                key={index}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
              >
                {item.lang}
                {item.lang === active.lang && <AiOutlineCheck className="text-green-700 ml-1"/>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
