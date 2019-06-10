    /*
    LECTURE 60: (REDONE)
    - everything that isn't primitive is an object 
    - oo programming > use objects to interact with one another through > methods and properties
    - oo programming also stores data, and structures an app into modules
    - he gives an example of a 'person' object (constructor/prototype) > that contains the person's name, yearOfBirth, job, calculateAge()
    - from this person object/constructor you can create instances from it > which are also objects 
    - inheritance > when one object gets access to another objects properties and methods 
    - he gives example of person -> athlete > for the athlete you won't repeat the properties, you just make the athlete inherit the 'person's object
    - inheritence allows you to write less code
    - prototype > each js object has a prototype property that all objects have 
    - prototype chain > when you try to access method from property , js will try and find that method/property on object and if it can't find it will find it in the window object ... and if it can't find anything null will be returned 
    */

    /*
    LECTURE 61: (REDONE)
    - when you use new operator and empty person is created 
    - and then it takes the elements that you passed and sets them pase on the person function constructor 
    */

    /*
    LECTURE 62: (REDONE)
    - he is showing you how to inspect things in the console
    - he is inspecting the person constructor
    - the person constructor from above will show you the name, yearOfBirth and job and what is in each property 
    - constructor will also show you the prototypes that have been added to the constructor
    - john.__proto__ === Person.prototype > console will output true 
    - all objects are all instances of the object, object (the window)
    - john.hasOwnProperty('job') > asks console if john object has the job property > however if you put 'lastName' it will output false, because although its been added to the constructer it isn't originally its own property 
    - john instanceof Person > ask the computer if john is an instance of the Person constructor, which will output true 
    - console.info(nameofvariable) > it will show you further details of the variable you are passing through (like if its an array it will show you the length of it, what is in it)
    - you can use things like the push() method because of the prototype chain
    */

    /*
    LECTURE 63: (REDONE)
    - another way to create objects that inherit from a prototype 
    - doing this with object.create method
    - first you define an object that will act as a prototype then you create an object based on that prototype 
    - difference between object.create and function constructor pattern > object.create builds object that inherits directly from the first one passed in the first arguement, while the other the newly created object inherits from the constructors prototype property 
    */

    /*
    LECTURE 64: (REDONE)
    - comparing primitives and objects
    - we know that numbers, strings, booleans, null are primitives and everything else are objects
    - big difference between the two are variables that contain primitives actually hodl data inside variable itself
    - on objects its diff > vars associated with objects do not contain object, but contain reference to where the object sits and is stored, so whne you change something the copy will also point to the address/reference of where the object was changed
    - you are never passing really an object in a function, but a reference of an object that points to it 
    - so when you change object inside a function, it is still reflected outside of the function (unlike a primitive where it doesn't not change)
    */

    /*
    LECTURE 65: (REDONE)
    - talking about functions
    - functions are also objects
    - a function is an instance of object type
    - function behaves like any other object
    - variables can store functions
    - functions can be passed as an argument 
    - can return a function from a function 
    */

    /*
    LECTURE 67: (REDONE)
    - what is in paranthesis cannot be a statement
    - IIFE = immediately invoked function expression
    - IIFE is not created for reusable code > more used for data privacy 
    */

    /*
    LECTURE 68: (REDONE)
    - learning about closures 
    - inner function is able to use outer function and out function variables even after everything is executed 
    - closure > inner function always has access to parameters and variables of outer function 
    */

    /*
    LECTURE 69: (REDONE)
    - learning about bind, call and apply method 
    - apply method:
        john.presentation.appl(emily, ['friendly', 'afternoon']);
    - apply is just used for arrays
    - bind doesn't immediately call the functions but rather makes a copy of it
    - bind returns a function
    - carrying > where you create a function based on another function but with preset parameters 
    */

    /*
    LECTURE 70 : CODING CHALLENGE
    */
        (function() {

            function Question(question, options, answer) {
            this.question = question;
            this.options = options;
            this.answer = answer;  
        };

        Question.prototype.selectQuestion = function() {
            console.log(this.question);
            console.log(this.options);
        }

        Question.prototype.checkInput = function(ans, s) {
                if(ans === this.answer) {
                console.log('Correct answer!');
                return s+=1; 

            } else {
                console.log('Wrong answer!');
                return s;
            }
        }

        function loopQuestion(arr, score) {
            var stop = 0;
            while(stop === 0) {
                var n = Math.floor(Math.random() * questionArr.length);
                arr[n].selectQuestion();

                var userInput = parseInt(prompt('Select the correct (number) answer.'));

                if(isNaN(userInput)) {
                    stop = 1;
                } else {
                    score = arr[n].checkInput(userInput,score);
                    console.log('Your current score is: ' + score + ' --------------------------');
                }    
            }
        }

        var one = new Question('Is the sky blue?','0: Yes, the sky is blue \n1: No, the sky is purple',0);
        var two = new Question('What language are you currently studying?','0: C++\n1: Java\n2:JavaScript',2);
        var three = new Question('Who is the current president of the United States(2019)?','0: Donald Trump\n1: Barak Obama\n2: George Bush',0);

        var questionArr = [one, two, three];
        var score = 0;

        loopQuestion(questionArr, score);

        })();










