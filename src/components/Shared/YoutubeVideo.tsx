import ReactPlayer from "react-player";

interface YoutubeVideoProps {
  id?: string;
  url?: string;
}
const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ id, url }) => {
  return (
    <div className="aspect-video">
      <ReactPlayer
        src={id ? `https://www.youtube.com/watch?v=${id}` : url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};
export default YoutubeVideo;
