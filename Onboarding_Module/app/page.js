"use client"
import LoginPage from "./tools/login"


export default function page(){
	
	
	return(
		<main className="flex flex-row h-screen">
			<div className="flex flex-col p-7 bg-[url('/image1.jpg')] bg-cover bg-center content-center justify-between w-1/4"> 		
			
			</div>
			<div className="bg-gray-300 flex-grow flex flex-col justify-center items-center py-10 rounded-md">
				
				<LoginPage />
			</div>
		</main>
)}
