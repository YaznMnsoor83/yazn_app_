import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import useUser from "@/hooks/useUser";

import PostFeed from "@/components/posts/PostFeed";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import Header from "@/components/Layout/Header";
import Head from "next/head";



const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader  />
      </div>
    )
  }

  return (
    <>
    <Head>
      <title>Yaznbook | {fetchedUser?.name}</title>
      <meta property="og:url" content={`yaznbook.com/users/${userId}`} />
          <meta property="og:image" content="/Yaznbook.png"></meta>
         <meta property="og:title" content="Yaznbook"></meta>
         <meta property="og:description" content={`تابع ${fetchedUser?.name} في يزنبوك`} />
    </Head>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
   );
}
 
export default UserView;