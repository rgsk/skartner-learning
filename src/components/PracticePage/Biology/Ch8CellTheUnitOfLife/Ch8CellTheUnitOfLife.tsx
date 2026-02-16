import AnOverviewOfCell from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/AnOverviewOfCell";
import CellTheory from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellTheory";
import Intro from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Intro";
import WhatIsACell from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/WhatIsACell";
import Slides from "@/components/PracticePage/Probability/Slides";

const steps = [
  { component: Intro, length: 1 },
  { component: WhatIsACell, length: 1 },
  { component: CellTheory, length: 1 },
  { component: AnOverviewOfCell, length: 1 },
];

const Ch8CellTheUnitOfLife = () => {
  return <Slides steps={steps} />;
};

export default Ch8CellTheUnitOfLife;
