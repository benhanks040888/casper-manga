var casper = require('casper').create({
  clientScripts: ["jquery.js"],
  pageSettings: {
    webSecurityEnabled: false
  }
});

if (casper.cli.args.length == 0) {
  casper.echo("Usage: $ casperjs caspermanga.js <manga> <chapter>")
        .exit();  
}

var manga = casper.cli.args[0].toLowerCase().replace(/[^a-z0-9]/gi, '-'),
    chapter = casper.cli.args[1],
    startPage = 1,
    pages = 0,
    url = 'http://www.mangareader.net/' + manga + '/' + chapter,
    saveDir = manga + '/' + chapter + '/';

casper.start(url, function() {
  if (!chapter) {
    casper.echo("Usage: $ casperjs caspermanga.js <manga> <chapter>")
          .exit();
  }

  // get total of pages
  pages = this.evaluate(function() {
    return $('#pageMenu option').length;
  });

  if (pages === 0) {
    this.echo("Not released yet");
    this.exit(1);
  }

  this.echo('Total pages : ' + pages);
});

next = function() {
  casper.thenOpen(url + '/' + startPage, function() {
    imageUrl = this.evaluate(function() {
      return $('#img').prop('src');
    });

    this.download(imageUrl, saveDir + startPage + '.jpg');
    this.echo('Downloaded ' + startPage + ' of ' + pages + 'pages');
    startPage++;
  });

  if (startPage < pages) {
    this.then(next);
  }
};

casper.then(next);

casper.run();