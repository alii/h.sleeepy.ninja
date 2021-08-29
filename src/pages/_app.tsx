import '../styles/globals.css';
import '../styles/index.css';

import {AppProps} from 'next/app';
import {SWRConfig} from 'swr';
import {APIResponse} from 'nextkit';

export default function App({Component, pageProps}: AppProps): JSX.Element {
	return (
		<SWRConfig
			value={{
				async fetcher<T>(url: string) {
					return fetch(url).then(async res => {
						const body = (await res.json()) as APIResponse<T>;

						if (!body.success) {
							throw new Error(body.message ?? 'Something went wrong');
						}

						return body;
					});
				},
			}}
		>
			<Component {...pageProps} />
		</SWRConfig>
	);
}
