import AnOverviewOfCell from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/AnOverviewOfCell";
import CellEnvelopeAndItsModifications from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellEnvelopeAndItsModifications";
import CellMembrane from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellMembrane";
import CellTheory from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellTheory";
import DifferentCellSizeAndShapes from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/DifferentCellSizeAndShapes";
import EukaryoticCells from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/EukaryoticCells";
import Intro from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Intro";
import ProkaryoticCells from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/ProkaryoticCells";
import RibosomesAndInclusionBodies from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/RibosomesAndInclusionBodies";
import WhatIsACell from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/WhatIsACell";
import Presentation from "@/components/PracticePage/Probability/Presentation";

const steps = [
  { component: Intro, length: 1 },
  { component: WhatIsACell, length: 1 },
  { component: CellTheory, length: 1 },
  { component: AnOverviewOfCell, length: 1 },
  { component: DifferentCellSizeAndShapes, length: 1 },
  { component: ProkaryoticCells, length: 1 },
  { component: CellEnvelopeAndItsModifications, length: 1 },
  { component: RibosomesAndInclusionBodies, length: 1 },
  { component: EukaryoticCells, length: 1 },
  { component: CellMembrane, length: 1 },
];

const Ch8CellTheUnitOfLife = () => {
  return <Presentation steps={steps} />;
};

export default Ch8CellTheUnitOfLife;
