import { ArrowLeftIcon } from "lucide-react";

// the landing page for every category - the sidebar is the actual navigation
const SelectTopicPage = () => {
  return (
    <div className="p-8">
      <div className="flex gap-2 items-center">
        <ArrowLeftIcon />
        <h1 className="text-xl font-medium">Select topic from the Sidebar</h1>
      </div>
    </div>
  );
};
export default SelectTopicPage;
