import {createFFmpeg, fetchFile} from "../../../../web_modules/@ffmpeg/ffmpeg.js";
import HalfMoon from "../../../../web_modules/halfmoon.js";
import React, {useState, useEffect} from "../../../../web_modules/react.js";
const ffmpeg = createFFmpeg({log: true});
const Converter = () => {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const [converting, setConverting] = useState(false);
  const load = async () => await ffmpeg.load().then(() => setReady(true));
  useEffect(() => {
    HalfMoon.onDOMContentLoaded();
    setTimeout(() => setReady(true), 1500);
    load();
  }, []);
  const convertToGif = async () => {
    setConverting(true);
    ffmpeg.FS("writeFile", video?.name, await fetchFile(video));
    await ffmpeg.run("-i", video?.name, "-t", "2.5", "-ss", "2.0", "-f", "gif", "-vf", "fps=15,scale=640:-1:flags=lanczos", "output.gif");
    const data = ffmpeg.FS("readFile", "output.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "image/gif"}));
    setGif(url);
    setConverting(false);
  };
  return ready ? /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "Video to GIF Converter"), /* @__PURE__ */ React.createElement("div", {
    className: "custom-file"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "file-upload",
    type: "file",
    onChange: (event) => setVideo(event.target.files?.item(0))
  }), !video && /* @__PURE__ */ React.createElement("label", {
    htmlFor: "file-upload"
  }, "Please upload a video")), gif ? /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-column justify-content-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: gif,
    width: "720"
  }), /* @__PURE__ */ React.createElement("a", {
    className: "btn",
    href: gif,
    type: "button",
    download: true
  }, "Download")) : video && /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    onClick: convertToGif,
    type: "button"
  }, "Convert"), converting && /* @__PURE__ */ React.createElement("h3", null, "Converting...")) : /* @__PURE__ */ React.createElement("h1", null, "Loading...");
};
export default Converter;
