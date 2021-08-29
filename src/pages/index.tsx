import {useRouter} from 'next/router';
import {Spotify} from '../components/spotify';
import {Search} from '../components/search';
import {useEffect, useState} from 'react';
import fetch from 'node-fetch';
import {ENGINES, GOOGLE} from '../types/engine';
import {Bookmark} from '../components/bookmark';
import {Bookmark as BookmarkType} from '../types/bookmarks';

export default function Home() {
	const router = useRouter();

	const {
		id: discordId,
		engine: engineName,
		bmf: bookmarkUrl,
		image,
	} = router.query as Record<string, string | undefined>;

	const engine = ENGINES.find(engine => match(engine.name, engineName ?? 'google'));
	const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

	useEffect(() => {
		const fetchBookmarks = async () => {
			if (!bookmarkUrl) {
				return;
			}

			const data = await fetch(bookmarkUrl);

			if (data.status !== 200) {
				return;
			}

			const dataJson = (await data.json()) as BookmarkType[];
			setBookmarks(dataJson);
		};

		void fetchBookmarks();
	}, [bookmarkUrl]);

	return (
		<div className="px-4 mx-auto mt-20 space-y-10 max-w-3xl">
			<div className="flex justify-center items-center">
				{discordId && <Spotify id={discordId} alt={image} />}
				<div>
					<Search engine={engine ?? GOOGLE} />
				</div>
			</div>

			<div className="grid grid-cols-3 gap-3">
				{bookmarks?.map(bookmark => (
					<Bookmark key={bookmark.name} bookmark={bookmark} />
				))}
			</div>
		</div>
	);
}

function match(a: string, b: string) {
	return a.toLowerCase() === b.toLowerCase();
}
