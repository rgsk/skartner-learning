import { useEffect, useState } from "react";

export const useFetchPublicFile = (filePath?: string) => {
  const [fileContent, setFileContent] = useState<string>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (filePath) {
      setLoading(true);
      fetch(filePath)
        .then((res) => res.text())
        .then((text) => {
          setFileContent(text);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [filePath]);
  return { fileContent, loading };
};
