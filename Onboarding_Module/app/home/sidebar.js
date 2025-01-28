"use client"

import Link from 'next/link'
import clsx from 'clsx'
import {usePathname} from 'next/navigation'

const options = [
	{name: 'Dashboard', href: "/home"},
	{name: 'Upload File', href: "/home/upload"},
	{name: 'View Status', href: "/home/status"},
	{name: 'History', href: "/home/history"},
	
]


export default function SideBar(){
	
	const pathname = usePathname();
	
	return(
		<div className="h-full w-64 bg-yellow-900 py-4" >
			{options.map((option) => {
				return(
					<Link href={option.href} key={option.name}> 
						<p className = {clsx(
						"border-solid border-2 p-2 m-2 text-center rounded-xl bg-black",
						{
							"bg-black text-white": pathname !== option.href,
							"bg-gray-200 text-blue-500 border-solid border-2 border-black font-bold": pathname === option.href
						}
						)}> {option.name} </p>  
					</Link>
				)})}
			</div>

	)

}