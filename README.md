# Movie Search Slash Command for Mixmax

This is an open source Mixmax Slash Command that I built for searching for movies, displaying, and linking to their site easily in email with Mixmax.

## What it should look like

### Typeahead
![Movie Search](/images/typeahead.gif?raw=true "Typeahead")

### Resolver
![Movie Search Resolver](/images/resolver.png?raw=true "Resolver")

## Running locally

1. Install using `npm install`
2. Run using `npm start`
3. Add a Mixmax Slash Command in your Mixmax dashboard. (Call it movies) Using:
	Typeahead API URL: http://localhost:9145/typeahead
	Resolver API URL: http://localhost:9145/resolver
4. Quit Chrome and restart it using the following command on OS X: open -a Google\ Chrome --args --ignore-certificate-errors. See here for why.
5. Compose an email in Gmail using Mixmax and type /movies [Search]