import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

import useUser from "@/hooks/useUser";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  a?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, a, isLarge, hasBorder, lamgay }) => {
  const router = useRouter();

  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);

  return (
    <div
      className={`
        ${hasBorder ? 'border-4 border-blue' : ''}
        ${isLarge ? 'h-32' : 'h-12'}
        ${isLarge ? 'w-32' : 'w-12'}
        ${a ? 'm-2 w-[35px] h-[35px] ' : ''}

        ${lamgay ? 'w-[30px] h-[30px] m-4' : ''}
        rounded-full 
        hover:opacity-90 
        transition 
        
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || '/images/placeholder.png'}
      />
    </div>
  );
}
 
export default Avatar;