import { GrAdd } from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { cn } from "../../shared/components/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "../../shared/components/ui/sheet";

const Aside = () => {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger className=" w-[100px] z-40 fixed bg-[#000] h-full flex flex-col pt-40 gap-5 ">
        <>
          <div
            onClick={() => navigate('/')}
            className={cn("flex pl-5  items-center gap-4 cursor-pointer hover:bg-gray-600 w-full",
              window.location.pathname === "/" && "border-blue-300 border-l-4 text-white font-bold"
            )}
          >
            <p
              className="text-5xl text-[#FDF7F7] cursor-pointer p-2">
              <HiHome />
            </p>
          </div>
          <div
            onClick={() => navigate('/favs')}
            className={cn("flex pl-5  items-center gap-4 cursor-pointer hover:bg-gray-600 w-full",
              window.location.pathname === "/favs" && "border-blue-300 border-l-4 text-white font-bold"
            )}
          >
            <p
              className="text-5xl text-[#FDF7F7] cursor-pointer border-none border-l-4 p-2">
              <GrAdd />
            </p>
          </div>
        </>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] border-0">
        <div className="flex flex-col mt-44 gap-7">
          <div
            className={cn("flex pl-5 items-center gap-4 cursor-pointer hover:bg-gray-600",
              window.location.pathname === "/" && "border-blue-300 border-l-4 text-white font-bold"
            )}

            onClick={() => navigate('/')}
          >
            <p className="text-5xl text-[#FDF7F7] p-2 flex">
              <HiHome />
            </p>
            <p className=" text-3xl text-[#FDF7F7] font-semibold">Home</p>
          </div>
          <div
            className={cn("flex pl-5 items-center gap-4 cursor-pointer hover:bg-gray-600",
              window.location.pathname === "/favs" && "border-blue-300 border-l-4 text-white font-bold"
            )}
            onClick={() => navigate('/favs')}
          >
            <p className="text-5xl text-[#FDF7F7] p-2 flex">
              <GrAdd />
            </p>
            <p className=" text-2xl text-[#FDF7F7] font-semibold">Minha lista</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { Aside };

