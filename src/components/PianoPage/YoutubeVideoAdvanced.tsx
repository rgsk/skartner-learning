import { Button } from "@/components/ui/button";
import { getQueryParam, timestampToSeconds } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { PianoPiece } from "./pianoPieces";

interface YoutubeVideoAdvancedProps {
  piece: PianoPiece;
  scrollMarginTop: number;
}
const YoutubeVideoAdvanced: React.FC<YoutubeVideoAdvancedProps> = ({
  piece,
  scrollMarginTop,
}) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [playerKey, setPlayerKey] = useState(0);

  const handleSkip = (seconds: number) => {
    const player = playerRef.current;
    if (player) {
      player.currentTime = seconds;
      player.play();
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  // When another video starts playing → stop this one
  useEffect(() => {
    const stopHandler = (event: CustomEvent<PianoPiece>) => {
      if (event.detail.url !== piece.url) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("video-playing", stopHandler as any);
    return () =>
      window.removeEventListener("video-playing", stopHandler as any);
  }, [piece.url]);

  const handlePlay = () => {
    // Tell everyone else to stop
    window.dispatchEvent(new CustomEvent("video-playing", { detail: piece }));
    setIsPlaying(true);
  };
  const handlePlayRef = useRef(handlePlay);
  handlePlayRef.current = handlePlay;

  useEffect(() => {
    const handler = (event: CustomEvent<string>) => {
      if (event.detail === piece.url) {
        handlePlayRef.current();
      }
    };

    window.addEventListener("play-video", handler as any);
    return () => window.removeEventListener("play-video", handler as any);
  }, [piece.url]);

  useEffect(() => {
    const handler = (event: CustomEvent<string>) => {
      if (event.detail === piece.url) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("pause-video", handler as any);
    return () => window.removeEventListener("pause-video", handler as any);
  }, [piece.url]);
  useEffect(() => {
    const handler = (event: CustomEvent<string>) => {
      if (event.detail === piece.url) {
        setIsPlaying(true);
      }
    };

    window.addEventListener("resume-video", handler as any);
    return () => window.removeEventListener("resume-video", handler as any);
  }, [piece.url]);

  useEffect(() => {
    const resetKeys = (event: CustomEvent<{ playedUrls: string[] }>) => {
      const { playedUrls } = event.detail;
      if (playedUrls.includes(piece.url)) {
        setIsPlaying(false);
        setPlayerKey((prev) => prev + 1);
      }
    };

    window.addEventListener("reset-video-keys", resetKeys as any);
    return () =>
      window.removeEventListener("reset-video-keys", resetKeys as any);
  }, [piece.url]);

  return (
    <div
      className="space-y-2 border p-4 rounded-sm"
      id={extractYTId(piece.url) ?? undefined}
      style={{ scrollMarginTop: scrollMarginTop + 16 }}
    >
      <div className="aspect-video">
        <ReactPlayer
          ref={playerRef}
          src={piece.url}
          playing={isPlaying}
          onPlay={handlePlay}
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
                  handleSkip(timestampToSeconds(skip));
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
