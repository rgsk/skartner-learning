import IntroductionToProbability from "@/components/PracticePage/Probability/IntroductionToProbability";
import IntroductionToProbabilityCoinExample1 from "@/components/PracticePage/Probability/IntroductionToProbabilityCoinExample1";
import IntroductionToProbabilityVennDiagram from "@/components/PracticePage/Probability/IntroductionToProbabilityVennDiagram";
import Presentation from "@/components/PracticePage/Probability/Presentation";

const steps = [
  { component: IntroductionToProbability, length: 14 },
  { component: IntroductionToProbabilityVennDiagram, length: 3 },
  { component: IntroductionToProbabilityCoinExample1, length: 3 },
];
const Probability = () => {
  return <Presentation steps={steps} />;
};

export default Probability;
