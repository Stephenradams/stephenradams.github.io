# Updates to your frontend application 

I was recently asked about how I would update an existing application. Take a web app that was built a while ago and update it without losing the functionality of the existing application. Well, this is something I have done a few times now throughout my career.

There are a number of steps involved when updating an existing application. 

## Step 1 – Define what is required in the update

The first piece of the work is to define what is part of the update: are you updating the versions of the software, or are you updating the versions and adding new functionality? Are you updating the whole application or can it be updated in sections? These are some of the questions that need to be answered before any changes are started.

## Step 2 – Understand the existing application

If, as I have a few times, had to work on updating an application that you have never worked on before, an important step in the process is spending time to understand the existing application. How it works, what it does, how it is used, what the structure of the application is, how the application is run, and what the architecture of the application is. One of the great benefits of web frameworks is that they give you a solid base of how an application is implemented. If you have worked a lot with various frameworks, then if you have to update an old application built with a framework, chances are you will be able to see common patterns used within the code base, though sometimes developers are known to diverge from the patterns that a framework suggests, and that is when you can get strange setups.

## Step 3 – Review the test coverage

Once you have a good understanding of the app and how it is structured, the next step is to review the test coverage for the application.
Why is this important? It’s important because tests are your way of confirming throughout the upgrade process that changes are either not breaking the existing application or catching areas where an upgrade has broken something and there is work involved in fixing what has been broken.

### We don’t have tests

There may be a time when an application doesn’t have any retest; this is where a discussion is needed. Without tests, the only way of knowing what has broken is by running a full manual test after each and every change; this is a slow, expensive process. Having a set of tests that are continuously running will pick up any breaks or issues far faster. 
I would always recommend adding tests before starting an upgrade; the benefits in the long run are far better than ignoring them and sticking with manual testing. One of the other great pluses of having tests is that if you need to perform another upgrade, as we know web applications and frameworks are always being updated, you have the tests there all set up and running. All you’d need to do is add further tests for any new features or code changes needed as part of the upgrade.

#### With AI tooling, adding basic tests is far easier

Now with the latest AI tools, it’s even easier to add a basic set of tests to an existing application. All you need to do is define what parts of the code need tests, set up the test framework if there is not one in place, then ask the AI tools to write a set of basic functionality tests, which are your starter and you can build upon.

## Step 4 – Starting the upgrade

Now you have tests, you understand the application, you know the scope of the work involved; it’s time to start the upgrade process. 

In this stage, I’ve found after doing this upgrade a few times that there are a couple of things to consider:

1. Make small updates – so it's easier to track down where any issues have occurred.
2. Commit changes often – make small commits as you go; it’s easier to roll back a commit.
3. Make notes as you go – keep track of the changes you need to make and the steps you have taken.
4. Be prepared for `npm` conflicts – if your web application was built in the last few years, you are bound to have a `package.json` file, and all those libraries listed in there are going to need updating. So be prepared for conflicts as you go.
5. Read the error messages – one of the big issues I've seen is that the actual error `npm` or whatever build tool you are using is telling you is that it is hard to see the actual problem. You need to spend time digging into what the error message is saying (a good tip is to put the message in an AI tool and get it to break down the error). You'll probably find that as part of the update a library is not compatible, but what the error is actually telling you is that a library that the library uses is the issue. Library version updates are a big part of the upgrade process, so be prepared for this stage taking a while.


## Step 5 – Test, test and test again

Once the updates have been completed, and the code is running, tests are passing and everything looks to be working, then the next and most important step is to test everything. 

Run both your automated tests and manual tests, test on different devices, and test all parts of the application as much as possible. Once all the testing has been completed, release the application to a limited set of external users to see if they can find issues. Once your external testing is completed, then you know the application has been successfully upgraded. 

Then don't leave the application for another few years; libraries and frameworks are constantly being updated, so your application needs to have regular updates even if it's just the version numbers of the third-party libraries used. Staying on top of this will mean you'll not need to go through a huge upgrade in the future. 

---
