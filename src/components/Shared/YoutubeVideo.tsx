import ReactPlayer from "react-player";

interface YoutubeVideoProps {
  href: string;
}
const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ href }) => {
  return (
    <div className="aspect-video">
      <ReactPlayer src={href} width="100%" height="100%" controls />
    </div>
  );
};
export default YoutubeVideo;
