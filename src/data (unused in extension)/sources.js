const putUrlsFirst = Object.keys(biasedSources).reduce((acc, el, i) => {
  let {bias, blurb, subUrl} = biasedSources[el];
  let name = el;

  acc[biasedSources[el].url] = {
    name,
    bias,
    blurb,
    subUrl
  };

  return acc
}, {});

const biasedSources = {
  "100 Percent Fed Up": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "100 Percent Fed Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/100-percent-fed",
    "url": "100percentfedup.com"
  },
  "21st Century Wire": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "21st Century Wire publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/21st-century-wire",
    "url": "21stcenturywire.com"
  },
  "365 USA News": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "365 USA News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/365-usa-news",
    "url": "365usanews .com"
  },
  "70News": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "70News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/70news",
    "url": "70news.wordpress.com"
  },
  "ABCNews.com.co": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "ABCNews.com.co publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/abcnewscomco",
    "url": "www.abcnews.com.co"
  },
  "Abel Danger": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Abel Danger publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/abel-danger",
    "url": "http://www.abeldanger.net"
  },
  "Above Top Secret": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Above Top Secret publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/above-top-secret",
    "url": "www.abovetopsecret.com"
  },
  "Activist Post": {
    "bias": [
      "conspiratorial",
      "editorial",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/activist-post",
    "url": "www.activistpost.com"
  },
  "Addicting Info": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Addicting Info publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/addicting-info",
    "url": "addictinginfo.org"
  },
  "Advocate": {
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Advocate publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/advocate",
    "url": "www.advocate.com"
  },
  "All News Pipeline": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "All News Pipeline Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/all-news-pipeline-0",
    "url": "http://allnewspipeline.com"
  },
  "AlterNet": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "AlterNet publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/alternet",
    "url": "www.alternet.org"
  },
  "Amandla!": {
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Amandla! publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/amandla",
    "url": "aidc.org.za/amandla-media/"
  },
  "America Blog": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "America Blog publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/america-blog",
    "url": "americablog.com"
  },
  "America's Freedom Fighters": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "America's Freedom Fighters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/americas-freedom-fighters",
    "url": "www.americasfreedomfighters.com"
  },
  "American Free Press": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "American Free Presspublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-free-press",
    "url": "americanfreepress.net"
  },
  "American Herald Tribune": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "American Herald Tribune publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-herald-tribune",
    "url": "ahtribune.com"
  },
  "American Lookout": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Lookout publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-lookout",
    "url": "americanlookout .com"
  },
  "American News": {
    "bias": [
      "conspiratorial", "inciteful", "pseudoscience", "right bias"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/american-news",
    "url": "AmericanNews.com"
  },
  "American Overlook": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Overlook publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-overlook",
    "url": "americanoverlook.com"
  },
  "American Patriot Daily": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Patriot Daily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-patriot-daily",
    "url": "www.americanpatriotdaily.com"
  },
  "American Renaissance": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "American Renaissance Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-renaissance",
    "url": "www.amren.com"
  },
  "American Reviewer": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Reviewer publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-reviewer",
    "url": "americanreviewer.com"
  },
  "American Today": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-today",
    "url": "truthpoliticsnews.com"
  },
  "Angry Patriot": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Angry Patriot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/angry-patriot",
    "url": "www.angrypatriotmovement.com"
  },
  "Anonymous": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Anonymous publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/anonymous",
    "url": "www.anonews.co"
  },
  "Another Day in The Empire": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Another Day in The Empirepublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/another-day-empire",
    "url": "anotherdayintheempire.com"
  },
  "Anti Media": {
    "bias": [
      "conspiratorial", "editorial", "political"
    ],
    "blurb": "Anti Media publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/anti-media",
    "url": "theantimedia.org"
  },
  "Anti-War": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Anti-Warpublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/anti-war",
    "url": "www.antiwar.com"
  },
  "Assassination Science": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Assassination Science Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/assassination-science",
    "url": "assassinationscience.com"
  },
  "AWD News": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "AWD Newspublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/awd-news",
    "url": "awdnews.com"
  },
  "Awareness Act": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Awareness Actpublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/awareness-act",
    "url": "awarenessact.com"
  },
  "Awaze Tribune": {
    "bias": ["political"],
    "blurb": "Awaze Tribune uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/awaze-tribune",
    "url": "awazetribune.com"
  },
  "BB4SP": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "BB4SP publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bb4sp",
    "url": "bb4sp.com"
  },
  "Bare Naked Islam": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias", "war"
    ],
    "blurb": "Bare Naked Islam Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bare-naked-islam",
    "url": "www.barenakedislam.com"
  },
  "Bay Area Reporter": {
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Bay Area Reporter publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bay-area-reporter",
    "url": "www.ebar.com"
  },
  "Before It's News": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/before-its-news",
    "url": "beforeitsnews.com"
  },
  "Bent*Spud": {
    "bias": ["satire"],
    "blurb": "Bent*Spud uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/bentspud",
    "url": "www.bentspud.com"
  },
  "Big Hairy News": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Big Hairy News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/big-hairy-news",
    "url": "www.bighairynews.com"
  },
  "Big Nugget News": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias", "war"
    ],
    "blurb": "Big Nugget News Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/big-nugget-news",
    "url": "bignuggetnews.com"
  },
  "Bipartisan Report": {
    "bias": [
      "conspiratorial", "left bias", "political", "pseudoscience"
    ],
    "blurb": "Bipartisan Report publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bipartisan-report",
    "url": "bipartisanreport.com"
  },
  "BizPac Review": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "BizPac Review publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bizpac-review",
    "url": "www.bizpacreview.com"
  },
  "Black Genocide": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Black Genocidepublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/black-genocide",
    "url": "www.blackgenocide.org/home.html"
  },
  "Blacklisted News": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias", "war"
    ],
    "blurb": "Blacklisted News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/blacklisted-news",
    "url": "blacklistednews.com"
  },
  "Blasting News": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Blasting News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/blasting-news",
    "url": "us.blastingnews.com"
  },
  "Blue Nation Review": {
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "Blue Nation Review publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/blue-nation-review",
    "url": "bluenationreview.com"
  },
  "Borowitz Report": {
    "bias": ["satire"],
    "blurb": "Borowitz Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/borowitz-report",
    "url": "borowitzreport.com"
  },
  "Breitbart News": {
    "bias": [
      "political", "right bias"
    ],
    "blurb": "Breitbart News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/breitbart-news",
    "url": "www.breitbart.com"
  },
  "Call the Cops": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Call the Cops uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/call-cops",
    "url": "www.callthecops.net"
  },
  "Canada Free Press": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Canada Free Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/canada-free-press",
    "url": "canadafreepress.com"
  },
  "Canadian Dimension": {
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Canadian Dimension publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/canadian-dimension",
    "url": "canadiandimension.com"
  },
  "Cap News": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Cap News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/cap-news",
    "url": "cap-news.com"
  },
  "Center For American Progress": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Center For American Progress publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/center-american-progress",
    "url": "www.americanprogress.org"
  },
  "Center For Security Policy": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Center For Security Policy publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/center-security-policy",
    "url": "www.centerforsecuritypolicy.org"
  },
  "Channel 7 News": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Channel 7 News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/channel-7-news",
    "url": "channel-7-news.com"
  },
  "Christ Wire": {
    "bias": [],
    "blurb": "Christ Wire publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/christ-wire",
    "url": "ChristWire.org"
  },
  "Christian Times Newspaper": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Christian Times Newspaper publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/christian-times-newspaper",
    "url": "christiantimesnewspaper.com"
  },
  "Civic Tribune": {
    "bias": [
      "political", "right bias"
    ],
    "blurb": "Civic Tribune publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/civic-tribune",
    "url": "CivicTribune.com"
  },
  "Clash Daily": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Clash Daily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/clash-daily",
    "url": "clashdaily.com"
  },
  "Click Hole": {
    "bias": ["right bias"],
    "blurb": "Click Hole uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/click-hole",
    "url": "clickhole.com"
  },
  "Coast to Coast AM": {
    "bias": [
      "conspiratorial", "pseudoscience", "right bias"
    ],
    "blurb": "Coast to Coast AM publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/coast-coast-am",
    "url": "www.coasttocoastam.com"
  },
  "Collective Evolution": {
    "bias": [
      "conspiratorial", "editorial", "pseudoscience", "right bias"
    ],
    "blurb": "Collective Evolution publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/collective-evolution",
    "url": "www.collective-evolution.com"
  },
  "Collectively Conscious": {
    "bias": [
      "conspiratorial", "editorial", "pseudoscience"
    ],
    "blurb": "Collectively Conscious publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/collectively-conscious",
    "url": "collectivelyconscious.net"
  },
  "Common Dreams": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Common Dreams publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/common-dreams",
    "url": "www.commondreams.org"
  },
  "Conscious Life News": {
    "bias": [
      "conspiratorial", "editorial", "left bias", "pseudoscience"
    ],
    "blurb": "Conscious Life News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conscious-life-news",
    "url": "consciouslifenews.com"
  },
  "Conservative Byte": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Conservative Byte publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-byte",
    "url": "conservativebyte.com"
  },
  "Conservative Daily Post": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Conservative Daily Post publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-daily-post",
    "url": "conservativedailypost.com"
  },
  "Conservative Firing Line": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Conservative Firing Line publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-firing-line",
    "url": "conservativefiringline.com"
  },
  "Conservative Frontline": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Frontline publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-frontline",
    "url": "conservativefrontline.com"
  },
  "Conservative Infidel": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Infidel publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-infidel",
    "url": "www.conservativeinfidel.com"
  },
  "Conservative Outfitters": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Conservative Outfitters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-outfitters",
    "url": "conservativeoutfitters.com"
  },
  "Conservative Papers": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Papers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-papers",
    "url": "conservativepapers.com"
  },
  "Conservative Refocus": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Refocus publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-refocus",
    "url": "conservativerefocus.com"
  },
  "Conservative State": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Conservative State publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-state",
    "url": "conservativestate.com"
  },
  "Conservative Tribune": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Conservative Tribune publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-tribune",
    "url": "conservativetribune.com"
  },
  "Conspiracy Planet": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Conspiracy Planet publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conspiracy-planet",
    "url": "www.conspiracyplanet.com"
  },
  "Constitution Rising": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Constitution Rising publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/constitution-rising",
    "url": "rickwells.us"
  },
  "Countdown to Zero Time": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "pseudoscience", "right bias"
    ],
    "blurb": "Countdown to Zero Time publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/countdown-zero-time",
    "url": "countdowntozerotime.com"
  },
  "Counter Current News": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Counter Current News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/counter-current-news",
    "url": "countercurrentnews.com"
  },
  "Counter PsyOps": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Counter PsyOps publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/counter-psyops",
    "url": "counterpsyops.com"
  },
  "CounterPunch": {
    "bias": [
      "inciteful", "left bias", "political"
    ],
    "blurb": "CounterPunch publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/counterpunch",
    "url": "www.counterpunch.org"
  },
  "Cowger nation": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Cowger Nation publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/cowger-nation",
    "url": "cowgernation.com"
  },
  "Cracked": {
    "bias": ["satire"],
    "blurb": "Cracked uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/cracked",
    "url": "cracked.com"
  },
  "Cream BMP": {
    "bias": [
      "editorial", "political", "right bias", "special interest"
    ],
    "blurb": "Cream BMP publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/cream-bmp",
    "url": "creambmp.com"
  },
  "Cronica Deportiva Politic": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Cronica Deportiva Politic publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/cronica-deportiva-politic",
    "url": "cronicadeportiva.com/index.php/category/politic/"
  },
  "Crooks and Liars": {
    "bias": [
      "conspiratorial", "inciteful", "left bias", "political"
    ],
    "blurb": "Crooks and Liars publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/crooks-and-liars",
    "url": "crooksandliars.com"
  },
  "Daily Buzz Live": {
    "bias": [],
    "blurb": "Daily Buzz Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-buzz-live",
    "url": "dailybuzzlive.com"
  },
  "Daily Currant": {
    "bias": [],
    "blurb": "Daily Currant uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-currant",
    "url": "DailyCurrant.com"
  },
  "Daily Headlines": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Daily Headlines publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-headlines",
    "url": "dailyheadlines.net"
  },
  "Daily Kos": {
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Daily Kos publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-kos",
    "url": "www.dailykos.com"
  },
  "DC Clothesline": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "DC Clothesline publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dc-clothesline",
    "url": "DCClothesline.com"
  },
  "DC Gazette": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "DC Gazette publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dc-gazette",
    "url": "DCGazette.com"
  },
  "DC Whispers": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "DC Whispers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dc-whispers",
    "url": "dcwhispers.com"
  },
  "Daily News Bin": {
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Daily News Bin publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-news-bin",
    "url": "www.dailynewsbin.com"
  },
  "Daily Occupation": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Daily Occupation publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-occupation",
    "url": "dailyoccupation.com"
  },
  "Dallas Voice": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Dallas Voice publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dallas-voice",
    "url": "www.dallasvoice.com"
  },
  "Dark Politricks": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Dark Politricks publishes information that cannot be validated and that may be anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dark-politricks",
    "url": "www.darkpolitricks.com"
  },
  "Darkmoon": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Darkmoon publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/darkmoon",
    "url": "www.darkmoon.me"
  },
  "David Duke.com": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "special interest"
    ],
    "blurb": "David Duke.com publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/david-dukecom",
    "url": "davidduke.com"
  },
  "Debunking Skeptics": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Debunking Skeptics publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/debunking-skeptics",
    "url": "www.debunkingskeptics.com"
  },
  "Defend Democracy": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Defend Democracy publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/defend-democracy",
    "url": "defenddemocracy.press"
  },
  "Democracy Now": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Democracy Now publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/democracy-now",
    "url": "www.democracynow.org"
  },
  "Democratic Underground": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Democratic Underground publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/democratic-underground",
    "url": "www.democraticunderground.com"
  },
  "Dennis Michael Lynch": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Dennis Michael Lynch publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dennis-michael-lynch",
    "url": "dennismichaellynch.com"
  },
  "Departed": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Departed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/departed",
    "url": "departed.co"
  },
  "Derf Magazine": {
    "bias": ["satire"],
    "blurb": "Derf Magazine publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/derf-magazine",
    "url": "derfmagazine.com"
  },
  "Disclose.tv": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Disclose.tv publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/disclosetv",
    "url": "www.disclose.tv"
  },
  "Disclosure Media": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Disclosure Media publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/disclosure-media",
    "url": "disclosuremedia.net"
  },
  "Dissent Magazine": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Dissent Magazine publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dissent-magazine",
    "url": "www.dissentmagazine.org"
  },
  "Downtrend": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Downtrend publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/downtrend",
    "url": "downtrend.com"
  },
  "Drudge Report": {
    "bias": [],
    "blurb": "Drudge Report publishes information that cannot be validated and that may be anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/drudge-report",
    "url": "drudgereport.com"
  },
  "Duffle Blog": {
    "bias": [
      "editorial", "political", "right bias", "special interest"
    ],
    "blurb": "Duffle Blog publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/duffle-blog",
    "url": "duffelblog.com"
  },
  "Duh Progressive": {
    "bias": [],
    "blurb": "Duh Progressive publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/duh-progressive",
    "url": "duhprogressive.com"
  },
  "Eagle Rising": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Eagle Rising publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/eagle-rising",
    "url": "eaglerising.com"
  },
  "Earth We Are One": {
    "bias": [
      "conspiratorial", "pseudoscience"
    ],
    "blurb": "Earth We Are One publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/earth-we-are-one",
    "url": "ewao.com"
  },
  "Economy in Crisis": {
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "Economy in Crisis publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/economy-crisis",
    "url": "economyincrisis.org"
  },
  "Embols": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Embols publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/embols",
    "url": "embols.com"
  },
  "Empire News": {
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Empire News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/empire-news",
    "url": "EmpireNews.com"
  },
  "End Of The American Dream": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "End Of The American Dream publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/end-american-dream",
    "url": "endoftheamericandream.com"
  },
  "Ending The Fed": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Ending The Fed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/ending-fed",
    "url": "endingthefed.com"
  },
  "EndTime Ministries": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "EndTime Ministries publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/endtime-ministries",
    "url": "endtime.com"
  },
  "Enduring Vision": {
    "bias": [
      "pseudoscience", "right bias", "satire"
    ],
    "blurb": "Enduring Vision  publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/enduring-vision",
    "url": "enduringvision.com"
  },
  "Executive Intelligence Review": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Executive Intelligence Review publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/executive-intelligence-review",
    "url": "larouchepub.com"
  },
  "F W Engdahl": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "F W Engdahl publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/f-w-engdahl",
    "url": "oilgeopolitics.net"
  },
  "FM observer": {
    "bias": ["satire"],
    "blurb": "FM observer uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/fm-observer",
    "url": "fmobserver.com"
  },
  "FPRN Radio": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "FPRN Radio publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/fprn-radio",
    "url": "3,471,472"
  },
  "Faking News": {
    "bias": ["satire"],
    "blurb": "Faking News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/faking-news",
    "url": "fakingnews.com"
  },
  "Family Security Matters": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Family Security Matters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/family-security-matters",
    "url": "familysecuritymatters.org"
  },
  "Federalist Press": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Federalist Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/federalist-press",
    "url": "federalistpress.com"
  },
  "Fellowship of the Minds": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Fellowship of the Minds publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/fellowship-minds",
    "url": "fellowshipoftheminds.com"
  },
  "Forward Progressives": {
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "Forward Progressives publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/forward-progressives",
    "url": "www.forwardprogressives.com"
  },
  "Freak Out Nation": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "left bias", "political"
    ],
    "blurb": "Freak Out Nation publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/freak-out-nation",
    "url": "freakoutnation.com"
  },
  "Free Wood Post": {
    "bias": ["satire"],
    "blurb": "Free Wood Post uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/free-wood-post",
    "url": "freewoodpost.com"
  },
  "Freedom Daily": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Freedom Daily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/freedom-daily",
    "url": "freedomdaily.com"
  },
  "Freedom Outpost": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Freedom Outpost publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/freedom-outpost",
    "url": "freedomoutpost.com"
  },
  "Friday Mash": {
    "bias": ["satire"],
    "blurb": "Friday Mash uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/friday-mash",
    "url": "www.fridaymash.com"
  },
  "From the Trenches World Report": {
    "bias": [
      "conspiratorial", "inciteful", "political", "pseudoscience", "right bias"
    ],
    "blurb": "From the Trenches World Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/trenches-world-report",
    "url": "www.fromthetrenchesworldreport.com"
  },
  "GOP the Daily Dose": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "GOP the Daily Dose publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gop-daily-dose",
    "url": "gopthedailydose.com"
  },
  "Gangster Government": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Gangster Government publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gangster-government",
    "url": "gangstergovernment.com"
  },
  "Geller Report": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Geller Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/geller-report",
    "url": "pamelageller.com"
  },
  "Geo Engineering Watch": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Geo Engineering Watch publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/geo-engineering-watch",
    "url": "www.geoengineeringwatch.org"
  },
  "Global Research": {
    "bias": [
      "conspiratorial", "editorial", "pseudoscience", "right bias"
    ],
    "blurb": "Global Research publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/global-research",
    "url": "www.globalresearch.ca"
  },
  "Glossynews.com": {
    "bias": ["satire"],
    "blurb": "Glossynews.com uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/glossynewscom",
    "url": "glossynews.com"
  },
  "Gomer Blog": {
    "bias": [
      "editorial", "left bias", "right bias", "satire"
    ],
    "blurb": "Gomer Blog publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gomer-blog",
    "url": "gomerblog.com"
  },
  "Gone Left": {
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "Gone Left publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gone-left",
    "url": "goneleft.com"
  },
  "Government Slaves": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "pseudoscience", "right bias"
    ],
    "blurb": "Government Slaves publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/government-slaves",
    "url": "govtslaves.info"
  },
  "Gulag Bound": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/gulag-bound",
    "url": "gulagbound.com"
  },
  "Hang The Bankers": {
    "bias": [
      "conspiratorial", "editorial", "right bias"
    ],
    "blurb": "Hang The Bankers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/hang-bankers",
    "url": "www.hangthebankers.com"
  },
  "Health Impact News": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Health Impact News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/health-impact-news",
    "url": "healthimpactnews.com"
  },
  "Henry Makow": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Henry Makow publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/henry-makow",
    "url": "henrymakow.com"
  },
  "Herman Cain": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Herman Cain publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/herman-cain",
    "url": "www.caintv.com"
  },
  "Humans are Free": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Humans are Free publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/humans-are-free",
    "url": "humansarefree.com"
  },
  "Humor Times": {
    "bias": ["satire"],
    "blurb": "Humor Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/humor-times",
    "url": "humortimes.com"
  },
  "Huzlers": {
    "bias": [
      "right bias", "satire"
    ],
    "blurb": "Huzlers uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/huzlers",
    "url": "huzlers.com"
  },
  "I Have the Truth": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "I Have the Truth publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/i-have-truth",
    "url": "ihavethetruth.com"
  },
  "If You Only News": {
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "If You Only News publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/if-you-only-news",
    "url": "www.ifyouonlynews.com"
  },
  "Illuminati News": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Illuminati News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/illuminati-news",
    "url": "www.illuminati-news.com"
  },
  "In Trend Today": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "In Trend Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/trend-today",
    "url": "intrendtoday.com"
  },
  "Infinite Unknown": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Infinite Unknown publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/infinite-unknown",
    "url": "www.infiniteunknown.net"
  },
  "Information Clearing House": {
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "Information Clearing House publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/information-clearing-house",
    "url": "informationclearinghouse.info"
  },
  "Infostormer": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Infostormer publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/infostormer",
    "url": "Infostormer.com"
  },
  "Infowars": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Infowars publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/infowars",
    "url": "www.infowars.com"
  },
  "IntelliHub": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "IntelliHub publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/intellihub",
    "url": "www.intellihub.com"
  },
  "Intrepid Report": {
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Intrepid Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/intrepid-report",
    "url": "intrepidreport.com"
  },
  "Investment Watch Blog": {
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Investment Watch Blog publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/investment-watch-blog",
    "url": "investmentwatchblog.com"
  },
  "Ironic Times": {
    "bias": ["satire"],
    "blurb": "Ironic Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/ironic-times",
    "url": "ironictimes.com"
  },
  "Islamica News": {
    "bias": ["satire"],
    "blurb": "Islamica News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/islamica-news",
    "url": "islamicanews.com"
  },
  "Israel Islam and End Times": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Israel Islam and End Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/israel-islam-and-end-times",
    "url": "www.israelislamandendtimes.com"
  },
  "Jack Pine Radicals": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Jack Pine Radicals publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jack-pine-radicals",
    "url": "jackpineradicals.com"
  },
  "Jacobin": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Jacobin publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jacobin",
    "url": "www.jacobinmag.com"
  },
  "Jan Morgan Media": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Jan Morgan Media publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jan-morgan-media",
    "url": "janmorganmedia.com"
  },
  "Jews News": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Jews News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jews-news",
    "url": "www.jewsnews.co.il"
  },
  "Jezebel": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Jezebel publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jezebel",
    "url": "jezebel.com"
  },
  "Johnny Robish": {
    "bias": ["satire"],
    "blurb": "Johnny Robish uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/johnny-robish",
    "url": "www.johnnyrobish.com"
  },
  "Jones Report": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "Jones Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jones-report",
    "url": "jonesreport.com"
  },
  "King World News": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "King World News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/king-world-news",
    "url": "kingworldnews.com"
  },
  "Lew Rockwell": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Lew Rockwell publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/lew-rockwell",
    "url": "lewrockwell.com"
  },
  "Liberal America": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Liberal America publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberal-america",
    "url": "www.liberalamerica.org"
  },
  "Liberal Darkness": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Liberal Darkness publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberal-darkness",
    "url": "liberaldarkness.com"
  },
  "iTag Live": {
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "iTag Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/itag-live",
    "url": "itaglive.com"
  },
  "Liberals Unite": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Liberals Unite publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberals-unite",
    "url": "samuel-warde.com"
  },
  "Liberty Blitzkrieg": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Liberty Blitzkrieg publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-blitzkrieg",
    "url": "libertyblitzkrieg.com"
  },
  "Liberty Movement Radio": {
    "bias": [
      "political", "right bias"
    ],
    "blurb": "Liberty Movement Radio publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-movement-radio",
    "url": "libertymovementradio.com"
  },
  "Liberty News": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Liberty News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-news",
    "url": "libertynews.com"
  },
  "Liberty Talk FM": {
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Liberty Talk FM publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-talk-fm",
    "url": ""
  },
  "Liberty Unyielding": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Liberty Unyielding publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-unyielding",
    "url": "libertyunyielding.com"
  },
  "Liberty Videos": {
    "bias": [],
    "blurb": "Liberty Videos publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-videos",
    "url": "libertyvideos.com"
  },
  "Liberty Writers News": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Liberty Writers News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-writers-news",
    "url": "www.libertywritersnews.com"
  },
  "LifeZette": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "LifeZette publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/lifezette",
    "url": "www.lifezette.com"
  },
  "Liftable": {
    "bias": [
      "editorial", "pseudoscience", "special interest"
    ],
    "blurb": "Liftable publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liftable",
    "url": "www.liftable.com"
  },
  "Lush for Life": {
    "bias": ["satire"],
    "blurb": "Lush for Life uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/lush-life",
    "url": "lushforlife.com"
  },
  "MPI Daily Magazine": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "MPI Daily Magazine publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mpi-daily-magazine",
    "url": "mpidailymagazine.com"
  },
  "Mad World News": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Mad World News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mad-world-news",
    "url": "madworldnews.com"
  },
  "Make America Great Today": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Make America Great Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/make-america-great-today",
    "url": "makeamericagreattoday.com"
  },
  "Media Matters": {
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Media Matters publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/media-matters",
    "url": "mediamatters.org"
  },
  "Militia News": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Militia News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/militia-news",
    "url": "www.militianews.com"
  },
  "Mirror": {
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Mirror publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mirror",
    "url": "www.mirror.co.uk"
  },
  "Moon of Alabama": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Moon of Alabama publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/moon-alabama",
    "url": "moonofalabama.org"
  },
  "Morning Ledger": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Morning Ledger publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/morning-ledger",
    "url": "www.morningledger.com"
  },
  "Mother Jones": {
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Mother Jones publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mother-jones",
    "url": "www.motherjones.com"
  },
  "Move On": {
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Move On publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/move",
    "url": "front.moveon.org"
  },
  "Mr. Conservative": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Mr. Conservative publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mr-conservative",
    "url": "mrconservative.com"
  },
  "MyZone Today": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "MyZone Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/myzone-today",
    "url": "myzonetoday.com"
  },
  "Nation One News": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Nation One News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/nation-one-news",
    "url": "nationonenews.com"
  },
  "Nation of Change": {
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Nation of Change publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/nation-change",
    "url": "www.nationofchange.org"
  },
  "National Insider Politics": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "National Insider Politics publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/national-insider-politics",
    "url": "www.nationalinsiderpolitics.com"
  },
  "National Report": {
    "bias": [
      "editorial", "political", "right bias", "satire"
    ],
    "blurb": "National Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/national-report",
    "url": "nationalreport.net"
  },
  "New Century Times": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "New Century Times publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/new-century-times",
    "url": "newcenturytimes.com"
  },
  "News 4": {
    "bias": [
      "editorial", "pseudoscience", "satire"
    ],
    "blurb": "News 4 publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-4",
    "url": "news4ktla.com"
  },
  "News Busters": {
    "bias": [
      "conspiratorial",
      "editorial",
      "political",
      "pseudoscience",
      "right bias",
      "special interest"
    ],
    "blurb": "News Busters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-busters",
    "url": "www.newsbusters.org"
  },
  "News Corpse": {
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "News Corpse publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-corpse",
    "url": "newscorpse.com"
  },
  "News Mutiny": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "satire"
    ],
    "blurb": "News Mutiny uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/news-mutiny",
    "url": "newsmutiny.com"
  },
  "News Target": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "News Target publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-target",
    "url": "newstarget.com"
  },
  "News Thump": {
    "bias": [
      "editorial", "political", "right bias", "satire"
    ],
    "blurb": "News Thump publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-thump",
    "url": "newsthump.com"
  },
  "News Wire 24": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "News Wire 24 publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-wire-24",
    "url": "newswire-24.com"
  },
  "News With Views": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "News With Views publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-views",
    "url": "newswithviews.com"
  },
  "NewsBiscuit": {
    "bias": ["satire"],
    "blurb": "NewsBiscuit uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/newsbiscuit",
    "url": "newsbiscuit.com"
  },
  "NewsBreakers": {
    "bias": ["satire"],
    "blurb": "NewsBreakers uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/newsbreakers",
    "url": "newsbreakers.org"
  },
  "Newslo": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Newslo aka Politicops.com uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/newslo",
    "url": "politicops.com"
  },
  "No Dis Info": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political"
    ],
    "blurb": "No Dis Info publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/no-dis-info",
    "url": "nodisinfo.com"
  },
  "Not Allowed To": {
    "bias": [
      "conspiratorial", "inciteful", "political", "pseudoscience"
    ],
    "blurb": "Not Allowed To publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/not-allowed",
    "url": "notallowedto.com"
  },
  "Now The End Begins": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Now The End Begins publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/now-end-begins",
    "url": "www.nowtheendbegins.com"
  },
  "Now8News.com": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Now 8 News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/now8newscom",
    "url": "now8news.com"
  },
  "Occupy Democrats": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Occupy Democrats publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/occupy-democrats",
    "url": "occupydemocrats.com"
  },
  "Online Conservative Press": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Online Conservative Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/online-conservative-press",
    "url": "onlineconservativepress.com"
  },
  "Pak Alert Press": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Pak Alert Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/pak-alert-press",
    "url": "www.pakalertpress.com"
  },
  "Pat Dollard": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Pat Dollard publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/pat-dollard",
    "url": "patdollard.com"
  },
  "Patriot Update": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Patriot Update publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/patriot-update",
    "url": "patriotupdate.com"
  },
  "Political Blind Spot": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "satire"
    ],
    "blurb": "Political Blind Spot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-blind-spot",
    "url": "politicalblindspot.com"
  },
  "Political Ears": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Political Ears publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-ears",
    "url": "newsmutiny.com"
  },
  "Political Reviewer": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Political Reviewer publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-reviewer",
    "url": "politicalreviewer.com"
  },
  "Political Updater": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Political Updater publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-updater",
    "url": "politicalupdater.com"
  },
  "Political Vel Craft": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Political Vel Craft publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-vel-craft",
    "url": "politicalvelcraft.org"
  },
  "Politics USA": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Politics USA publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/politics-usa",
    "url": "www.politicususa.com"
  },
  "Pravda Report": {
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "Pravda Report publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/pravda-report",
    "url": "www.pravdareport.com"
  },
  "Press TV": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Press TV publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/press-tv",
    "url": "presstv.ir"
  },
  "Prison Planet": {
    "bias": [
      "conspiratorial", "editorial", "pseudoscience", "right bias"
    ],
    "blurb": "Prison Planet publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/prison-planet",
    "url": "www.prisonplanet.com"
  },
  "Private Eye": {
    "bias": [
      "editorial", "political", "right bias", "satire"
    ],
    "blurb": "Private Eye uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/private-eye",
    "url": "private-eye.co.uk"
  },
  "Prntly | America's Top News": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Prntly | America's Top News Site publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/prntly-americas-top-news-site",
    "url": "prntly.com"
  },
  "Proud Conservative": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Proud Conservative publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/proud-conservative",
    "url": "www.proudcons.com"
  },
  "Q Political": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Q Political publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/q-political",
    "url": "qpolitical.com"
  },
  "Raw Story": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Raw Story publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/raw-story",
    "url": "www.rawstory.com"
  },
  "Read Conservatives": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Read Conservatives publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/read-conservatives",
    "url": "readconservatives.news"
  },
  "Reagan Coalition": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Reagan Coalition publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/reagan-coalition",
    "url": "reagancoalition.com"
  },
  "Real News Right Now": {
    "bias": ["editorial"],
    "blurb": "Real News Right Now publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/real-news-right-now",
    "url": "realnewsrightnow.com"
  },
  "Real Time Politics": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Real Time Politics publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/real-time-politics",
    "url": "realtimepolitics.com"
  },
  "Red Flag News": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Red Flag News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/red-flag-news",
    "url": "www.redflagnews.com"
  },
  "Red State Watcher": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Red State Watcher publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/red-state-watcher",
    "url": "redstatewatcher.com"
  },
  "Rense": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Rense publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rense",
    "url": "www.rense.com"
  },
  "Revos.2040": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Revos.2040 publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/revos2040",
    "url": "www.revolutions2040.com"
  },
  "RT - Russia Today": {
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "RT - Russia Today  publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rt-russia-today",
    "url": "www.rt.com"
  },
  "Right Alerts": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Right Alerts publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/right-alerts",
    "url": "rightalerts.com"
  },
  "Right Wing News": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Right Wing News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/right-wing-news",
    "url": "rightwingnews.com"
  },
  "Rile News": {
    "bias": [],
    "blurb": "Rile News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rile-news",
    "url": "rilenews.com"
  },
  "Rock City Times": {
    "bias": [
      "political", "right bias", "satire"
    ],
    "blurb": "Rock City Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rock-city-times",
    "url": "rockcitytimes.com"
  },
  "Rumor Mill News": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Rumor Mill News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rumor-mill-news",
    "url": "rumormillnews.com"
  },
  "Ruptly": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Ruptly publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/ruptly",
    "url": "ruptly.tv"
  },
  "Russia Direct": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Russia Direct publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/russia-direct",
    "url": "russia-direct.org"
  },
  "SHTF Plan": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "SHTF Plan publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/shtf-plan",
    "url": "www.shtfplan.com"
  },
  "SatireWire": {
    "bias": ["satire"],
    "blurb": "SatireWire uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/satirewire",
    "url": "satirewire.com"
  },
  "ScrappleFace": {
    "bias": ["satire"],
    "blurb": "ScrappleFace uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/scrappleface",
    "url": "scrappleface.com"
  },
  "Secrets of The Fed": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Secrets of The Fed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/secrets-fed",
    "url": "www.secretsofthefed.com"
  },
  "Sheep Killers": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "special interest"
    ],
    "blurb": "Sheep Killers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/sheep-killers",
    "url": "www.sheepkillers.com"
  },
  "Shoebat": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "special interest"
    ],
    "blurb": "Shoebat publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/shoebat",
    "url": "shoebat.com"
  },
  "Signs of The Times": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "Signs of The Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/signs-times",
    "url": "sott.net"
  },
  "Skeptiko": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "special interest"
    ],
    "blurb": "Skeptiko publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/skeptiko",
    "url": "skeptiko.com"
  },
  "Sputnik News": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Sputnik Newspublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/sputnik-news",
    "url": "sputniknews.com"
  },
  "St Neots Citizen": {
    "bias": ["satire"],
    "blurb": "St Neots Citizen uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/st-neots-citizen",
    "url": "stneotscitizen.com"
  },
  "Storm Clouds Gathering": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "Storm Clouds Gathering publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/storm-clouds-gathering",
    "url": "stormcloudsgathering.com"
  },
  "Stuppid": {
    "bias": ["satire"],
    "blurb": "Stuppid uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/stuppid",
    "url": "stuppid.com"
  },
  "Subject: Politics": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Subject: Politics publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/subject-politics",
    "url": "www.subjectpolitics.com"
  },
  "Supreme Patriot": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Supreme Patriot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/supreme-patriot",
    "url": "supremepatriot.com"
  },
  "Surreal Scoop": {
    "bias": ["satire"],
    "blurb": "Surreal Scoop uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/surreal-scoop",
    "url": "www.surrealscoop.com"
  },
  "The American Independent": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The American Independent publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-independent",
    "url": "theamericanindependent.wordpress.com"
  },
  "The Beaverton": {
    "bias": ["satire"],
    "blurb": "The Beaverton publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/beaverton",
    "url": "www.thebeaverton.com"
  },
  "The Boston Tribune": {
    "bias": [
      "conspiratorial", "editorial", "political"
    ],
    "blurb": "The Boston Tribune publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/boston-tribune",
    "url": "thebostontribune.com"
  },
  "The Common Sense Show": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "The Common Sense Show publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/common-sense-show",
    "url": "www.thecommonsenseshow.com"
  },
  "The Controversial Files": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "The Controversial Files publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/controversial-files",
    "url": "www.thecontroversialfiles.net"
  },
  "The Corbett Report": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Corbett Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/corbett-report",
    "url": "corbettreport.com"
  },
  "The Daily Beast": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "The Daily Beast publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-beast",
    "url": "www.thedailybeast.com"
  },
  "The Daily Caller": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Daily Caller publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-caller",
    "url": "dailycaller.com"
  },
  "The Daily Discord": {
    "bias": ["satire"],
    "blurb": "The Daily Discord uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-discord",
    "url": "dailydiscord.com"
  },
  "The Daily Mash": {
    "bias": ["satire"],
    "blurb": "The Daily Mash uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-mash",
    "url": "www.thedailymash.co.uk"
  },
  "The Daily Sheeple": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "The Daily Sheeple publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-sheeple",
    "url": "www.thedailysheeple.com"
  },
  "The Daily Squib": {
    "bias": ["satire"],
    "blurb": "The Daily Squib uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-squib",
    "url": "www.dailysquib.co.uk"
  },
  "The Daily Stormer": {
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "The Daily Stormer publishes information that cannot be validated and that may be anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-stormer",
    "url": "www.dailystormer.com"
  },
  "The Daily WTF": {
    "bias": ["satire"],
    "blurb": "The Daily WTF uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-wtf",
    "url": "thedailywtf.com"
  },
  "The Dandy Goat": {
    "bias": ["satire"],
    "blurb": "The Dandy Goat uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/dandy-goat",
    "url": "dandygoat.com"
  },
  "The Duran": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Duran publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/duran",
    "url": "theduran.com"
  },
  "The European Union Times": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The European Union Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/european-union-times",
    "url": "www.eutimes.net"
  },
  "The Event Chronicle": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Event Chronicle publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/event-chronicle",
    "url": "www.theeventchronicle.com"
  },
  "The Federalist Papers": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Federalist Papers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/federalist-papers",
    "url": "thefederalistpapers.org"
  },
  "The Forbidden Knowledge": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Forbidden Knowledge publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/forbidden-knowledge",
    "url": "www.theforbiddenknowledge.com"
  },
  "The Fourth Revolutionary War": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "The Fourth Revolutionary War publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/fourth-revolutionary-war",
    "url": "4threvolutionarywar.wordpress.com"
  },
  "The Free Patriot": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Free Patriot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/free-patriot",
    "url": "thefreepatriot.org"
  },
  "The Free Thought Project": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "left bias", "political"
    ],
    "blurb": "The Free Thought Project publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/free-thought-project",
    "url": "thefreethoughtproject.com"
  },
  "The Gateway Pundit": {
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "The Gateway Pundit publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gateway-pundit",
    "url": "www.thegatewaypundit.com"
  },
  "The Greanville Post": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "The Greanville Post publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/greanville-post",
    "url": "greanvillepost.com"
  },
  "The Inept Owl": {
    "bias": ["satire"],
    "blurb": "The Inept Owl uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/inept-owl",
    "url": "theineptowl.com"
  },
  "The Internet Chronicle": {
    "bias": [],
    "blurb": "The Internet Chronicle publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/internet-chronicle",
    "url": "chronicle.su"
  },
  "The Knights Party": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "The Knights Party publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/knights-party",
    "url": "kkk.com"
  },
  "The Lapine": {
    "bias": ["satire"],
    "blurb": "The Lapine publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/lapine",
    "url": "thelapine.ca"
  },
  "The Last Great Stand": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "The Last Great Stand publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/last-great-stand",
    "url": "thelastgreatstand.com"
  },
  "The Liberty Beacon": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Liberty Beacon publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-beacon",
    "url": "www.thelibertybeacon.com"
  },
  "The Madison Misnomer": {
    "bias": ["satire"],
    "blurb": "The Madison Misnomer  uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/madison-misnomer",
    "url": "themadisonmisnomer.com"
  },
  "The Mind Unleashed": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Mind Unleashed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mind-unleashed",
    "url": "themindunleashed.org"
  },
  "The Muslim Issue": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Muslim Issue publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/muslim-issue",
    "url": "themuslimissue.wordpress.com"
  },
  "The New Inquiry": {
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "The New Inquiry publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/new-inquiry",
    "url": "thenewinquiry.com"
  },
  "The News Nerd": {
    "bias": [
      "editorial", "right bias", "satire"
    ],
    "blurb": "The News Nerd publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-nerd",
    "url": "thenewsnerd.com"
  },
  "The Onion": {
    "bias": [
      "editorial", "satire"
    ],
    "blurb": "The Onion publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/onion",
    "url": "www.theonion.com"
  },
  "The Point": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Point publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/point",
    "url": "www.westernjournalism.com/thepoint/"
  },
  "The Poke": {
    "bias": ["satire"],
    "blurb": "The Poke uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/poke",
    "url": "thepoke.co.uk"
  },
  "The Political Cult": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Political Cult publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-cult",
    "url": "politicalcult.com"
  },
  "The Political Insider": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Political Insider publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-insider",
    "url": "www.thepoliticalinsider.com"
  },
  "The Racket Report": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Racket Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/racket-report",
    "url": "theracketreport.com"
  },
  "The Real Strategy": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Real Strategy publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/real-strategy",
    "url": "therealstrategy.com"
  },
  "The Rightists": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Rightists publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rightists",
    "url": "therightists.com"
  },
  "The Run Down Live": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "The RunDown Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/run-down-live",
    "url": "therundownlive.com"
  },
  "The Sensationalist Times": {
    "bias": ["satire"],
    "blurb": "The Sensationalist Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/sensationalist-times",
    "url": "www.sensationalisttimes.com"
  },
  "The Shovel": {
    "bias": [
      "political", "pseudoscience", "satire"
    ],
    "blurb": "The Shovel publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/shovel",
    "url": "www.theshovel.com.au"
  },
  "The Skunk": {
    "bias": ["satire"],
    "blurb": "The Skunk uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/skunk",
    "url": "theskunk.org"
  },
  "The Spoof": {
    "bias": [],
    "blurb": "The Spoof uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/spoof",
    "url": "thespoof.com"
  },
  "The Times of The World": {
    "bias": ["satire"],
    "blurb": "The Times of The World uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/times-world",
    "url": "thetimesoftheworld.com"
  },
  "The Truth Division": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Truth Division publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-division",
    "url": "thetruthdivision.com"
  },
  "The Truthseeker": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "pseudoscience"
    ],
    "blurb": "The Truthseeker publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truthseeker",
    "url": "www.thetruthseeker.co.uk"
  },
  "The US Patriot": {
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/us-patriot",
    "url": "theuspatriot.com"
  },
  "The UnReal Times": {
    "bias": ["satire"],
    "blurb": "The UnReal Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/unreal-times",
    "url": "theunrealtimes.com"
  },
  "The Valley Report": {
    "bias": ["satire"],
    "blurb": "The Valley Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/valley-report",
    "url": "thevalleyreport.com"
  },
  "The Vigilant Citizen": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "The Vigilant Citizen publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/vigilant-citizen",
    "url": "vigilantcitizen.com"
  },
  "The Washington Free Beacon": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "The Washington Free Beacon publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/washington-free-beacon",
    "url": "freebeacon.com"
  },
  "The Watch Towers": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Watch Towers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/watch-towers",
    "url": "thewatchtowers.com"
  },
  "Three Percenter Nation": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Three Percenter Nation publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/three-percenter-nation",
    "url": "threepercenternation.com"
  },
  "Top Right News": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Top Right News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/top-right-news",
    "url": "toprightnews.com"
  },
  "TopInfo Post": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "war"
    ],
    "blurb": "TopInfo Post publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/topinfo-post",
    "url": "TopInfoPost.com"
  },
  "Topeka News": {
    "bias": ["satire"],
    "blurb": "Topeka News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/topeka-news",
    "url": "topekasnews.com"
  },
  "True Activist": {
    "bias": [
      "left bias", "political"
    ],
    "blurb": "True Activist publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/true-activist",
    "url": "www.trueactivist.com"
  },
  "True Pundit": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "True Pundit publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/true-pundit",
    "url": "truepundit.com"
  },
  "Truth Broadcast Network": {
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Truth Broadcast Network publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-broadcast-network",
    "url": "truthbroadcastnetwork.com"
  },
  "Truth Feed": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Truth Feed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-feed",
    "url": "truthfeed.com"
  },
  "Truth and Action": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Truth and Action publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-and-action",
    "url": "www.truthandaction.org"
  },
  "Truth Frequency Radio": {
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/truth-frequency-radio",
    "url": "truthfrequencyradio.com"
  },
  "Truth Kings": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Truth Kings publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-kings",
    "url": "truthkings.com"
  },
  "Twitchy": {
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "Twitchy publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/twitchy",
    "url": "twitchy.com"
  },
  "US Advisor": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "US Advisor publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-advisor",
    "url": "ushealthyadvisor.com"
  },
  "US Chronicle": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "US Chronicle publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-chronicle",
    "url": "uschronicle.com"
  },
  "US Politics Live": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "US Politics Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-politics-live",
    "url": "www.uspoliticslive.com"
  },
  "US Uncut": {
    "bias": [
      "conspiratorial", "inciteful", "left bias", "political"
    ],
    "blurb": "US Uncut publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-uncut",
    "url": "usuncut.com"
  },
  "USA Hitman": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "USA Hitman publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-hitman",
    "url": "usahitman.com"
  },
  "USA News Insider": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "USA News Insider publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-news-insider",
    "url": "www.usanewsinsider.com"
  },
  "USA Newsflash": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "USA Newsflash publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-newsflash",
    "url": "usanewsflash.com"
  },
  "USA Supreme": {
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "USA Supreme publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-supreme",
    "url": "www.usasupreme.com"
  },
  "Uncle Sams Misguided Children": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Uncle Sams Misguided Children publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/uncle-sams-misguided-children",
    "url": "unclesamsmisguidedchildren.com"
  },
  "Unconfirmed Sources": {
    "bias": [],
    "blurb": "Unconfirmed Sources uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/unconfirmed-sources",
    "url": "unconfirmedsources.com"
  },
  "Underground World News": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Underground World News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/underground-world-news",
    "url": "undergroundworldnews.com"
  },
  "Veterans Today": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Veterans Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/veterans-today",
    "url": "www.veteranstoday.com"
  },
  "Viral Liberty": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Viral Liberty publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/viral-liberty",
    "url": "viralliberty.com"
  },
  "WND – WorldNetDaily": {
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "WND – WorldNetDaily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/wnd-%E2%80%93-worldnetdaily",
    "url": "wnd.com"
  },
  "Walid Shoebat": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Walid Shoebat publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/walid-shoebat",
    "url": "shoebat.com"
  },
  "Washington Examiner": {
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Washington Examiner publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/washington-examiner",
    "url": "www.washingtonexaminer.com"
  },
  "Waterford Whispers News": {
    "bias": ["satire"],
    "blurb": "Waterford Whispers News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/waterford-whispers-news",
    "url": "waterfordwhispersnews.com"
  },
  "We Are Change": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "We Are Change publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/we-are-change",
    "url": "wearechange.org"
  },
  "WebDaily": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "WebDaily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/webdaily",
    "url": "www.webdaily.com"
  },
  "Weekly World News": {
    "bias": [],
    "blurb": "Weekly World News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/weekly-world-news",
    "url": "weeklyworldnews.com"
  },
  "What Does It Mean": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "What Does It Mean publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/what-does-it-mean",
    "url": "www.whatdoesitmean.com"
  },
  "What Really Happened": {
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "What Really Happened publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/what-really-happened",
    "url": "whatreallyhappened.com"
  },
  "White Power": {
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "White Power publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/white-power",
    "url": "whitepower.com"
  },
  "Who.What.Why": {
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/whowhatwhy",
    "url": "whowhatwhy.org"
  },
  "Winning Democrats": {
    "bias": [
      "conspiratorial", "inciteful", "left bias", "political"
    ],
    "blurb": "Winning Democrats publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/winning-democrats",
    "url": "winningdemocrats.com"
  },
  "Wit Science": {
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/wit-science",
    "url": "witscience.org"
  },
  "Wonkie": {
    "bias": ["satire"],
    "blurb": "Wonkie uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/wonkie",
    "url": "wonkie.com"
  },
  "World News Daily Report": {
    "bias": [],
    "blurb": "World News Daily Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/world-news-daily-report",
    "url": "worldnewsdailyreport.com"
  },
  "World Truth": {
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience"
    ],
    "blurb": "World Truth publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/world-truth",
    "url": "worldtruth.tv"
  },
  "Yes I’m Right": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Yes I’m Right publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/yes-i%E2%80%99m-right",
    "url": "www.yesimright.com"
  },
  "Your News Wire": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Your News Wire publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/your-news-wire",
    "url": "yournewswire.com"
  },
  "Zero Hedge": {
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "Zero Hedge publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/zero-hedge",
    "url": "www.zerohedge.com"
  },
  "Zoot Feed": {
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Zoot Feed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/zoot-feed",
    "url": "www.zootfeed.com"
  }
}

