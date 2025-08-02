import ReactPlayer from "react-player";

interface YoutubeVideoProps {
  id: string;
}
const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ id }) => {
  return (
    <div className="aspect-video">
      <ReactPlayer
        src={`https://www.youtube.com/watch?v=${id}`}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};
export default YoutubeVideo;
