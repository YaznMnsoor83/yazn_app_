import Header from "@/components/Layout/Header";
import useUsers from '@/hooks/useUsers';
import Avatar from "@/components/Avatar"
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { useCallback } from "react";
import Head from "next/head";

interface SearchProps {
  userId: string;
}

const Search:React.FC<SearchProps> = ({userId}) => {
  const router = useRouter();

  const { data: fetchedUser } = useUser(userId);
  const { data: users = [] } = useUsers();
  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);
  return ( 
    <>
    <Head>
      <title>Yaznbook | البحث</title>
    </Head>
      <Header showBackArrow label="البحث" />
      <div className="p-1">
      <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div         
            key={user.id} className="    hover:bg-[#e7e7e7] 
            transition  
            cursor-pointer flex flex-row gap-4 p-1 rounded-xl">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-black font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </>
   );
}
 
export default Search;