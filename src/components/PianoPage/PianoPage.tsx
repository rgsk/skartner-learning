"use client";

interface PianoPageProps {}
const PianoPage: React.FC<PianoPageProps> = ({}) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {pianoPieces.level1.map((piece, i) => {
          return <YoutubeVideoAdvanced piece={piece} key={piece.title + i} />;
        })}
      </div>
    </div>
  );
};
export default PianoPage;

const pianoPieces = {
  level1: [
    {
      title: "Ludovico Einaudi - Nuvole Bianche",
      url: "https://www.youtube.com/watch?v=4VR-6AS0-l4",
      bestPart: "32",
    },
    {
      title: "Ludovico Einaudi - Una Mattina (The Intouchables)",
      url: "https://www.youtube.com/watch?v=-8X_aMT5z0A",
      bestPart: "50",
    },
  ],
};

import { Button } from "@/components/ui/button";
import { timestampToSeconds } from "@/lib/utils";
import { useRef } from "react";
import ReactPlayer from "react-player";

interface YoutubeVideoAdvancedProps {
  piece: {
    title: string;
    url: string;
    bestPart: string;
  };
}
const YoutubeVideoAdvanced: React.FC<YoutubeVideoAdvancedProps> = ({
  piece,
}) => {
  const playerRef = useRef<HTMLVideoElement>(null);

  const handleSkip = (seconds: number) => {
    const player = playerRef.current;
    if (player) {
      player.currentTime = seconds;
      player.play();
    }
  };

  return (
    <div className="space-y-2 border p-4 rounded-sm">
      <div className="aspect-video">
        <ReactPlayer
          ref={playerRef}
          src={piece.url}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="flex items-center justify-between">
        <p>{piece.title}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            handleSkip(timestampToSeconds(piece.bestPart));
          }}
        >
          Best
        </Button>
      </div>
    </div>
  );
};
