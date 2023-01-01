function caesarCipher(string, offset) {
 string = string.toLowerCase();
 let result = "";
 const letterRegEx = /[a-z]/;
 for(i=0; i<string.length; i++){ 
   if(letterRegEx.test(string.charAt(i))) result += String.fromCharCode((string.charCodeAt(i) - 97 + offset)%26 + 97); 
   else result += string.charAt(i); 
 }
 return result;
}

module.exports = caesarCipher;