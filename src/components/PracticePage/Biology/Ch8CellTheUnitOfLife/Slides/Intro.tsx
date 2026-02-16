import { useSlideMaker } from "@/components/PracticePage/Probability/common";

const Intro = ({ counter }: { counter: number }) => {
  const { showAt, happenAt, showOnlyAt } = useSlideMaker(counter);

  return <div></div>;
};

export default Intro;
