/**
 * Created by Kia on 3/26/2017.
 */

$(function() {
  var chart2;
  var fake = 0;
  var valid = 0;
  var left = 0;
  var right = 0;

  const biasLookup = {
    "100percentfedup.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "21stcenturywire.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "365usanews.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "70news.wordpress.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "abcnews.com.co": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "abeldanger.net": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "abovetopsecret.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "activistpost.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "addictinginfo.org": [
      "left",
      ["left bias", "political"]
    ],
    "advocate.com": [
      "left",
      ["left bias", "political", "special interest"]
    ],
    "http:": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "alternet.org": [
      "left",
      ["left bias", "political"]
    ],
    "aidc.org.za": [
      "left",
      ["left bias", "political", "special interest"]
    ],
    "americablog.com": [
      "left",
      ["left bias", "political"]
    ],
    "americasfreedomfighters.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "americanfreepress.net": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "ahtribune.com": [
      "left",
      ["left bias", "political"]
    ],
    "americanlookout.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "AmericanNews.com": [
      "right",
      ["conspiratorial", "inciteful", "pseudoscience", "right bias"]
    ],
    "americanoverlook.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "americanpatriotdaily.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "amren.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "americanreviewer.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "truthpoliticsnews.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "angrypatriotmovement.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "anonews.co": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "anotherdayintheempire.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "theantimedia.org": [
      "neither",
      ["conspiratorial", "editorial", "political"]
    ],
    "antiwar.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "assassinationscience.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "awdnews.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "awarenessact.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "awazetribune.com": ["neither", ["political"]
    ],
    "bb4sp.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "barenakedislam.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias", "war"]
    ],
    "ebar.com": [
      "left",
      ["left bias", "political", "special interest"]
    ],
    "beforeitsnews.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "bentspud.com": ["neither", ["satire"]
    ],
    "bighairynews.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "bignuggetnews.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias", "war"]
    ],
    "bipartisanreport.com": [
      "left",
      ["conspiratorial", "left bias", "political", "pseudoscience"]
    ],
    "bizpacreview.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "blackgenocide.org": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "blacklistednews.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias", "war"]
    ],
    "us.blastingnews.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "bluenationreview.com": [
      "left",
      ["conspiratorial", "left bias", "political"]
    ],
    "borowitzreport.com": ["neither", ["satire"]
    ],
    "breitbart.com": [
      "right",
      ["political", "right bias"]
    ],
    "callthecops.net": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "canadafreepress.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "canadiandimension.com": [
      "left",
      ["left bias", "political", "special interest"]
    ],
    "cap-news.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "americanprogress.org": [
      "left",
      ["left bias", "political"]
    ],
    "centerforsecuritypolicy.org": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "channel-7-news.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "ChristWire.org": ["neither", []
    ],
    "christiantimesnewspaper.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "CivicTribune.com": [
      "right",
      ["political", "right bias"]
    ],
    "clashdaily.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "clickhole.com": ["right", ["right bias"]
    ],
    "coasttocoastam.com": [
      "right",
      ["conspiratorial", "pseudoscience", "right bias"]
    ],
    "collective-evolution.com": [
      "right",
      ["conspiratorial", "editorial", "pseudoscience", "right bias"]
    ],
    "collectivelyconscious.net": [
      "neither",
      ["conspiratorial", "editorial", "pseudoscience"]
    ],
    "commondreams.org": [
      "left",
      ["left bias", "political"]
    ],
    "consciouslifenews.com": [
      "left",
      ["conspiratorial", "editorial", "left bias", "pseudoscience"]
    ],
    "conservativebyte.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "conservativedailypost.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "conservativefiringline.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "conservativefrontline.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "conservativeinfidel.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "conservativeoutfitters.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "conservativepapers.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "conservativerefocus.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "conservativestate.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "conservativetribune.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "conspiracyplanet.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "rickwells.us": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "countdowntozerotime.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "pseudoscience", "right bias"]
    ],
    "countercurrentnews.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "counterpsyops.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "counterpunch.org": [
      "left",
      ["inciteful", "left bias", "political"]
    ],
    "cowgernation.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "cracked.com": ["neither", ["satire"]
    ],
    "creambmp.com": [
      "right",
      ["editorial", "political", "right bias", "special interest"]
    ],
    "cronicadeportiva.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "crooksandliars.com": [
      "left",
      ["conspiratorial", "inciteful", "left bias", "political"]
    ],
    "dailybuzzlive.com": ["neither", []
    ],
    "DailyCurrant.com": ["neither", []
    ],
    "dailyheadlines.net": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "dailykos.com": [
      "left",
      ["editorial", "left bias", "political"]
    ],
    "DCClothesline.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "DCGazette.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "dcwhispers.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "dailynewsbin.com": [
      "left",
      ["editorial", "left bias", "political"]
    ],
    "dailyoccupation.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "dallasvoice.com": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "darkpolitricks.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "darkmoon.me": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "davidduke.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "special interest"
      ]
    ],
    "debunkingskeptics.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "defenddemocracy.press": [
      "left",
      ["left bias", "political"]
    ],
    "democracynow.org": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "democraticunderground.com": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "dennismichaellynch.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "departed.co": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "derfmagazine.com": ["neither", ["satire"]
    ],
    "disclose.tv": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "disclosuremedia.net": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "dissentmagazine.org": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "downtrend.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "drudgereport.com": ["neither", []
    ],
    "duffelblog.com": [
      "right",
      ["editorial", "political", "right bias", "special interest"]
    ],
    "duhprogressive.com": ["neither", []
    ],
    "eaglerising.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "ewao.com": [
      "neither",
      ["conspiratorial", "pseudoscience"]
    ],
    "economyincrisis.org": [
      "left",
      ["conspiratorial", "editorial", "left bias", "political"]
    ],
    "embols.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias"]
    ],
    "EmpireNews.com": [
      "right",
      ["editorial", "political", "right bias"]
    ],
    "endoftheamericandream.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "endingthefed.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias"]
    ],
    "endtime.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "enduringvision.com": [
      "right",
      ["pseudoscience", "right bias", "satire"]
    ],
    "larouchepub.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "oilgeopolitics.net": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "fmobserver.com": ["neither", ["satire"]
    ],
    "3,471,472": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "fakingnews.com": ["neither", ["satire"]
    ],
    "familysecuritymatters.org": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "federalistpress.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "fellowshipoftheminds.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "forwardprogressives.com": [
      "left",
      ["conspiratorial", "editorial", "left bias", "political"]
    ],
    "freakoutnation.com": [
      "left",
      ["conspiratorial", "editorial", "inciteful", "left bias", "political"]
    ],
    "freewoodpost.com": ["neither", ["satire"]
    ],
    "freedomdaily.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "freedomoutpost.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "fridaymash.com": ["neither", ["satire"]
    ],
    "fromthetrenchesworldreport.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "pseudoscience", "right bias"]
    ],
    "gopthedailydose.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "gangstergovernment.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "pamelageller.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "geoengineeringwatch.org": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "globalresearch.ca": [
      "right",
      ["conspiratorial", "editorial", "pseudoscience", "right bias"]
    ],
    "glossynews.com": ["neither", ["satire"]
    ],
    "gomerblog.com": [
      "right",
      ["editorial", "left bias", "right bias", "satire"]
    ],
    "goneleft.com": [
      "left",
      ["conspiratorial", "editorial", "left bias", "political"]
    ],
    "govtslaves.info": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "pseudoscience", "right bias"]
    ],
    "gulagbound.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "hangthebankers.com": [
      "right",
      ["conspiratorial", "editorial", "right bias"]
    ],
    "healthimpactnews.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias"]
    ],
    "henrymakow.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "caintv.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "humansarefree.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "humortimes.com": ["neither", ["satire"]
    ],
    "huzlers.com": [
      "right",
      ["right bias", "satire"]
    ],
    "ihavethetruth.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias"]
    ],
    "ifyouonlynews.com": [
      "left",
      ["conspiratorial", "editorial", "left bias", "political"]
    ],
    "illuminati-news.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "intrendtoday.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "infiniteunknown.net": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "informationclearinghouse.info": [
      "left",
      ["conspiratorial", "left bias", "political"]
    ],
    "Infostormer.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "infowars.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "intellihub.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias"
      ]
    ],
    "intrepidreport.com": [
      "right",
      ["editorial", "political", "right bias"]
    ],
    "investmentwatchblog.com": [
      "right",
      ["editorial", "political", "right bias"]
    ],
    "ironictimes.com": ["neither", ["satire"]
    ],
    "islamicanews.com": ["neither", ["satire"]
    ],
    "israelislamandendtimes.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias"]
    ],
    "jackpineradicals.com": [
      "left",
      ["left bias", "political"]
    ],
    "jacobinmag.com": [
      "left",
      ["left bias", "political"]
    ],
    "janmorganmedia.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "jewsnews.co.il": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "jezebel.com": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "johnnyrobish.com": ["neither", ["satire"]
    ],
    "jonesreport.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias"
      ]
    ],
    "kingworldnews.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "lewrockwell.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "liberalamerica.org": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "liberaldarkness.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "itaglive.com": [
      "right",
      ["editorial", "political", "right bias"]
    ],
    "samuel-warde.com": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "libertyblitzkrieg.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "libertymovementradio.com": [
      "right",
      ["political", "right bias"]
    ],
    "libertynews.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "": [
      "right",
      ["editorial", "political", "right bias"]
    ],
    "libertyunyielding.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "libertyvideos.com": ["neither", []
    ],
    "libertywritersnews.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "lifezette.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "liftable.com": [
      "neither",
      ["editorial", "pseudoscience", "special interest"]
    ],
    "lushforlife.com": ["neither", ["satire"]
    ],
    "mpidailymagazine.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "madworldnews.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "makeamericagreattoday.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "mediamatters.org": [
      "left",
      ["editorial", "left bias", "political", "special interest"]
    ],
    "militianews.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "mirror.co.uk": [
      "left",
      ["editorial", "left bias", "political"]
    ],
    "moonofalabama.org": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "morningledger.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "motherjones.com": [
      "left",
      ["editorial", "left bias", "political"]
    ],
    "front.moveon.org": [
      "left",
      ["editorial", "left bias", "political"]
    ],
    "mrconservative.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "myzonetoday.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "nationonenews.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias"]
    ],
    "nationofchange.org": [
      "left",
      ["editorial", "left bias", "political"]
    ],
    "nationalinsiderpolitics.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "nationalreport.net": [
      "right",
      ["editorial", "political", "right bias", "satire"]
    ],
    "newcenturytimes.com": [
      "left",
      ["left bias", "political"]
    ],
    "news4ktla.com": [
      "neither",
      ["editorial", "pseudoscience", "satire"]
    ],
    "newsbusters.org": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "political",
        "pseudoscience",
        "right bias",
        "special interest"
      ]
    ],
    "newscorpse.com": [
      "left",
      ["editorial", "left bias", "political"]
    ],
    "newsmutiny.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "newstarget.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "newsthump.com": [
      "right",
      ["editorial", "political", "right bias", "satire"]
    ],
    "newswire-24.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "newswithviews.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "newsbiscuit.com": ["neither", ["satire"]
    ],
    "newsbreakers.org": ["neither", ["satire"]
    ],
    "politicops.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "nodisinfo.com": [
      "neither",
      ["conspiratorial", "editorial", "inciteful", "political"]
    ],
    "notallowedto.com": [
      "neither",
      ["conspiratorial", "inciteful", "political", "pseudoscience"]
    ],
    "nowtheendbegins.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "now8news.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "occupydemocrats.com": [
      "left",
      ["left bias", "political"]
    ],
    "onlineconservativepress.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "pakalertpress.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "patdollard.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "patriotupdate.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "politicalblindspot.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "satire"
      ]
    ],
    "politicalreviewer.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "politicalupdater.com": [
      "left",
      ["left bias", "political"]
    ],
    "politicalvelcraft.org": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "politicususa.com": [
      "left",
      ["left bias", "political"]
    ],
    "pravdareport.com": [
      "left",
      ["conspiratorial", "left bias", "political"]
    ],
    "presstv.ir": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "prisonplanet.com": [
      "right",
      ["conspiratorial", "editorial", "pseudoscience", "right bias"]
    ],
    "private-eye.co.uk": [
      "right",
      ["editorial", "political", "right bias", "satire"]
    ],
    "prntly.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "proudcons.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "qpolitical.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "rawstory.com": [
      "left",
      ["left bias", "political"]
    ],
    "readconservatives.news": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "reagancoalition.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "realnewsrightnow.com": ["neither", ["editorial"]
    ],
    "realtimepolitics.com": [
      "left",
      ["left bias", "political"]
    ],
    "redflagnews.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "redstatewatcher.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "rense.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "revolutions2040.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "rt.com": [
      "left",
      ["conspiratorial", "left bias", "political"]
    ],
    "rightalerts.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "rightwingnews.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "rilenews.com": ["neither", []
    ],
    "rockcitytimes.com": [
      "right",
      ["political", "right bias", "satire"]
    ],
    "rumormillnews.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "ruptly.tv": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "russia-direct.org": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "shtfplan.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "satirewire.com": ["neither", ["satire"]
    ],
    "scrappleface.com": ["neither", ["satire"]
    ],
    "secretsofthefed.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "sheepkillers.com": [
      "neither",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "special interest"
      ]
    ],
    "shoebat.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "sott.net": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias"
      ]
    ],
    "skeptiko.com": [
      "neither",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "special interest"
      ]
    ],
    "sputniknews.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias"]
    ],
    "stneotscitizen.com": ["neither", ["satire"]
    ],
    "stormcloudsgathering.com": [
      "neither",
      ["conspiratorial", "editorial", "political", "pseudoscience", "special interest"]
    ],
    "stuppid.com": ["neither", ["satire"]
    ],
    "subjectpolitics.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "supremepatriot.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "surrealscoop.com": ["neither", ["satire"]
    ],
    "theamericanindependent.wordpress.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "thebeaverton.com": ["neither", ["satire"]
    ],
    "thebostontribune.com": [
      "neither",
      ["conspiratorial", "editorial", "political"]
    ],
    "thecommonsenseshow.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias"
      ]
    ],
    "thecontroversialfiles.net": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "corbettreport.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "thedailybeast.com": [
      "left",
      ["left bias", "political"]
    ],
    "dailycaller.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "dailydiscord.com": ["neither", ["satire"]
    ],
    "thedailymash.co.uk": ["neither", ["satire"]
    ],
    "thedailysheeple.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias"
      ]
    ],
    "dailysquib.co.uk": ["neither", ["satire"]
    ],
    "dailystormer.com": [
      "right",
      ["conspiratorial", "inciteful", "political", "right bias"]
    ],
    "thedailywtf.com": ["neither", ["satire"]
    ],
    "dandygoat.com": ["neither", ["satire"]
    ],
    "theduran.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "eutimes.net": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "theeventchronicle.com": [
      "neither",
      ["conspiratorial", "editorial", "political", "pseudoscience", "special interest"]
    ],
    "thefederalistpapers.org": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "theforbiddenknowledge.com": [
      "neither",
      ["conspiratorial", "editorial", "political", "pseudoscience", "special interest"]
    ],
    "4threvolutionarywar.wordpress.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "thefreepatriot.org": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "thefreethoughtproject.com": [
      "left",
      ["conspiratorial", "editorial", "inciteful", "left bias", "political"]
    ],
    "thegatewaypundit.com": [
      "right",
      ["conspiratorial", "political", "pseudoscience", "right bias", "war"]
    ],
    "greanvillepost.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "theineptowl.com": ["neither", ["satire"]
    ],
    "chronicle.su": ["neither", []
    ],
    "kkk.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "thelapine.ca": ["neither", ["satire"]
    ],
    "thelastgreatstand.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "thelibertybeacon.com": [
      "neither",
      ["conspiratorial", "editorial", "political", "pseudoscience", "special interest"]
    ],
    "themadisonmisnomer.com": ["neither", ["satire"]
    ],
    "themindunleashed.org": [
      "neither",
      ["conspiratorial", "editorial", "political", "pseudoscience", "special interest"]
    ],
    "themuslimissue.wordpress.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "thenewinquiry.com": [
      "neither",
      ["conspiratorial", "political", "pseudoscience"]
    ],
    "thenewsnerd.com": [
      "right",
      ["editorial", "right bias", "satire"]
    ],
    "theonion.com": [
      "neither",
      ["editorial", "satire"]
    ],
    "westernjournalism.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "thepoke.co.uk": ["neither", ["satire"]
    ],
    "politicalcult.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "thepoliticalinsider.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "theracketreport.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "therealstrategy.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "therightists.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "therundownlive.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "sensationalisttimes.com": ["neither", ["satire"]
    ],
    "theshovel.com.au": [
      "neither",
      ["political", "pseudoscience", "satire"]
    ],
    "theskunk.org": ["neither", ["satire"]
    ],
    "thespoof.com": ["neither", []
    ],
    "thetimesoftheworld.com": ["neither", ["satire"]
    ],
    "thetruthdivision.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "thetruthseeker.co.uk": [
      "neither",
      ["conspiratorial", "editorial", "inciteful", "political", "pseudoscience"]
    ],
    "theuspatriot.com": ["neither", []
    ],
    "theunrealtimes.com": ["neither", ["satire"]
    ],
    "thevalleyreport.com": ["neither", ["satire"]
    ],
    "vigilantcitizen.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "freebeacon.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "thewatchtowers.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "threepercenternation.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "toprightnews.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "TopInfoPost.com": [
      "neither",
      ["conspiratorial", "editorial", "inciteful", "political", "war"]
    ],
    "topekasnews.com": ["neither", ["satire"]
    ],
    "trueactivist.com": [
      "left",
      ["left bias", "political"]
    ],
    "truepundit.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "truthbroadcastnetwork.com": [
      "right",
      ["conspiratorial", "editorial", "political", "right bias"]
    ],
    "truthfeed.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "truthandaction.org": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "truthfrequencyradio.com": ["neither", []
    ],
    "truthkings.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "twitchy.com": [
      "neither",
      ["conspiratorial", "political", "pseudoscience"]
    ],
    "ushealthyadvisor.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "uschronicle.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "uspoliticslive.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "usuncut.com": [
      "left",
      ["conspiratorial", "inciteful", "left bias", "political"]
    ],
    "usahitman.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias"
      ]
    ],
    "usanewsinsider.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "usanewsflash.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "usasupreme.com": [
      "neither",
      ["conspiratorial", "political", "pseudoscience"]
    ],
    "unclesamsmisguidedchildren.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "unconfirmedsources.com": ["neither", []
    ],
    "undergroundworldnews.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "veteranstoday.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "pseudoscience",
        "right bias",
        "war"
      ]
    ],
    "viralliberty.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "wnd.com": [
      "right",
      ["conspiratorial", "editorial", "inciteful", "political", "right bias"]
    ],
    "washingtonexaminer.com": [
      "right",
      ["conspiratorial", "political", "right bias"]
    ],
    "waterfordwhispersnews.com": ["neither", ["satire"]
    ],
    "wearechange.org": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "webdaily.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "weeklyworldnews.com": ["neither", []
    ],
    "whatdoesitmean.com": [
      "right",
      ["conspiratorial", "editorial", "political", "pseudoscience", "right bias"]
    ],
    "whatreallyhappened.com": [
      "neither",
      ["conspiratorial", "political", "pseudoscience"]
    ],
    "whitepower.com": [
      "right",
      [
        "conspiratorial",
        "editorial",
        "inciteful",
        "political",
        "right bias",
        "war"
      ]
    ],
    "whowhatwhy.org": ["neither", []
    ],
    "winningdemocrats.com": [
      "left",
      ["conspiratorial", "inciteful", "left bias", "political"]
    ],
    "witscience.org": ["neither", []
    ],
    "wonkie.com": ["neither", ["satire"]
    ],
    "worldnewsdailyreport.com": ["neither", []
    ],
    "worldtruth.tv": [
      "neither",
      ["conspiratorial", "editorial", "political", "pseudoscience"]
    ],
    "yesimright.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "yournewswire.com": [
      "neither",
      ["conspiratorial", "political"]
    ],
    "zerohedge.com": [
      "neither",
      ["conspiratorial", "political", "pseudoscience"]
    ],
    "zootfeed.com": [
      "neither",
      ["conspiratorial", "political"]
    ]
  }

  const newsSites = {
    "reddit.com": "",
    "nytimes.com": "",
    "theguardian.com": "Home of the Guardian, Observer and Guardian Weekly newspapers plus special-interest web sites. …More",
    "washingtonpost.com": "Daily. Offers news, opinion, sports, arts and living and entertainment. Includes archives since…More",
    "huffingtonpost.com": "Syndicated columnists, blogs, and news stories with moderated comments.",
    "bbc.co.uk": "",
    "weather.com": "Offers forecasts for cities worldwide as well as radar and satellite maps. Also includes news s…More",
    "indiatimes.com": "Covers home and international updates, sports, entertainment, health and lifestyle. With sectio…More",
    "news.yahoo.com": "",
    "news.google.com/": "Aggregated headlines and a search engine of many of the world's news sources.",
    "forbes.com": "Information about companies and the people who run them. Forbes success lists including the Pla…More",
    "foxnews.com": "Breaking News, Latest News and Current News from FoxNews.com. Breaking news and video. Latest C…More",
    "shutterstock.com": "Royalty-free photography for web or print, subscription model.",
    "accuweather.com": "Features radar and satellite images and 5-day forecasts for United States locations.",
    "timesofindia.indiatimes.com": "Indian national daily, political,entertainment and business news.",
    "bloomberg.com": "",
    "usatoday.com": "Financial news, stock reports, and business articles featured.",
    "wsj.com": "International and national news with a business and financial perspective.",
    "reuters.com": "",
    "wunderground.com": "Weather forecasts for the U.S. and the world with a fast, easy to use interface. Includes weath…More",
    "chinadaily.com.cn": "Daily English-language news about China.",
    "drudgereport.com": "Links to international news sources and columnists.",
    "cnbc.com": "Headline news, articles, reports, stocks and quotes, message boards, and a stock ticker.",
    "money.cnn.com": "",
    "chron.com": "Houston daily Newspaper.",
    "time.com": "News articles from the magazine. Updated daily.",
    "latimes.com": "Online version of Southern California's largest daily newspaper. Contains links to world, natio…More",
    "economictimes.indiatimes.com": "India's financial newspaper that provides analysis on industry and the economy.",
    "nbcnews.com": "National Broadcasting Company.",
    "theatlantic.com": "A regularly updated companion web site to the magazine Atlantic Monthly. Includes fiction, feat…More",
    "thehill.com": "Weekly. Offers news, information, features commentary for and about the U.S. Congress. Includes…More",
    "indianexpress.com": "Leading news site of the daily national Indian newspaper, with live",
    "usnews.com": "A weekly national newsmagazine devoted largely to reporting and analyzing national and internat…More",
    "nypost.com": "The online edition of the New York Post. News, weather, sports, and entertainment all updated d…More",
    "cbsnews.com": "Online news provided by television broadcast company CBS.",
    "abcnews.go.com": "Includes American and world news headlines, articles, chatrooms, message boards, news alerts, v…More",
    "news.com.au": "News from Australia and the world, featuring national, world, business, sport, entertainment an…More",
    "thehindu.com": "English daily with news, views, sports and entertainment coverage.",
    "weather.gov": "Official U.S. weather, marine, fire and aviation forecasts, warnings, meteorological products, …More",
    "nationalgeographic.com": "With a look into the pages of the magazine, plus interactive features, maps, photography, news,…More",
    "cbc.ca": "Canadian Broadcasting Company",
    "dw.com": "News, information and analysis of German and European topics. Free radio and television content…More",
    "sfgate.com": "Daily newspaper for the greater San Francisco area. Includes global news, regional information,…More",
    "hindustantimes.com": "Extensive news coverage on Indian politics, business and economy.",
    "topix.com": "News from thousands of sources, sorted geographically for US cities, as well as a wide variety …More",
    "thedailybeast.com": "With commentary on politics, entertainment, technology and world events. Includes pictures and …More",
    "hollywoodreporter.com": "Film, music, broadcast, and entertainment business news, including independents and internation…More",
    "fortune.com": "Fortune magazine's home page with current business and finance news.",
    "smh.com.au": "The online edition of Sydney's Sunday newspaper with magazine sections on entertainment, health…More",
    "economist.com": "Collections of news stories and analysis, grouped by topic, city and country. UK.",
    "alarabiya.net": "",
    "chicagotribune.com": "Columns by Steve Chapman, John Kass, Clarence Page, Mary Schmich, Dawn Turner Trice, Don Wyclif…More",
    "variety.com": "From the publishers of Daily Variety, Variety.com offers the most comprehensive online resource…More",
    "my.yahoo.com": "",
    "globaltimes.cn": "China's second national English-language newspaper, under the People's Daily. Latest politics, …More",
    "yr.no": "Weather forecasts for most places in the world. Features observations, short and long term fore…More",
    "aljazeera.com": "Aljazeera English first with breaking news, video , multimedia, features and opinions. A global…More",
    "mathrubhumi.com": "English and Malayalam news and features.",
    "voanews.com": "The international broadcast voice of the United States. News and commentary from around the wor…More",
    "bankrate.com": "An online publication that provides consumers with financial data, research and editorial infor…More",
    "yonhapnews.co.kr": "South Korean wire service providing daily news articles on politics, the economy, society, cult…More",
    "newsnow.co.uk": "Headlines links to stories from a wide range of sources, organised by category and regularly up…More",
    "theglobeandmail.com": "National and international news including Report on Business, information, commentary and inter…More",
    "wn.com": "Aggregating news service for news by region and topic including business, sport and entertainment.",
    "ap.org": "Information about the world's oldest and largest newsgathering organization. Also featuring pro…More",
    "adweek.com": "News and feature articles about the advertising and media industries.",
    "livemint.com": "A financial daily covering stocks, commodities, companies and the economy.",
    "bostonglobe.com": "Includes news, special reports, headline news email service, and classifieds.",
    "dailycaller.com": "Features opinion, research, and entertainment",
    "euronews.com": "International news from a European perspective. In eight languages.",
    "nj.com": "Source of online news, business and sports updates from the Newark Star-Ledger, Trenton Times, …More",
    "thestar.com": "Founded in 1892, The Toronto Star is Canada's largest daily newspaper.",
    "metafilter.com": "Community for link-sharing, Q&A, and more.",
    "irna.ir": "خبرگزاری جمهوری اسلامی",
    "theonion.com": "A satirical newspaper featuring world, national and community news.",
    "prnewswire.com": "Press release news service. Information direct from the sources.",
    "business-standard.com": "Features latest Indian and international business, finance, economic and political news, commen…More",
    "intellicast.com": "Detailed weather and forecast information around the globe. Features include surface maps, char…More",
    "theage.com.au": "Provides news, sport and business daily updates from Melbourne's leading quality newspaper. As …More",
    "ctvnews.ca": "Canadian television network's headline news, reports, videos, and blogs.",
    "newsmax.com": "News, investigations and commentaries.",
    "france24.com": "Offering a French perspective on world events. Multilingual broadcast in French, English, and A…More",
    "deccanchronicle.com": "",
    "dnaindia.com": "The daily newspaper from Mumbai is owned by Diligent Media Corporation, a joint venture between…More",
    "washingtontimes.com": "Daily. Offers news, editorials, sports, business, technology and entertainment. Includes advert…More",
    "zougla.gr": "Ειδησεογραφία από την Ελλάδα και τον κόσμο. Όλα τα νέα γύρω από την Πολιτική, Οικονομία, Υγεία,…More",
    "seattletimes.com": "Daily local news, sports, arts and entertainment, classified ads.",
    "newsweek.com": "Content from the current issue, plus daily content and breaking news.",
    "bdnews24.com": "Rated as the best, the fastest and the most reliable source of news on and from Bangladesh, bdn…More",
    "mercurynews.com": "Daily newspaper covering the Bay Area providing news, entertainment, sports, business, health, …More",
    "philly.com": "",
    "voat.co": "User submitted current affairs and social commentary links, voted up by other users.",
    "alternet.org": "AlterNet is an award-winning news magazine and online community that creates original journalis…More",
    "inquisitr.com": "",
    "startribune.com": "",
    "oregonlive.com": "Local and national news from the famous newspaper in the Pacific Northwest.",
    "azcentral.com": "Daily newspaper for the Phoenix metro area. Includes State, national, and world news; opinion; …More",
    "financialexpress.com": "Includes coverage of the economy, financial and industrial news, stock market reports.",
    "fark.com": "Interesting, bizarre and amusing news stories, along with regular photo manipulation contests.",
    "nationalpost.com": "Canada's newest national newspaper.",
    "thetimes.co.uk": "British daily newspaper owned by News Corporation.",
    "theweek.com": "Offers commentary and analysis of breaking news and current events as well as arts, entertainme…More",
    "theroot.com": "Daily online news site that provides commentary on today's news from a variety of African Ameri…More",
    "miamiherald.com": "Regular updates for news, database searches, classifieds, job, real estate and automotive listi…More",
    "theconversation.com": "In-depth analysis, research, news and ideas from leading academics and researchers, offering in…More",
    "foxbusiness.com": "National and international business and financial news, articles, and video reports.",
    "pbs.org": "Analysis, background reports and news updates to put the day's news in context.",
    "washingtonexaminer.com": "Items from a daily newspaper which circulates throughout the D.C., North Virginia and Maryland …More",
    "heraldsun.com.au": "Australia's biggest-selling daily newspaper and serves Victoria, Australia.",
    "metoffice.gov.uk": "Forecasts and data for UK and the world, weather warnings, UV index, maps, marine information a…More",
    "ajc.com": "Daily paper with local and world news, sports, entertainment, weather, business, and travel new…More",
    "lexisnexis.com": "Provider of legal, government, business and high-tech information sources. By subscription only.",
    "dallasnews.com": "Read the Dallas Morning News online.",
    "rd.com": "RD.com is an inspirational website featuring real life stories, current events articles, family…More",
    "freep.com": "Provides news, sports, entertainment, and opinions.",
    "dailytelegraph.com.au": "News Corporation's daily newspaper serving Sydney, Australia.",
    "denverpost.com": "Daily paper with local and national news, classifieds, community information, opinions, and ent…More",
    "al.com": "Alabama Live presented by the Mobile Register, the Birmingham News and the Huntsville Times. Ne…More",
    "rappler.com": "Rappler is a social news network. Our stories provide perspective, inspire community engagement…More",
    "theaustralian.com.au": "",
    "kansascity.com": "Headline news and stories.",
    "observer.com": "The New York Observer: New York City Breaking News, Politics, Opinion, Media, Manhattan Real Es…More",
    "stltoday.com": "",
    "csmonitor.com": "News and analysis from national newspaper. U.S.",
    "beforeitsnews.com": "People Powered News",
    "newrepublic.com": "Razor-sharp analysis on the world of politics and culture.",
    "newspapers.com": "",
    "upi.com": "For almost 100 years, UPI has been a leading provider of news, analysis and commentary. The com…More",
    "mid-day.com": "News, Opinion, Entertaintment, Sports, life@Work, Comics & Fun, Sex & Relationship, Wha…More",
    "newindianexpress.com": "The New Indian Express is an English Language Daily published from 22 centres all over South In…More",
    "radar.weather.gov": "The latest Doppler radar images in the United States from the National Weather Service, includi…More",
    "foreca.com": "Easy access to current weather, a detailed 5-day forecast, and weather maps.",
    "nola.com": "Daily newspaper for the greater New Orleans area. Includes local and world news, classifieds, a…More",
    "good.is": "Offers articles, commentary, fiction and comics on culture and society.",
    "newsday.com": "The voice of Long Island, NY, and America's 6th-largest regional newspaper (8th overall), inclu…More",
    "sacbee.com": "Daily newspaper with local, state, national and world news, politics, sports, business, lifesty…More",
    "seattlepi.com": "Features daily news, comics, and traffic reports.",
    "deseretnews.com": "Serving Salt Lake City daily with local, state, national and world news, archives, forums, opin…More",
    "mirror.co.uk": "Topics covered include, but are not limited to, nudity, poo, road signs with rude names and a g…More",
    "syracuse.com": "Syracuse.com in central New York for local news, information, and sports.",
    "itv.com": "Constantly updated world news and special reports.",
    "prweb.com": "Online news and press release distribution service for small and medium-sized businesses and co…More",
    "baltimoresun.com": "News, business, sports, arts, lifestyle, opinion, archives, classifieds, food, travel and subsc…More",
    "suntimes.com": "",
    "sandiegouniontribune.com": "Daily newspaper covering San Diego county. Local and international news.",
    "ocregister.com": "Daily newspaper web site for Orange County featuring news, entertainment, sports, weather, trav…More",
    "thehindubusinessline.com": "Business and Finance daily covering economy, markets, companies and policy issues.",
    "snow-forecast.com": "",
    "afr.com": "Updated daily and a pre-eminent source for business and finance news and analysis, political co…More",
    "sltrib.com": "Daily statewide news and information on the Utah Jazz, other sports, outdoors, business and ent…More",
    "vancouversun.com": "The biggest newspaper in British Columbia. Daily coverage of B.C. and Canada news, sports, busi…More",
    "uk.reuters.com": "Provides breaking world and financial news headlines.",
    "detroitnews.com": "",
    "wtop.com": "Covers breaking news, traffic, sports and business news; headlines, area weather, charities and…More",
    "orlandosentinel.com": "For Central Florida. Great source of news, weather, sports, entertainment, dining, and jobs.",
    "sfchronicle.com": "Electronic edition of major California newspaper providing national, state, and local news, wea…More",
    "reviewjournal.com": "Nevada's largest newspaper serving the Las Vegas Valley and Southern Nevada. Daily editions of …More",
    "tampabay.com": "Including archives, weather, sports and interactivity.",
    "commondreams.org": "Breaking news & views for the Progressive Community",
    "losangeles.cbslocal.com": "Southern Californian service featuring CBS news and traffic for Los Angeles, Orange County, Riv…More",
    "c-span.org": "National public-affairs network. Includes radio and Real Audio",
    "indystar.com": "Local news, sports, business, entertainment, classifieds and community news for and about centr…More",
    "thedrum.com": "News for the media and marketing industries in Scotland, with stories, job search resources, ev…More",
    "fcc.gov": "USA telecom regulator - responsible for both telecoms and radio/television media.",
    "sun-sentinel.com": "Sun-Sentinel is the major daily newspaper of Broward and South Palm Beach counties. On a typica…More",
    "smartbrief.com": "Providing free, e-mail based news summaries and other content for industry associations, profes…More",
    "bostonherald.com": "Daily local, national, and international news coverage; includes lifestyle, entertainment, horo…More",
    "couriermail.com.au": "News Corporation's daily newspaper serving Australia's state of Queensland.",
    "star-telegram.com": "Local, state, national, and international news.",
    "tribuneindia.com": "English daily focusing on the northern states.",
    "jsonline.com": "Online version offering updated local and national news.",
    "deccanherald.com": "English daily featuring Local, business, and world news.",
    "telegraphindia.com": "English daily. Includes national, regional and world news, and archives.",
    "newsobserver.com": "State wide news source with Triangle area information, entertainment and community events.",
    "rte.ie": "Updated daily news service provided by the Irish broadcaster, including audio and video downloads.",
    "adelaidenow.com.au": "Profile, rates and contact details for this group of suburban titles.",
    "weatherbug.com": "Download WeatherBug to get your instant local weather forecast and information on all current w…More",
    "palmbeachpost.com": "Online version of the Palm Beach Post in Palm Beach County, Florida.",
    "thestranger.com": "Seattle's free weekly alternative arts and culture newspaper.",
    "twincities.com": "The online version of the St. Paul Pioneer Press, a daily newspaper.",
    "thebetterindia.com": "Featuring all positive news about India. Social development, art, travel, enviromment, women em…More",
    "siasat.com": "",
    "mediamatters.org": "A non-profit progressive research and information center dedicated to comprehensively monitorin…More",
    "wfp.org": "",
    "macleans.ca": "Maclean’s is Canada’s only national weekly current affairs magazine. Maclean’s enlightens, enga…More",
    "mysanantonio.com": "Features local, state, national, and international news, sports, and subscription information.",
    "yournewswire.com": "Breaking News, Entertainment, Politics and much more. Truth unfiltered.",
    "mcclatchydc.com": "Ongoing reports and special series about important world issues.",
    "newsok.com": "Includes news, sports, business, entertainment, weather, classifieds and lifestyle articles.",
    "thedailymash.co.uk": "British satire site offering funny stories on news, politics and sport, horoscopes, an agony au…More",
    "cision.com": "Describes firm's history in offering media communications management solutions. Services includ…More",
    "timesunion.com": "Newspaper serving New York's capital region of Albany, Schenectady and Troy.",
    "tennessean.com": "",
    "worldweatheronline.com": "World Weather Online - Global accurate and reliable weather forecast and Weather API provider f…More",
    "edmontonjournal.com": "Local daily newspaper online. Top stories, classifieds, and education services.",
    "omaha.com": "Online version of the largest daily newspaper in Nebraska with local, regional, national and in…More",
    "parade.com": "Out of the Sunday paper and into your browser, it s the one and only. You ll find exclusive cel…More",
    "dowjones.com": "Provider of real-time business, financial, and geopolitical news to financial professionals.",
    "spiegel.deinternational": "English language international edition of the German news source also includes in-depth special…More",
    "richmond.com": "Information, news, entertainment, shopping, new homes, online coupons, movies, historic sites, …More",
    "mediapost.com": "Contact directory for advertising professionals in TV, cable, radio, print, interactive media, …More",
    "npr.org": "US National Public Radio audio broadcast and text news stories and commentaries.",
    "theadvocate.com": "theadvocate.com is the website for The Advocate newspaper in Baton Rouge, Louisiana. It is your…More",
    "federalreserve.gov": "Website of the Federal Reserve, with news, speeches and testimony and other resources.",
    "weather-forecast.com": "Presents a ten day forecast for cities of the world. Also provides animated maps and photograph…More",
    "factcheck.org": "",
    "statesman.com": "Statesman.com is Austin s leading online news, entertainment, and shopping site for Central Tex…More",
    "buffalonews.com": "Daily newspaper and information about Buffalo, New York.",
    "weatheronline.co.uk": "Forecast for Great Britain, Ireland and worldwide. Supplies animated and graphical maps, radar …More",
    "thewest.com.au": "",
    "montrealgazette.com": "Montreal's English-language newspaper.",
    "courant.com": "Started in 1764, the oldest continuous publication in the U.S. Provides information on local, r…More",
    "canberratimes.com.au": "Canberra's main newspaper. Searchable classifieds, entertainment guides, news, sport, weather, …More",
    "westword.com": "Denver's news and arts weekly with news, music, food, and concert listings.",
    "adn.com": " ",
    "rferl.org": "Radio Free Europe / Radio Liberty is an international news and broadcast organization serving C…More",
    "northjersey.com": "North Jersey news from the region's largest news-gathering operation.",
    "villagevoice.com": "Alternative weekly since 1955 featuring news, arts, opinions, classifieds, and entertainment li…More",
    "desmoinesregister.com": "Published daily. National and local news, sports, entertainment, classifieds, environment, fire…More",
    "onthesnow.com": "Ski reports, snow conditions, live cams, and weather forecasts for more than 700 ski areas worl…More",
    "newyorker.com": "View of US current events. Features archives, appearances and books. Daily.",
    "bangaloremirror.indiatimes.com": "English daily featuring local news from Bangalore and other features like entertainment & city …More",
    "truthdig.com": "",
    "newsvine.com": "Newsvine is a place to read, write, and influence the news",
    "phoenixnewtimes.com": "Weekly news; columns; arts, music, film, and restaurant reviews; feature projects; and Best of …More",
    "triblive.com": "Provides daily local and regional news, business news, sports, classifieds, and entertainment.",
    "greaterkashmir.com": "Most comprehensive coverage and up-to-the-minute news, breaking news, feature stories, videos, …More",
    "dailyherald.com": "Daily paper serving Arlington Heights and suburban Chicago area. Featuring local, county, state…More",
    "dailynews.com": "Los Angeles based newspaper with online and print versions. Contains entertainment, local news,…More",
    "frontpagemag.com": "News, analysis, commentaries and links to outside articles with a conservative perspective from…More",
    "calgaryherald.com": "Daily published in Calgary. Site is updated daily on day of publication. Free archive.",
    "journalstar.com": "Online news and information from Lincoln and southeast Nebraska.",
    "spokesman.com": "Spokane area news, community, classifieds and commerce.",
    "metronews.ca": "The online source for Canada s #1 free daily newspaper offered coast-to-coast in: Vancouver, To…More",
    "theepochtimes.com": "Global multi-lingual broadsheet writing articles about a variety of topics. Categories include …More",
    "eastbaytimes.com": "A daily newspaper with a full range of state, national, international and sports news serving t…More",
    "magnumphotos.com": "Well-known cooperative agency with offices in London, Paris, Tokyo and New York, founded in 194…More",
    "citypages.com": "The news and arts weekly of the Twin Cities.",
    "houstonpress.com": "Weekly publication with investigative reporting including the arts, food and clubs.",
    "mcall.com": "Allentown, PA online newspaper.",
    "staradvertiser.com": "Daily newspaper with local news, sports, island life, and entertainment.",
    "independent.ie": "",
    "project-syndicate.org": "Publishes op-ed commentaries by global leaders and thinkers. Includes contributor profiles and …More",
    "lancasteronline.com": "Lancaster, PA virtual online community.",
    "wickedlocal.com": "That’s “wicked” as in “very” – not “witch.” Provides tools for New England communities to write…More",
    "stripes.com": "News, links, and subscription information for the European and Pacific versions of this daily n…More",
    "pilotonline.com": "Hampton Roads area newspaper. Local interest news.",
    "afp.com": "Claiming to be the world s oldest established news agency, this worldwide multilingual and mult…More",
    "pressdemocrat.com": "",
    "mumbaimirror.indiatimes.com": "English daily featuring local news from Mumbai and other features like entertainment & city hap…More",
    "nyse.com": "News, current data and other information from official website of NYSE",
    "thecrimson.com": "Daily student newspaper of Harvard University in Cambridge.",
    "poynter.org": "Offers writing tips from professionals in the field, geared to High School journalists. Include…More",
    "lasvegassun.com": "Local news, business, weather, classifieds, jobs, sports, photographs, and video.",
    "tucson.com": "Tucson area paper with local and national news, sports, opinion, food, home, and travel.",
    "niemanlab.org": "A collaborative effort to figure out the future of journalism. Includes news and an encyclopedi…More",
    "copyright.gov": "U.S. Copyright Office is an office of public record for copyright registration and deposit of c…More",
    "weather2umbrella.com": "",
    "theprovince.com": "The most read daily newspaper in British Columbia. Daily coverage of Vancouver B.C. and Canada …More",
    "lucianne.com": "Nationally syndicated talk show host heard live every morning Monday thru Friday. Includes upda…More",
    "filmsforaction.org": "Features videos and articles on subjects such as drug prohibition, animal rights and Indy media.",
    "jacksonville.com": "Jacksonville's daily newspaper providing news, chat, and community happenings.",
    "militarytimes.com": "Current news about all facets of military life.",
    "fresnobee.com": "Fresno's daily newspaper serving the six-county Central California region. Provides online acce…More",
    "pe.com": "This Riverside based daily newspaper is the largest in Riverside County and provides local news…More",
    "onlinenewspapers.com": "Listing of 10,000 newspapers from around the world, searchable by country and then by publication.",
    "cbn.com": "Conservative news and analysis.",
    "floridatoday.com": "Brevard daily newspaper. Requires paid subscription. News, classifieds, and features.",
    "fakingnews.firstpost.com": "India focused with articles about politics, society and technology.",
    "democratandchronicle.com": "Digital version of the Democrat Chronicle, Rochester, NY. Belongs to the nation's largest newsp…More",
    "news.harvard.edu": "Weekly published by the Harvard News Office in Cambridge.",
    "telegram.com": "News and information site for central Massachusetts, covering community affairs, sports, busine…More",
    "uexpress.com": "",
    "riverfronttimes.com": "St Louis weekly alternative source for news, classifieds, dining, music, culture. Geared toward…More",
    "assamtribune.com": "Local, regional, national, and international news. Online version has sections on City, Sports,…More",
    "rasmussenreports.com": "USA politics focused articles. With videos and polls. Subscription options are available.",
    "thestate.com": "National, regional, local news, sports and politics from Columbia.",
    "postandcourier.com": "Online version Charleston's daily; features a dining guide, links to shopping and tourism infor…More",
    "providencejournal.com": "News, sports, features, obituaries, advertising, and special online features from the daily new…More",
    "lehighvalleylive.com": "",
    "freepressjournal.in": "Offers international news, segments on entertainment, sports and food.",
    "roanoke.com": "Roanoke.com: Breaking news, sports and weather from The Roanoke Times newspaper.",
    "clarionledger.com": "Daily newspaper covering the Jackson area with Mississippi news, entertainment, business, and c…More",
    "host.madison.com": "Madison newspaper. Includes daily articles and classifieds.",
    "cjr.org": "Newsfeed with news and articles.",
    "bizjournals.com": "Offers breaking business news, plus some of the week's top stories and features from the St Lou…More",
    "dallasobserver.com": "Alternative newspaper with news, blogs, music, movies restaurants, and the arts.",
    "austinchronicle.com": "Austin paper with local-flavor of Austin.",
    "timesfreepress.com": "",
    "therealnews.com": "A non-profit news and documentary network focused on providing independent journalism.",
    "thechronicleherald.ca": "Halifax newspaper is Atlantic Canada's largest newspaper, and one of the oldest dailies in Canada.",
    "thenewstribune.com": "Online version of the daily newspaper providing news, sports, entertainment, classifieds, and w…More",
    "dailycal.org": "Independent student newspaper for the University of California, Berkeley.",
    "globalissues.org": "Features alternative perspectives on global issues that are closely related including human rig…More",
    "news-gazette.com": "Central Illinois newspaper based in Champaign-Urbana. Online news, sports, weather, and classif…More",
    "ibtimes.com.au": "Covering sport, entertainment and lifestyle. With a record of the most shared stories.",
    "opendemocracy.net": "E-zine and discussion forum offering news and opinion articles from established academics and j…More",
    "orlandoweekly.com": "Alternative coverage of news, movies, music, arts and culture. Searchable calendar, dining, per…More",
    "people-press.org": "Independent opinion research group studying attitudes toward the press, politics and public pol…More",
    "idahostatesman.com": "Boise newspaper features news, classifieds, real estate, jobs, and entertainment for the state …More",
    "trove.nla.gov.au": "A searchable database from The National Library of Australia.",
    "newsthump.com": "British tongue-in-cheek articles across categories such as environment, health and politics.",
    "straight.com": "Vancouver s lifestyle, news and entertainment weekly.",
    "heraldtribune.com": "Daily articles, columns, editorials and events. Classified ads and other print content available.",
    "goodnewsnetwork.org": "",
    "winnipegfreepress.com": "Includes an index to top stories, classifieds, and editors.",
    "newswire.ca": "Full-text news releases, photos and multimedia content with searchable archives for businesses …More",
    "rollcall.com": "Published Monday thru Thursday when Congress is in session, Monday only during recess. Offers l…More",
    "globalvoices.org": "A focal point for citizens’ media. Providing training, online tutorials, and free open-source t…More",
    "dailycamera.com": "Offers a history for this Boulder-based newspaper, plus news sports, business, opinion and ente…More",
    "mediabistro.com": "A website connecting journalists and new media professionals to jobs and each other.",
    "gazette.com": "Daily paper with local and national news, sports, lifestyles, entertainment, business, editoria…More",
    "sunnyskyz.com": "Daily feel good news stories as well as uplifting pictures and inspirational videos. A place to…More",
    "ctpost.com": "Southwestern Connecticut's largest daily newspaper.",
    "santafenewmexican.com": "",
    "governing.com": "Governing magazine provides non-partisan news, insight and analysis for state and local governm…More",
    "abqjournal.com": "Provides New Mexico news and sports",
    "delawareonline.com": "Features news, sports, opinion, and real estate provided by The News Journal. Requires paid sub…More",
    "lohud.com": "",
    "knoxnews.com": "Knoxville daily newspaper providing regional, community, and national news; sports; obituaries;…More",
    "chaser.com.au": "Australia's leading satirical newspaper.",
    "grandforksherald.com": "",
    "arkansasonline.com": "Online edition of the Democrat-Gazette with news, sports, entertainment, classified ads and loc…More",
    "dailybruin.com": "Daily newspaper of the University of California, Los Angeles.",
    "timescolonist.com": "Daily newspaper for Victoria and Vancouver Island. Part of Glacier Community Media.",
    "calgarysun.com": "Local news sports and entertainment published daily.",
    "consortiumnews.com": "Magazine (print and online) dedicated to independent investigative journalism.",
    "washingtonmonthly.com": "Analysis and commentary on politics and society.",
    "nwitimes.com": "Published daily serving Lake and Porter counties, and South suburban Chicago, Illinois. News, s…More",
    "ljworld.com": "",
    "unionleader.com": "",
    "theeventchronicle.com": "The earth has been run by gangsters for many ages. Today they are known as the Cabal, Illuminat…More",
    "sanluisobispo.com": "News, weather, sports, entertainment and other features for San Luis Obispo and Northern Santa …More",
    "pollen.com": "Pollen.com s Personal Allergy Forecast provides vast amounts of information on pollen and aller…More",
    "trudeausociety.com": "",
    "duluthnewstribune.com": "Daily newspaper's site includes classifieds, obituaries, selected news and sports stories, and …More",
    "rgj.com": "Daily local news, sports, business, and entertainment.",
    "cjonline.com": "CJ Online (http://cjonline.com).",
    "sandiegoreader.com": "Weekly publication, specializes in feature stories that cover San Diego life in general, with e…More",
    "readingeagle.com": "Serving the Berks County community for over 130 years. News, local high school and college spor…More",
    "collegemagazine.com": "Lifestyle magazine published quarterly by students at the University of Maryland.",
    "theherald.com.au": "Check classifieds, place an advertisement, search past articles from this daily newspaper, or s…More",
    "cornellsun.com": "Independent student newspaper of Cornell University in Ithaca.",
    "crainsnewyork.com": "Online edition of business newspaper for New York City.",
    "chicagoreader.com": "Focusing on music, movies, restaurants, events and politics.",
    "greensboro.com": "",
    "citywire.co.uk": "UK. Market reports, investor news and recommendations. Email alerts available to registered users.",
    "billoreilly.com": "Official site: information his syndicated newspaper columns, radio broadcasts, and TV shows. In…More",
    "law.com": "Offering legal news, articles, job listings, information and products.",
    "bellinghamherald.com": "Offers local and world news, real estate, classified ads, and community information.",
    "einnews.com": "A news service for global professionals and analysts. Comprehensive coverage of more than 300 c…More",
    "sfexaminer.com": "A daily newspaper featuring news, sports, arts and culture, opinion, special reports, and columns.",
    "dailybreeze.com": "Covers the South Bay and Harbor area with both local and global news. Provides online news and …More",
    "journalism.org": "An initiative by journalists to clarify and raise the standards of American journalism through …More",
    "registerguard.com": "Paper of record for Eugene, Oregon.",
    "pantagraph.com": "Providing Bloomington and Central Illinois with news, sports, classifieds, editorials, and arch…More",
    "digitalspy.co.uk": "Digital media and entertainment news service, based in the UK, covering digital television and …More",
    "heraldextra.com": "Online version of the print newspaper, with sports, local opinions, obituaries, message board a…More",
    "ubm.com": "Explains the portfolio of a business information company. Includes PR Newswire's news distribut…More",
    "chroniclingamerica.loc.gov": "",
    "pjstar.com": "Features local news, columns and information every day.",
    "canadafreepress.com": "Investigative newspaper site featuring news on Canada, America and world issues such as terrori…More",
    "dailyexcelsior.com": "",
    "dailypioneer.com": "English daily featuring news, sports and entertainment.",
    "news.berkeley.edu": "News releases, calendars, periodicals.",
    "pressofatlanticcity.com": "Daily newspaper covering Atlantic, Cape May, Cumberland and southern Ocean counties. Special Se…More",
    "amarillo.com": "Daily newspaper of Amarillo, Texas and the surrounding area. Offering news, classifieds, local …More",
    "goldcoastbulletin.com.au": "Regular updates providing coverage of news, events, business, real estate, employment and sport…More",
    "dailypress.com": "Local news from the Daily Press in Newport News, Virginia.",
    "lacrossetribune.com": "Online version serving the Coulee Region.",
    "theguardian.pe.ca": "Online edition of the provincial paper. Includes top stories, off-Island and local news, sports…More",
    "spiked-online.com": "Online, off-message news with an emphasis on politics, IT, science, liberties and culture. Incl…More",
    "creators.com": "Independent firm providing puzzle, column and cartoon content. Samples cover the works of Rober…More",
    "newsroom.ucla.edu": "",
    "harpers.org": "The website of the popular magazine includes the Harper's Index; visitor-submitted statistics.",
    "sunshinecoastdaily.com.au": "Servicing Australia's 10th largest community region, the coastal strip from Caloundra to Noosa,…More",
    "newswire.com": "Distribution center. Provides plan pricing and a video on how it works. Includes a sample of th…More",
    "sacurrent.com": "",
    "weather.unisys.com": "",
    "rcinet.ca": "Canadian Broadcasting Corporation's international service, formerly on shortwave. English site …More",
    "journalnow.com": "National, state and local news, features, and classifieds. Business and entertainment news and …More",
    "theeagle.com": "",
    "gainesville.com": "Daily newspaper with local and world news, business, sports, and weather.",
    "commercialappeal.com": "",
    "michigandaily.com": "Newspaper at the University of Michigan in Ann Arbor.",
    "wvgazettemail.com": "Daily Charleston area news, sports, opinion, business, features, and classifieds. Includes subs…More",
    "vcstar.com": "Daily newspaper site serving Ventura County with news, sports, entertainment, weather and class…More",
    "mlive.com": "",
    "asianage.com": "English daily featuring news, politics, business and sports.",
    "dailyprogress.com": "Charlottesville's daily newspaper. Top stories, weather forecasts, community events calendar, l…More",
    "cnews.canoe.com": "Canadian and International News.",
    "tallahassee.com": "",
    "sourcewatch.org": "Collaborative directory of people, organizations and issues shaping the public agenda. Catalogs…More",
    "naplesnews.com": "Includes local, Florida, and national news, business and classifieds.",
    "macon.com": "Daily newspaper with news, sports, weather, local community links, and classifieds.",
    "tveyes.com": "With the slogan \"always watching\", this company provides an automated broadcast information ret…More",
    "argusleader.com": "Your guide to the Sioux Empire and South Dakota, including daily news from The Argus Leader in …More",
    "columbian.com": "Daily news, community calendar, forums, business directory, and classifieds.",
    "northcountrynow.com": "",
    "tbo.com": "Access news, weather, sports, and more from Tampa Bay Online's website.",
    "santacruzsentinel.com": "Local, state and national news, plus sports, business, politics, lifestyle and entertainment gu…More",
    "washingtoncitypaper.com": "Weekly. Offers news, editorials, reviews, classifieds and personals. Includes a calendar, adver…More",
    "briefing.com": "",
    "jconline.com": "Lafayette. Gannett newspaper. Requires paid subscription.",
    "redding.com": "",
    "illawarramercury.com.au": "News, sport and business coverage and classified advertising from the Illawarra-based daily new…More",
    "thestatesman.com": "thestatesman.com covers the latest news from India, India News, Business, Lifestyle, Entert…More",
    "sj-r.com": "Offers daily news, sports, features, and classifieds from Springfield, the state s capital city…More",
    "bnd.com": "Online version of local Belleville paper, with local news, sports, weather, and classifieds.",
    "jou.ufl.edu": "The college has four departments - Advertising, Public Relations, Journalism, and Telecommunica…More",
    "english.kyodonews.jp": "The Kyodo newswire service (English/Kanji).",
    "yaledailynews.com": "Student newspaper of Yale University in New Haven. Includes course critique and cover images.",
    "nhregister.com": "News, sports, entertainment, traffic, weather, shopping and personals for the New Haven area.",
    "chnm.gmu.edu": "Research center at George Mason University focused on combining scholarship and cutting edge mu…More",
    "newseum.org": "World's most interactive museum with 14 galleries, 15 theaters and a 4D Experience. Washin…More",
    "napavalleyregister.com": "Daily newspaper web site serving Napa Valley with news, sports, entertainment, weather and clas…More",
    "andhrabhoomi.net": "Telugu daily featuring news, politics, sports and entertainment.",
    "news-journalonline.com": "Online edition of regional newspaper covering Daytona Beach and surrounding areas.",
    "weatherforyou.com": "Weather for the US and worldwide. Current conditions through personal weather station network. …More",
    "desertsun.com": "Selected items about Palm Springs and Coachella Valley. Coverage of news, sports, business, and…More",
    "thedp.com": "Independent student newspaper for the University of Pennsylvania in Philadelphia.",
    "memri.org": "The institute offers translations and analysis of Arabic, Farsi, and Turkish media, including v…More",
    "aspentimes.com": "Selected news items from the newspaper. Covers snow, road, and mountain conditions. Also covers…More",
    "myrtlebeachonline.com": "Local and regional news and advertising for the Grand Strand area. Obituaries, sports, entertai…More",
    "sfweekly.com": "Free weekly alternative paper covers arts and politics.",
    "stanforddaily.com": "Independent newspaper of Stanford University.",
    "qctimes.com": "Published daily for Clinton and Muscatine and Scott and Rock Island Counties. National and loca…More",
    "allyoucanread.com": "Searchable directory of magazines and newspapers from over 180 countries.",
    "centredaily.com": "News and information about State College, Centre County and the communities surrounding the Pen…More",
    "rapidcityjournal.com": "Daily. News, sports, entertainment and classifieds.",
    "goupstate.com": "Find local and regional news, sports, and advertising for the upstate of SC.",
    "dukechronicle.com": "Independent student daily of Duke University in Durham.",
    "heraldnet.com": "News and advertising content from The Daily Herald which covers events in Everett and Snohomish…More",
    "savannahnow.com": "Daily local newspaper with news, sports, business guide, tourism and travel information for Sav…More",
    "greenvilleonline.com": "Local news, sports, and classifieds for Greenville and the upstate. Requires paid subscription.",
    "metrotimes.com": "Alternative newspaper in Detroit.",
    "lansingstatejournal.com": "Top local stories, breaking news, sports, weather and classifieds.",
    "ledger-enquirer.com": "Daily newspaper serving Columbus and the Valley. Includes local and world news, business, sport…More",
    "burlingtonfreepress.com": "Daily and Sunday newspaper for Burlington, Chittenden County, and Northwest Vermont.",
    "southbendtribune.com": "Newsfeed with breaking news and feature articles.",
    "stamfordadvocate.com": "News, classifieds, announcements, real estate, jobs, weather, and calendar for the lower Fairfi…More",
    "citizensvoice.com": "Online Wilkes-Barre paper offering news, local sports and editorials.",
    "newsmeback.com": "Tools for citizen journalism. Submit stories, news, and events from everyday life.",
    "thetimes-tribune.com": "Area news, sports, weather, opinion, features and events.",
    "steynonline.com": "Current and archived columns about politics, arts and culture from the Canadian humorist. Inclu…More",
    "jewishworldreview.com": "",
    "trib.com": "Daily updates of local, regional and World news, school sports, weather, road news and classifi…More",
    "journalismjobs.com": "List media job opportunities with newspapers, TV, radio, online media, magazines, and related c…More",
    "worldpressphoto.org": "",
    "themercury.com.au": "Newspaper serving Hobart and Tasmania in Australia.",
    "ubyssey.ca": "Twice weekly student newspaper of the University of British Columbia.",
    "universalhub.com": "Group of bloggers in Boston write about community news and information.",
    "ibj.com": "Providing central Indiana business news, IBJ is a weekly paper with peripheral publications. Fr…More",
    "gannett.com": "Publisher with interests in newspapers including USA Today, television and the internet. Includ…More",
    "lubbockonline.com": "Covering news and events in Lubbock, Texas, the South Plains and Eastern New Mexico",
    "nytco.com": "Publishes two national and 16 regional newspapers; owns eight network-affiliated television sta…More",
    "standard.net": "Published daily for Ogden. Local and world news, sports, classifieds, photos, opinions and subs…More",
    "theday.com": "Daily newspaper out of New London and serving eastern Connecticut and the Connecticut Shoreline.",
    "theledger.com": "Daily newspaper covering Polk County and Central Florida. Includes local, state, and national n…More",
    "wacotrib.com": "The online home of Waco's daily newspaper, source for local news and weather.",
    "news.cornell.edu": "Weekly published by the Cornell University News Service in Ithaca.",
    "bismarcktribune.com": "News and classifieds for Bismarck, North Dakota.",
    "tcpalm.com": "Daily local and national news, sports, and classifieds for Florida's Treasure Coast and Palm Be…More",
    "journalism.co.uk": "A UK-specific compilation of web links for journalists, writers, broadcasters and students with…More",
    "bradenton.com": "The Bradenton Herald features local news, sports and weather in Manatee County, Lakewood Ranch …More",
    "news-leader.com": "Daily news, comics, classifieds, obituaries, Real Estate, health, food and life for surrounding…More",
    "ydr.com": "View selected news stories daily from a 43,500-circulation morning newspaper which has served Y…More",
    "independent.com": "2008 National Winner Best Weekly-Affiliated website. independent.com, is the area s largest com…More",
    "dailygazette.com": "Online edition of the Gazette of Schenectady, New York.",
    "nashvillescene.com": "Alternative weekly, with commentary, news and reviews of local arts and entertainment, and a wi…More",
    "wcfcourier.com": "Regional, sports, outdoors, business and breaking news. Also includes opinions, columnists, ent…More",
    "weatherstreet.com": "Interactive weather forecast animations for the United States, much of Canada, Mexico, and surr…More",
    "ntnews.com.au": "Daily newspaper for the Northern Territory of Australia.",
    "newstimes.com": "Local news and information for Danbury, Bethel, Brookfield, Ridgefield, New Milford, Newtown, a…More",
    "mercedsunstar.com": "Serving Merced and Mariposa Counties with online news as well as a daily home delivery paper.",
    "punemirror.indiatimes.com": "English daily featuring local news from Pune and other features like entertainment & city happe…More",
    "rrstar.com": "",
    "localconditions.com": "LocalConditions.com is a no-hassle local weather and traffic service, to enable anyone in the w…More",
    "columbiatribune.com": "Daily paper. Classifieds, news, business, sports, record, obituaries, commentary, lifestyle, ca…More",
    "statesmanjournal.com": "Local news, sports, opinion, events, obituaries, public notices and community information. Prin…More",
    "onlineathens.com": "Daily newspaper serving Athens and Clarke County. Includes local news, sports, business, and he…More"
  }

  function traverseArray(arr) {
    let urls = [];
    let leftScore = 0;
    let rightScore = 0;

    chrome.history.search({
      text: '',
      maxResults: 10000
    }, function(data) {

      urls = data.reduce((acc, el, i) => {
        acc.push(el.url.replace(/^(?:([A-Za-z]+):)?(\/{0,3})(?:www\.)|(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$|\s/g, ''));
        return acc;
      }, []);

      urls.map(url => {
        if (biasLookup[url] !== undefined) {
          if (biasLookup[url][0] === 'right' || biasLookup[url][0] === 'left' || biasLookup[url][0] === 'neither') {
            fake++;
          }
        }

        if (newsSites[url]) {
          valid++;
        }
      });

      urls.map(url => {
        if (biasLookup[url] !== undefined) {
          if (biasLookup[url][0] === 'right') {
            rightScore++;
          } else if (biasLookup[url][0] === 'left') {
            leftScore++;
          }
        }
      });

      left = leftScore;
      right = rightScore
    });
  }

  traverseArray();

  $(document).ready(function() {
    chart2 = new Highcharts.Chart({

      chart: {
        polar: true,
        type: 'line',
        backgroundColor: '#E0F2F1',
        renderTo: 'trustedVSfake',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },

      title: {
        text: 'Fake Vs. Trusted'
      },

      tooltip: {
        formatter: function() {
          return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
        }
      },

      plotOptions: {
        pie: {
          colors: [
            '#66BB6A', '#EF5350'
          ],
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
            formatter: function() {
              return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
            }
          }
        }
      },
      series: [
        {
          type: 'pie',
          name: '',
          data: [
            [
              'Valid', valid
            ], {
              name: 'fake',
              y: fake,
              sliced: false,
              selected: true
            }
          ]
        }
      ]
    });

    chart = new Highcharts.Chart({

      chart: {
        polar: true,
        type: 'line',
        backgroundColor: '#E0F2F1',
        renderTo: 'leftVSright',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },

      title: {
        text: 'Left Vs. Right'
      },

      tooltip: {
        formatter: function() {
          return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
        }
      },

      plotOptions: {
        pie: {
          colors: [
            '#EF5350', '#42A5F5'
          ],
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
            formatter: function() {
              return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
            }
          }
        }
      },
      series: [
        {
          type: 'pie',
          name: '',
          data: [
            [
              'Right', right
            ], {
              name: 'Left',
              y: left,
              sliced: false,
              selected: true
            }
          ]
        }
      ]
    });
  });
});
