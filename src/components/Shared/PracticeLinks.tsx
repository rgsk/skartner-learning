"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import TargetBlankLink from "./TargetBlankLink";

interface PracticeLinksProps {
  leetcode: string;
}
const PracticeLinks: React.FC<PracticeLinksProps> = ({ leetcode }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until mounted on client
  return (
    <div className="my-[20px]">
      <div className="flex">
        <TargetBlankLink href={`https://leetcode.com/problems/${leetcode}`}>
          <span className="flex gap-2 items-center">
            <Label className="text-lg cursor-pointer">Leetcode</Label>
            <span>
              {theme === "dark" ? (
                <Image
                  src="/lc-dark.png"
                  width={20}
                  height={20}
                  alt="leetcode"
                />
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
    </div>
  );
};
export default PracticeLinks;
