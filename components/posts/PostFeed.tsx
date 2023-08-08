import usePosts from '@/hooks/usePosts';
import useCurrentUser from '../../hooks/useCurrentUser';

import PostItem from './PostItem';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);
  const { data: currentUser } = useCurrentUser();
  return (
    <div className="w-[96%]" >

      {posts.map((post: Record<string, any>,) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PostFeed;