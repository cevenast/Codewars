/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. */

// P: Is it ALWAYS going to be a string? Is it ALWAYS gonna start with http?
// R: The response has to be the domain name as a string
// E: * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//    * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//    * url = "https://www.cnet.com"                -> domain name = "cnet" 

// Answer:

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };



