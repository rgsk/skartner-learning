import Intro from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Intro";
import Slides from "@/components/PracticePage/Probability/Slides";

const steps = [{ component: Intro, length: 1 }];

const Ch8CellTheUnitOfLife = () => {
  return <Slides steps={steps} />;
};

export default Ch8CellTheUnitOfLife;
