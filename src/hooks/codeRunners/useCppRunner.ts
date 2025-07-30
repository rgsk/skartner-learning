import axios from "axios";
import { useCallback } from "react";

const useCppRunner = () => {
  const runCode = useCallback(async (code: string) => {
    try {
      const result = await axios.post(
        `http://localhost:4004/experiments/execute-cpp`,
        {
          code,
        }
      );
      return result.data.output;
    } catch (errorMessage: any) {
      throw new Error(errorMessage);
    }
  }, []);
  return {
    runCode,
  };
};
export default useCppRunner;
