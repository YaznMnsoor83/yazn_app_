import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import usePost from "@/hooks/usePost";


import Form from "@/components/Form";
import PostItem from "@/components/posts/PostItem";
import CommentFeed from "@/components/posts/CommentFeed";
import Header from "@/components/Layout/Header";
import Head from "next/head";


const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader />
      </div>
    )
  }

  return ( 
    <>
    <Head>
      <title>Yaznbook | منشور</title>
    </Head>
      <Header showBackArrow label="المنشورات" />
      <PostItem data={fetchedPost} />
      <Form postId={postId as string} isComment placeholder="اكتب تعليقك!" />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
   );
}
 
export default PostView;