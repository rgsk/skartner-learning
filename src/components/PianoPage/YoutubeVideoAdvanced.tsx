import { Button } from "@/components/ui/button";
import { getQueryParam, timestampToSeconds } from "@/lib/utils";
import { ListEndIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { PianoPiece } from "./pianoPieces";

interface YoutubeVideoAdvancedProps {
  piece: PianoPiece;
  scrollMarginTop: number;
  onAddToQueue: () => void;
}
const YoutubeVideoAdvanced: React.FC<YoutubeVideoAdvancedProps> = ({
  piece,
  scrollMarginTop,
  onAddToQueue,
}) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [playerKey, setPlayerKey] = useState(0);

  const handleSkip = (seconds: number) => {
    const player = playerRef.current;
    if (player) {
      player.currentTime = seconds;
      handlePlay();
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  // When another video starts playing → stop this one
  useEffect(() => {
    const handler = (event: CustomEvent<PianoPiece>) => {
      if (event.detail.url !== piece.url) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("video-playing", handler as any);
    return () => window.removeEventListener("video-playing", handler as any);
  }, [piece.url]);

  const handlePlay = () => {
    // Tell everyone else to stop
    window.dispatchEvent(new CustomEvent("video-playing", { detail: piece }));
    setIsPlaying(true);
  };
  const handlePlayRef = useRef(handlePlay);
  handlePlayRef.current = handlePlay;
  const handlePause = () => {
    window.dispatchEvent(
      new CustomEvent("video-paused", { detail: piece.url })
    );
    setIsPlaying(false);
  };
  const resetVideo = () => {
    setIsPlaying(false);
    setPlayerKey((prev) => prev + 1);
  };
  const resetVideoRef = useRef(resetVideo);
  resetVideoRef.current = resetVideo;
  useEffect(() => {
    const handler = (event: CustomEvent<{ playedUrls: string[] }>) => {
      const { playedUrls } = event.detail;
      if (playedUrls.includes(piece.url)) {
        resetVideoRef.current();
      }
    };

    window.addEventListener("reset-video-keys", handler as any);
    return () => window.removeEventListener("reset-video-keys", handler as any);
  }, [piece.url]);

  useEffect(() => {
    const events = {
      "play-video": "play-video",
      "play-video-from-start": "play-video-from-start",
      "pause-video": "pause-video",
      "resume-video": "resume-video",
      "stop-video": "stop-video",
    };
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail !== piece.url) return;

      switch (event.type) {
        case events["play-video"]:
          handlePlayRef.current?.();
          break;
        case events["play-video-from-start"]:
          const player = playerRef.current;
          if (player) {
            player.currentTime = 0;
          }
          handlePlayRef.current?.();
          break;

        case events["pause-video"]:
          setIsPlaying(false);
          break;

        case events["resume-video"]:
          setIsPlaying(true);
          break;
        case events["stop-video"]:
          setIsPlaying(false);
          break;
      }
    };

    Object.keys(events).forEach((e) => window.addEventListener(e, handler));
    return () =>
      Object.keys(events).forEach((e) =>
        window.removeEventListener(e, handler)
      );
  }, [piece.url]);

  return (
    <div
      className="space-y-2 border p-4 rounded-sm"
      id={extractYTId(piece.url) ?? undefined}
      style={{ scrollMarginTop: scrollMarginTop + 16 }}
    >
      <div className="flex justify-end">
        <Button size={"icon"} variant={"outline"} onClick={onAddToQueue}>
          <ListEndIcon />
        </Button>
      </div>
      <div className="aspect-video">
        <ReactPlayer
          ref={playerRef}
          src={piece.url}
          playing={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          key={String(playerKey) + extractYTId(piece.url)}
          onEnded={() => {
            window.dispatchEvent(
              new CustomEvent("video-ended", { detail: piece.url })
            );
            setIsPlaying(false); // ensures that we don't replay the video on end
          }}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="flex items-center justify-between">
        <p>{piece.title}</p>
        <div className="flex gap-2">
          {["0", ...(piece.skips ?? [])].map((skip, i) => {
            return (
              <Button
                key={skip + i}
                variant="outline"
                size="sm"
                onClick={() => {
                  const player = playerRef.current;
                  if (player) {
                    player.currentTime = timestampToSeconds(skip);
                    handlePlay();
                  }
                }}
              >
                {skip}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoAdvanced;

export function extractYTId(url: string) {
  return getQueryParam(url, "v");
}
