export interface Engine {
	name: string;
	url: string;
	display: string;
}

export const DUCK: Engine = {
	name: 'duck',
	display: 'DuckDuckGo',
	url: 'https://duck.com/?q=',
};

export const GOOGLE: Engine = {
	name: 'google',
	display: 'Google',
	url: 'https://google.com/search?q=',
};

export const ALI: Engine = {
	name: 'alisearch',
	display: 'Ali Search',
	url: 'https://search.balls.workers.dev/?q=',
};

export const ENGINES = [DUCK, GOOGLE, ALI] as const;
