import {Engine} from '../types/engine';
import {useRouter} from 'next/router';

export function Search(props: {engine: Engine; className?: string}) {
	const router = useRouter();
	return (
		<div className={`grid grid-rows-3 ${props.className ?? ''}`}>
			<input
				className="row-start-2 px-5 search-bar"
				id="search"
				placeholder={`Search with ${props.engine.display}...`}
				onKeyDown={event => {
					if (event.key === 'Enter') {
						const input = (event.target as HTMLInputElement).value;
						void router.push(props.engine.url + input);
					}
				}}
			/>
		</div>
	);
}
