import { BsRepeat, BsShuffle } from "react-icons/bs";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerPlayFilled,
//   TbPlayerPauseFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

const PlayerMain = () => {
  return (
    <div className="relative flex flex-col justify-end h-full px-[30px] py-[20px]">
      <div className="flex justify-between px-[50px] mb-[25px]">
        {/* repeat, prev, play, next, shuffle */}
        <BsRepeat fontSize={22}/>
        <TbPlayerTrackPrevFilled fontSize={22}/>
        {/* <TbPlayerPauseFilled /> */}
        <TbPlayerPlayFilled fontSize={22}/>
        <TbPlayerTrackNextFilled fontSize={22}/>
        <BsShuffle />
      </div>
      <div className="h-[3px] rounded-full bg-cyan-600" />
    </div>
  );
};

export default PlayerMain;
