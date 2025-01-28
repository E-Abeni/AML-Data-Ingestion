import {fetchData} from "./fetch"
import Row from "./row"
import { Suspense } from 'react';


export default async function Table(){

	let data = await fetchData()
	
	return (
		
		  <table className="w-full mx-auto rounded-lg shadow-lg overflow-hidden border-collapse border border-gray-300">
			<thead className="bg-gray-800 text-white">
			<tr class="text-left">
				<th className="border-solid border-gray-300 border-2 p-4"> Icon </th>
				<th className="border-solid border-gray-300 border-2 p-4"> File Name </th>
				<th className="border-solid border-gray-300 border-2 p-4"> File Type </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Upload Data </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Status </th>
				<th className="border-solid border-gray-300 border-2 p-4">  </th>
			</tr>
			</thead>
			<tbody>
			<Suspense fallback={<tr><td>Loading...</td></tr>}>
			{
					
						data.map(data => <Row data = {data} />)
					
			}
			</Suspense>
			</tbody>
		</table>
		
	  );

}


