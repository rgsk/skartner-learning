import SampleMyComponent from "@/components/Sample/SampleMyComponent";
import { Button } from "@/components/ui/button";
interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div>
      <Button>Click</Button>
      <SampleMyComponent />
    </div>
  );
};
export default PracticePage;
