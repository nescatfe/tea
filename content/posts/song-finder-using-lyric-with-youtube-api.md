+++
author = "Alvernood"
title = 'Song Finder Using Lyric With Youtube API'
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

Jadi jujur sebenernya ini agak `useless`, tapi gue tetep mau coba ini ntar larinya kemana gue juga gatau. Jadi gue lagi mainan API youtube, yang gatau api 


> Application Programming Interface, is a set of protocols, routines, and tools for building software applications. Essentially, an API specifies how different software components should interact with each other, and it allows developers to access and manipulate the functionality and data of a particular software system or service.

Singkatnya API ini bisa dipake buat komunikasi antara aplikasi yang berbeda, kita bisa bikin aplikasi baru pake layanan aplikasi sama sistem yang sudah ada. Contohnya sih dulu ada __TweetDeck__, jadi kita bikin tweet pake aplikasi yang bukan resmi dari Twitter, ada lagi _instagram_++, _whatsapp gb_, nah itu semua pake API, cuma kalo _whatsapp gb_ sama _instagram++_ yang bisa download video langsung dari aplikasinya itu jatohnya sih __ilegal__.

`TL;DR`, gue kepikiran pake API youtube buat nampilin hasil search pake javascript trus gue mau hasilnya _tar_ yang keluar adalah adalah kategori musik (bukan video _vlog/podcast or other shits_) beserta link-nya, terus ntar tinggal gue kembangin mau dibawah kemana. hubungan kita

**youtube-api.js**
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
_btw_ musik di youtube pake kode kategori 10
`video&videoCategoryId=10` line 11 di code
```javascript
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&videoCategoryId=10&regionCode=${countryCode}&key=${apiKey}`) 
```
nah disini gue akan coba masukin `searchQuery` tiga kali
* _ngopi ngopi ngopi ngopi mazzeh_
* _tak cukup untuk dirimu_
* _so mature_

*so far result*nya sama seperti apa yang gue mau, _smooth af_
![query result](/img/test-api-lyric.png)

udahan ah sampe sini gue mau istirahat dulu, updatenya _tarrrrrrr_