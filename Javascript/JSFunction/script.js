document.write("Example of indexof() and lastindexof()<br>")
var str1 = "Hello World"
var str2 = "Surya"
var str3 = "     Hiiii      Ankit"
var num = 564289
document.write(str1.indexOf("l") + "\t")
document.write(str1.lastIndexOf("l"))
document.write("<br>Example of slice() :- ")
document.write(str1.slice(0,5))
document.write("<br>Example of substr() :- ")
document.write(str1.substr(1,7))
document.write("<br>Example of substring() :- ")
document.write(str1.substring(1,7))

document.write("<br>Example of toUpperCase() :- ")
document.write(str1.toUpperCase())
document.write("<br>Example of toLowercase() :- ")
document.write(str1.toLowerCase())
document.write("<br>Example of replace() :- ")
document.write(str2.replace("Surya","Suryajeet"))
document.write(str1.charAt(4))
document.write("<br>Example of toLowercase() :- ")
document.write(str1.charCodeAt(4))
document.write("<br>Example of concat() :- ")
document.write(str1.concat(" "+"You find me!!!"))
document.write("<br>Example of concat() :- ")
document.write(str1.concat(" "+str2))
document.write("<br>Example of trim() :- ")
document.write(str3.trim())
document.write("<br>Example of search() :- ")
document.write(str1.search("World"))

var fruits = ["Mango","Banana","Pineapple","Grapes"]
document.write("<br>Example of Array :- ")
document.write(fruits)
document.write("<br>Example of push() to push Orange & Watermelon after last index :- ")
fruits.push("Orange","Watermelon")
document.write(fruits)
document.write("<br>Example of pop() to pop Watermelon from last index :- ")
fruits.pop()
document.write(fruits)
document.write("<br>Example of shift() :- ")
fruits.shift()
document.write(fruits)
document.write("<br>Example of unshift() :- ")
fruits.unshift("Apple","Kiwi")
document.write(fruits)
document.write("<br>Example of sort() :- ")
fruits.sort()
document.write(fruits)
document.write("<br>Example of splice() :- ")
fruits.splice(2,0,"Cherry","Strawberry")
document.write(fruits)
