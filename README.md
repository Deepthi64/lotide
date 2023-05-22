# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @deepthiv64/lotide`

**Require it:**

`const _ = require('@deepthiv64/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual  - Checks whether the given actual array is equal to expected array using        eqArrays function . if yes the test is passed and if not test fail.
 
* assertEqual - Checks whether given actual value is equal to the expected value.

* assertObjectsEqual - Checks whether given actual object is equal to the expected object using eqObjects function and inspect function from util module.

* countLetters - CountLetters function takes sentence as an argument and count the letters of the sentence and gives the output using assertEqual function.

* countOnly - Takes two parameters allItems(array) and itemsToCount(object). The function iterates over the allItems array and counts the occurrences. uses assertEqual function.

* eqArrays -  compares two arrays (array1 and array2) and checks if they are equal. The function returns true if the arrays are equal and false if not equal.

* eqObjects -  compares two objects (object1 and object2) based on their keys and values. and checks if they are equal. The function returns true if the objects are equal and false if not equal.

* findKey -  implementation of findKey allows  to search for a key in an object based on a condition specified by the callback function. The first key that meets the condition will be returned. If no key satisfies the condition, the function returns undefined.

* findKeyByValue -  implementation of findKeyByValue allows to search for a key in an object based on a specified value. It performs a simple equality check between the object's values and the given value using assertEqual.

* head - implementation of the head function allows to retrieve the first element of an array and when the array is empty returns undefined.

* letterPositions - The implementation of letterPositions allows  to obtain the positions of each letter in a given sentence, excluding spaces using assertArraysEqual. The positions are stored in an object where each letter is a key, and the corresponding value is an array containing the positions.

* map - The implementation of map allows to apply a given callback function to each element of an input array and collect the results in a new array using assertArraysEqual.

* middle - The implementation of the middle function allows to retrieve the middle element of an array. If the array has an even length, it returns an array with two elements, and if the array has an odd length, it returns an array with a single element uses deepEqual.

* tail - The implementation of tail allows  to obtain a new array containing all elements of the input array except the first element.

* takeUntil - The implementation of takeUntil allows to extract elements from an array until a certain condition defined by the callback function is met.

* without - The implementation of without allows  to create a new array that excludes specific elements based on a second array.