import React from 'react'
import { IoGameControllerOutline } from "react-icons/io5";

export interface IGameViews{
views: number
}

const GameViews:React.FC<IGameViews> = ({views}) => {
  return (
    <div className="flex items-center">
    <div className="flex justify-center items-center w-3 h-2  mr-2">
      <IoGameControllerOutline />
    </div>
    <p className="flex font-bold text-[8px] leading-none">
      {views / 1000}K
    </p>
  </div>
  )
}

export default GameViews