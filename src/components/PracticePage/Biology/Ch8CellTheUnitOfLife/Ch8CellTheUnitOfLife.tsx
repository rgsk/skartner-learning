import AnOverviewOfCell from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/AnOverviewOfCell";
import CellEnvelopeAndItsModifications from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellEnvelopeAndItsModifications";
import CellMembrane from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellMembrane";
import CellTheory from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellTheory";
import CellWall from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/CellWall";
import DifferentCellSizeAndShapes from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/DifferentCellSizeAndShapes";
import EndomembraneSystem from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/EndomembraneSystem";
import EndoplasmicReticulum from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/EndoplasmicReticulum";
import EukaryoticCells from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/EukaryoticCells";
import GolgiApparatus from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/GolgiApparatus";
import Intro from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Intro";
import Lysosomes from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Lysosomes";
import Mitochondria from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Mitochondria";
import Plastids from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Plastids";
import ProkaryoticCells from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/ProkaryoticCells";
import RibosomesAndInclusionBodies from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/RibosomesAndInclusionBodies";
import Vacuoles from "@/components/PracticePage/Biology/Ch8CellTheUnitOfLife/Slides/Vacuoles";
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
  { component: CellWall, length: 1 },
  { component: EndomembraneSystem, length: 1 },
  { component: EndoplasmicReticulum, length: 1 },
  { component: GolgiApparatus, length: 1 },
  { component: Lysosomes, length: 1 },
  { component: Vacuoles, length: 1 },
  { component: Mitochondria, length: 1 },
  { component: Plastids, length: 1 },
];

const Ch8CellTheUnitOfLife = () => {
  return <Presentation steps={steps} />;
};

export default Ch8CellTheUnitOfLife;
