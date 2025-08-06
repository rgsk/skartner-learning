import { useState } from "react";
import { Input } from "../ui/input";

function toSnakeCase(input: string): string {
  return input
    .split(/[\s-]+/)
    .map((w) => w.toLowerCase())
    .join("_");
}
function toPascalCase(input: string): string {
  return input
    .split(/[\s_-]+/) // split by space, underscore, or hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
function toKebabCase(input: string): string {
  return input
    .split(/[\s_]+/)
    .map((w) => w.toLowerCase())
    .join("-");
}
interface DevUtilsProps {}
const DevUtils: React.FC<DevUtilsProps> = ({}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="p-[32px]">
      <div className="space-y-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>{toSnakeCase(inputValue)}</p>
        <p>{toPascalCase(inputValue)}</p>
        <p>{toKebabCase(inputValue)}</p>
      </div>
    </div>
  );
};
export default DevUtils;
