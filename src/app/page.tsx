'use client'
import videos, { Video } from "./data/video";

import { useContext, useState } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaExpand } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { convertTimetoString } from "./utils/Utils";

export default function Home() {
  const {
    videoURL,
    totalTime,
    currentTime,
    videoRef,
    canvasRef,
    playing,
    mute,
    volume,
    playPause,
    configCurrentTime,
    configVideo,
    changeVolume,
    changeIconMute,
    nextVideo,
    configFilter,
    changeFullScreen,
  } = useContext(HomeContext);

  const [showVolumeMixer, setShowVolumeMixer] = useState(false);
  const [showFilterSelect, setShowFilterSelect] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    changeVolume(volume);
  }

  return (
    <body>
      <main className="mx-auto w-[80%] mt-14 flex">
        <div className="w-[65%]">
          <video className="w-full" ref={videoRef} src={videoURL} hidden></video>
          <canvas className="bg-black w-full h-[420px]" ref={canvasRef}></canvas>

          <div id="playVolume" className="bg-black">
            <input
              className="ml-4 w-[96%]"
              type="range"
              min={0}
              max={totalTime}
              value={currentTime}
              onChange={(e) => configCurrentTime(Number(e.target.value))}
            >
            </input>

            <button className="text-white ml-5 mr-1" onClick={playPause}>{playing ? <FaPause /> : <FaPlay />}</button>
            <button className="text-white ml-5 mr-1" onClick={nextVideo}>{<FaForwardStep />}</button>
            <button className="text-white ml-5 mr-1"
              onClick={changeIconMute}
              onMouseEnter={() => setShowVolumeMixer(true)}
              onMouseLeave={() => { if (!showVolumeMixer) setShowVolumeMixer(false) }}
            >
              {mute ? <FaVolumeMute /> : <FaVolumeHigh />}
            </button>

            {showVolumeMixer && (
              <span onMouseEnter={() => setShowVolumeMixer(true)} onMouseLeave={() => setShowVolumeMixer(false)}>
                <input
                  type="range"
                  defaultValue={1}
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  className="w-[10%]"
                  onChange={change} />
              </span>
            )}
            <span className="text-white mr-5 mb-2 ml-5" style={{ display: "inline-flex" }}> {convertTimetoString(currentTime)} / {convertTimetoString(totalTime)}</span>

            <button className="text-white float-right mr-5" onClick={changeFullScreen}><FaExpand /></button>

            <button
              className="text-white mr-5 float-right"
              onClick={() => setShowFilterSelect(!showFilterSelect)}
            ><FaEdit />
            </button>

            {showFilterSelect && (
              <select
                className="float-right bg-black text-white p-2 rounded"
                onChange={(e) => {
                  configFilter(Number(e.target.value));
                  setShowFilterSelect(false);
                }}
                onBlur={() => setShowFilterSelect(false)}
              >
                <option selected value={""}>Escolha o filtro:</option>
                <option value={0}>Cores</option>
                <option value={1}>Filtro Verde</option>
                <option value={2}>Filtro Azul</option>
                <option value={3}>Filtro Vermelho</option>
                <option value={3}>Filtro Preto e Branco</option>
              </select>
            )}
          </div>
        </div>
        <div className="w-[35%] h-[100vh] ml-[10%]">
          {
            videos.map((video: Video, index) => {
              return (
                <div className="bg-black border border-black mb-2">
                  <button className="w-full" onClick={(e) => configVideo(index)}>
                    <div id="element">
                      <img key={index} src={video.imageURL} alt="" className="w-full h[200px]" />
                      <h1 className="text-white ml-5 mr-1">{video.description}</h1>
                    </div>
                  </button>
                </div>
              )
            })
          }
        </div>
      </main>
    </body>
  );
}
