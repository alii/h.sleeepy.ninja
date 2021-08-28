import fetch from 'node-fetch';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function Lanyard(req: NextApiRequest, res: NextApiResponse) {
	const resp = await fetch(`https://api.lanyard.rest/v1/users/${req.query.id as string}`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const {data} = await resp.json();
	if (!data && resp.status !== 200) {
		res.status(resp.status);
		res.json('{error: "error"}');
		return;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const {spotify} = data;
	res.status(200);
	res.json(spotify);
}
