---
title: 'Memo on creating and distributing great internal apps'
excerpt: 'Making internal apps is not as easy as it seems. There are many things to consider, so here are some guidelines to help you make great apps that will help your company grow.'
coverImage: '/uploads/2022/09/window-intro_2x.png'
date: '2022-09-27T05:35:07.322Z'
author:
  name: Arthur Guiot
  picture: '/img/logo.jpeg'
ogImage:
  url: '/uploads/2022/09/window-intro_2x.png'
---

No matter what your business is, if you work with smartphones or computers, chances are you've already dealt with "in-house" apps. However, many of them, if not most, are slow, ugly, and don't seem to have been made with as much care as those distributed to the general public.

> Here's how, as a developer, you can greatly improve an internal app by following a few simple principles. 
> I've recently had to develop several internal apps to support terminal payments, inventory management, etc. I'll use my experience to help you understand how to improve your app.

## Making great apps
In order to simplify the process, I decided to categorize the development of an internal app into 3 parts: design, creation and distribution.
### Designing Internal Apps
Many companies simply forget this step to save time. Sure, making the app look good is certainly not the number one priority. But design is much more than just making beautiful visuals. In fact, here we are talking more about designing what tasks it should accomplish, and how to do it most efficiently. Hence my first principle:
#### Optimising Flow and Data
This may be one of the keys to save time for everyone: for you in developing the application, but also for the employees who will be able to do their tasks faster. The idea is simple: study and list the most frequent tasks that the application should be able to do. Then, study your databases, see how you can minimize the physical (user) and virtual (database) interactions to perform these tasks.

![Network Monitoring](/uploads/2022/09/luke-chesser-JKUTrJ4vK00-unsplash.jpg)

> For example, if you are developing an application for a network company, where there is a lot of data, make sure you categorize and filter as much of that data as possible and provide charts/diagrams with the important data. Like knowing which servers are online or offline, then set interactions to see the full data like clicking on the icon of the server in question. The same with common tasks, like updating a device, etc.

#### Buildings are made of bricks
This may sound silly, but if you want to make a complete application, start by designing common components within your application. In fact, you should be able to develop your application entirely with your components. In addition to greatly simplifying your life, you will also design better, more responsive and less buggy applications. If there is a problem with one of the components, you will notice it much faster than if the button to change the middle name of your customers has a problem after being clicked 3 times.

