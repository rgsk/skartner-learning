"use client";

interface PianoPageProps {}
const PianoPage: React.FC<PianoPageProps> = ({}) => {
  const renderPiecesGroup = ({
    title,
    key,
  }: {
    title: string;
    key: string;
  }) => {
    return (
      <div>
        <h1 className="text-2xl font-medium">{title}</h1>
        <div className="h-[20px]"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pianoPieces[key].map((piece, i) => {
            return <YoutubeVideoAdvanced piece={piece} key={piece.title + i} />;
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="p-4">
      <div className="space-y-[40px]">
        {renderPiecesGroup({ title: "Gibran Alcocer", key: "gibran-alcocer" })}
        {renderPiecesGroup({ title: "Level 1", key: "level1" })}
        {renderPiecesGroup({ title: "Level 2", key: "level2" })}
        {renderPiecesGroup({ title: "Level 3", key: "level3" })}
      </div>
    </div>
  );
};
export default PianoPage;

type PianoPiece = {
  title: string;
  url: string;
  skips?: string[];
};
const pianoPieces: Record<string, PianoPiece[]> = {
  ["gibran-alcocer"]: [
    {
      title: "Idea 1",
      url: "https://www.youtube.com/watch?v=HagoDidoFMw",
    },
    {
      title: "Idea 2",
      url: "https://www.youtube.com/watch?v=aroY4ak2lb8",
    },
    {
      title: "Idea 5",
      url: "https://www.youtube.com/watch?v=6osfcmCt12w",
    },
    {
      title: "Idea 7",
      url: "https://www.youtube.com/watch?v=AVO4rEoGg8Q",
    },
    {
      title: "Idea 9",
      url: "https://www.youtube.com/watch?v=V4pWRfOEqfw",
    },
    {
      title: "Idea 10",
      url: "https://www.youtube.com/watch?v=NfOg7uNLolA",
    },
    {
      title: "Idea 12",
      url: "https://www.youtube.com/watch?v=_UUArHUUiq8",
    },
    {
      title: "Idea 15",
      url: "https://www.youtube.com/watch?v=LQAXuCAuBfE",
    },
    {
      title: "Idea 20",
      url: "https://www.youtube.com/watch?v=Ncfd89EZ1mY",
    },
    {
      title: "Idea 22",
      url: "https://www.youtube.com/watch?v=8Da7RgPXCmU",
    },
    {
      title: "Idea 25",
      url: "https://www.youtube.com/watch?v=BIlwuughFM8",
    },

    {
      title: "Solas",
      url: "https://www.youtube.com/watch?v=5UzKfjTl9ns",
    },

    {
      title: "Hotline Bling",
      url: "https://www.youtube.com/watch?v=XZizUNtuTIA",
    },
  ],
  level1: [
    {
      title: "Ludovico Einaudi - Nuvole Bianche",
      url: "https://www.youtube.com/watch?v=4VR-6AS0-l4",
      skips: ["32"],
    },
    {
      title: "Ludovico Einaudi - Una Mattina",
      url: "https://www.youtube.com/watch?v=-8X_aMT5z0A",
      skips: ["50"],
    },
    {
      title: "Via",
      url: "https://www.youtube.com/watch?v=2S8c09C6J7Q",
    },
    {
      title: "Ofelia - Juan Arenosa",
      url: "https://www.youtube.com/watch?v=OaXPV3dbamU",
    },
    {
      title: "Andrea Vanzo - Valzer d'Inverno",
      url: "https://www.youtube.com/watch?v=D5uc2mJi3Mg",
    },
    {
      title: "Amélie - Comptine",
      url: "https://www.youtube.com/watch?v=3Gq1DJrwEnQ",
    },
    {
      title: "The Interstellar Experience",
      url: "https://www.youtube.com/watch?v=t6zd6BNduTE",
    },
    {
      title: "Passacaglia",
      url: "https://www.youtube.com/watch?v=I3-r11YeKAk",
    },
    {
      title: "Tony Ann – ICARUS",
      url: "https://www.youtube.com/watch?v=HTvsvuadT74",
    },
    {
      title: "Canon in D - Pachelbel",
      url: "https://www.youtube.com/watch?v=6jSLH9CDPPQ",
      skips: ["47", "1:14"],
    },
    {
      title: "Ascension",
      url: "https://www.youtube.com/watch?v=U4zWqtfbkjk",
    },
  ],
  level2: [
    {
      title: "Beanie",
      url: "https://www.youtube.com/watch?v=31IpgnLkk0w",
    },
    {
      title: "Andrea Vanzo - Soulmate",
      url: "https://www.youtube.com/watch?v=b7OyPg5JBnQ",
    },
    {
      title: "Van Gogh - Virginio Aiello",
      url: "https://www.youtube.com/watch?v=l-fxH--8LFI",
    },
    {
      title: "Hijo de la Luna - Mecano // Alexander Motovilov",
      url: "https://www.youtube.com/watch?v=Id4mjy6viLA",
    },
  ],
  level3: [
    {
      title: "Yiruma - River Flows in You",
      url: "https://www.youtube.com/watch?v=7maJOI3QMu0",
    },
    {
      title: "Ludovico Einaudi - Experience",
      url: "https://www.youtube.com/watch?v=G35WR5SVAMw",
    },
    {
      title: "Hans Zimmer - Interstellar - Main Theme",
      url: "https://www.youtube.com/watch?v=4y33h81phKU",
    },
    {
      title: "Mariage d'Amour (II)",
      url: "https://www.youtube.com/watch?v=SoGm7P1PBMo",
    },
    {
      title: "Yann Tiersen - La valse d'Amélie",
      url: "https://www.youtube.com/watch?v=uj9BihmugmI",
    },
  ],
};

import { Button } from "@/components/ui/button";
import { timestampToSeconds } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface YoutubeVideoAdvancedProps {
  piece: PianoPiece;
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

  const [isPlaying, setIsPlaying] = useState(false);

  // When another video starts playing → stop this one
  useEffect(() => {
    const stopHandler = (event: CustomEvent<string>) => {
      if (event.detail !== piece.url) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("video-playing", stopHandler as any);
    return () =>
      window.removeEventListener("video-playing", stopHandler as any);
  }, [piece.url]);

  const handlePlay = () => {
    // Tell everyone else to stop
    window.dispatchEvent(
      new CustomEvent("video-playing", { detail: piece.url })
    );
    setIsPlaying(true);
  };

  return (
    <div className="space-y-2 border p-4 rounded-sm">
      <div className="aspect-video">
        <ReactPlayer
          ref={playerRef}
          src={piece.url}
          playing={isPlaying}
          onPlay={handlePlay}
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
