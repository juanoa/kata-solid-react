import React from "react";
import {Link} from "wouter";
import {FaComment} from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-5 px-10 bg-gray-100">
      <span className="text-3xl flex items-center gap-3">Logo <FaComment /></span>
      <div className="flex items-center gap-5">
        <Link to="/1">1. Single Responsibility</Link>
        <Link to="/2">2. Open closed</Link>
      </div>
    </div>
  )
}