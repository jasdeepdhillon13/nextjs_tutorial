import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-header.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with next js",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
