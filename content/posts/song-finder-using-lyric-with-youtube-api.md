+++
author = "Alvernood"
title = 'Song Finder using Youtube API'
date = 2023-03-14T00:26:03+07:00
draft = false
description = ''
tags = ['js', 'api']
categories = ['']
diagram = false
math = false
_build = {list = "always"}
cascade = {_build = {list = "never"}}
+++

> Application Programming Interface, is a set of protocols, routines, and tools for building software applications. Essentially, an API specifies how different software components should interact with each other, and it allows developers to access and manipulate the functionality and data of a particular software system or service.

`TL;DR`, gue kepikiran pake API youtube buat nampilin hasil search pake javascript trus gue mau hasilnya _tar_ yang keluar adalah adalah kategori musik (bukan _video vlog/podcast or other_) + link, terus ntar tinggal gue kembangin

**youtube.js**
```Javascript
// API_key
const apiKey = 'api_key'; 

// Keywords 
const searchQuery = 'ngopi ngopi ngopi ngopi mazzeh'; 

// Country-id, (ID) dibawah stand for Indonesia, sebenernya ga terlalu ngaruh sih, gue ganti2 resultnya ga beda jauh, but i keep it still
const countryCode = 'ID'; 

// HTTP Request ke data api
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&videoCategoryId=10&regionCode=${countryCode}&key=${apiKey}`) 
.then(response => response.json()) 
.then(data => { 

// Extract the titles
const titles = data.items.map(item => item.snippet.title); 

// Print the titles result
console.log(titles); 
}) 

// Error log
.catch(error => { 
console.error(error); 
}); 
```
_btw_ konten musik diyoutube pake kode kategori 10
`&videoCategoryId=10` di line 11
```javascript
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&videoCategoryId=10&regionCode=${countryCode}&key=${apiKey}`) 
```
disini gw `run` pake 3 `query` berbeda, just to make sure
* _ngopi ngopi ngopi ngopi mazzeh_
* _tak cukup untuk dirimu_
* _so mature_

so far, smooth af
![query result](/img/test-api-lyric.png)

sampe sini gue mau istirahat dulu.

## Update #1
It appears that Youtube may have implemented limits on API usage. These limitations have made it harder for me to complete this thing, so I may have to wait until the issue is resolved. However, I need to understand how Youtube regulates their API usage to ensure that I am following the rules and best practices.
![yt-lyric-update](/img/test-api-update.png)

## Update #2
So the problem is that a bot crawler may have accessed my API, which was left widely open on my github repository. As a result, my query quota has been maxed out at 10k. I remember setting a restriction to limit key usage requests to specific websites, but I accidentally removed it while testing on localhost, which led to the issue.


![max-quota](/img/max-quota.png)

---
## Update #3 Final

Update update update  > __youtube.js__

```javascript
// Wait for the document to finish loading before running the script
document.addEventListener('DOMContentLoaded', function() {

// Store the API key for the YouTube API
const apiKey = 'YOUTUBE_API_KEY';

// Get the search form and search query input element
const form = document.querySelector('#search-form');
const searchQueryInput = document.querySelector('#search-query');

// Listen for a form submission event and prevent the default behavior
form.addEventListener('submit', event => {
event.preventDefault();

// Get the search query entered by the user
const searchQuery = searchQueryInput.value;

// Make an API request to search for videos using the entered search query and API key
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&videoCategoryId=10&key=${apiKey}`)
.then(response => response.json()) // Parse the response as JSON
.then(data => {

// Handle errors from the API request
if (data.error && data.error.code === 403 && data.error.errors[0].reason === 'dailyLimitExceeded') {

// Display an error message to the user when the API daily limit has been exceeded
const resultContainer = document.createElement('div');
resultContainer.textContent = 'YouTube API daily limit has been exceeded. Please try again tomorrow.';
document.querySelector('#results-container').appendChild(resultContainer);
} else {

// Parse the results from the API response and create an array of objects for each video
const results = data.items.map((item, index) => {
const title = item.snippet.title.length > 40
? item.snippet.title.slice(0, 40) + "..."
: item.snippet.title;
const videoId = item.id.videoId;
const link = `https://www.youtube.com/watch?v=${videoId}`;
return { title, link, index };
});

// Create a container element to hold the search results
const resultContainer = document.createElement('div');
resultContainer.style.marginTop = '30px';

if (results.length === 0) {

// Display a message when there are no search results
const noResultsMessage = document.createElement('p');
noResultsMessage.textContent = 'No results found.';
resultContainer.appendChild(noResultsMessage);
} else {

// Display the search results for each video
document.querySelector('#results-container').innerHTML = ""; // Clear previous search results
results.forEach(result => {
const resultDiv = document.createElement('div');
const titleLink = document.createElement('a');
titleLink.href = result.link;
titleLink.target = '_blank';
titleLink.textContent = `${result.index + 1}. ${result.title}`; // Add number to title
resultDiv.appendChild(titleLink);
resultDiv.appendChild(document.createElement('br'));
resultContainer.appendChild(resultDiv);
});
}

// Replace or create the result container element in the HTML document
const existingResultContainer = document.querySelector('#result-container');
if (existingResultContainer) {
existingResultContainer.replaceWith(resultContainer);
} else {
resultContainer.id = 'result-container';
document.querySelector('#results-container').appendChild(resultContainer);
}
}
})
.catch(error => {

// Handle errors that occur during the API request
console.error(error);
});
});
});
```

---
## Here it is
[/findlyrics/](https://mybae.id/findlyrics) try it!

[Github](https://github.com/nescatfe/nescatfe.github.io/blob/main/findlyrics/youtube.js)

---

![Final Result](/img/2888120.png)
