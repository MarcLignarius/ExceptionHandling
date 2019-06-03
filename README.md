# Exception Handling

#### _JavaScript, 06.03.2019_

#### By _Marc Davies_

## Description

* _This program asks user to enter a positive number._
* _This program returns an error message if user enters anything other than a positive number._
* _See specs below for more detail._

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| If user inputs 1, the program says "This number is valid. You may continue." | 1 | This number is valid. You may continue. |
| If user inputs -1, the program says "This number is not valid. Please enter a positive number."| -1 | "This number is not valid. Please enter a positive number."" |
| If user inputs "hello", the program says "This number is not valid. Please enter a positive number." | "hello" | "This number is not valid. Please enter a positive number." |

## Installation and Setup
* `$ git clone https://github.com/MarcLignarius/ExceptionHandling.git` This will clone the repository to your local machine.
* `$ cd ExceptionHandling` This will access the 
* `$ npm run build`
This will automatically build the bundle once. The entry file is `./src/script/index.js`, with production ready code (minified).
* `$ npm run start`
This will watch the file changes in `./src` and automatically build the bundle with dev build (not minified). This is a continuous monitoring which can be stopped with the key combination `Ctrl + C` within the terminal.

## Known Bugs
There are no known bugs as of last update.

## Support and contact details
_Please contact me at YourEmailHere@gmail.com if you run into any issues or have questions, ideas or feedback._

## Technologies Used
This application was built in Atom using JavaScript, Node.js 12.3.1, jQuery 3.4.1, Bootstrap v4.3.1 and a custom css file. For unit testing, Jasmine framework and Karma task runner are both used.

### License

*This software is licensed under MIT license.*

Copyright (c) 2019 **_YourNameHere_**
