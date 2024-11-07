import React from "react";
import { AvatarImage, Avatar } from "./ui/avatar";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { AtSign } from "lucide-react";

const Profile = () => {
  const params = useParams();
  const userId = params.id;
  useGetUserProfile(userId);

  const { userProfile } = useSelector((store) => store.auth);
  const isLoggedInUserProfile = false;
  const isFollowing = false;

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
                    <Button
                      varient="secondary"
                      className="hover:bg-gray-200 h-8"
                    >
                      Edit Profile
                    </Button>
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
                <span className="font-semibold">{userProfile?.bio || 'bio here...'}</span>
                <Badge className='w-fit' variant='secondary'><AtSign/> <span className="pl-1" ></span> {userProfile?.username}</Badge>
                <span>Learn code with patel mernstack style</span>
                <span>Learn code with patel mernstack style</span>
                <span>Learn code with patel mernstack style</span>
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
