import * as z from './z.mjs';

const metaTitle = ["meta", {name: "title", "content": "Makers of Kerala: Uniting product makers all over Kerala, India"}];

const metaDesc = ["meta", {name: "description", content: "A website to unite the daring makers in the digital domain all across the Kerala, India. Makers of Kerala is designed as a platform that catalogues the team, stack, and chronicles the timeline of startups from Kerala. It's overarching goal is to chronicle the unfolding narrative of the startup scene of Kerala."}];

const metaCharset = ["meta", {charset: "utf-8"}];

const metaViewport = ["meta", {name: "viewport", content: "width=device-width, initial-scale=1"}];

const og = (props) => Object.entries(props).map(([k,v]) => ["meta", {property: `og:${k}`, content: `${v}`}]);

const twitter = (props) => Object.entries(props).map(([k,v]) => ["meta", {name: `twitter:${k}`, content: `${v}`}]);

const gscriptLink = ["script", {async: true, src:"https://www.googletagmanager.com/gtag/js?id=UA-128502139-1"}];

const gtag = ["script", `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-128502139-1');`];

const googleFontsLink = ["link", {href: "https://fonts.googleapis.com/css?family=Work+Sans:400,600", rel:"stylesheet"}];

const gscript = ["script", {type:"text/javascript"}, `(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments, 0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]); mixpanel.init("ac700408df9bb39046077dc25adad61a");`];

const openGraphTags = og({url: "https://makersofkerala.com/",
			  title: "Makers of Kerala: Uniting makers in Gods' own country",
			  type: "website",
			  description: "Makers of Kerala is a catalogue the team, stack, and chronicles the timeline of startups from Kerala. It's overarching goal is to chronicle the unfolding narrative of the startup scene of Kerala.",
			  image: "https://makersofkerala.com/meta-card.png"});

const twitterTags = twitter({"card": "summary_large_image", creator: "@studiobofa"});

const page = products => ["div.product-section",

                         ["div.logo products-section-logo",["img", {alt: "Makers of Kerala Logo", src: "/logo2.svg"}],
												 ["h1.products-heading", ["span.light","Makers"], ["em","of"], "Kerala"]],
												 ["ul",
												 ["li.product-card",
											   ["div.product-block",
												 ["div.product-logo", ["img", {src: "/product-logo.png"}]],
											 	 ["div.product-details", ["div.product-name", "Market Fox"], ["div.product-description", "Stashy of List is a curated list of useful tools"]],],
											   ["div.product-makers", ["div.maker-label", "Makers"], ["div.makers-images", ["img", {src: "/avatar1.png"}], ["img", {src: "/avatar2.png"}], ]],
											   ]]];

const website = (products) => z.doc([metaTitle, metaDesc, metaCharset, metaViewport,
				     ...openGraphTags, ...twitterTags,
				     ["link", {rel: "shortcut icon", type: "image/png", href: "/favicon-16.png", sizes: "16x16"}],
				     ["link", {rel: "shortcut icon", type: "image/png", href: "/favicon-32.png", sizes: "32x32"}],
				     gscriptLink, gtag, gscript,
				     ["title", "Makers of Kerala - Products"],
				     googleFontsLink, z.css("/ui.css"),
				     ["script", {src: "ui.js", type: "text/javascript"}]], [page(products)]);

export { website };
