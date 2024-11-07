import React from 'react'
import Feed from './Feed'
import { Outlet } from 'react-router-dom'
import RightSidebar from './RightSidebar'
import userGetAllPost from '@/hooks/useGetAllPost'
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

const Home = () => {
  userGetAllPost();
  useGetSuggestedUsers
  return (
    <div className='flex'>
      <div className='flex-grow'>
         <Feed/>
         <Outlet/>
      </div>
      <RightSidebar/>
    </div>
  )
}

export default Home