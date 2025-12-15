import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import katex from "katex";
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

export function wrapInlineCode(text: string): string {
  return text
    .replace(/\\`([^`]+)\\`/g, '<code class="inline-code">$1</code>')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\$(.+?)\$/g, (_match, expr: string) => {
      try {
        return `<span class="text-sm">
      ${katex.renderToString(expr, {
        throwOnError: false,
        displayMode: false,
      })}
        </span>`;
      } catch (err) {
        // fallback: keep original if rendering fails
        return `<span class="text-sm">$${expr}$</span>`;
      }
    });
}
export function timestampToSeconds(ts: string): number {
  const parts = ts.split(":").map(Number);

  if (parts.length === 3) {
    // hh:mm:ss
    const [h, m, s] = parts;
    return h * 3600 + m * 60 + s;
  }

  if (parts.length === 2) {
    // mm:ss
    const [m, s] = parts;
    return m * 60 + s;
  }

  // ss
  return Number(ts);
}

export function range(
  start: number,
  stop?: number,
  step: number = 1
): number[] {
  // handle range(stop) case
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  const result: number[] = [];

  if (step === 0) throw new Error("step cannot be 0");

  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > stop; i += step) {
      result.push(i);
    }
  }

  return result;
}

export function getQueryParam(url: string, key: string): string | null {
  const parsed = new URL(url);
  return parsed.searchParams.get(key);
}
