export interface NotebookSource {
  // the blob url as pasted, for the link on the page
  url: string;
  // fetchable url for the same file
  rawUrl: string;
  repo: string;
  file: string;
}

const BLOB_URL = /^https:\/\/github\.com\/([^/]+\/[^/]+)\/blob\/(.+)$/;

export function parseGithubBlobUrl(url: string): NotebookSource {
  const match = BLOB_URL.exec(url);
  if (!match) {
    throw new Error(
      `Not a github blob url (expected https://github.com/<owner>/<repo>/blob/<ref>/<path>): ${url}`,
    );
  }

  const [, repo, refAndPath] = match;

  return {
    url,
    // the ref and the path stay glued together exactly as github wrote them.
    // splitting them would mean guessing where a branch name ends, which is
    // unanswerable for a branch like `rgsk/practice` - github resolves it for us
    rawUrl: `https://raw.githubusercontent.com/${repo}/${refAndPath}`,
    repo,
    file: refAndPath.split("/").pop() ?? refAndPath,
  };
}

// a malformed url is a config mistake, so it throws rather than rendering nothing
export const getNotebook = (url?: string): NotebookSource | undefined =>
  url ? parseGithubBlobUrl(url) : undefined;

export interface NotebookOutputRef {
  category: string;
  topic: string;
  problem: string;
  cell: number;
  out: number;
}

// serves the untruncated text of one output, so long outputs stay off the page payload
export const notebookOutputUrl = (ref: NotebookOutputRef) =>
  `/api/notebook-output?${new URLSearchParams({
    category: ref.category,
    topic: ref.topic,
    problem: ref.problem,
    cell: String(ref.cell),
    out: String(ref.out),
  })}`;

