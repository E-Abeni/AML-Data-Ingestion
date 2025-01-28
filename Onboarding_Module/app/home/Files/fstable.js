import Ftable from "./ftable"
import {fetchFiles} from "./fetch"
import {Suspense, useState} from "react"


export default function FsTable(){	
	
	return(
		<table class="w-full mx-auto rounded-lg shadow-lg overflow-hidden border-collapse border border-gray-300">
			<thead class="bg-gray-800 text-white">
				<tr class="text-left">
					<th class="border px-4 py-3">File Name</th>
					<th class="border px-4 py-3">Type</th>
					<th class="border px-4 py-3">Size</th>
					<th class="border px-4 py-3">Date</th>
					<th class="border px-4 py-3">Category</th>
					<th class="border px-4 py-3">Description</th>
					<th class="border px-4 py-3">Action</th>
				</tr>
			</thead>
			<tbody>
				<Suspense>
				{
					fetchFiles().then((res) => (res.map((file) => Ftable(file = {file}))))
				}
				
				</Suspense>
			</tbody>
		</table>
		
)	
}


