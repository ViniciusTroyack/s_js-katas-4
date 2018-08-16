# Assessment: JavaScript Katas 4 #

### Overview ###

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops, conditionals, expressions and arrays through a series of katas.

You will create a single web page for all these exercises, with a labeled heading for each individual exercise followed by your solution.

**All outputs for the individual katas need to be displayed using `document.createElement()` and associated methods.**

Several of the katas will use the following sample variables, which you can copy and paste into your code:

```js
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
```

```js
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
```

```js
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
```

Hint: when displaying an array, use `JSON.stringify()` to 'prettify' the output. For example, lets say you use `document.createElement()` and store it into a variable called `newElement`.

To display _`lotrCitiesArray`_ on this element, you can call:

```js
newElement.textContent = JSON.stringify(lotrCitiesArray);
```

### Katas ###

_(0.5 point each)_

1.	Display an array from the cities in _`gotCitiesCSV`_.
2.	Display an array of words from the sentence in _`bestThing`_.
3.	Display a string separated by semi-colons instead of commas from _`gotCitiesCSV`_.
4.	Display a CSV (comma-separated) string from the _`lotrCitiesArray`_.
5.	Display the first 5 cities in _`lotrCitiesArray`_.
6.	Display the last 5 cities in _`lotrCitiesArray`_.
7.	Display the 3rd to 5th city in _`lotrCitiesArray`_.
8.	Using `Array.prototype.splice()`, remove _"Rohan"_ from _`lotrCitiesArray`_.
9.	Using `Array.prototype.splice()`, remove all cities after _"Dead Marshes"_ in _`lotrCitiesArray`_.
10.	Using `Array.prototype.splice()`, add _"Rohan"_ back to _`lotrCitiesArray`_ right after _"Gondor"_.
11.	Using `Array.prototype.splice()`, rename "Dead Marshes" to "Deadest Marshes" in _`lotrCitiesArray`_.
12.	Using `String.prototype.slice()`, display the first 14 characters from _`bestThing`_.
13.	Using `String.prototype.slice()`, display the last 12 characters from _`bestThing`_.
14.	Using `String.prototype.slice()`, display characters between the 23rd and 38th position of _`bestThing`_ (i.e. _"boolean is even"_).
15.	Repeat #13 using `String.prototype.substring()` instead of `String.prototype.slice()`.
16.	Repeat #14 using `String.prototype.substr()` instead of `String.prototype.slice()`.
17.	Find and display the index of _"only"_ in _`bestThing`_.
18.	Find and display the index of the last word in _`bestThing`_.
19.	Find and display all cities from _`gotCitiesCSV`_  that use double vowels (_"aa"_, _"ee"_, ...).
20.	Find and display all cities from _`lotrCitiesArray`_ that end with _"or"_.
21.	Find and display all the words in _`bestThing`_ that start with a _"b"_.
22.	Display "Yes" or "No" if _`lotrCitiesArray`_ includes _"Mirkwood"_.
23.	Display "Yes" or "No" if _`lotrCitiesArray`_ includes _"Hollywood"_.
24.	Display the index of _"Mirkwood"_ in _`lotrCitiesArray`_.
25.	Find and display the first city in _`lotrCitiesArray`_ that has more than one word.
26.	Reverse the order in _`lotrCitiesArray`_.
27.	Sort _`lotrCitiesArray`_ alphabetically.
28.	Sort _`lotrCitiesArray`_ by the number of characters in each city (i.e., shortest city names go first).
29.	Using `Array.prototype.pop()`, remove the last city from _`lotrCitiesArray`_.
30.	Using `Array.prototype.push()`, add back the city from _`lotrCitiesArray`_ that was removed in #29 to the back of the array.
31.	Using `Array.prototype.shift()`, remove the first city from _`lotrCitiesArray`_.
32.	Using `Array.prototype.unshift()`, add back the city from _`lotrCitiesArray`_ that was removed in #31 to the front of the array.