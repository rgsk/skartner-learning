import AnOverviewOfCell from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/AnOverviewOfCell";
import CellTheory from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellTheory";
import DifferentCellSizeAndShapes from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/DifferentCellSizeAndShapes";
import Intro from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Intro";
import ProkaryoticCells from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/ProkaryoticCells";
import WhatIsACell from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/WhatIsACell";
import Presentation from "@/components/PracticePage/Probability/Presentation";

const steps = [
  { component: Intro, length: 1 },
  { component: WhatIsACell, length: 1 },
  { component: CellTheory, length: 1 },
  { component: AnOverviewOfCell, length: 1 },
  { component: DifferentCellSizeAndShapes, length: 1 },
  { component: ProkaryoticCells, length: 1 },
];

const Ch8CellTheUnitOfLife = () => {
  return <Presentation steps={steps} />;
};

export default Ch8CellTheUnitOfLife;
