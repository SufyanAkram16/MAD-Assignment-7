// String Exercise


// 1. Write a ts program to find length of a string.

// var string:string = "sufian";
// console.log(string.length);


// 2. Write a ts program to copy one string to another string.

// var str:string = "hello World";
// var copy:string = str.slice();

// console.log(copy);

// 3. Write a ts program to concatenate two strings.

// var str1:string = "Hello";
// var str2:string = "World";

// var str3:string = str1.concat( str2);

// console.log(str3);


// 4. Write a ts program to compare two strings.

// var str:string = "hello world";

// var comp = str.localeCompare("Hello world")

// console.log(comp);


// 5. Write a ts program to convert lowercase string to uppercase.

// var str:string = "Hello World";

// var result = str.toUpperCase();

// console.log(result);


// 6. Write a ts program to convert uppercase string to lowercase.

// var str:string = "APPLES ARE RED AND SWEET";

// var result = str.toLowerCase();
// console.log(result);

// 7. Write a ts program to toggle case of each character of a string.

// var str:string = "HeLLo WoRLd";

// var result:string = "";

// for( let i=0; i< str.length; i++) {
//     let ch = "";
//     if(str[i] >= "A" && str[i] <= "Z") {
//         ch = str[i].toLowerCase();
//         result = result + ch;
//     } else if (str[i] >= "a" && str[i] <= "z"){
//         ch = str[i].toUpperCase()
//         result = result + ch;
//     }else if (str[i] === " "){
//         ch = str[i];
//         result = result + ch;
//     }
    

    
// }

// console.log(result)


// 8. Write a ts program to find total number of alphabets, digits or special character in a string.

// var str:string = "Hello World 1234545 @.?#";

// var alphabets:number = 0;
// var numbers:number = 0;
// var specialCharacter:number = 0;

// for( let i=0; i<str.length; i++){
//     if(str[i] >= "A" && str[i]<= "Z"){
//         alphabets = alphabets + 1;
//     } else if ( str[i] >= "a" && str[i] <= "z" ){
//         alphabets = alphabets + 1;
//     } else if(str[i] >= "1" && str[i] <= "9"){
//         numbers += 1;
//     }else if (str[i] === "0"){
//         numbers += 1;
//     }else if(str[i] != " "){
//         specialCharacter +=1;
//     }
    
// }

// console.log("Alphabets :" + alphabets)
// console.log("Numbers:" + numbers)
// console.log("Special Characters:" + specialCharacter)



// 9. Write a ts program to count total number of vowels and consonants in a string.

var str:string = "My Name Is Sufian Akram. I am a Web Developer";

var vowels:number = 0;
var constants:number = 0;

for( let i = 0; i < str.length; i++){
    let ch = str[i].toUpperCase();
    if(ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"){
        vowels += 1;
    }else if(ch != " "){
        constants += 1;
    }
}

console.log("Vowels:" + vowels);
console.log("Constants:" + constants);

// 10. Write a ts program to count total number of words in a string.
// 11. Write a ts program to find reverse of a string.
// 12. Write a ts program to check whether a string is palindrome or not.
// 13. Write a ts program to reverse order of words in a given string
// 14. Write a ts program to find first occurrence of a character in a given string.
// 15. Write a ts program to find last occurrence of a character in a given string.
// 16. Write a ts program to search all occurrences of a character in given string.
// 17. Write a ts program to count occurrences of a character in given string.
// 18. Write a ts program to find highest frequency character in a string.
// 19. Write a ts program to find lowest frequency character in a string.
// 20. Write a ts program to count frequency of each character in a string.
// 21. Write a ts program to remove first occurrence of a character from string.
// 22. Write a ts program to remove last occurrence of a character from string.
// 23. Write a ts program to remove all occurrences of a character from string.
// 24. Write a ts program to remove all repeated characters from a given string.
// 25. Write a ts program to replace first occurrence of a character with another in a string.
// 26. Write a ts program to replace last occurrence of a character with another in a string.
// 27. Write a ts program to replace all occurrences of a character with another in a string.
// 28. Write a ts program to find first occurrence of a word in a given string.
// 29. Write a ts program to find last occurrence of a word in a given string.
// 30. Write a ts program to search all occurrences of a word in given string.
// 31. Write a ts program to count occurrences of a word in a given string.
// 32. Write a ts program to remove first occurrence of a word from string.
// 33. Write a ts program to remove last occurrence of a word in given string.
// 34. Write a ts program to remove all occurrence of a word in given string.
// 35. Write a ts program to trim leading white space characters from given string.
// 36. Write a ts program to trim trailing white space characters from given string.
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
// 38. Write a ts program to remove all extra blank spaces from given string.

// conditional operators programming exercises

// 1. Write a ts program to find maximum between two numbers using conditional operator.
// 2. Write a ts program to find maximum between three numbers using conditional operator.
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
// 4. Write a ts program to check whether year is leap year or not using conditional operator.
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.

// List of switch case programming exercises

// 1. Write a ts program to print day of week name using switch case.
// 2. Write a ts program print total number of days in a month using switch case.
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// 4. Write a ts program to find maximum between two numbers using switch case.
// 5. Write a ts program to check whether a number is even or odd using switch case.
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// 7. Write a ts program to find roots of a quadratic equation using switch case.
// 8. Write a ts program to create Simple Calculator using switch case.