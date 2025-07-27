import { Button } from "@/components/ui/button";
import { ModeToggle } from "../Shared/ModeToggle";
interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div>
      <Button>Click</Button>
      <ModeToggle />
    </div>
  );
};
export default PracticePage;
