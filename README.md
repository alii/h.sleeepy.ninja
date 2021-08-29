# h.sleeepy.ninja

is a custom browser home page.

can be used in firefox using the
custom new tab page extension.

to customize it:

spotify data: uses lanyard, retrieve
by discord id.

bookmarks: bmf parameter.

engine: right now should be 'duck' or 'google'.
falls back to google.

## bookmarks

bookmarks may be imported following a json file is an array
of bookmark objects

```ts
export interface Bookmark {
	name: string;
	url: string;
	image: string;
}
```

## format:

```
https://h.sleeepy.ninja/?engine=<engine>&id=<discordid>&image=<fallback_image>&bmf=<bookmarks_json_file>
```

### example:

```
https://h.sleeepy.ninja/?engine=duck&id=606164529210064897&bmf=https://raw.githubusercontent.com/bfu4/bookmarks-raw/master/bm.json?token=ALGERHW2J4NQGSIDY5V6RI3BGPN5Y
```
