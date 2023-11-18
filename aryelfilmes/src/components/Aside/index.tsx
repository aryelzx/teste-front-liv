import { GrAdd } from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { useAside } from "./useAside";
function Aside() {
  const { handleDrawer, isMenuOpen, handleSelectIconHome, handleSelectIconList } = useAside();

  return (
    <div
      id="menu"
      onClick={handleDrawer}
      className='w-[100px] fixed bg-[#000] h-full flex flex-col pt-40 gap-5'>
      <div className="flex pl-5  items-center gap-4">
        <p
          onClick={handleSelectIconHome}
          id="iconHome"
          className="text-5xl text-[#FDF7F7] cursor-pointer border-blue-300 border-l-4 p-2">
          <HiHome />
        </p>
        <p id="text-home" className="hidden text-3xl text-[#FDF7F7] font-semibold">Home</p>
      </div>
      <div className="flex pl-5  items-center gap-4">
        <p
          onClick={handleSelectIconList}
          id="iconList"
          className="text-5xl text-[#FDF7F7] cursor-pointer border-none border-l-4 p-2">
          <GrAdd />
        </p>
        <p id="text-list" className="hidden text-2xl text-[#FDF7F7] font-semibold">Minha lista</p>
      </div>
    </div>
  )
}

export { Aside };

