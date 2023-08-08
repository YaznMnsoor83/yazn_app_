import { signOut } from 'next-auth/react';
import { BiBell, BiGame, BiLogOut, BiLogOutCircle, BiPhoneCall, BiUser } from 'react-icons/bi';
import { BsHouseFill, BsBellFill, BsSearch, BsBell } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import useCurrentUser from '@/hooks/useCurrentUser';
import {Ri4KFill, RiChatSettingsLine, RiGamepadFill, RiListSettingsFill, RiSettings2Fill, RiSettings2Line, RiSettings5Line} from "react-icons/ri"

import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';
import SidebarItem from './Sidebaritem';
import Avatar from '../Avatar';
import Yaznbook from './Yaznbook';
import { AiFillSetting } from 'react-icons/ai';
import { GenIcon } from 'react-icons/lib';

interface SidebarProps{
  
}

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    {
      icon: BsHouseFill,
      label: 'الصفحه الرئيسيه',
      href: '/',
    },
    {
      icon: BsSearch,
      label: 'البحث',
      href: `/search`,
      auth: true,
    },

    {
      icon: BsBell,
      label: 'الاشعارات',
      href: '/notifications',
      auth: true,
  
    },
    {
      icon: Yaznbook,
      label: 'Yaznbook Plus+',
      href: `/plus`,
      auth: true,
    },
    {
      icon: BiUser,
      label: `حسابك يزنبوك`,
      href: `/users/${currentUser?.id}`,
      auth: true,
    },

    {
      icon: RiSettings2Line,
      label: `الأعدادات`,
      href: `/setting`,
    },
  ]

  return (

    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            {items.map((item) => (
              <SidebarItem
                key={item.href}
   
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}

            {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="تسجيل الخروج" />}
          </div>
        </div>
      </div>
  )
};

export default Sidebar;