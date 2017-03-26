const express = require('express');
const fetchUrl = require('fetch').fetchUrl;
const Promise = require('bluebird');
const https = require('https');
const cheerio = require('cheerio');
const request = require('request');
const router = express.Router();

function fakeNewsMain(){
  return new Promise((resolve, reject) => {
    request.get(`http://www.fakenewschecker.com/`, (err, response, body) => {
      if (err) {
        return reject(err);
      }

      const $ = cheerio.load(body)
      resolve($);
    })
  });
}

function getIndivPages(min, max, $) {
  const sites = {};

  $('ul.views-fluid-grid-list').children().map((i, el) => {
    if (i > min && i < max) {
      let name = $('a', el).text()
      let subUrl = $('a', el).attr('href');

      sites[name] = {
        subUrl: $('a', el).attr('href')
      };
    }
  });

  return sites;
}

function scrapePages(listings) {
  let requestPromises = []

  Object.keys(listings).map(el => {
    let newPromise = new Promise ((resolve, reject) => {
      request.get(`http://www.fakenewschecker.com${listings[el].subUrl}`, (err, response, body1) => {
        if (err) {
          return reject(err);
        }

        resolve(body1);
      });
    })

    requestPromises.push(newPromise);
  });

  return requestPromises;
};

function buildListings(listings, promises, res) {
  let keys = Object.keys(listings);

  return Promise.all(promises)
  .then(bodies => {
    bodies.map((el, i) => {
      let $ = cheerio.load(el);
      // console.log(keys[i]);
      let url = $('.field-name-field-website .field-items .field-item').text();
      // console.log(url);
      listings[keys[i]].url = url;

      let bias = []

      $('.field-name-field-bias .field-items').children().map((i, el) => {
        bias.push($(el).text());
      })

      listings[keys[i]].bias = bias;
      return listings
    });

    res.send(listings);
  })
}

router.get('/fakenews/:min/:max', authorize, (req, res, next) => {
  const { min, max } = req.params;

  let getMain = fakeNewsMain();
  listings = {};

    getMain.then($ => {
      let listings = getIndivPages(min, max, $);
      return [listings, scrapePages(listings)];
    })
    .then(total => {
      let listings = total[0];
      let promises = total[1];

      buildListings(listings, promises, res);
    });
});
