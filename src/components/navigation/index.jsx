"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButtton from "./NavButtton";

const Navigation = () => {
  const angleIncreement = 360 / BtnList.length;
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-between relative">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncreement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavButtton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
