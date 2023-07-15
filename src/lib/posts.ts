import path from "path";
import fs from "fs";
import { globSync } from "glob";
import matter from "gray-matter";

const POSTS_DIRECTORY_PATH = path.join(process.cwd(), "posts");
const POST_FILE_PATTERN = `${POSTS_DIRECTORY_PATH}/**/*.mdx`;

type PostMetadata = {
  title: string;
  date: Date;
};

type Post = PostMetadata & {
  content: string;
};

export function getAllPosts(): Post[] {
  const postFileNames = globSync(POST_FILE_PATTERN);

  const readPostFile = (fileName: string): Post => {
    const rawFile = fs.readFileSync(fileName, "utf8");
    const parsed = matter(rawFile);
    const metadata = parsed.data as PostMetadata;
    const content = parsed.content;

    return {
      ...metadata,
      content,
    };
  };

  return postFileNames.map(readPostFile);
}
