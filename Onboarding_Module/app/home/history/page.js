import Link from "next/link"
import Table from './table'


export default function page(){
	
	
	return (
	<>
	<div className="py-4 px-1">
		<Table />
		<div class="mt-8">
			<a href="./home/upload" className = "bg-green-600 rounded-3xl py-2 px-5 w-auto mx-10 my-2 text-white border-solid border-2 border-gray-600"> Upload File </a>
		</div>
	</div>
	</>
)}