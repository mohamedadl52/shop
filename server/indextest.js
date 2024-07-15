
const axios = require('axios') 
const cheerio = require('cheerio') 
const fs = require('fs') 
const baseUrl = 'https://example.com' 
// the website url to start scraping from
var parsedResults = []; 
const outputFile = 'data.csv' 
var saved = false 
// Added this for monitoring if the scraped data was saved if an error is thrown 
var indexPage = 1 
var totalPages = 1;
const getWebsiteContent = async (url) => { 
    try {
     axios.get(url).then( res => {
     const $ = cheerio.load(res.data)
      totalPages = getTotalpages($); 
    // Get the pagination 
    // Now we have the total pages for the url you want to scrap
     // Next we scrape all the data on the respective pages 
    // Add your code here that scrapes the data
 ; 
}).catch(err => { throw(err); }); 
indexPage++; 
// Increment to the next page
 if (indexPage == totalPages) { exportResults(parsedResults) // If we have surpassed the total pages we export the result to CSV 
 return false } 
 const nextPageLink = baseUrl + '......' + indexPage; // get next page 
 // Add a little timeout to avoid getting banned by the server
  setTimeout(() => { getWebsiteContent(nextPageLink); // Call itself
 }, 3000); } 
 catch (error) { console.log(error) } 
 finally{ // If results were written successfully to file the end else write whats in memory 
    if(!saved){ exportResults(parsedResults) ; } } } 
    // Get the pagination 


    function getTotalpages(data){
    } //function for export to csv file
     const exportResults = (parsedResults) => { fs.appendFile(outputFile, JSON.stringify(parsedResults, null, 4), (err) => { if (err) { console.log(err) } 
     console.log(`\n ${parsedResults.length} Results exported successfully to ${outputFile}\n`); 
     saved = true; }) } 
     getWebsiteContent(baseUrl);