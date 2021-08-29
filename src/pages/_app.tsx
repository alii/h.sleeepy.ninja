import {AppProps} from 'next/app';
import {SWRConfig} from 'swr';

import '../styles/globals.css';
import '../styles/index.css';

export default function App({Component, pageProps}: AppProps): JSX.Element {
	return (
		<SWRConfig
			value={{
				async fetcher<T>(url: string) {
					return fetch(url).then(async res => {
						const body = (await res.json()) as T;

						if (res.status >= 400) {
							throw new Error(
								(
									body as {
										message?: string;
									}
								)?.message ?? 'Something went wrong'
							);
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
