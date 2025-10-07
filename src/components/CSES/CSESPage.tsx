import { ArrowLeftIcon } from "lucide-react";

interface CSESPageProps {}
const CSESPage: React.FC<CSESPageProps> = ({}) => {
  return (
    <div className="p-8">
      <div className="flex gap-2 items-center">
        <ArrowLeftIcon />
        <h1 className="text-xl font-medium">Select problem from the Sidebar</h1>
      </div>
    </div>
  );
};
export default CSESPage;
