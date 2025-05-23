"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { updatePassword, updateProfile } from "@/services/Profile";
import { logOut } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/ui/password-input";
import { Pencil, User, Lock, Camera, Save, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ProfileCard = () => {
  const { user, setIsLoading } = useUser();
  const router = useRouter();

  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editingProfile, setEditingProfile] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImagePreview(user.image || "/avatar.png");
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
    if (!name.trim()) return toast.error("Name is required");
    setLoading(true);

    const formData = new FormData();
    formData.append("data", JSON.stringify({ name }));
    if (imageFile) formData.append("image", imageFile);

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
      toast.error("Failed to update profile.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async () => {
    const { oldPassword, newPassword } = passwordData;
    if (!oldPassword || !newPassword) {
      return toast.error("Both fields are required.");
    }
    setLoading(true);
    try {
      const res = await updatePassword(passwordData);
      if (res?.success) {
        toast.success(res.message);
        await logOut();
        setIsLoading(true);
        router.push("/login");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Password update failed.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Account Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your profile and security settings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Profile Section */}
          <Card className="overflow-hidden border-0 py-8 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Profile Information</h2>
                </div>
                {!editingProfile && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingProfile(true)}
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <div className="relative">
                    <Image
                      src={imagePreview || "/avatar.png"}
                      alt="Profile"
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-full object-cover border-4 border-background shadow-lg"
                    />
                    {editingProfile && (
                      <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  {editingProfile && (
                    <label className="absolute -bottom-2 -right-2 p-2 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90 transition-colors shadow-lg">
                      <Camera className="w-4 h-4" />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {editingProfile
                      ? "Click the camera icon to change your photo"
                      : "Profile Photo"}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Display Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!editingProfile}
                    className={`transition-all ${
                      editingProfile
                        ? "border-primary/50 focus:border-primary"
                        : "border-muted bg-muted/30"
                    }`}
                    placeholder="Enter your display name"
                  />
                </div>

                {editingProfile && (
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleUpdateProfile}
                      disabled={loading}
                      className="flex-1"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setEditingProfile(false)}
                      disabled={loading}
                      className="flex-1"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Password Update Section */}
          <Card className="overflow-hidden py-8 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Lock className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-semibold">Security Settings</h2>
                </div>
                {!editingPassword && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingPassword(true)}
                    className="hover:bg-orange-500/10 hover:text-orange-500 transition-colors"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Change
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="oldPassword" className="text-sm font-medium">
                    Current Password
                  </Label>
                  <PasswordInput
                    id="oldPassword"
                    placeholder="Enter current password"
                    value={passwordData.oldPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        oldPassword: e.target.value,
                      })
                    }
                    disabled={!editingPassword || loading}
                    className={`transition-all ${
                      editingPassword
                        ? "border-orange-500/50 focus:border-orange-500"
                        : "border-muted bg-muted/30"
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-sm font-medium">
                    New Password
                  </Label>
                  <PasswordInput
                    id="newPassword"
                    placeholder="Enter new password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    disabled={!editingPassword || loading}
                    className={`transition-all ${
                      editingPassword
                        ? "border-orange-500/50 focus:border-orange-500"
                        : "border-muted bg-muted/30"
                    }`}
                  />
                </div>

                {editingPassword && (
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      <strong>Note:</strong> Changing your password will log you
                      out of all devices. You will need to sign in again.
                    </p>
                  </div>
                )}

                {editingPassword && (
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handlePasswordUpdate}
                      disabled={loading}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {loading ? "Updating..." : "Update Password"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditingPassword(false);
                        setPasswordData({ oldPassword: "", newPassword: "" });
                      }}
                      disabled={loading}
                      className="flex-1"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
