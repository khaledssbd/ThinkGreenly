'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useUser } from '@/context/UserContext';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { updatePassword, updateProfile } from '@/services/Profile';
import { logOut } from '@/services/AuthService';
import { useRouter } from 'next/navigation';
import { PasswordInput } from '@/components/ui/password-input';
import { Pencil } from 'lucide-react';

const ProfileCard = () => {
  const { user, setIsLoading } = useUser();
  const router = useRouter();

  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editingProfile, setEditingProfile] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
  });

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setImagePreview(user.image || '/avatar.png');
    }
  }, [user]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = async () => {
    if (!name.trim()) return toast.error('Name is required');
    setLoading(true);

    const formData = new FormData();
    formData.append('data', JSON.stringify({ name }));
    if (imageFile) formData.append('image', imageFile);

    try {
      const res = await updateProfile(formData);
      if (res?.success) {
        toast.success(res.message);
        setEditingProfile(false);
        setIsLoading(true);
        router.refresh?.();
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error('Failed to update profile.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async () => {
    const { oldPassword, newPassword } = passwordData;
    if (!oldPassword || !newPassword) {
      return toast.error('Both fields are required.');
    }
    setLoading(true);
    try {
      const res = await updatePassword(passwordData);
      if (res?.success) {
        toast.success(res.message);
        await logOut();
        setIsLoading(true);
        router.push('/login');
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error('Password update failed.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto min-h-screen py-10  text-foreground">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Section */}
        <Card className="p-6 rounded-2xl dark:bg-transparent shadow-lg border border-muted">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">👤 Profile</h2>
            {!editingProfile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setEditingProfile(true)}
                className="hover:cursor-pointer border"
              >
                <Pencil className="w-5 h-5 text-muted-foreground" />
              </Button>
            )}
          </div>
          <div className="flex flex-col items-center gap-4 mb-4">
            <Image
              src={imagePreview || '/avatar.png'}
              alt="Profile"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover border-4 border-muted"
            />
            {editingProfile && (
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            )}
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="name" className="mb-1 block">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={!editingProfile}
              />
            </div>

            {editingProfile && (
              <div className="flex gap-3 pt-2">
                <Button onClick={handleUpdateProfile} disabled={loading}>
                  {loading ? 'Saving...' : 'Save'}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setEditingProfile(false)}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Password Update Section */}
        <Card className="p-6 rounded-2xl dark:bg-transparent shadow-lg border border-muted">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">🔒 Update Password</h2>
            {!editingPassword && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setEditingPassword(true)}
                className="hover:cursor-pointer"
              >
                <Pencil className="w-5 h-5 text-muted-foreground" />
              </Button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="oldPassword" className="mb-1 block">
                Old Password
              </Label>
              <PasswordInput
                id="oldPassword"
                placeholder="********"
                value={passwordData.oldPassword}
                onChange={e =>
                  setPasswordData({
                    ...passwordData,
                    oldPassword: e.target.value,
                  })
                }
                disabled={!editingPassword || loading}
              />
            </div>

            <div>
              <Label htmlFor="newPassword" className="mb-1 block">
                New Password
              </Label>
              <PasswordInput
                id="newPassword"
                placeholder="********"
                value={passwordData.newPassword}
                onChange={e =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
                disabled={!editingPassword || loading}
              />
            </div>

            {editingPassword && (
              <div className="flex gap-3 pt-2">
                <Button onClick={handlePasswordUpdate} disabled={loading}>
                  {loading ? 'Updating...' : 'Update'}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setEditingPassword(false);
                    setPasswordData({ oldPassword: '', newPassword: '' }); // optional: reset
                  }}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;

// 'use client';

// import Image from 'next/image';
// import { Card } from '../ui/card';

// import { useUser } from '@/context/UserContext';

// import UpdatePasswordModal from '@/components/modules/Profile/UpdatePasswordModal';
// import UpdateProfileModal from '@/components/modules/Profile/UpdateProfileModal';

// const ProfileCard = () => {
//   const { user, setIsLoading } = useUser();

//   //   const fileInputRef = useRef<HTMLInputElement>(null);

//   return (
//     <div className="flex justify-center items-center min-h-screenp-4 mt-24">
//       <Card className="w-full max-w-sm shadow-lg rounded-2xl p-6text-center border-2 border-green-500">
//         <div className="flex flex-col items-center">
//           <Image
//             src={user?.image || '/avatar.png'}
//             alt="Profile"
//             width={1200}
//             height={1200}
//             className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mb-4"
//           />
//           <h2 className="text-xl font-semibold">{user?.name}</h2>
//           <p className="text-gray-600 mb-4 ">{user?.email}</p>

//           <div className="flex flex-col gap-2 w-[85%] gap-y-4">
//             {/* <Button className="border-2 bg-green-500 border-gray-500">
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button variant="outline">Edit Profile</Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px]">
//                   <DialogHeader>
//                     <DialogTitle>Edit profile</DialogTitle>
//                     <DialogDescription>
//                       Make changes to your profile here. Click save when
//                       you&apos;re done.
//                     </DialogDescription>
//                   </DialogHeader>
//                   <div className="grid gap-4 py-4">
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="name" className="text-right">
//                         Name
//                       </Label>
//                       <Input
//                         id="name"
//                         value={user?.name}
//                         className="col-span-3"
//                       />
//                     </div>
//                     <div className="grid w-full max-w-sm items-center gap-1.5">
//                       <Label htmlFor="picture">Picture</Label>
//                       <Input id="picture" type="file" />
//                     </div>
//                   </div>
//                   <DialogFooter>
//                     <Button type="submit">Save changes</Button>
//                   </DialogFooter>
//                 </DialogContent>
//               </Dialog>
//             </Button> */}
//             <UpdateProfileModal user={user} setIsLoading={setIsLoading} />
//             <UpdatePasswordModal />
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default ProfileCard;
