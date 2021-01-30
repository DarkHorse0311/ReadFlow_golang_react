// Code generated by go generate; DO NOT EDIT.
// This file was auto generated at 2021-01-30 10:03:29.856720288 +0000 GMT m=+0.111066794
// using data from https://oembed.com/providers.json
package oembed

var Providers = []Provider{{Name: "Codepen", URL: "https://codepen.io", Endpoints: []Endpoint{{Discovery: false, URL: "https://codepen.io/api/oembed", Schemes: []string{"http://codepen.io/*", "https://codepen.io/*"}}}}, {Name: "Dailymotion", URL: "https://www.dailymotion.com", Endpoints: []Endpoint{{Discovery: true, URL: "https://www.dailymotion.com/services/oembed", Schemes: []string{"https://www.dailymotion.com/video/*"}}}}, {Name: "Deviantart.com", URL: "http://www.deviantart.com", Endpoints: []Endpoint{{Discovery: false, URL: "http://backend.deviantart.com/oembed", Schemes: []string{"http://*.deviantart.com/art/*", "http://*.deviantart.com/*#/d*", "http://fav.me/*", "http://sta.sh/*", "https://*.deviantart.com/art/*", "https://*.deviantart.com/*/art/*", "https://sta.sh/*\",", "https://*.deviantart.com/*#/d*\""}}}}, {Name: "Facebook", URL: "https://www.facebook.com/", Endpoints: []Endpoint{{Discovery: false, URL: "https://graph.facebook.com/v9.0/oembed_post", Schemes: []string{"https://www.facebook.com/*/posts/*", "https://www.facebook.com/*/activity/*", "https://www.facebook.com/photo.php?fbid=*", "https://www.facebook.com/photos/*", "https://www.facebook.com/permalink.php?story_fbid=*", "https://www.facebook.com/media/set?set=*", "https://www.facebook.com/questions/*", "https://www.facebook.com/notes/*/*/*"}}, {Discovery: false, URL: "https://graph.facebook.com/v9.0/oembed_video", Schemes: []string{"https://www.facebook.com/*/videos/*", "https://www.facebook.com/video.php?id=*", "https://www.facebook.com/video.php?v=*"}}, {Discovery: false, URL: "https://graph.facebook.com/v9.0/oembed_page", Schemes: []string{"https://www.facebook.com/*"}}}}, {Name: "Flickr", URL: "https://www.flickr.com/", Endpoints: []Endpoint{{Discovery: true, URL: "https://www.flickr.com/services/oembed/", Schemes: []string{"http://*.flickr.com/photos/*", "http://flic.kr/p/*", "https://*.flickr.com/photos/*", "https://flic.kr/p/*"}}}}, {Name: "Instagram", URL: "https://instagram.com", Endpoints: []Endpoint{{Discovery: false, URL: "https://graph.facebook.com/v9.0/instagram_oembed", Schemes: []string{"http://instagram.com/*/p/*,", "http://www.instagram.com/*/p/*,", "https://instagram.com/*/p/*,", "https://www.instagram.com/*/p/*,", "http://instagram.com/p/*", "http://instagr.am/p/*", "http://www.instagram.com/p/*", "http://www.instagr.am/p/*", "https://instagram.com/p/*", "https://instagr.am/p/*", "https://www.instagram.com/p/*", "https://www.instagr.am/p/*", "http://instagram.com/tv/*", "http://instagr.am/tv/*", "http://www.instagram.com/tv/*", "http://www.instagr.am/tv/*", "https://instagram.com/tv/*", "https://instagr.am/tv/*", "https://www.instagram.com/tv/*", "https://www.instagr.am/tv/*"}}, {Discovery: false, URL: "https://api.instagram.com/oembed", Schemes: []string{"http://instagram.com/*/p/*,", "http://www.instagram.com/*/p/*,", "https://instagram.com/*/p/*,", "https://www.instagram.com/*/p/*,", "http://instagram.com/p/*", "http://instagr.am/p/*", "http://www.instagram.com/p/*", "http://www.instagr.am/p/*", "https://instagram.com/p/*", "https://instagr.am/p/*", "https://www.instagram.com/p/*", "https://www.instagr.am/p/*", "http://instagram.com/tv/*", "http://instagr.am/tv/*", "http://www.instagram.com/tv/*", "http://www.instagr.am/tv/*", "https://instagram.com/tv/*", "https://instagr.am/tv/*", "https://www.instagram.com/tv/*", "https://www.instagr.am/tv/*"}}}}, {Name: "SlideShare", URL: "http://www.slideshare.net/", Endpoints: []Endpoint{{Discovery: true, URL: "https://www.slideshare.net/api/oembed/2", Schemes: []string{"https://www.slideshare.net/*/*", "http://www.slideshare.net/*/*", "https://fr.slideshare.net/*/*", "http://fr.slideshare.net/*/*", "https://de.slideshare.net/*/*", "http://de.slideshare.net/*/*", "https://es.slideshare.net/*/*", "http://es.slideshare.net/*/*", "https://pt.slideshare.net/*/*", "http://pt.slideshare.net/*/*"}}}}, {Name: "SoundCloud", URL: "http://soundcloud.com/", Endpoints: []Endpoint{{Discovery: false, URL: "https://soundcloud.com/oembed", Schemes: []string{"http://soundcloud.com/*", "https://soundcloud.com/*", "https://soundcloud.app.goog.gl/*"}}}}, {Name: "Spotify", URL: "https://spotify.com/", Endpoints: []Endpoint{{Discovery: false, URL: "https://embed.spotify.com/oembed/", Schemes: []string{"https://*.spotify.com/*", "spotify:*"}}}}, {Name: "Tumblr", URL: "https://www.tumblr.com", Endpoints: []Endpoint{{Discovery: false, URL: "https://www.tumblr.com/oembed/1.0", Schemes: []string{"https://*.tumblr.com/post/*"}}}}, {Name: "Twitter", URL: "http://www.twitter.com/", Endpoints: []Endpoint{{Discovery: false, URL: "https://publish.twitter.com/oembed", Schemes: []string{"https://twitter.com/*/status/*", "https://*.twitter.com/*/status/*", "https://twitter.com/*/moments/*", "https://*.twitter.com/*/moments/*"}}}}, {Name: "Vimeo", URL: "https://vimeo.com/", Endpoints: []Endpoint{{Discovery: true, URL: "https://vimeo.com/api/{format}", Schemes: []string{"https://vimeo.com/*", "https://vimeo.com/album/*/video/*", "https://vimeo.com/channels/*/*", "https://vimeo.com/groups/*/videos/*", "https://vimeo.com/ondemand/*/*", "https://player.vimeo.com/video/*"}}}}, {Name: "YouTube", URL: "https://www.youtube.com/", Endpoints: []Endpoint{{Discovery: true, URL: "https://www.youtube.com/oembed", Schemes: []string{"https://*.youtube.com/watch*", "https://*.youtube.com/v/*", "https://youtu.be/*"}}}}}