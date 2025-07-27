import ReactPlayer from "react-player";

interface SearchingConceptProps {}
const SearchingConcept: React.FC<SearchingConceptProps> = ({}) => {
  return (
    <div className="p-[32px]">
      <h1 className="text-xl">Binary Search Concept</h1>
      <div className="h-5"></div>
      <div className="aspect-video">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=zavvULEZPhc"
          width="100%"
          height="100%"
          controls
        />
      </div>
    </div>
  );
};
export default SearchingConcept;
