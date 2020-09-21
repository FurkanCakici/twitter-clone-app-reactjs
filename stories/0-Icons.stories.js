import React from 'react'
import * as Icons from '../components/icons'
import Photo from '../components/photo'
import ProfileBox from '../components/profile-box'
export default {
  title: 'Icons'
}

export const Icon = () => {
  return (
    <div className="icons">
      <Icons.ArrowBottom />
      <Icons.Bookmark />
      <Icons.BookmarkFill />
      <Icons.Emoji />
      <Icons.Explore />
      <Icons.ExplorerFill />
      <Icons.Gif />
      <Icons.Home />
      <Icons.HomeFill />
      <Icons.Like />
      <Icons.Lists />
      <Icons.ListsFill />
      <Icons.Media />
      <Icons.Messages />
      <Icons.MessagesFill />
      <Icons.More />
      <Icons.Notification />
      <Icons.NotificationFill />
      <Icons.Options />
      <Icons.Profile />
      <Icons.ProfileFill />
      <Icons.Question />
      <Icons.Reply />
      <Icons.Retweet />
      <Icons.Search />
      <Icons.Share />
      <Icons.TimelineProp />
      <Icons.Twitter />
    </div>
  )
}

export const ProfilePhoto = () => {
  return <Photo src={'https://pbs.twimg.com/profile_images/1184514251140018176/bi9To01i_400x400.jpg'} alt='Profile_Photo'/>
}

export const Box = () => <ProfileBox />