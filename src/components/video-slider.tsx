import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import v1 from "/video1.mp4";
import v2 from "/video2.mp4";
import v3 from "/video3.mp4";
import v4 from "/video4.mp4";
import v5 from "/video5.mp4";

export function VideoStrip() {
    const videoList = [
        v1,
        v2,
        v3,
        v4,
        v5,
        v1,
        v2
    ];
    const loop = [...videoList, ...videoList];

    return (
        <section className="py-24 md:py-32 overflow-hidden bg-cream/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12 flex items-end justify-between gap-6">
                <div>
                    <p className="eyebrow text-primary mb-3">In Motion</p>
                    <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05] max-w-xl">
                        Experience CALM in motion
                    </h2>
                </div>
                <p className="hidden md:block max-w-xs text-olive/70 text-sm">
                    Slow rituals, soft light, real textures. A look behind every bottle.
                </p>
            </div>

            <div className="overflow-hidden">
                <div className="marquee-fast hover:[animation-play-state:paused] flex gap-5 w-max">
                    {loop.map((src, i) => (
                        <VideoCard key={i} src={src} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function VideoCard({ src }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    // মাউস ভেতরে আনলে অটো প্লে এবং আনমিউট হবে
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play()
                .then(() => {
                    videoRef.current.muted = false;
                    setIsPlaying(true);
                    setIsMuted(false);
                })
                .catch((err) => console.log("Autoplay blocked:", err));
        }
    };

    // মাউস সরিয়ে নিলে পজ, রিসেট এবং মিউট হবে
    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            videoRef.current.muted = true;
            setIsPlaying(false);
            setIsMuted(true);
        }
    };

    // প্লে অথবা পজ বাটন ম্যানুয়ালি ক্লিক করলে যা হবে
    const togglePlay = (e) => {
        e.stopPropagation(); // মার্কি বা অন্য পেরেন্ট ইভেন্ট ব্লক করার জন্য
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((err) => console.log("Playback error:", err));
            }
        }
    };

    // সাউন্ড বাটন টগল করার জন্য
    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative h-[460px] w-[260px] md:w-[300px] shrink-0 overflow-hidden rounded-[28px] bg-secondary group transition-all duration-300 shadow-md hover:shadow-xl"
        >
            {/* লোকাল ভিডিও ট্যাগ */}
            <video
                ref={videoRef}
                src={src}
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* ডার্ক গ্রেডিয়েন্ট ওভারলে */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 group-hover:from-black/30 transition-opacity duration-300" />

            {/* ১. প্লে/পজ বাটন (Bottom-Left) - এখন ১০০% ক্লিকেবল */}
            <button
                onClick={togglePlay}
                className={`absolute bottom-5 left-5 h-11 w-11 rounded-full bg-cream/90 backdrop-blur grid place-items-center text-olive transition-all duration-300 z-10 cursor-pointer hover:scale-105 active:scale-95
                    ${isPlaying && !isHovered ? "opacity-0" : "opacity-100 transform translate-y-0"}`}
            >
                {isPlaying ? (
                    <Pause className="h-4 w-4 fill-olive text-olive" />
                ) : (
                    <Play className="h-4 w-4 fill-olive text-olive ml-0.5" />
                )}
            </button>

            {/* ২. মিউট বাটন কন্ট্রোল (Bottom-Right) - ক্লিকেবল */}
            <div className="absolute bottom-5 right-5 z-10 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <button
                    onClick={toggleMute}
                    className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur grid place-items-center text-white transition-colors cursor-pointer"
                >
                    {isMuted ? (
                        <VolumeX className="h-4 w-4 text-white" />
                    ) : (
                        <Volume2 className="h-4 w-4 text-white" />
                    )}
                </button>
            </div>
        </div>
    );
}