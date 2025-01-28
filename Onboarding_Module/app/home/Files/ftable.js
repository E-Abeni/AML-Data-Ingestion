"use client"

export default function Ftable({file}){
	
	return(
		<tr class="hover:bg-gray-100 border-b-2 border-gray-300 shadow-sm cursor-pointer">
			<td class="px-4 py-3 font-semibold text-gray-800 border border-gray-300">
				{file.file_name}
			</td>
			<td class="px-4 py-3 text-gray-700 border border-gray-300">
				{file.file_type}
			</td>
			<td class="px-4 py-3 text-gray-700 border border-gray-300">
				{file.file_size}
			</td>
			<td class="px-4 py-3 text-gray-700 border border-gray-300">
				{file.upload_date}
			</td>
			<td class="px-4 py-3 text-gray-700 border border-gray-300">
				{file.category}
			</td>
			<td class="w-1/2 px-4 py-3 text-gray-700 border border-gray-300">
				{file.description}
			</td>
			<td class="px-4 py-3 flex justify-center">
				<button class="rounded-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mr-4">
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M19 9h-4V3H9v6H5l7 7 7-7zM4 19v2h16v-2H4z" />
					</svg>
				</button>
				<button class="rounded-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4">
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
					</svg>
				</button>
			</td>
		</tr>
	);
}
