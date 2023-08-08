import axios from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import usePosts from '@/hooks/usePosts';
import usePost from '@/hooks/usePost';

import Avatar from './Avatar';
import Button from './Button';

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : '/api/posts';

      await axios.post(url, { body });

      toast.success('تم نشر منشورك بنجاح!');
      setBody('');
      mutatePosts();
      mutatePost();
    } catch (error) {
      toast.error('للاسف لم يتم انشاء منشور!');
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, isComment, postId, mutatePost]);

  return (
    <div className="B px-5 py-2  m-2 p-2 bg-[#fff] rounded-[10px] shadow-sm">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar userId={currentUser?.id} />
          </div>
          <div className="w-full">
            <input
              disabled={isLoading}
              onChange={(event) => setBody(event.target.value)}
              value={body}
              className="
              p-2 m-2 w-[100%] h-[40px] bg-[#ebebeb] rounded-[12px]
              "
              placeholder={placeholder} />
        
         
            <div className="mt-4 flex flex-row justify-end">
              <Button disabled={isLoading || !body} onClick={onSubmit} label="نشر" />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-black text-2xl text-center mb-4 ">مرحبا بك في يزنبوك</h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button fullWidth label="تسجيل دخول" onClick={loginModal.onOpen} />
            <Button fullWidth label="انشاء حساب" onClick={registerModal.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;