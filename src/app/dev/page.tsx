import DevUtils from "@/components/MiniApps/DevUtils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Tools",
};

const Page = () => {
  return (
    <div>
      <DevUtils />
    </div>
  );
};
export default Page;
