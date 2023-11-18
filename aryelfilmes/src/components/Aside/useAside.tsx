import { useState } from "react";

function useAside() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleDrawer() {
    setIsMenuOpen(!isMenuOpen);
    const menu = document.getElementById('menu');
    menu?.classList.toggle('w-[100px]');
    menu?.classList.toggle('w-[230px]');

    const textHome = document.getElementById('text-home');
    textHome?.classList.toggle('hidden');
    const textList = document.getElementById('text-list');
    textList?.classList.toggle('hidden');
  }

  function handleSelectIconHome() {
    const iconHome = document.getElementById('iconHome');
    iconHome?.classList.toggle('border-blue-300');
    iconHome?.classList.toggle('border-[#FDF7F7]');

    const iconList = document.getElementById('iconList');
    iconList?.classList.toggle('border-none');
    iconList?.classList.toggle('border-none');
  }

  function handleSelectIconList() {
    const iconHome = document.getElementById('iconHome');
    iconHome?.classList.toggle('border-[#FDF7F7]');
    iconHome?.classList.toggle('border-none');


    const iconList = document.getElementById('iconList');
    iconList?.classList.toggle('border-none');
    iconList?.classList.toggle('border-[#FDF7F7]');

  }

  return {
    handleDrawer,
    handleSelectIconHome,
    isMenuOpen: { value: isMenuOpen, set: setIsMenuOpen },
    handleSelectIconList
  }
}

export { useAside };

