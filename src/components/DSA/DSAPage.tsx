import { ArrowLeftIcon } from "lucide-react";

interface DSAPageProps {}
const DSAPage: React.FC<DSAPageProps> = ({}) => {
  return (
    <div className="p-8">
      <div className="flex gap-2 items-center">
        <ArrowLeftIcon />
        <h1 className="text-xl font-medium">Select problem from the Sidebar</h1>
      </div>
    </div>
  );
};
export default DSAPage;
