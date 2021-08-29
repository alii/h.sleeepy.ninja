import {Engine} from '../types/engine';
import {useRouter} from 'next/router';

export function Search(props: {engine: Engine}) {
	const router = useRouter();
	return (
		<input
			className="block row-start-2 py-2 px-5 w-96 bg-gray-50 bg-opacity-20 rounded-md focus:ring ring-white ring-opacity-50 focus:outline-none"
			placeholder={`Search with ${props.engine.display}...`}
			onKeyDown={event => {
				if (event.key === 'Enter') {
					const input = (event.target as HTMLInputElement).value;
					void router.push(props.engine.url + input);
				}
			}}
		/>
	);
}
