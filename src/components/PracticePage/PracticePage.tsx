import PracticeLinks from "@/components/Shared/PracticeLinks";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div>
      <p>
        Practice on: <PracticeLinks leetcode="binary-search" />
      </p>
    </div>
  );
};
export default PracticePage;
