import Card from './card';

export default function page(){
	return(
	<div className="flex flex-row flex-wrap h-fit">
		
		<Card title="Dashboard-1"/>
		<Card title="Dashboard-2" />
		<Card title="Dashboard-3"/>
		<Card title="Dashboard-3" />
	
	</div>
	)
}