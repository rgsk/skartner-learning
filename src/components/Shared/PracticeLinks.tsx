"use client";
import Image from "next/image";
import { Label } from "../ui/label";
import TargetBlankLink from "./TargetBlankLink";

interface PracticeLinksProps {
  leetcode?: string;
  workattech?: string;
}
const PracticeLinks: React.FC<PracticeLinksProps> = ({
  leetcode,
  workattech,
}) => {
  return (
    <div>
      <div className="flex gap-[20px]">
        {workattech && (
          <TargetBlankLink
            href={`https://workat.tech/problem-solving/practice/${workattech}`}
          >
            <span className="flex gap-2 items-center">
              <Label className="text-lg cursor-pointer">WorkAtTech</Label>
              <WorkAtTechLogo />
            </span>
          </TargetBlankLink>
        )}
        {leetcode && (
          <TargetBlankLink href={`https://leetcode.com/problems/${leetcode}`}>
            <span className="flex gap-2 items-center">
              <Label className="text-lg cursor-pointer">Leetcode</Label>
              <span className="dark:hidden">
                <Image
                  src="/lc-light.png"
                  width={20}
                  height={20}
                  alt="leetcode"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  src="/lc-dark.png"
                  width={20}
                  height={20}
                  alt="leetcode"
                />
              </span>
            </span>
          </TargetBlankLink>
        )}
      </div>
    </div>
  );
};
export default PracticeLinks;

interface WorkAtTechLogoProps {}
const WorkAtTechLogo: React.FC<WorkAtTechLogoProps> = ({}) => {
  return (
    <span className="bg-[#276EF1] text-white rounded-full min-w-[24px] min-h-[24px] flex justify-center items-center">
      @
    </span>
  );
};
