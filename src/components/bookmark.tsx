import Link from 'next/link';
import React from 'react';
import {Bookmark as BookmarkType} from '../types/bookmarks';

export function Bookmark({bookmark}: {bookmark: BookmarkType}) {
	return (
		<Link passHref href={bookmark.url}>
			<a
				rel="noreferrer"
				className="px-4 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md transition hover:scale-95"
				target="_blank"
			>
				<div className="flex justify-center items-center max-w-max">
					<div>
						<img src={bookmark.image} alt="icon" className="block object-cover w-10 h-10" />
					</div>
					<div className="grid grid-rows-3 pr-4 pl-2">
						<div className="row-start-2">{bookmark.name}</div>
					</div>
				</div>
			</a>
		</Link>
	);
}
