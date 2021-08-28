export interface Engine {
	name: string;
	url: string;
	display: string;
}

export const DUCK: Engine = {name: 'duck', display: 'DuckDuckGo', url: 'https://duck.com/?q='};
export const GOOGLE: Engine = {
	name: 'google',
	display: 'Google',
	url: 'https://google.com/search?q=',
};

export const ENGINES = [DUCK, GOOGLE];
