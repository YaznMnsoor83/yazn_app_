import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Input from "../Input";
import ImageUpload from "../ImageUpload";

const EditModal = () => {
    const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
  }, [currentUser?.name, currentUser?.username, currentUser?.bio, currentUser?.profileImage, currentUser?.coverImage]);
  
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.patch('/api/edit', { name, username, bio, profileImage, coverImage });
      mutateFetchedUser();

      toast.success('تم تعديل!');

      editModal.onClose();
    } catch (error) {
      toast.error('للاسف لم يتم الحفظ!');
    } finally {
      setIsLoading(false);
    }
  }, [editModal, name, username, bio, mutateFetchedUser, profileImage, coverImage]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload title="يمكنك طش صوره هنا" value={profileImage} disabled={isLoading} onChange={(image) => setProfileImage(image)} label="ضع صوره بروفايل" />
      <ImageUpload  title="يمكن طش صوره هنا"   value={coverImage} disabled={isLoading} onChange={(image) => setCoverImage(image)} label="ضع صوره للبانر" />
      <Input
        placeholder="اسمك"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}  
      />
      <Input 
        placeholder="اسم الحساب @"
        title={"لو سمحت لازم يكون انجليزي فقط!"}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading} 
      />
      <Input 
        placeholder="الوصف"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        disabled={isLoading} 
      />
    </div>
  )

    return(
        <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        title="تعديل حسابك في يزنبوك"
        actionLabel="الحفظ"
        onClose={editModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
      />
    )
}

export default EditModal;