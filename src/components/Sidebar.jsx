import { GiMusicalNotes } from "react-icons/gi";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

import { navigators, styles } from "../data/constant";

const Sidebar = () => {
  return (
    <section
      className={`${styles.columnCenter} py-[20px] bg-[rgb(39,39,39)] h-[100vh] max-w-[6%]`}
    >
      <header className={`${styles.columnCenter} px-[30px]`}>
        <GiMusicalNotes
          fontSize={"60px"}
          style={{
            border: "3px solid white",
            borderRadius: "50px",
            margin: "5px",
            padding: "5px",
            color: "white",
          }}
        />
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[25px] uppercase">
          Musify
        </h1>
      </header>

      <div className="min-w-full my-[30px] border-b-[1px] border-b-[rgb(70,70,70)]" />

      <div className="text-white">
        {navigators.map((navigator) => (
          <div
            key={navigator.id}
            className={`${styles.columnCenter} ${styles.buttonHover} mb-[20px]`}
          >
            {navigator.icon}
            <span className="mt-[0px] text-[15px] capitalize max-w-[90px] text-center">
              {navigator.name}
            </span>
          </div>
        ))}
      </div>

      <div className={`${styles.columnCenter} text-white absolute bottom-32`}>
        <div
          className={`${styles.columnCenter} ${styles.buttonHover} mb-[10px] absolute bottom-10`}
        >
          <MdOutlineInstallDesktop fontSize={35} />
          <span className="capitalize text-center text-[14px]">
            install app
          </span>
        </div>

        <div className="flex justify-between">
          <FiSettings
            className={`${styles.buttonHover} mx-[10px]`}
            fontSize={20}
          />
          <FiHelpCircle
            className={`${styles.buttonHover} mx-[10px]`}
            fontSize={20}
          />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
