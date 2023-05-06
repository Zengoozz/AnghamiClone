import {
  AiOutlineHeart,
  AiOutlineCloudDownload,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdDevices, MdLyrics, MdOndemandVideo } from "react-icons/md";
import { HiQueueList } from "react-icons/hi2";
import { RxSpeakerLoud } from "react-icons/rx";
import PlayerMain from "./PlayerMain";

const PlayerBar = () => {
  return (
    <section className="sticky bottom-0 max-w-[100vw] bg-[#111] flex z-20 text-white">
      <div className="border-r-[1px] border-[#666] w-[30%] flex justify-between items-center py-[20px] px-[10px]">
        <div className="flex">
          <img
            src="https://artwork.anghcdn.co//webp/?id=177333392&size=60"
            alt="artwork"
          />
          <div className="flex flex-col justify-center ml-[10px]">
            <span className="font-medium">Title</span>
            <span className="text-[14px]">Artist</span>
          </div>
        </div>

        <div className="flex">
          <AiOutlineHeart fontSize={30} className="mr-[10px]" />
          <AiOutlineCloudDownload fontSize={30} className="mr-[10px]" />
          <AiOutlineShareAlt fontSize={30} className="mr-[10px]" />
          <BiDotsVerticalRounded fontSize={30} />
        </div>
      </div>

      <div className="border-r-[1px] border-[#666] w-[40%]">
        {/* player */}
        <PlayerMain />
      </div>

      <div className="w-[30%] flex justify-between items-center pl-[10px] pr-[20px] py-[15px]">

        <div className="px-[15px] flex justify-center">
          <MdDevices fontSize={25} />
        </div>
        <div className="border-r-[1px] border-[#666] min-h-full" />


        <div className="px-[15px] flex justify-center">
        <RxSpeakerLoud fontSize={25} />
        </div>
        <div className="border-r-[1px] border-[#666] min-h-full" />


        <div className="flex justify-center items-center w-1/5">
          <MdLyrics fontSize={25} />
          <span className="ml-[5px] text-[18px] font-medium">Lyrics</span>
        </div>
        <div className="border-r-[1px] border-[#666] min-h-full" />

        <div className="flex justify-center items-center w-1/5">
          <MdOndemandVideo fontSize={25} />
          <span className="ml-[5px] text-[18px] font-medium">Video</span>
        </div>
        <div className="border-r-[1px] border-[#666] min-h-full" />

        <div className="flex justify-center items-center w-1/5">
          <HiQueueList fontSize={25} />
          <span className="ml-[5px] text-[18px] font-medium">Queue</span>
        </div>
      </div>
    </section>
  );
};

export default PlayerBar;
