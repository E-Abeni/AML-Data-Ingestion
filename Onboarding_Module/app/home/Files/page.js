"use client"
import FsTable from './fstable'
import Link from 'next/link'

export default function page(){
	
	return (
	<>
		<FsTable />
		<div class="mt-8">
		<Link href="Files/upload" className="bg-blue-600 rounded-3xl py-2 px-5 w-auto mx-10 text-white border-solid border-2 border-gray-600">
			Upload File
		</Link>
		</div>
		<div className="h-screen"></div>
	</>
)}