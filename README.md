casper-manga
============

A simple CasperJS script to download manga, currently supporting [mangareader.net](http://www.mangareader.net).

Requirements
============

Before using, you have to install [PhantomJS](http://phantomjs.org) and [Casperjs](http://casperjs.org) in your computer. Go to each sites for more details on how to install them.

How To Use
============

```
casperjs caspermanga.js <manga-name> <chapter-number>
```

For example, to download Naruto manga, you can run this:

```
casperjs caspermanga.js naruto 600
```

`manga-name` is case-insensitive. For multi-words manga title, use double quotes to wrap it, for example:

```
casperjs caspermanga.js "Detective Conan" 418
```

As per default, the mangas will be saved in the directory where the `caspermanga.js` script exists.


Limitation
============

- Only supports mangareader.net (it's where I read mangas)
- Can only download 1 chapter per request.
- Can be quite slow as it needs to "open" each page to get the image source. Downloading a chapter of 20 pages takes about 2-3 minutes.

Feel free to send pull requests if you do something.