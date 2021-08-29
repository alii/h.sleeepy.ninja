import Image from 'next/image';
import Link from 'next/link';
import useLanyard from 'use-lanyard';

export function Spotify(props: {id: string; className?: string; alt?: string}) {
	const {data: {spotify: data} = {}} = useLanyard(props.id);

	if (!data) {
		if (!props.alt) {
			return null;
		}

		return (
			<div className={`my-2 max-w-max fit ${props.className ?? ''}`}>
				<div className="container flex py-2 px-3 my-1 spotify">
					<div className="col-start-2 col-end-2 pt-2.5 pr-2 pl-4 fit wrap">
						<div className="spotify-image">
							<img
								src={props.alt}
								height={100}
								width={100}
								alt="album image"
								className="album-image"
								crossOrigin="anonymous"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`my-2 max-w-max fit ${props.className ?? ''}`}>
			<div className="container flex py-2 px-3 my-1 spotify">
				<div className="col-start-2 col-end-2 pt-2.5 pr-2 pl-4 fit wrap">
					<div className="relative">
						<Image
							src={data.album_art_url}
							height={100}
							width={100}
							alt="album image"
							className="rounded-md"
						/>
						<Link passHref href={`https://open.spotify.com/track/${data.track_id}`}>
							<a
								className="absolute top-0 right-0 -mt-2 -mr-2 text-lg"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									width="30"
									height="30"
									viewBox="0 0 480 512"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="spotify-logo-svg"
								>
									<rect x="60" y="110" width="380" height="280" fill="#1DB954" />
									<path
										d="M248 8C111.1 8 0 119.1 0 256C0 392.9 111.1 504 248 504C384.9 504 496 392.9 496 256C496 119.1 384.9 8 248 8ZM348.7 372.9C344.5 372.9 341.9 371.6 338 369.3C275.6 331.7 203 330.1 131.3 344.8C127.4 345.8 122.3 347.4 119.4 347.4C109.7 347.4 103.6 339.7 103.6 331.6C103.6 321.3 109.7 316.4 117.2 314.8C199.1 296.7 282.8 298.3 354.2 341C360.3 344.9 363.9 348.4 363.9 357.5C363.9 366.6 356.8 372.9 348.7 372.9V372.9ZM375.6 307.3C370.4 307.3 366.9 305 363.3 303.1C300.8 266.1 207.6 251.2 124.7 273.7C119.9 275 117.3 276.3 112.8 276.3C102.1 276.3 93.4 267.6 93.4 256.9C93.4 246.2 98.6 239.1 108.9 236.2C136.7 228.4 165.1 222.6 206.7 222.6C271.6 222.6 334.3 238.7 383.7 268.1C391.8 272.9 395 279.1 395 287.8C394.9 298.6 386.5 307.3 375.6 307.3V307.3ZM406.6 231.1C401.4 231.1 398.2 229.8 393.7 227.2C322.5 184.7 195.2 174.5 112.8 197.5C109.2 198.5 104.7 200.1 99.9 200.1C86.7 200.1 76.6 189.8 76.6 176.5C76.6 162.9 85 155.2 94 152.6C129.2 142.3 168.6 137.4 211.5 137.4C284.5 137.4 361 152.6 416.9 185.2C424.7 189.7 429.8 195.9 429.8 207.8C429.8 221.4 418.8 231.1 406.6 231.1V231.1Z"
										fill="#232626"
									/>
								</svg>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
