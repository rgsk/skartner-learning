// its own module so middleware can reach the topics data without pulling
// axios and katex in through lib/utils
export function slugify(title: string): string {
  return title.replaceAll("'", "").toLowerCase().trim().replace(/\s+/g, "-");
}