> [Here is a good article](https://retool.com/blog/what-makes-a-great-component-library/) summarising the advantages of making a component library

#### Great flexibility for high scalability

At the end of the day, internal apps are here to process internal data. Data often unpredictable, and for production apps, you are probably used to low flexibility to minimise bugs and incoherent behaviours. While checking and restricting the end user is wanted and necessary for a production app, for an internal app, it’s quite the opposite. Most of the time, you want the employees to perform actions that users can’t. If a client calls your customer support because their home address was wrongly interpreted by your system, you need the internal app to be able to fix that. Although, that leaves more room for errors, you can assume for many tasks that they will be performed in different conditions than the typical flow an end user has to follow.

Therefore, designing components that are flexible and reactive will greatly enhance the quality of your internal app.

### Developing great apps
Coding the app is probably the longest step, but not necessarily the hardest, if you do it correctly and methodically. If you have followed the previous advice you should already have a component library ready, and so your job here will be to match your data to your interface.
#### Data should be accessible and observable

![Data Flow in Relay](/uploads/2022/09/Capture%20d%E2%80%99%C3%A9cran%202022-09-25%20%C3%A0%2017.56.38.png)

The backend of your app is important. Very important. In fact, unlike an app for the general public, what makes a good internal app is its backend. Data management then becomes a central issue, and the choices that are made to develop the app will have many consequences throughout the development. That's why it's important to design the bridge between your app state and your databases. Fast, consistent and realtime data fetching is what will make the flow within your app smooth and enjoyable. Build your apps around bidirectional data processing layers that can ensure consistency within your app’s objects and your server’s data. You should organise your layer’s responsabilities according to both your flow and data. As the layer gets higher in the stack (closer to the UI), they should take care of the flow, whereas the lower they are, they should take care of accurately manage the data flow.

> For example, in my case, I had to design a first Network Layer which was in charge of getting the right token, and managing the connectivity between my app and my database. Then, a second layer, which took care of encoding and decoding the objects sent and received to the database. A third one, etc. Finally, I had a controller for each task, which took care of managing that each action was correctly executed.
#### Zero Trust, period.
In an internal app, it's all about security. I'm not going to say more than for a consumer app, but at least as much. Because if this app is attacked, the whole company is vulnerable. That's why you have to apply some simple principles to secure your app. Here is a non-exhaustive list of principles to apply:
1. Think in terms of users, not system
	> Do not include secrets, or give authorisations to your entire app. Instead, force users to login to your app, and give authorisation via tokens, to the users directly.
2. Define Roles
	> After making the users login, you can give them roles, so that each of them can only access what they need. This way, if one user’s credential leak, the entire app isn’t compromised.
3. Secure your APIs
	> I’ve seen too many public internal APIs… this is not good! Even for the endpoints that you think are not sensitive. You need to secure your APIs globally and methodically.
4. Never use a third party API within your app
	> You should **ALWAYS** let your own cloud service communicate with third parties APIs. I’ve talked about this in [this earlier post](https://arguiot.com/posts/2020-04-13-error-euclid)
5. Make security audits, often if you can afford it
	> I know, audits are expensive, but they’re worth it, trust me. This article focuses on internal apps, meaning probably work for a company that probably can afford and should pay for audits.
6. Don’t make up your own security
	> Don’t try to invent your own security system. Use standard tools and on device encryption algorithms. Those were made by security experts who probably know their job a lot better than you do. If you need to store password, communicate securely with a server, etc. There is probably an official or recommended method of doing it that will fit your use case.
#### Choose your stack carefully
Think of who will use your app, and don’t make the circle too large. If your team is working exclusively on macOS, why would you use Electron, or any other cross platform technology? Yes, maybe you’re more familiar with that tool. But the thing is, it will always be easier to learn a new SDK but choose the right one, rather than choosing the wrong SDK and create technological debt because of it. It’s better to make a good, simple but complete version of your app rather than an overcomplicated one, hard to maintain but with super fancy cross platform features.

Same goes with packages, UI components, etc. Keep it simple, so that it’s easy to maintain, and if you need to upgrade or change platform, you can do so by keeping the same architecture and take inspiration from the previous app.

Also, choosing the right stack will help you if you have multiple internal apps. You can reuse pieces of code from one app to another. I would even recommend sharing a common library between your apps to speed up your workflow.

#### Test test test!
Automated and manual testing is probably **THE MOST** essential part of software development, although only few people actually take time to do it. Writing automated test really isn’t that hard, and if you take the good habit of writing tests as you code, it will actually save you a lot of time. But make sure you do it as soon as you start a new project. Although testing for internal apps shouldn’t be as extensive as it should be for consumer apps (edge cases, etc), each task your app can do should be tested.
#### Handle errors gracefully
Internal apps are computer programs… and sometimes they don’t work the way you would expect. Errors will happen, so make sure you have strategy to tackle them. Depending on your stack, you might take bad habits when it comes to error handling, especially for higher level languages like JavaScript. In lower level languages, it’s more common to test edge cases to avoid errors because the process/app would simply crash if you don’t. Try to implement the same methodic behaviour whatever stack you’re using.

The second type of error are the ones that are supposed to be handled by your program. I see many developers not taking care of them, just by printing them to the console or just showing an alert. I am lazy too, so one way I found particularly efficient for handling errors is to have some kind of central error management mechanism that should take care of notifying the user that something wrong happened, display useful information and, whenever it’s possible, have a recovery action. This way, whenever I run code that is supposed to throw an error, I can dispatch the error to the manager.
### Distributing great apps
Although app distribution is very platform specific, there are still common guidelines you have to follow when shipping your app. Starting by knowing when and how to release versions of your app
#### Pre-Release and Semantic Versioning
This might sound obvious to many developers, but semantic versioning really can help making software development better. When you’re making an app, as soon as you get a first usable version, you want to release it. It’s true for individual developer and small teams, and even for larger teams. That’s why sharing and distributing beta versions of your apps to certain employees to get feedback is really important.
#### Choose the right distribution method
There are many options. Whether it is by downloading the app through the internal portal of the company, by installing the app directly on devices managed internally, etc.. Needless to say, you should not distribute the app on a public platform, even if you can still sometimes see some of them… Research more about your stack, the targeted platform, etc. to find the best possible method for your app.
#### Make sure your users can update your app
Apps that you distribute yourself are not updated automatically most of the time. When a new version is available, notify users of the update and explain how to install the app. It is desirable that the app looks for updates and informs the user when it opens.
#### Documenting your app
When distributing your app within your company, you will receive a lot of emails if some tasks are not clear. It is imperative to have a good documentation, explaining how to use your application and perform common tasks. This documentation can be in the form of a wiki, a README file, or a help page in the application itself. It is also a good idea to have a changelog, so that users can see what has changed in the latest version of the application.
### Conclusion
I hope this article will help you in your journey of making internal apps. There are many things to consider, but if you follow the guidelines I’ve given you, you should be able to make great apps that will help your company grow. If you have any questions, feel free to ask them in the comments, or on Twitter. I’ll be happy to answer them.