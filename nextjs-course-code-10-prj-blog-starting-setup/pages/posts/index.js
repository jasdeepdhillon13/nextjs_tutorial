import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is a React frameworkf for production",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs1",
      title: "Getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is a React frameworkf for production",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is a React frameworkf for production",
      date: "2022-02-10",
    },
  ];

function AllPostsPage(){
    return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage; 
