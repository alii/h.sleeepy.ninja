import {useRouter} from 'next/router';
import {Spotify} from '../components/spotify';
import {Search} from '../components/search';
import {useEffect, useState} from 'react';
import fetch from 'node-fetch';
import {ENGINES, GOOGLE} from '../types/engine';
import {Bookmark} from '../types/bookmarks';
import Link from 'next/link';

export default function Home(): JSX.Element {
	const router = useRouter();

	const {
		id: discordId,
		engine: engineName,
		bmf: bookmarkUrl,
		image,
	} = router.query as Record<string, string | undefined>;

	const engine = ENGINES.find(engine => match(engine.name, engineName ?? 'google'));
	const [bookmarks, setBookmarks] = useState<Bookmark[]>();

	useEffect(() => {
		const fetchBookmarks = async () => {
			if (!bookmarkUrl) {
				return;
			}

			const data = await fetch(bookmarkUrl);

			if (data.status !== 200) {
				return;
			}

			const dataJson = (await data.json()) as Bookmark[];
			setBookmarks(dataJson);
		};

		void fetchBookmarks();
	}, [bookmarkUrl]);

	return (
		<div>
			<div className="grid grid-cols-1 grid-rows-2 justify-center place-items-center max-w-full">
				<div className="flex flex-wrap col-start-1 justify-center">
					<div className="pt-4 pr-5">
						{discordId ? <Spotify id={discordId} alt={image} /> : null}
					</div>
					<Search engine={engine ?? GOOGLE} className="max-w-min" />
				</div>
				<div className="flex flex-wrap justify-center bookmark-container">
					{bookmarks?.map(bookmark => (
						<Link key={`bookmark-${bookmark.name}`} href={bookmark.url}>
							<a className="pr-3 min-w-max" rel="noreferrer" target="_blank">
								<div className="container flex max-w-max bookmark">
									<img src={bookmark.image} alt="icon" className="bookmark-icon" />
									<div className="grid grid-rows-3 pr-4 pl-2">
										<div className="row-start-2">{bookmark.name}</div>
									</div>
								</div>
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

function match(a: string, b: string) {
	return a.toLowerCase() === b.toLowerCase();
}
