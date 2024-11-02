import { Search, MessageCircle, PlusSquare, TrendingUp, Heart, Home, LogOut } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const sidebarItems = [
  { icon:<Home/>, text:"Home" },
  { icon:<Search/>, text:"Search" },
  { icon:<TrendingUp/>, text:"Explore" },
  { icon:<MessageCircle/>, text:"Messages" },
  { icon:<Heart/>, text:"Notifications" },
  { icon:<PlusSquare/>, text:"Create" },
  { icon: (
    <Avatar className="w-6 h-6">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ), 
  text:"Profile" },
  { icon:<LogOut/>, text:"Logout" },
]

const LeftSidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res =  await axios.get('http://localhost:8000/api/v1/user/logout', {withCredentials:true});
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const sidebarHandler = (textType) => {
    alert(textType);
  }
  return (
    <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen'>
      <div className='flex flex-col'>
        <h1>LOGO</h1>
        <div>
        {
          sidebarItems.map((item, index) => {
            return (
              <div onClick={() => sidebarHandler(item.text)} key ={index} className='flex items-center gap-4 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3'>
                {item.icon}
                <span>{item.text}</span>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar