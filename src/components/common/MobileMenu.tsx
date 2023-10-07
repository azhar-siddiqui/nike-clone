import React from "react";
// import { BsChevronDown } from "react-icons/bs";

interface MobileMenuProps {
  setMobileMenu: () => void;
}

// interface MenuItem {
//   id: number;
//   name: string;
//   url?: string;
//   subMenu?: boolean;
// }

// interface SubMenuItem {
//   id: number;
//   name: string;
//   doc_count?: number;
// }

// const menuItem: MenuItem[] = [
//   { id: 1, name: "Home", url: "/" },
//   { id: 2, name: "About", url: "/about" },
//   { id: 3, name: "Categories", subMenu: true },
//   { id: 4, name: "Contact", url: "/contact" },
// ];

// const subMenuData: SubMenuItem[] = [
//   { id: 1, name: "Jordan", doc_count: 11 },
//   { id: 2, name: "Sneakers", doc_count: 8 },
//   { id: 3, name: "Running shoes", doc_count: 64 },
//   { id: 4, name: "Football shoes", doc_count: 107 },
// ];

const MobileMenu: React.FC<MobileMenuProps> = () => {
  //   const { showCatMenu, setShowCatMenu, setMobileMenu } = props;
  return (
    <div className="">
      <ul className="flex flex-col md:hidden font-bold absolute top-[50px] right-0 w-[250px] h-[calc(100vh-50px)] bg-gray-300 border-t text-black">
        <li className="">
          <a href="">New & Featured</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
