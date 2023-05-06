import { MdExplore, MdOutlineLibraryMusic } from "react-icons/md";
import { BiHeadphone } from "react-icons/bi";

const navigators = [
  {
    id: "01",
    name: "explore",
    icon: <MdExplore fontSize={40} />,
  },
  {
    id: "02",
    name: "library",
    icon: <MdOutlineLibraryMusic fontSize={40} />,
  },
  {
    id: "03",
    name: "Mood & Genre",
    icon: <BiHeadphone fontSize={40} />,
  },
];

const styles = {
  columnCenter: "flex flex-col items-center",
  buttonHover: "hover:cursor-pointer hover:opacity-50"
};
export { navigators, styles };