const urlsFirst = {
  "100percentfedup.com": {
    "name": "100 Percent Fed Up",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "100 Percent Fed Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/100-percent-fed"
  },
  "21stcenturywire.com": {
    "name": "21st Century Wire",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "21st Century Wire publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/21st-century-wire"
  },
  "365usanews .com": {
    "name": "365 USA News",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "365 USA News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/365-usa-news"
  },
  "70news.wordpress.com": {
    "name": "70News",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "70News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/70news"
  },
  "www.abcnews.com.co": {
    "name": "ABCNews.com.co",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "ABCNews.com.co publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/abcnewscomco"
  },
  "http://www.abeldanger.net": {
    "name": "Abel Danger",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Abel Danger publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/abel-danger"
  },
  "www.abovetopsecret.com": {
    "name": "Above Top Secret",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Above Top Secret publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/above-top-secret"
  },
  "www.activistpost.com": {
    "name": "Activist Post",
    "bias": [
      "conspiratorial",
      "editorial",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/activist-post"
  },
  "addictinginfo.org": {
    "name": "Addicting Info",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Addicting Info publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/addicting-info"
  },
  "www.advocate.com": {
    "name": "Advocate",
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Advocate publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/advocate"
  },
  "http://allnewspipeline.com": {
    "name": "All News Pipeline",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "All News Pipeline Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/all-news-pipeline-0"
  },
  "www.alternet.org": {
    "name": "AlterNet",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "AlterNet publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/alternet"
  },
  "aidc.org.za/amandla-media/": {
    "name": "Amandla!",
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Amandla! publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/amandla"
  },
  "americablog.com": {
    "name": "America Blog",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "America Blog publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/america-blog"
  },
  "www.americasfreedomfighters.com": {
    "name": "America's Freedom Fighters",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "America's Freedom Fighters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/americas-freedom-fighters"
  },
  "americanfreepress.net": {
    "name": "American Free Press",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "American Free Presspublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-free-press"
  },
  "ahtribune.com": {
    "name": "American Herald Tribune",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "American Herald Tribune publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-herald-tribune"
  },
  "americanlookout .com": {
    "name": "American Lookout",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Lookout publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-lookout"
  },
  "AmericanNews.com": {
    "name": "American News",
    "bias": [
      "conspiratorial", "inciteful", "pseudoscience", "right bias"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/american-news"
  },
  "americanoverlook.com": {
    "name": "American Overlook",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Overlook publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-overlook"
  },
  "www.americanpatriotdaily.com": {
    "name": "American Patriot Daily",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Patriot Daily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-patriot-daily"
  },
  "www.amren.com": {
    "name": "American Renaissance",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "American Renaissance Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-renaissance"
  },
  "americanreviewer.com": {
    "name": "American Reviewer",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Reviewer publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-reviewer"
  },
  "truthpoliticsnews.com": {
    "name": "American Today",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "American Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-today"
  },
  "www.angrypatriotmovement.com": {
    "name": "Angry Patriot",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Angry Patriot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/angry-patriot"
  },
  "www.anonews.co": {
    "name": "Anonymous",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Anonymous publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/anonymous"
  },
  "anotherdayintheempire.com": {
    "name": "Another Day in The Empire",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Another Day in The Empirepublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/another-day-empire"
  },
  "theantimedia.org": {
    "name": "Anti Media",
    "bias": [
      "conspiratorial", "editorial", "political"
    ],
    "blurb": "Anti Media publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/anti-media"
  },
  "www.antiwar.com": {
    "name": "Anti-War",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Anti-Warpublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/anti-war"
  },
  "assassinationscience.com": {
    "name": "Assassination Science",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Assassination Science Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/assassination-science"
  },
  "awdnews.com": {
    "name": "AWD News",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "AWD Newspublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/awd-news"
  },
  "awarenessact.com": {
    "name": "Awareness Act",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Awareness Actpublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/awareness-act"
  },
  "awazetribune.com": {
    "name": "Awaze Tribune",
    "bias": ["political"],
    "blurb": "Awaze Tribune uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/awaze-tribune"
  },
  "bb4sp.com": {
    "name": "BB4SP",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "BB4SP publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bb4sp"
  },
  "www.barenakedislam.com": {
    "name": "Bare Naked Islam",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias", "war"
    ],
    "blurb": "Bare Naked Islam Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bare-naked-islam"
  },
  "www.ebar.com": {
    "name": "Bay Area Reporter",
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Bay Area Reporter publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bay-area-reporter"
  },
  "beforeitsnews.com": {
    "name": "Before It's News",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/before-its-news"
  },
  "www.bentspud.com": {
    "name": "Bent*Spud",
    "bias": ["satire"],
    "blurb": "Bent*Spud uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/bentspud"
  },
  "www.bighairynews.com": {
    "name": "Big Hairy News",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Big Hairy News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/big-hairy-news"
  },
  "bignuggetnews.com": {
    "name": "Big Nugget News",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias", "war"
    ],
    "blurb": "Big Nugget News Up publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/big-nugget-news"
  },
  "bipartisanreport.com": {
    "name": "Bipartisan Report",
    "bias": [
      "conspiratorial", "left bias", "political", "pseudoscience"
    ],
    "blurb": "Bipartisan Report publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bipartisan-report"
  },
  "www.bizpacreview.com": {
    "name": "BizPac Review",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "BizPac Review publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/bizpac-review"
  },
  "www.blackgenocide.org/home.html": {
    "name": "Black Genocide",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Black Genocidepublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/black-genocide"
  },
  "blacklistednews.com": {
    "name": "Blacklisted News",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias", "war"
    ],
    "blurb": "Blacklisted News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/blacklisted-news"
  },
  "us.blastingnews.com": {
    "name": "Blasting News",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Blasting News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/blasting-news"
  },
  "bluenationreview.com": {
    "name": "Blue Nation Review",
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "Blue Nation Review publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/blue-nation-review"
  },
  "borowitzreport.com": {
    "name": "Borowitz Report",
    "bias": ["satire"],
    "blurb": "Borowitz Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/borowitz-report"
  },
  "www.breitbart.com": {
    "name": "Breitbart News",
    "bias": [
      "political", "right bias"
    ],
    "blurb": "Breitbart News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/breitbart-news"
  },
  "www.callthecops.net": {
    "name": "Call the Cops",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Call the Cops uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/call-cops"
  },
  "canadafreepress.com": {
    "name": "Canada Free Press",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Canada Free Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/canada-free-press"
  },
  "canadiandimension.com": {
    "name": "Canadian Dimension",
    "bias": [
      "left bias", "political", "special interest"
    ],
    "blurb": "Canadian Dimension publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/canadian-dimension"
  },
  "cap-news.com": {
    "name": "Cap News",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Cap News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/cap-news"
  },
  "www.americanprogress.org": {
    "name": "Center For American Progress",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Center For American Progress publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/center-american-progress"
  },
  "www.centerforsecuritypolicy.org": {
    "name": "Center For Security Policy",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Center For Security Policy publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/center-security-policy"
  },
  "channel-7-news.com": {
    "name": "Channel 7 News",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Channel 7 News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/channel-7-news"
  },
  "ChristWire.org": {
    "name": "Christ Wire",
    "bias": [],
    "blurb": "Christ Wire publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/christ-wire"
  },
  "christiantimesnewspaper.com": {
    "name": "Christian Times Newspaper",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Christian Times Newspaper publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/christian-times-newspaper"
  },
  "CivicTribune.com": {
    "name": "Civic Tribune",
    "bias": [
      "political", "right bias"
    ],
    "blurb": "Civic Tribune publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/civic-tribune"
  },
  "clashdaily.com": {
    "name": "Clash Daily",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Clash Daily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/clash-daily"
  },
  "clickhole.com": {
    "name": "Click Hole",
    "bias": ["right bias"],
    "blurb": "Click Hole uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/click-hole"
  },
  "www.coasttocoastam.com": {
    "name": "Coast to Coast AM",
    "bias": [
      "conspiratorial", "pseudoscience", "right bias"
    ],
    "blurb": "Coast to Coast AM publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/coast-coast-am"
  },
  "www.collective-evolution.com": {
    "name": "Collective Evolution",
    "bias": [
      "conspiratorial", "editorial", "pseudoscience", "right bias"
    ],
    "blurb": "Collective Evolution publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/collective-evolution"
  },
  "collectivelyconscious.net": {
    "name": "Collectively Conscious",
    "bias": [
      "conspiratorial", "editorial", "pseudoscience"
    ],
    "blurb": "Collectively Conscious publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/collectively-conscious"
  },
  "www.commondreams.org": {
    "name": "Common Dreams",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Common Dreams publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/common-dreams"
  },
  "consciouslifenews.com": {
    "name": "Conscious Life News",
    "bias": [
      "conspiratorial", "editorial", "left bias", "pseudoscience"
    ],
    "blurb": "Conscious Life News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conscious-life-news"
  },
  "conservativebyte.com": {
    "name": "Conservative Byte",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Conservative Byte publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-byte"
  },
  "conservativedailypost.com": {
    "name": "Conservative Daily Post",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Conservative Daily Post publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-daily-post"
  },
  "conservativefiringline.com": {
    "name": "Conservative Firing Line",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Conservative Firing Line publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-firing-line"
  },
  "conservativefrontline.com": {
    "name": "Conservative Frontline",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Frontline publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-frontline"
  },
  "www.conservativeinfidel.com": {
    "name": "Conservative Infidel",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Infidel publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-infidel"
  },
  "conservativeoutfitters.com": {
    "name": "Conservative Outfitters",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Conservative Outfitters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-outfitters"
  },
  "conservativepapers.com": {
    "name": "Conservative Papers",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Papers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-papers"
  },
  "conservativerefocus.com": {
    "name": "Conservative Refocus",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Conservative Refocus publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-refocus"
  },
  "conservativestate.com": {
    "name": "Conservative State",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Conservative State publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-state"
  },
  "conservativetribune.com": {
    "name": "Conservative Tribune",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Conservative Tribune publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conservative-tribune"
  },
  "www.conspiracyplanet.com": {
    "name": "Conspiracy Planet",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Conspiracy Planet publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/conspiracy-planet"
  },
  "rickwells.us": {
    "name": "Constitution Rising",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Constitution Rising publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/constitution-rising"
  },
  "countdowntozerotime.com": {
    "name": "Countdown to Zero Time",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "pseudoscience", "right bias"
    ],
    "blurb": "Countdown to Zero Time publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/countdown-zero-time"
  },
  "countercurrentnews.com": {
    "name": "Counter Current News",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Counter Current News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/counter-current-news"
  },
  "counterpsyops.com": {
    "name": "Counter PsyOps",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Counter PsyOps publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/counter-psyops"
  },
  "www.counterpunch.org": {
    "name": "CounterPunch",
    "bias": [
      "inciteful", "left bias", "political"
    ],
    "blurb": "CounterPunch publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/counterpunch"
  },
  "cowgernation.com": {
    "name": "Cowger nation",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Cowger Nation publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/cowger-nation"
  },
  "cracked.com": {
    "name": "Cracked",
    "bias": ["satire"],
    "blurb": "Cracked uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/cracked"
  },
  "creambmp.com": {
    "name": "Cream BMP",
    "bias": [
      "editorial", "political", "right bias", "special interest"
    ],
    "blurb": "Cream BMP publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/cream-bmp"
  },
  "cronicadeportiva.com/index.php/category/politic/": {
    "name": "Cronica Deportiva Politic",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Cronica Deportiva Politic publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/cronica-deportiva-politic"
  },
  "crooksandliars.com": {
    "name": "Crooks and Liars",
    "bias": [
      "conspiratorial", "inciteful", "left bias", "political"
    ],
    "blurb": "Crooks and Liars publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/crooks-and-liars"
  },
  "dailybuzzlive.com": {
    "name": "Daily Buzz Live",
    "bias": [],
    "blurb": "Daily Buzz Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-buzz-live"
  },
  "DailyCurrant.com": {
    "name": "Daily Currant",
    "bias": [],
    "blurb": "Daily Currant uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-currant"
  },
  "dailyheadlines.net": {
    "name": "Daily Headlines",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Daily Headlines publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-headlines"
  },
  "www.dailykos.com": {
    "name": "Daily Kos",
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Daily Kos publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-kos"
  },
  "DCClothesline.com": {
    "name": "DC Clothesline",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "DC Clothesline publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dc-clothesline"
  },
  "DCGazette.com": {
    "name": "DC Gazette",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "DC Gazette publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dc-gazette"
  },
  "dcwhispers.com": {
    "name": "DC Whispers",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "DC Whispers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dc-whispers"
  },
  "www.dailynewsbin.com": {
    "name": "Daily News Bin",
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Daily News Bin publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-news-bin"
  },
  "dailyoccupation.com": {
    "name": "Daily Occupation",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Daily Occupation publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-occupation"
  },
  "www.dallasvoice.com": {
    "name": "Dallas Voice",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Dallas Voice publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dallas-voice"
  },
  "www.darkpolitricks.com": {
    "name": "Dark Politricks",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Dark Politricks publishes information that cannot be validated and that may be anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dark-politricks"
  },
  "www.darkmoon.me": {
    "name": "Darkmoon",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Darkmoon publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/darkmoon"
  },
  "davidduke.com": {
    "name": "David Duke.com",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "special interest"
    ],
    "blurb": "David Duke.com publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/david-dukecom"
  },
  "www.debunkingskeptics.com": {
    "name": "Debunking Skeptics",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Debunking Skeptics publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/debunking-skeptics"
  },
  "defenddemocracy.press": {
    "name": "Defend Democracy",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Defend Democracy publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/defend-democracy"
  },
  "www.democracynow.org": {
    "name": "Democracy Now",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Democracy Now publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/democracy-now"
  },
  "www.democraticunderground.com": {
    "name": "Democratic Underground",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Democratic Underground publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/democratic-underground"
  },
  "dennismichaellynch.com": {
    "name": "Dennis Michael Lynch",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Dennis Michael Lynch publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dennis-michael-lynch"
  },
  "departed.co": {
    "name": "Departed",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Departed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/departed"
  },
  "derfmagazine.com": {
    "name": "Derf Magazine",
    "bias": ["satire"],
    "blurb": "Derf Magazine publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/derf-magazine"
  },
  "www.disclose.tv": {
    "name": "Disclose.tv",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Disclose.tv publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/disclosetv"
  },
  "disclosuremedia.net": {
    "name": "Disclosure Media",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Disclosure Media publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/disclosure-media"
  },
  "www.dissentmagazine.org": {
    "name": "Dissent Magazine",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Dissent Magazine publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/dissent-magazine"
  },
  "downtrend.com": {
    "name": "Downtrend",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Downtrend publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/downtrend"
  },
  "drudgereport.com": {
    "name": "Drudge Report",
    "bias": [],
    "blurb": "Drudge Report publishes information that cannot be validated and that may be anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/drudge-report"
  },
  "duffelblog.com": {
    "name": "Duffle Blog",
    "bias": [
      "editorial", "political", "right bias", "special interest"
    ],
    "blurb": "Duffle Blog publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/duffle-blog"
  },
  "duhprogressive.com": {
    "name": "Duh Progressive",
    "bias": [],
    "blurb": "Duh Progressive publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/duh-progressive"
  },
  "eaglerising.com": {
    "name": "Eagle Rising",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Eagle Rising publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/eagle-rising"
  },
  "ewao.com": {
    "name": "Earth We Are One",
    "bias": [
      "conspiratorial", "pseudoscience"
    ],
    "blurb": "Earth We Are One publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/earth-we-are-one"
  },
  "economyincrisis.org": {
    "name": "Economy in Crisis",
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "Economy in Crisis publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/economy-crisis"
  },
  "embols.com": {
    "name": "Embols",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Embols publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/embols"
  },
  "EmpireNews.com": {
    "name": "Empire News",
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Empire News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/empire-news"
  },
  "endoftheamericandream.com": {
    "name": "End Of The American Dream",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "End Of The American Dream publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/end-american-dream"
  },
  "endingthefed.com": {
    "name": "Ending The Fed",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Ending The Fed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/ending-fed"
  },
  "endtime.com": {
    "name": "EndTime Ministries",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "EndTime Ministries publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/endtime-ministries"
  },
  "enduringvision.com": {
    "name": "Enduring Vision",
    "bias": [
      "pseudoscience", "right bias", "satire"
    ],
    "blurb": "Enduring Vision  publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/enduring-vision"
  },
  "larouchepub.com": {
    "name": "Executive Intelligence Review",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Executive Intelligence Review publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/executive-intelligence-review"
  },
  "oilgeopolitics.net": {
    "name": "F W Engdahl",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "F W Engdahl publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/f-w-engdahl"
  },
  "fmobserver.com": {
    "name": "FM observer",
    "bias": ["satire"],
    "blurb": "FM observer uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/fm-observer"
  },
  "3,471,472": {
    "name": "FPRN Radio",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "FPRN Radio publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/fprn-radio"
  },
  "fakingnews.com": {
    "name": "Faking News",
    "bias": ["satire"],
    "blurb": "Faking News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/faking-news"
  },
  "familysecuritymatters.org": {
    "name": "Family Security Matters",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Family Security Matters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/family-security-matters"
  },
  "federalistpress.com": {
    "name": "Federalist Press",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Federalist Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/federalist-press"
  },
  "fellowshipoftheminds.com": {
    "name": "Fellowship of the Minds",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Fellowship of the Minds publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/fellowship-minds"
  },
  "www.forwardprogressives.com": {
    "name": "Forward Progressives",
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "Forward Progressives publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/forward-progressives"
  },
  "freakoutnation.com": {
    "name": "Freak Out Nation",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "left bias", "political"
    ],
    "blurb": "Freak Out Nation publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/freak-out-nation"
  },
  "freewoodpost.com": {
    "name": "Free Wood Post",
    "bias": ["satire"],
    "blurb": "Free Wood Post uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/free-wood-post"
  },
  "freedomdaily.com": {
    "name": "Freedom Daily",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Freedom Daily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/freedom-daily"
  },
  "freedomoutpost.com": {
    "name": "Freedom Outpost",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Freedom Outpost publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/freedom-outpost"
  },
  "www.fridaymash.com": {
    "name": "Friday Mash",
    "bias": ["satire"],
    "blurb": "Friday Mash uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/friday-mash"
  },
  "www.fromthetrenchesworldreport.com": {
    "name": "From the Trenches World Report",
    "bias": [
      "conspiratorial", "inciteful", "political", "pseudoscience", "right bias"
    ],
    "blurb": "From the Trenches World Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/trenches-world-report"
  },
  "gopthedailydose.com": {
    "name": "GOP the Daily Dose",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "GOP the Daily Dose publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gop-daily-dose"
  },
  "gangstergovernment.com": {
    "name": "Gangster Government",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Gangster Government publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gangster-government"
  },
  "pamelageller.com": {
    "name": "Geller Report",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "Geller Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/geller-report"
  },
  "www.geoengineeringwatch.org": {
    "name": "Geo Engineering Watch",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Geo Engineering Watch publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/geo-engineering-watch"
  },
  "www.globalresearch.ca": {
    "name": "Global Research",
    "bias": [
      "conspiratorial", "editorial", "pseudoscience", "right bias"
    ],
    "blurb": "Global Research publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/global-research"
  },
  "glossynews.com": {
    "name": "Glossynews.com",
    "bias": ["satire"],
    "blurb": "Glossynews.com uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/glossynewscom"
  },
  "gomerblog.com": {
    "name": "Gomer Blog",
    "bias": [
      "editorial", "left bias", "right bias", "satire"
    ],
    "blurb": "Gomer Blog publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gomer-blog"
  },
  "goneleft.com": {
    "name": "Gone Left",
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "Gone Left publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gone-left"
  },
  "govtslaves.info": {
    "name": "Government Slaves",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "pseudoscience", "right bias"
    ],
    "blurb": "Government Slaves publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/government-slaves"
  },
  "gulagbound.com": {
    "name": "Gulag Bound",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "",
    "subUrl": "/fake-news-source/gulag-bound"
  },
  "www.hangthebankers.com": {
    "name": "Hang The Bankers",
    "bias": [
      "conspiratorial", "editorial", "right bias"
    ],
    "blurb": "Hang The Bankers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/hang-bankers"
  },
  "healthimpactnews.com": {
    "name": "Health Impact News",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Health Impact News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/health-impact-news"
  },
  "henrymakow.com": {
    "name": "Henry Makow",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Henry Makow publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/henry-makow"
  },
  "www.caintv.com": {
    "name": "Herman Cain",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Herman Cain publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/herman-cain"
  },
  "humansarefree.com": {
    "name": "Humans are Free",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Humans are Free publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/humans-are-free"
  },
  "humortimes.com": {
    "name": "Humor Times",
    "bias": ["satire"],
    "blurb": "Humor Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/humor-times"
  },
  "huzlers.com": {
    "name": "Huzlers",
    "bias": [
      "right bias", "satire"
    ],
    "blurb": "Huzlers uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/huzlers"
  },
  "ihavethetruth.com": {
    "name": "I Have the Truth",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "I Have the Truth publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/i-have-truth"
  },
  "www.ifyouonlynews.com": {
    "name": "If You Only News",
    "bias": [
      "conspiratorial", "editorial", "left bias", "political"
    ],
    "blurb": "If You Only News publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/if-you-only-news"
  },
  "www.illuminati-news.com": {
    "name": "Illuminati News",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Illuminati News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/illuminati-news"
  },
  "intrendtoday.com": {
    "name": "In Trend Today",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "In Trend Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/trend-today"
  },
  "www.infiniteunknown.net": {
    "name": "Infinite Unknown",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Infinite Unknown publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/infinite-unknown"
  },
  "informationclearinghouse.info": {
    "name": "Information Clearing House",
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "Information Clearing House publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/information-clearing-house"
  },
  "Infostormer.com": {
    "name": "Infostormer",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Infostormer publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/infostormer"
  },
  "www.infowars.com": {
    "name": "Infowars",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Infowars publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/infowars"
  },
  "www.intellihub.com": {
    "name": "IntelliHub",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "IntelliHub publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/intellihub"
  },
  "intrepidreport.com": {
    "name": "Intrepid Report",
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Intrepid Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/intrepid-report"
  },
  "investmentwatchblog.com": {
    "name": "Investment Watch Blog",
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Investment Watch Blog publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/investment-watch-blog"
  },
  "ironictimes.com": {
    "name": "Ironic Times",
    "bias": ["satire"],
    "blurb": "Ironic Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/ironic-times"
  },
  "islamicanews.com": {
    "name": "Islamica News",
    "bias": ["satire"],
    "blurb": "Islamica News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/islamica-news"
  },
  "www.israelislamandendtimes.com": {
    "name": "Israel Islam and End Times",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Israel Islam and End Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/israel-islam-and-end-times"
  },
  "jackpineradicals.com": {
    "name": "Jack Pine Radicals",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Jack Pine Radicals publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jack-pine-radicals"
  },
  "www.jacobinmag.com": {
    "name": "Jacobin",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Jacobin publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jacobin"
  },
  "janmorganmedia.com": {
    "name": "Jan Morgan Media",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Jan Morgan Media publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jan-morgan-media"
  },
  "www.jewsnews.co.il": {
    "name": "Jews News",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Jews News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jews-news"
  },
  "jezebel.com": {
    "name": "Jezebel",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Jezebel publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jezebel"
  },
  "www.johnnyrobish.com": {
    "name": "Johnny Robish",
    "bias": ["satire"],
    "blurb": "Johnny Robish uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/johnny-robish"
  },
  "jonesreport.com": {
    "name": "Jones Report",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "Jones Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/jones-report"
  },
  "kingworldnews.com": {
    "name": "King World News",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "King World News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/king-world-news"
  },
  "lewrockwell.com": {
    "name": "Lew Rockwell",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Lew Rockwell publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/lew-rockwell"
  },
  "www.liberalamerica.org": {
    "name": "Liberal America",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Liberal America publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberal-america"
  },
  "liberaldarkness.com": {
    "name": "Liberal Darkness",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Liberal Darkness publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberal-darkness"
  },
  "itaglive.com": {
    "name": "iTag Live",
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "iTag Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/itag-live"
  },
  "samuel-warde.com": {
    "name": "Liberals Unite",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Liberals Unite publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberals-unite"
  },
  "libertyblitzkrieg.com": {
    "name": "Liberty Blitzkrieg",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Liberty Blitzkrieg publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-blitzkrieg"
  },
  "libertymovementradio.com": {
    "name": "Liberty Movement Radio",
    "bias": [
      "political", "right bias"
    ],
    "blurb": "Liberty Movement Radio publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-movement-radio"
  },
  "libertynews.com": {
    "name": "Liberty News",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Liberty News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-news"
  },
  "": {
    "name": "Liberty Talk FM",
    "bias": [
      "editorial", "political", "right bias"
    ],
    "blurb": "Liberty Talk FM publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-talk-fm"
  },
  "libertyunyielding.com": {
    "name": "Liberty Unyielding",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "Liberty Unyielding publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-unyielding"
  },
  "libertyvideos.com": {
    "name": "Liberty Videos",
    "bias": [],
    "blurb": "Liberty Videos publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-videos"
  },
  "www.libertywritersnews.com": {
    "name": "Liberty Writers News",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Liberty Writers News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-writers-news"
  },
  "www.lifezette.com": {
    "name": "LifeZette",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "LifeZette publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/lifezette"
  },
  "www.liftable.com": {
    "name": "Liftable",
    "bias": [
      "editorial", "pseudoscience", "special interest"
    ],
    "blurb": "Liftable publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liftable"
  },
  "lushforlife.com": {
    "name": "Lush for Life",
    "bias": ["satire"],
    "blurb": "Lush for Life uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/lush-life"
  },
  "mpidailymagazine.com": {
    "name": "MPI Daily Magazine",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "MPI Daily Magazine publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mpi-daily-magazine"
  },
  "madworldnews.com": {
    "name": "Mad World News",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Mad World News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mad-world-news"
  },
  "makeamericagreattoday.com": {
    "name": "Make America Great Today",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Make America Great Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/make-america-great-today"
  },
  "mediamatters.org": {
    "name": "Media Matters",
    "bias": [
      "editorial", "left bias", "political", "special interest"
    ],
    "blurb": "Media Matters publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/media-matters"
  },
  "www.militianews.com": {
    "name": "Militia News",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Militia News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/militia-news"
  },
  "www.mirror.co.uk": {
    "name": "Mirror",
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Mirror publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mirror"
  },
  "moonofalabama.org": {
    "name": "Moon of Alabama",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Moon of Alabama publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/moon-alabama"
  },
  "www.morningledger.com": {
    "name": "Morning Ledger",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Morning Ledger publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/morning-ledger"
  },
  "www.motherjones.com": {
    "name": "Mother Jones",
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Mother Jones publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mother-jones"
  },
  "front.moveon.org": {
    "name": "Move On",
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Move On publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/move"
  },
  "mrconservative.com": {
    "name": "Mr. Conservative",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Mr. Conservative publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mr-conservative"
  },
  "myzonetoday.com": {
    "name": "MyZone Today",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "MyZone Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/myzone-today"
  },
  "nationonenews.com": {
    "name": "Nation One News",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Nation One News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/nation-one-news"
  },
  "www.nationofchange.org": {
    "name": "Nation of Change",
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "Nation of Change publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/nation-change"
  },
  "www.nationalinsiderpolitics.com": {
    "name": "National Insider Politics",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "National Insider Politics publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/national-insider-politics"
  },
  "nationalreport.net": {
    "name": "National Report",
    "bias": [
      "editorial", "political", "right bias", "satire"
    ],
    "blurb": "National Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/national-report"
  },
  "newcenturytimes.com": {
    "name": "New Century Times",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "New Century Times publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/new-century-times"
  },
  "news4ktla.com": {
    "name": "News 4",
    "bias": [
      "editorial", "pseudoscience", "satire"
    ],
    "blurb": "News 4 publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-4"
  },
  "www.newsbusters.org": {
    "name": "News Busters",
    "bias": [
      "conspiratorial",
      "editorial",
      "political",
      "pseudoscience",
      "right bias",
      "special interest"
    ],
    "blurb": "News Busters publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-busters"
  },
  "newscorpse.com": {
    "name": "News Corpse",
    "bias": [
      "editorial", "left bias", "political"
    ],
    "blurb": "News Corpse publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-corpse"
  },
  "newsmutiny.com": {
    "name": "Political Ears",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Political Ears publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-ears"
  },
  "newstarget.com": {
    "name": "News Target",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "News Target publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-target"
  },
  "newsthump.com": {
    "name": "News Thump",
    "bias": [
      "editorial", "political", "right bias", "satire"
    ],
    "blurb": "News Thump publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-thump"
  },
  "newswire-24.com": {
    "name": "News Wire 24",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "News Wire 24 publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-wire-24"
  },
  "newswithviews.com": {
    "name": "News With Views",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "News With Views publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-views"
  },
  "newsbiscuit.com": {
    "name": "NewsBiscuit",
    "bias": ["satire"],
    "blurb": "NewsBiscuit uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/newsbiscuit"
  },
  "newsbreakers.org": {
    "name": "NewsBreakers",
    "bias": ["satire"],
    "blurb": "NewsBreakers uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/newsbreakers"
  },
  "politicops.com": {
    "name": "Newslo",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Newslo aka Politicops.com uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/newslo"
  },
  "nodisinfo.com": {
    "name": "No Dis Info",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political"
    ],
    "blurb": "No Dis Info publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/no-dis-info"
  },
  "notallowedto.com": {
    "name": "Not Allowed To",
    "bias": [
      "conspiratorial", "inciteful", "political", "pseudoscience"
    ],
    "blurb": "Not Allowed To publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/not-allowed"
  },
  "www.nowtheendbegins.com": {
    "name": "Now The End Begins",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Now The End Begins publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/now-end-begins"
  },
  "now8news.com": {
    "name": "Now8News.com",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Now 8 News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/now8newscom"
  },
  "occupydemocrats.com": {
    "name": "Occupy Democrats",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Occupy Democrats publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/occupy-democrats"
  },
  "onlineconservativepress.com": {
    "name": "Online Conservative Press",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Online Conservative Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/online-conservative-press"
  },
  "www.pakalertpress.com": {
    "name": "Pak Alert Press",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Pak Alert Press publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/pak-alert-press"
  },
  "patdollard.com": {
    "name": "Pat Dollard",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Pat Dollard publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/pat-dollard"
  },
  "patriotupdate.com": {
    "name": "Patriot Update",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Patriot Update publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/patriot-update"
  },
  "politicalblindspot.com": {
    "name": "Political Blind Spot",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "satire"
    ],
    "blurb": "Political Blind Spot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-blind-spot"
  },
  "politicalreviewer.com": {
    "name": "Political Reviewer",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Political Reviewer publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-reviewer"
  },
  "politicalupdater.com": {
    "name": "Political Updater",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Political Updater publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-updater"
  },
  "politicalvelcraft.org": {
    "name": "Political Vel Craft",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Political Vel Craft publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-vel-craft"
  },
  "www.politicususa.com": {
    "name": "Politics USA",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Politics USA publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/politics-usa"
  },
  "www.pravdareport.com": {
    "name": "Pravda Report",
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "Pravda Report publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/pravda-report"
  },
  "presstv.ir": {
    "name": "Press TV",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Press TV publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/press-tv"
  },
  "www.prisonplanet.com": {
    "name": "Prison Planet",
    "bias": [
      "conspiratorial", "editorial", "pseudoscience", "right bias"
    ],
    "blurb": "Prison Planet publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/prison-planet"
  },
  "private-eye.co.uk": {
    "name": "Private Eye",
    "bias": [
      "editorial", "political", "right bias", "satire"
    ],
    "blurb": "Private Eye uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/private-eye"
  },
  "prntly.com": {
    "name": "Prntly | America's Top News",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Prntly | America's Top News Site publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/prntly-americas-top-news-site"
  },
  "www.proudcons.com": {
    "name": "Proud Conservative",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Proud Conservative publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/proud-conservative"
  },
  "qpolitical.com": {
    "name": "Q Political",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Q Political publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/q-political"
  },
  "www.rawstory.com": {
    "name": "Raw Story",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Raw Story publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/raw-story"
  },
  "readconservatives.news": {
    "name": "Read Conservatives",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Read Conservatives publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/read-conservatives"
  },
  "reagancoalition.com": {
    "name": "Reagan Coalition",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Reagan Coalition publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/reagan-coalition"
  },
  "realnewsrightnow.com": {
    "name": "Real News Right Now",
    "bias": ["editorial"],
    "blurb": "Real News Right Now publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/real-news-right-now"
  },
  "realtimepolitics.com": {
    "name": "Real Time Politics",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "Real Time Politics publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/real-time-politics"
  },
  "www.redflagnews.com": {
    "name": "Red Flag News",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Red Flag News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/red-flag-news"
  },
  "redstatewatcher.com": {
    "name": "Red State Watcher",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Red State Watcher publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/red-state-watcher"
  },
  "www.rense.com": {
    "name": "Rense",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Rense publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rense"
  },
  "www.revolutions2040.com": {
    "name": "Revos.2040",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Revos.2040 publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/revos2040"
  },
  "www.rt.com": {
    "name": "RT - Russia Today",
    "bias": [
      "conspiratorial", "left bias", "political"
    ],
    "blurb": "RT - Russia Today  publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rt-russia-today"
  },
  "rightalerts.com": {
    "name": "Right Alerts",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Right Alerts publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/right-alerts"
  },
  "rightwingnews.com": {
    "name": "Right Wing News",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Right Wing News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/right-wing-news"
  },
  "rilenews.com": {
    "name": "Rile News",
    "bias": [],
    "blurb": "Rile News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rile-news"
  },
  "rockcitytimes.com": {
    "name": "Rock City Times",
    "bias": [
      "political", "right bias", "satire"
    ],
    "blurb": "Rock City Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rock-city-times"
  },
  "rumormillnews.com": {
    "name": "Rumor Mill News",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Rumor Mill News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rumor-mill-news"
  },
  "ruptly.tv": {
    "name": "Ruptly",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Ruptly publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/ruptly"
  },
  "russia-direct.org": {
    "name": "Russia Direct",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Russia Direct publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/russia-direct"
  },
  "www.shtfplan.com": {
    "name": "SHTF Plan",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "SHTF Plan publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/shtf-plan"
  },
  "satirewire.com": {
    "name": "SatireWire",
    "bias": ["satire"],
    "blurb": "SatireWire uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/satirewire"
  },
  "scrappleface.com": {
    "name": "ScrappleFace",
    "bias": ["satire"],
    "blurb": "ScrappleFace uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/scrappleface"
  },
  "www.secretsofthefed.com": {
    "name": "Secrets of The Fed",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Secrets of The Fed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/secrets-fed"
  },
  "www.sheepkillers.com": {
    "name": "Sheep Killers",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "special interest"
    ],
    "blurb": "Sheep Killers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/sheep-killers"
  },
  "shoebat.com": {
    "name": "Walid Shoebat",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Walid Shoebat publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/walid-shoebat"
  },
  "sott.net": {
    "name": "Signs of The Times",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "Signs of The Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/signs-times"
  },
  "skeptiko.com": {
    "name": "Skeptiko",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "special interest"
    ],
    "blurb": "Skeptiko publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/skeptiko"
  },
  "sputniknews.com": {
    "name": "Sputnik News",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Sputnik Newspublishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/sputnik-news"
  },
  "stneotscitizen.com": {
    "name": "St Neots Citizen",
    "bias": ["satire"],
    "blurb": "St Neots Citizen uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/st-neots-citizen"
  },
  "stormcloudsgathering.com": {
    "name": "Storm Clouds Gathering",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "Storm Clouds Gathering publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/storm-clouds-gathering"
  },
  "stuppid.com": {
    "name": "Stuppid",
    "bias": ["satire"],
    "blurb": "Stuppid uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/stuppid"
  },
  "www.subjectpolitics.com": {
    "name": "Subject: Politics",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Subject: Politics publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/subject-politics"
  },
  "supremepatriot.com": {
    "name": "Supreme Patriot",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Supreme Patriot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/supreme-patriot"
  },
  "www.surrealscoop.com": {
    "name": "Surreal Scoop",
    "bias": ["satire"],
    "blurb": "Surreal Scoop uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/surreal-scoop"
  },
  "theamericanindependent.wordpress.com": {
    "name": "The American Independent",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The American Independent publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/american-independent"
  },
  "www.thebeaverton.com": {
    "name": "The Beaverton",
    "bias": ["satire"],
    "blurb": "The Beaverton publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/beaverton"
  },
  "thebostontribune.com": {
    "name": "The Boston Tribune",
    "bias": [
      "conspiratorial", "editorial", "political"
    ],
    "blurb": "The Boston Tribune publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/boston-tribune"
  },
  "www.thecommonsenseshow.com": {
    "name": "The Common Sense Show",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "The Common Sense Show publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/common-sense-show"
  },
  "www.thecontroversialfiles.net": {
    "name": "The Controversial Files",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "The Controversial Files publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/controversial-files"
  },
  "corbettreport.com": {
    "name": "The Corbett Report",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Corbett Report publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/corbett-report"
  },
  "www.thedailybeast.com": {
    "name": "The Daily Beast",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "The Daily Beast publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-beast"
  },
  "dailycaller.com": {
    "name": "The Daily Caller",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Daily Caller publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-caller"
  },
  "dailydiscord.com": {
    "name": "The Daily Discord",
    "bias": ["satire"],
    "blurb": "The Daily Discord uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-discord"
  },
  "www.thedailymash.co.uk": {
    "name": "The Daily Mash",
    "bias": ["satire"],
    "blurb": "The Daily Mash uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-mash"
  },
  "www.thedailysheeple.com": {
    "name": "The Daily Sheeple",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "The Daily Sheeple publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-sheeple"
  },
  "www.dailysquib.co.uk": {
    "name": "The Daily Squib",
    "bias": ["satire"],
    "blurb": "The Daily Squib uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-squib"
  },
  "www.dailystormer.com": {
    "name": "The Daily Stormer",
    "bias": [
      "conspiratorial", "inciteful", "political", "right bias"
    ],
    "blurb": "The Daily Stormer publishes information that cannot be validated and that may be anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/daily-stormer"
  },
  "thedailywtf.com": {
    "name": "The Daily WTF",
    "bias": ["satire"],
    "blurb": "The Daily WTF uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/daily-wtf"
  },
  "dandygoat.com": {
    "name": "The Dandy Goat",
    "bias": ["satire"],
    "blurb": "The Dandy Goat uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/dandy-goat"
  },
  "theduran.com": {
    "name": "The Duran",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Duran publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/duran"
  },
  "www.eutimes.net": {
    "name": "The European Union Times",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The European Union Times publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/european-union-times"
  },
  "www.theeventchronicle.com": {
    "name": "The Event Chronicle",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Event Chronicle publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/event-chronicle"
  },
  "thefederalistpapers.org": {
    "name": "The Federalist Papers",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Federalist Papers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/federalist-papers"
  },
  "www.theforbiddenknowledge.com": {
    "name": "The Forbidden Knowledge",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Forbidden Knowledge publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/forbidden-knowledge"
  },
  "4threvolutionarywar.wordpress.com": {
    "name": "The Fourth Revolutionary War",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "The Fourth Revolutionary War publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/fourth-revolutionary-war"
  },
  "thefreepatriot.org": {
    "name": "The Free Patriot",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Free Patriot publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/free-patriot"
  },
  "thefreethoughtproject.com": {
    "name": "The Free Thought Project",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "left bias", "political"
    ],
    "blurb": "The Free Thought Project publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/free-thought-project"
  },
  "www.thegatewaypundit.com": {
    "name": "The Gateway Pundit",
    "bias": [
      "conspiratorial", "political", "pseudoscience", "right bias", "war"
    ],
    "blurb": "The Gateway Pundit publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/gateway-pundit"
  },
  "greanvillepost.com": {
    "name": "The Greanville Post",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "The Greanville Post publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/greanville-post"
  },
  "theineptowl.com": {
    "name": "The Inept Owl",
    "bias": ["satire"],
    "blurb": "The Inept Owl uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/inept-owl"
  },
  "chronicle.su": {
    "name": "The Internet Chronicle",
    "bias": [],
    "blurb": "The Internet Chronicle publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/internet-chronicle"
  },
  "kkk.com": {
    "name": "The Knights Party",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "The Knights Party publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/knights-party"
  },
  "thelapine.ca": {
    "name": "The Lapine",
    "bias": ["satire"],
    "blurb": "The Lapine publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/lapine"
  },
  "thelastgreatstand.com": {
    "name": "The Last Great Stand",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "The Last Great Stand publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/last-great-stand"
  },
  "www.thelibertybeacon.com": {
    "name": "The Liberty Beacon",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Liberty Beacon publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/liberty-beacon"
  },
  "themadisonmisnomer.com": {
    "name": "The Madison Misnomer",
    "bias": ["satire"],
    "blurb": "The Madison Misnomer  uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/madison-misnomer"
  },
  "themindunleashed.org": {
    "name": "The Mind Unleashed",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "special interest"
    ],
    "blurb": "The Mind Unleashed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/mind-unleashed"
  },
  "themuslimissue.wordpress.com": {
    "name": "The Muslim Issue",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Muslim Issue publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/muslim-issue"
  },
  "thenewinquiry.com": {
    "name": "The New Inquiry",
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "The New Inquiry publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/new-inquiry"
  },
  "thenewsnerd.com": {
    "name": "The News Nerd",
    "bias": [
      "editorial", "right bias", "satire"
    ],
    "blurb": "The News Nerd publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/news-nerd"
  },
  "www.theonion.com": {
    "name": "The Onion",
    "bias": [
      "editorial", "satire"
    ],
    "blurb": "The Onion publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/onion"
  },
  "www.westernjournalism.com/thepoint/": {
    "name": "The Point",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Point publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/point"
  },
  "thepoke.co.uk": {
    "name": "The Poke",
    "bias": ["satire"],
    "blurb": "The Poke uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/poke"
  },
  "politicalcult.com": {
    "name": "The Political Cult",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Political Cult publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-cult"
  },
  "www.thepoliticalinsider.com": {
    "name": "The Political Insider",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Political Insider publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/political-insider"
  },
  "theracketreport.com": {
    "name": "The Racket Report",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Racket Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/racket-report"
  },
  "therealstrategy.com": {
    "name": "The Real Strategy",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Real Strategy publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/real-strategy"
  },
  "therightists.com": {
    "name": "The Rightists",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Rightists publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/rightists"
  },
  "therundownlive.com": {
    "name": "The Run Down Live",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "The RunDown Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/run-down-live"
  },
  "www.sensationalisttimes.com": {
    "name": "The Sensationalist Times",
    "bias": ["satire"],
    "blurb": "The Sensationalist Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/sensationalist-times"
  },
  "www.theshovel.com.au": {
    "name": "The Shovel",
    "bias": [
      "political", "pseudoscience", "satire"
    ],
    "blurb": "The Shovel publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/shovel"
  },
  "theskunk.org": {
    "name": "The Skunk",
    "bias": ["satire"],
    "blurb": "The Skunk uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/skunk"
  },
  "thespoof.com": {
    "name": "The Spoof",
    "bias": [],
    "blurb": "The Spoof uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/spoof"
  },
  "thetimesoftheworld.com": {
    "name": "The Times of The World",
    "bias": ["satire"],
    "blurb": "The Times of The World uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/times-world"
  },
  "thetruthdivision.com": {
    "name": "The Truth Division",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Truth Division publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-division"
  },
  "www.thetruthseeker.co.uk": {
    "name": "The Truthseeker",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "pseudoscience"
    ],
    "blurb": "The Truthseeker publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truthseeker"
  },
  "theuspatriot.com": {
    "name": "The US Patriot",
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/us-patriot"
  },
  "theunrealtimes.com": {
    "name": "The UnReal Times",
    "bias": ["satire"],
    "blurb": "The UnReal Times uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/unreal-times"
  },
  "thevalleyreport.com": {
    "name": "The Valley Report",
    "bias": ["satire"],
    "blurb": "The Valley Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/valley-report"
  },
  "vigilantcitizen.com": {
    "name": "The Vigilant Citizen",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "The Vigilant Citizen publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/vigilant-citizen"
  },
  "freebeacon.com": {
    "name": "The Washington Free Beacon",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "The Washington Free Beacon publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/washington-free-beacon"
  },
  "thewatchtowers.com": {
    "name": "The Watch Towers",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "The Watch Towers publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/watch-towers"
  },
  "threepercenternation.com": {
    "name": "Three Percenter Nation",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Three Percenter Nation publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/three-percenter-nation"
  },
  "toprightnews.com": {
    "name": "Top Right News",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Top Right News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/top-right-news"
  },
  "TopInfoPost.com": {
    "name": "TopInfo Post",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "war"
    ],
    "blurb": "TopInfo Post publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/topinfo-post"
  },
  "topekasnews.com": {
    "name": "Topeka News",
    "bias": ["satire"],
    "blurb": "Topeka News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/topeka-news"
  },
  "www.trueactivist.com": {
    "name": "True Activist",
    "bias": [
      "left bias", "political"
    ],
    "blurb": "True Activist publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/true-activist"
  },
  "truepundit.com": {
    "name": "True Pundit",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "True Pundit publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/true-pundit"
  },
  "truthbroadcastnetwork.com": {
    "name": "Truth Broadcast Network",
    "bias": [
      "conspiratorial", "editorial", "political", "right bias"
    ],
    "blurb": "Truth Broadcast Network publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-broadcast-network"
  },
  "truthfeed.com": {
    "name": "Truth Feed",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Truth Feed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-feed"
  },
  "www.truthandaction.org": {
    "name": "Truth and Action",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Truth and Action publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-and-action"
  },
  "truthfrequencyradio.com": {
    "name": "Truth Frequency Radio",
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/truth-frequency-radio"
  },
  "truthkings.com": {
    "name": "Truth Kings",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Truth Kings publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/truth-kings"
  },
  "twitchy.com": {
    "name": "Twitchy",
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "Twitchy publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/twitchy"
  },
  "ushealthyadvisor.com": {
    "name": "US Advisor",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "US Advisor publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-advisor"
  },
  "uschronicle.com": {
    "name": "US Chronicle",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "US Chronicle publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-chronicle"
  },
  "www.uspoliticslive.com": {
    "name": "US Politics Live",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "US Politics Live publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-politics-live"
  },
  "usuncut.com": {
    "name": "US Uncut",
    "bias": [
      "conspiratorial", "inciteful", "left bias", "political"
    ],
    "blurb": "US Uncut publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/us-uncut"
  },
  "usahitman.com": {
    "name": "USA Hitman",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias"
    ],
    "blurb": "USA Hitman publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-hitman"
  },
  "www.usanewsinsider.com": {
    "name": "USA News Insider",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "USA News Insider publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-news-insider"
  },
  "usanewsflash.com": {
    "name": "USA Newsflash",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "USA Newsflash publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-newsflash"
  },
  "www.usasupreme.com": {
    "name": "USA Supreme",
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "USA Supreme publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/usa-supreme"
  },
  "unclesamsmisguidedchildren.com": {
    "name": "Uncle Sams Misguided Children",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "Uncle Sams Misguided Children publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/uncle-sams-misguided-children"
  },
  "unconfirmedsources.com": {
    "name": "Unconfirmed Sources",
    "bias": [],
    "blurb": "Unconfirmed Sources uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/unconfirmed-sources"
  },
  "undergroundworldnews.com": {
    "name": "Underground World News",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "Underground World News publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/underground-world-news"
  },
  "www.veteranstoday.com": {
    "name": "Veterans Today",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "pseudoscience",
      "right bias",
      "war"
    ],
    "blurb": "Veterans Today publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/veterans-today"
  },
  "viralliberty.com": {
    "name": "Viral Liberty",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Viral Liberty publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/viral-liberty"
  },
  "wnd.com": {
    "name": "WND – WorldNetDaily",
    "bias": [
      "conspiratorial", "editorial", "inciteful", "political", "right bias"
    ],
    "blurb": "WND – WorldNetDaily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/wnd-%E2%80%93-worldnetdaily"
  },
  "www.washingtonexaminer.com": {
    "name": "Washington Examiner",
    "bias": [
      "conspiratorial", "political", "right bias"
    ],
    "blurb": "Washington Examiner publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/washington-examiner"
  },
  "waterfordwhispersnews.com": {
    "name": "Waterford Whispers News",
    "bias": ["satire"],
    "blurb": "Waterford Whispers News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/waterford-whispers-news"
  },
  "wearechange.org": {
    "name": "We Are Change",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "We Are Change publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/we-are-change"
  },
  "www.webdaily.com": {
    "name": "WebDaily",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "WebDaily publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/webdaily"
  },
  "weeklyworldnews.com": {
    "name": "Weekly World News",
    "bias": [],
    "blurb": "Weekly World News uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/weekly-world-news"
  },
  "www.whatdoesitmean.com": {
    "name": "What Does It Mean",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience", "right bias"
    ],
    "blurb": "What Does It Mean publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/what-does-it-mean"
  },
  "whatreallyhappened.com": {
    "name": "What Really Happened",
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "What Really Happened publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/what-really-happened"
  },
  "whitepower.com": {
    "name": "White Power",
    "bias": [
      "conspiratorial",
      "editorial",
      "inciteful",
      "political",
      "right bias",
      "war"
    ],
    "blurb": "White Power publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/white-power"
  },
  "whowhatwhy.org": {
    "name": "Who.What.Why",
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/whowhatwhy"
  },
  "winningdemocrats.com": {
    "name": "Winning Democrats",
    "bias": [
      "conspiratorial", "inciteful", "left bias", "political"
    ],
    "blurb": "Winning Democrats publishes information from a left biased position with an advocacy for liberal causes. The editorial content and headlines are often loaded with strong words to appeal to emotions and stereotypes. They may publish misleading reports, cite unverified sources, reference bogus reports and omit information that may damage their cause. The information provided should be regarded as speculative opinion and/or propaganda. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/winning-democrats"
  },
  "witscience.org": {
    "name": "Wit Science",
    "bias": [],
    "blurb": "",
    "subUrl": "/fake-news-source/wit-science"
  },
  "wonkie.com": {
    "name": "Wonkie",
    "bias": ["satire"],
    "blurb": "Wonkie uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/wonkie"
  },
  "worldnewsdailyreport.com": {
    "name": "World News Daily Report",
    "bias": [],
    "blurb": "World News Daily Report uses satire and fictionalizes accounts of current events in a mock-journalistic style. Readers should read text carefully to catch the clues and disclaimers and context of the articles published here. Shared stories can quickly become viral and the origins are obscured, contributing to the likelihood that they will be mistaken for fact. Remember to check your sources and that this publisher represents themselves as a satirical source (fake) of information.",
    "subUrl": "/fake-news-source/world-news-daily-report"
  },
  "worldtruth.tv": {
    "name": "World Truth",
    "bias": [
      "conspiratorial", "editorial", "political", "pseudoscience"
    ],
    "blurb": "World Truth publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/world-truth"
  },
  "www.yesimright.com": {
    "name": "Yes I’m Right",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Yes I’m Right publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/yes-i%E2%80%99m-right"
  },
  "yournewswire.com": {
    "name": "Your News Wire",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Your News Wire publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/your-news-wire"
  },
  "www.zerohedge.com": {
    "name": "Zero Hedge",
    "bias": [
      "conspiratorial", "political", "pseudoscience"
    ],
    "blurb": "Zero Hedge publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/zero-hedge"
  },
  "www.zootfeed.com": {
    "name": "Zoot Feed",
    "bias": [
      "conspiratorial", "political"
    ],
    "blurb": "Zoot Feed publishes information that cannot be validated and that is anti scientific fact. The information provided should be regarded as speculative opinion or propaganda and cannot be substantiated by fact or evidence. It is among the most untrustworthy sources in the media.",
    "subUrl": "/fake-news-source/zoot-feed"
  }
}
