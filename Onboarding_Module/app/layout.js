import './globals.css'
import Link from 'next/link'
import {cookies} from 'next/headers'

export const metadata = {
	title: "AML Data Ingestion"
}


export default function RootLayout({children}){
	
	const myCookies = cookies()
	let u_data = myCookies.get("user_data")?.value
	if(u_data){
		u_data = JSON.parse(u_data)
	}

	

	let menus = [{name: 'Home', href:"/"}, 
				 {name: 'Login', href:"/"}, 
				 {name: 'About-Us', href:"/about"}];
	
	return(
		<html>
			<body className="flex flex-col h-screen w-full"> 
				<div className="boarder-solid boarder-2 bg-black w-full flex flex-row justify-between py-2">
					<h1 className="text-white h-full content-center mx-10 font-bold text-2xl"> FI Onboarding Module </h1>
					<ul className="flex flex-row">
						{menus.map((menu) => <li className="text-white p-2 mx-4" key={menu.name}><Link key = {menu.name} href={menu.href}> {menu.name}</Link> </li>)}
					</ul>
				</div>
				{children}
			</body>
		</html>
		) 
}