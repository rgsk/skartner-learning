import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(title: string): string {
  return title.replaceAll("'", "").toLowerCase().trim().replace(/\s+/g, "-");
}

export function unslugify(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// New function to fetch CSV content
export const fetchCSV = async (url: string): Promise<string> => {
  try {
    const response = await axios.get(url, { responseType: "text" });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch CSV content: ${error}`);
  }
};

export function getCsvFile({
  csvContent,
  filename,
}: {
  csvContent: string;
  filename: string;
}) {
  // Convert CSV string to a Blob
  const blob = new Blob([csvContent], { type: "text/csv" });

  // Convert Blob to File (File API is available in the browser)
  const file = new File([blob], filename, { type: "text/csv" });
  return file;
}

export function checkIsYoutubeVideo(url: string): boolean {
  try {
    // Parse the URL
    const parsedUrl = new URL(url);

    // Check if the host belongs to YouTube
    const isYouTubeHost = parsedUrl.hostname === "www.youtube.com";
    // Check if there's a video ID in the "v" query param
    const hasVideoId = parsedUrl.searchParams.has("v");

    return isYouTubeHost && hasVideoId;
  } catch (error) {
    // If URL parsing fails, return false
    return false;
  }
}
