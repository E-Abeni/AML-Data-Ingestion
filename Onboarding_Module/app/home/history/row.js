import Image from 'next/image'

export default function Row({data}){
	
	return(
		<tr className="border-solid border-gray-400 border-2">
			<td className="border-solid border-gray-400 border-2 text-center">
				<Image 
				src = "/file_icon.png"
				alt = " "
				width = "50"
				height = "50"
				className = "rounded-md shadow-sm"
			/>
			</td>
			<td className="border-solid border-gray-400 border-2 p-4"> {data.name} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {data.type} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {data.date} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {data.status} </td>
			<td className="text-center border-gray-400 flex justify-end h-full items-center"> 
				<div className="flex flex-row justify-end gap-2 mx-2 w-fit py-1">
					<button class="rounded-full bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4">
						Details
					</button>
					<button class="rounded-full bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4">
						Edit
					</button>
					<button class="rounded-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4">
						Remove
					</button>					
				</div>
			</td>
		</tr>
	);
}