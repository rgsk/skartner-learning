"use client";

import YoutubeVideoAdvanced, {
  extractYTId,
} from "@/components/PianoPage/YoutubeVideoAdvanced";
import TooltipWrapper from "@/components/Shared/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useWindowSize } from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import {
  MusicIcon,
  PauseIcon,
  PlayIcon,
  RotateCwIcon,
  ShuffleIcon,
  SquareIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { PianoPiece, pianoPieces } from "./pianoPieces";

function getRandomUnplayed(shuffledUrls: string[], playedUrls: string[]) {
  if (shuffledUrls.length === 0) return undefined;

  // Filter unplayed
  const unplayed = shuffledUrls.filter((item) => !playedUrls.includes(item));

  // If none left, return undefined
  if (unplayed.length === 0) return undefined;

  // Pick a random one
  const randomIndex = Math.floor(Math.random() * unplayed.length);
  return unplayed[randomIndex];
}
interface PianoPageProps {}
const PianoPage: React.FC<PianoPageProps> = ({}) => {
  const [shuffledUrls, setShuffledUrls] = useState<string[]>();
  const [queuedPieces, setQueuedPieces] = useState<PianoPiece[]>([]);
  const [queueIndex, setQueueIndex] = useState(-1);
  const [playedUrls, setPlayedUrls] = useState<string[]>([]);
  const [shuffleActive, setShuffleActive] = useState<string | null>(null);
  const [playingPiece, setPlayingPiece] = useState<
    PianoPiece & { paused: boolean }
  >();
  const playNextInShuffle = () => {
    if (shuffledUrls && shuffleActive) {
      const nextShuffledUrl = getRandomUnplayed(shuffledUrls, playedUrls);
      if (nextShuffledUrl) {
        window.dispatchEvent(
          new CustomEvent("play-video", {
            detail: nextShuffledUrl,
          })
        );
      } else {
        setShuffleActive(null);
      }
    }
  };
  const playNextInShuffleRef = useRef(playNextInShuffle);
  playNextInShuffleRef.current = playNextInShuffle;
  const playNextInQueue = (index?: number) => {
    if (queuedPieces.length > 0) {
      if (typeof index === "number") {
        window.dispatchEvent(
          new CustomEvent("play-video-from-start", {
            detail: queuedPieces[index].url,
          })
        );
        setQueueIndex(index);
      } else {
        if (queueIndex + 1 < queuedPieces.length) {
          window.dispatchEvent(
            new CustomEvent("play-video-from-start", {
              detail: queuedPieces[queueIndex + 1].url,
            })
          );
          setQueueIndex((prev) => prev + 1);
        } else {
        }
      }
    }
  };
  const playNextInQueueRef = useRef(playNextInQueue);
  playNextInQueueRef.current = playNextInQueue;
  useEffect(() => {
    const handler = (event: CustomEvent<PianoPiece>) => {
      const piece = event.detail;
      setPlayingPiece({ ...piece, paused: false });
      setPlayedUrls((prev) => [...prev, piece.url]);
    };

    window.addEventListener("video-playing", handler as any);
    return () => window.removeEventListener("video-playing", handler as any);
  }, []);

  useEffect(() => {
    const handler = (event: CustomEvent<string>) => {
      const url = event.detail;
      setPlayingPiece((prev) => {
        if (prev?.url === url) {
          return { ...prev, paused: true };
        }
        return prev;
      });
    };

    window.addEventListener("video-paused", handler as any);
    return () => window.removeEventListener("video-paused", handler as any);
  }, []);

  const resetPieces = () => {
    window.dispatchEvent(
      new CustomEvent<{ playedUrls: string[] }>("reset-video-keys", {
        detail: { playedUrls: playedUrls },
      })
    );
    setPlayedUrls([]);
    setPlayingPiece(undefined);
  };
  const resetPiecesRef = useRef(resetPieces);
  resetPiecesRef.current = resetPieces;

  useEffect(() => {
    resetPiecesRef.current();
    if (!shuffleActive) {
      setShuffledUrls(undefined);
    }
  }, [shuffleActive]);

  useEffect(() => {
    const endedHandler = (event: CustomEvent<string>) => {
      const endedUrl = event.detail;
      setPlayingPiece((prev) => (prev?.url === endedUrl ? undefined : prev));
      playNextInShuffleRef.current();
      playNextInQueueRef.current();
    };

    window.addEventListener("video-ended", endedHandler as any);
    return () => window.removeEventListener("video-ended", endedHandler as any);
  }, []);

  const renderPiecesGroup = ({
    title,
    key,
  }: {
    title: string;
    key: string;
  }) => {
    const piecesGroupShuffleActive = shuffleActive === title;
    return (
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">{title}</h1>
          <TooltipWrapper
            tooltip={
              piecesGroupShuffleActive ? "Stop Shuffle!" : `Shuffle (${title})`
            }
          >
            <Button
              size={"icon"}
              variant={piecesGroupShuffleActive ? "secondary" : "outline"}
              onClick={() => {
                if (piecesGroupShuffleActive) {
                  setShuffleActive(null);
                  return;
                }
                setShuffledUrls(
                  pianoPieces[key].map((piece) => {
                    return piece.url;
                  })
                );
                setShuffleActive(title);
                setTimeout(() => {
                  playNextInShuffleRef.current();
                });
              }}
            >
              <ShuffleIcon />
            </Button>
          </TooltipWrapper>
        </div>
        <div className="h-[20px]"></div>
        <div
          className={cn(
            "grid gap-4",
            queuedPieces.length > 0
              ? "grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {pianoPieces[key].map((piece, i) => {
            return (
              <YoutubeVideoAdvanced
                piece={piece}
                key={piece.title + i}
                scrollMarginTop={navbarContainerBounds.height}
                onAddToQueue={() => {
                  setQueuedPieces((prev) => [...prev, piece]);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const [navbarContainerRef, navbarContainerBounds] = useMeasure();
  const windowSize = useWindowSize();

  return (
    <div>
      <div
        ref={navbarContainerRef}
        className="fixed top-0 bg-background z-50 w-full px-4 py-4 border-b"
      >
        <div className="flex items-center justify-between">
          <div>
            {playingPiece && (
              <div className="flex gap-4">
                <a
                  href={`#${extractYTId(playingPiece.url)}`}
                  className="flex gap-2 items-center font-medium"
                >
                  <MusicIcon size={16} /> {playingPiece.title}
                </a>
                <div className="flex gap-2">
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => {
                      if (playingPiece.paused) {
                        window.dispatchEvent(
                          new CustomEvent("resume-video", {
                            detail: playingPiece.url,
                          })
                        );
                      } else {
                        window.dispatchEvent(
                          new CustomEvent("pause-video", {
                            detail: playingPiece.url,
                          })
                        );
                      }
                    }}
                  >
                    {playingPiece.paused ? <PlayIcon /> : <PauseIcon />}
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => {
                      if (shuffleActive) {
                        setShuffleActive(null);
                      } else {
                        window.dispatchEvent(
                          new CustomEvent("stop-video", {
                            detail: playingPiece.url,
                          })
                        );
                        setPlayingPiece(undefined);
                      }
                    }}
                  >
                    <SquareIcon className="!w-[14px]" />
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <TooltipWrapper
              tooltip={shuffleActive ? "Stop Shuffle!" : "Shuffle (All)"}
            >
              <Button
                size={shuffleActive ? "default" : "icon"}
                variant={shuffleActive ? "secondary" : "outline"}
                onClick={() => {
                  if (shuffleActive) {
                    setShuffleActive(null);
                    return;
                  }
                  setShuffledUrls(
                    Object.values(pianoPieces)
                      .reduce(
                        (acc, v) => [...acc, ...v.map((p) => p.url)],
                        [] as string[]
                      )
                      .map((url) => {
                        return url;
                      })
                  );
                  setShuffleActive("All");
                  setTimeout(() => {
                    playNextInShuffleRef.current();
                  });
                }}
              >
                {shuffleActive && <span>{shuffleActive}</span>}
                <ShuffleIcon />
              </Button>
            </TooltipWrapper>
            <TooltipWrapper tooltip="Reset">
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => {
                  resetPieces();
                  setShuffleActive(null);
                }}
              >
                <RotateCwIcon />
              </Button>
            </TooltipWrapper>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: navbarContainerBounds.height,
        }}
      >
        <div
          className="flex"
          style={{ height: windowSize.height - navbarContainerBounds.height }}
        >
          <div className="p-4 flex-1 overflow-auto">
            <div className="space-y-[40px]">
              {renderPiecesGroup({
                title: "Gibran Alcocer",
                key: "gibran-alcocer",
              })}
              {renderPiecesGroup({ title: "Level 1", key: "level1" })}
              {renderPiecesGroup({ title: "Level 2", key: "level2" })}
              {renderPiecesGroup({ title: "Level 3", key: "level3" })}
            </div>
          </div>
          {queuedPieces.length > 0 && (
            <div className="w-[300px] border-l">
              <div className="flex items-center justify-between p-4">
                <h2 className="font-medium">Queue</h2>
                <div className="flex gap-2">
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => {
                      playNextInQueue(0);
                    }}
                  >
                    <PlayIcon />
                  </Button>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      setQueuedPieces([]);
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="p-4">
                {queuedPieces.map((piece, i) => {
                  return (
                    <div key={piece.url + i}>
                      <div
                        className={cn(
                          "cursor-pointer",
                          queueIndex === i && playingPiece?.url === piece.url
                            ? "text-blue-300 font-medium"
                            : ""
                        )}
                        onClick={() => {
                          playNextInQueue(i);
                        }}
                      >
                        {piece.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PianoPage;
