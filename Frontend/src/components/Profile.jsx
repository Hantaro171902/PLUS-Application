import React, { useState } from "react";
import { AvatarImage, Avatar } from "./ui/avatar";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { AtSign, MessageCircle } from "lucide-react";

const Profile = () => {
  const params = useParams();
  const userId = params.id;
  useGetUserProfile(userId);
  const [activeTab, setActiveTab] = useState("posts");

  const { userProfile } = useSelector((store) => store.auth);

  const isLoggedInUserProfile = user?._id === userProfile?._id;
  const isFollowing = false;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const displayedPost =
    activeTab === "posts" ? userProfile?.posts : userProfile?.bookmarks;

  console.log(userProfile);
  return (
    <div className="flex max-w-5xl justify-center mx-auto pl-10">
      <div className="flex flex-col gap-20 p-8">
        <div className="grid grid-cols-2">
          <section className="flex items-center justify-center">
            <Avatar className="h-32 w-32">
              <AvatarImage
                src={userProfile?.profilePicture}
                alt="profilephoto"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>
          <section>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span>{userProfile?.username}</span>
                {isLoggedInUserProfile ? (
                  <>
                    <Link to="/account/edit">
                      <Button
                        varient="secondary"
                        className="hover:bg-gray-200 h-8"
                      >
                        Edit Profile
                      </Button>
                    </Link>

                    <Button
                      varient="secondary"
                      className="hover:bg-gray-200 h-8"
                    >
                      View archive
                    </Button>
                    <Button
                      varient="secondary"
                      className="hover:bg-gray-200 h-8"
                    >
                      Ad tools
                    </Button>
                  </>
                ) : isFollowing ? (
                  <>
                    <Button varient="secondary" className="h-8">
                      Unfollow
                    </Button>
                    <Button varient="secondary" className="h-8">
                      Message
                    </Button>
                  </>
                ) : (
                  <Button className="bg-[#0095F6] hover:bg-[#0095F6] h-8">
                    Follow
                  </Button>
                )}
              </div>
              <div className="flex items-center gap-4">
                <p>
                  <span className="font-semibold">
                    {userProfile?.posts.length}
                  </span>
                  posts
                </p>
                <p>
                  <span className="font-semibold">
                    {userProfile?.posts.length}
                  </span>
                  followers
                </p>
                <p>
                  <span className="font-semibold">
                    {userProfile?.posts.length}
                  </span>
                  following
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {userProfile?.bio || "bio here..."}
                </span>
                <Badge className="w-fit" variant="secondary">
                  <AtSign /> <span className="pl-1"></span>{" "}
                  {userProfile?.username}
                </Badge>
                <span>Learn code with patel mernstack style</span>
                <span>Learn code with patel mernstack style</span>
                <span>Learn code with patel mernstack style</span>
              </div>
            </div>
          </section>
        </div>
        <div className="border-t border-t-gray-200">
          <div className="flex items-center justify-center gap-10 text-sm">
            <span
              className={`py-3 cursor-pointer ${
                activeTab === "posts" ? "font-bold" : ""
              }`}
              onClick={() => handleTabChange("posts")}
            >
              POSTS
            </span>
            <span
              className={`py-3 cursor-pointer ${
                activeTab === "saved" ? "font-bold" : ""
              }`}
              onClick={() => handleTabChange("saved")}
            >
              SAVED
            </span>
            <span className="py-3 cursor-pointer">REELS</span>
            <span className="py-3 cursor-pointer">TAGS</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {displayedPost?.map((post) => {
              return (
                <div key={post?._id} className="relative group cursor-pointer">
                  <img
                    src={post.image}
                    alt="postimage"
                    className="rounded-sm my-2 w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-white space-x-4">
                      <button className="flex items-center gap-2 hover:text-gray-300">
                        <Heart />
                        <span>{post?.likes.length}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-gray-300">
                        <MessageCircle />
                        <span>{post?.comments.length}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
