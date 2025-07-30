"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Label } from "../ui/label";
import TargetBlankLink from "./TargetBlankLink";

interface PracticeLinksProps {
  leetcode: string;
}
const PracticeLinks: React.FC<PracticeLinksProps> = ({ leetcode }) => {
  const { theme } = useTheme();
  return (
    <div className="my-[20px]">
      <TargetBlankLink href={`https://leetcode.com/problems/${leetcode}`}>
        <span className="flex gap-2 items-center">
          <Label className="text-lg">Leetcode</Label>
          <span>
            {theme === "dark" ? (
              <Image src="/lc-dark.png" width={20} height={20} alt="leetcode" />
            ) : (
              <Image
                src="/lc-light.png"
                width={20}
                height={20}
                alt="leetcode"
              />
            )}
          </span>
        </span>
      </TargetBlankLink>
    </div>
  );
};
export default PracticeLinks;
