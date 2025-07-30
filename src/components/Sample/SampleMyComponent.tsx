import { Button } from "../ui/button";

interface SampleMyComponentProps {}
const SampleMyComponent: React.FC<SampleMyComponentProps> = ({}) => {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
};
export default SampleMyComponent;
