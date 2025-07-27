import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center p-[100px]">
      <div className="">
        <h1 className="text-5xl text-center">Skartner</h1>
        <div className="h-5"></div>
        <h2 className="text-3xl text-center">
          Your Partner in Skills Development
        </h2>
        <div className="h-5"></div>
        <p className="text-lg text-center max-w-[600px] text-gray-700 dark:text-gray-300 font-medium">
          This blog covers Data Structures and Algorithms and Math topics,
          primarily useful for people wanting to get into Software Engineering
          and Machine Learning.
        </p>
      </div>
      <div className="h-[100px]"></div>
      {/* <div className="flex gap-2 items-end">
        <h3 className="text-2xl">Learn Now</h3>
      </div> */}
      {/* <div className="h-5"></div> */}
      <div>
        <Link href="/dsa">
          <Button variant="outline" size="lg">
            <span>Learn Data Structures and Algorithms</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
