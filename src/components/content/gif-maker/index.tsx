/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import HalfMoon from 'halfmoon';
import React, { useState, useEffect } from 'react';

const ffmpeg = createFFmpeg({ log: true });

const Converter: React.FunctionComponent = () => {
    const [ready, setReady] = useState(false);
    const [video, setVideo] = useState<File | null>();
    const [gif, setGif] = useState<string>();
    const [converting, setConverting] = useState(false);

    const load = async () => await ffmpeg.load().then(() => setReady(true));

    useEffect(() => {
        HalfMoon.onDOMContentLoaded();

        setTimeout(() => setReady(true), 1500);

        load();
    }, []);

    const convertToGif = async () => {
        setConverting(true);

        // write the file to memory
        ffmpeg.FS('writeFile', video?.name as string, await fetchFile(video as File));

        // run the ffmpeg command
        await ffmpeg.run(
            '-i',
            video?.name as string,
            '-t',
            '2.5',
            '-ss',
            '2.0',
            '-f',
            'gif',
            '-vf',
            'fps=15,scale=640:-1:flags=lanczos',
            'output.gif',
        );

        // read the result
        const data: Uint8Array = ffmpeg.FS('readFile', 'output.gif');

        // create a URL
        const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));

        setGif(url);
        setConverting(false);
    };

    return ready ? (
        <section>
            <h1>Video to GIF Converter</h1>
            <div className="custom-file">
                <input id="file-upload" type="file" onChange={(event) => setVideo(event.target.files?.item(0))} />
                {!video && <label htmlFor="file-upload">Please upload a video</label>}
            </div>

            {gif ? (
                <div className="d-flex flex-column justify-content-center">
                    <img src={gif} width="720" />
                    <a className="btn" href={gif} type="button" download>
                        Download
                    </a>
                </div>
            ) : (
                video && (
                    <button className="btn" onClick={convertToGif} type="button">
                        Convert
                    </button>
                )
            )}

            {converting && <h3>Converting...</h3>}
        </section>
    ) : (
        <h1>Loading...</h1>
    );
};

export default Converter;
