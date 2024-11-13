"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { UserDetails } from "@/types";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [currentAvatarUrl, setCurrentAvatarUrl] = useState<string>("/images/default-avatar.png");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const { data, error } = await supabaseClient
          .from("users")
          .select("id, avatar_url, first_name, last_name, gender, dateOfBirth")
          .eq("id", user.id)
          .single();

        if (!error && data) {
          setUserDetails({
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            avatar_url: data.avatar_url,
            gender: data.gender,
            dateOfBirth: data.dateOfBirth,
          });
        }
      }
    };

    fetchUserProfile();
  }, [user, supabaseClient]);

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
    }
  };

  return (
    <div className={twMerge("bg-white px-4 py-2 rounded-lg w-full h-full", className)}>
      <div className="w-full flex items-center justify-between">
        {/* Navigation buttons */}
        <div className="hidden rounded-full md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-gray-200 flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-black" size={50} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-gray-200 flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-black" size={50} />
          </button>
        </div>

        {/* User Authentication and Avatar */}
        <div className="flex items-center bg-gradient-to-r from-teal-500 to-blue-500 hover:bg-gray-200 px-2 py-2 rounded-full gap-x-2 md:gap-x-2">
          {user ? (
            <div className="flex items-center gap-x-2">
              <Button
                onClick={handleLogout}
                className="bg-white text-black hover:bg-gray-100 rounded-full"
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-transparent py-1 rounded-full"
              >
                <img
                  src={currentAvatarUrl}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full object-cover"
                  onError={() => setCurrentAvatarUrl("/images/default-avatar.png")}
                />
              </Button>
            </div>
          ) : (
            <div className="py-1">
              <Button
                onClick={authModal.onOpen}
                className="bg-white text-black rounded-full px-2 py-2"
              >
                Log In
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Children components */}
      <div className="flex-grow h-full">{children}</div>
    </div>
  );
};

export default Header;
