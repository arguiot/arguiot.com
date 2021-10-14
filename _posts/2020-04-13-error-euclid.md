---
title: 'The mistake that drove my mailbox crazy for 24 hours.'
excerpt: 'Last week I had to quickly deploy a Euclid patch and API on a global network present in over 200 cities because of a silly error. So this is why you should never use third-party services in an app.'
coverImage: 'https://euclid.pr1mer.tech/img/banner.jpg'
date: '2020-04-13T06:00:00.322Z'
author:
  name: Arthur Guiot
  picture: '/img/logo.jpeg'
ogImage:
  url: 'https://euclid.pr1mer.tech/img/banner.jpg'
---
> I am the developer of Euclid, a scientific calculator for macOS and iOS that supports Excel formulas, LaTeX format, a smart converter, and more.

Today I'm going to tell you about the converter feature of Euclid. From physical dimensions to currency to electricity measurements, Euclid can convert anything. Whether you want to calculate exchange rates or measure your room, it's easy. Just enter the values and convert them instantly.

You'll have noticed that Euclid allows you to convert currencies: that's where my story begins. Currencies, like the Euro or the Dollar, only have value because a government maintains its value, or because the parties involved in an exchange agree on its value. If on paper, this value is supposed to be stable, in reality, with globalization and the very large exchanges between countries, this value changes a little bit every moment. It is therefore impossible for Euclid to know by heart the different exchange rates because they would not be up to date (unless I propose an update… every day. But it's not going to happen soon 😅). So, I had to code in Euclid a system, which at each opening of the app fetches these data on the Internet, from a third party provider via an API. So far, this system was working, and the conversion tool always had the latest rates.

However, I had made a big mistake: I had delegated an important functionality of the app to a third party. And if this third party one day no longer exists or changes something, the application would lose a feature.

And guess what? That's exactly what happened. From one day to the next, the API I was using started to change. So Euclid would try to connect, and the API would return a message that something was wrong, but without giving an HTTP error code! Euclid thought that everything was normal, and when decoding the message the app crashed.

![455 Notifications on  Spark!](https://cdn-images-1.medium.com/max/1200/1*_NWV_vDUF7bdYuJBOJQvag.png)

Of course, the users didn't understand. Most of them lived in Europe, so when I woke up, I had a nice surprise! I used to read all my emails, but I was shocked. Hundreds of people had written to me, explaining that there was a problem with the app, or asking me to refund them!

## Finding a solution
So I had to find a solution and fast. First of all, I tried to find out where the problem came from. I launch Xcode, and I start my research. Very quickly I realize that there was a problem with the API.

![Xcode Manager](https://cdn-images-1.medium.com/max/1600/1*aj7_JElz0tjNiUIAOlmFiw.jpeg)

At that moment, I understood that it was really problematic: since Euclid had been designed to use this API, it would be imperative to deploy an update to fix the problem.

This time, I wanted to do things right and not delegate something so important to a third party. So I had to get the exchange rates, code and deploy my own API. To get the rates, I looked for a reliable institution, so I turned to the European Central Bank. I then designed an architecture to retrieve the rates, cache them and distribute them from the edge network. This had the advantage of being extremely fast, but also, in case of a problem, of only having to work on this system and not having to update the whole application.

![Diagram of the new architecture](https://cdn-images-1.medium.com/max/1600/1*kEcC-_esQgvxRDHf05G7kA.jpeg)

I worked with Cloudflare, to deploy this system in more than 200 cities. Their network manages all the requests, and allows to have response times of 8ms on average! To compare, the time it takes the iPhone to process an information and display it on the screen is 16ms on average.

Once this system was set up, I had to update Euclid's code to connect it to the new API. It only took me about 1 hour to reconfigure the app and test that everything was working well (be careful to always test well!). All that was left to do was to send the package to Apple and SetApp so that they could approve the build and distribute it to users. In the end, they were very responsive, and the next day it was good.

## Conclusion
So I understood a little too late that it was necessary to have a reverse proxy to not have the same problem. A reverse proxy can also cache the content, allowing for faster performance. For example, if a user in Paris visits a reverse-proxied website with web servers in Los Angeles, they can actually connect to a local reverse proxy server in Paris, which will then have to communicate with an origin server in L.A. The proxy server can then cache (or temporarily save) the response data. Subsequent users in Paris who browse the site will then get the locally cached version from the Paris reverse proxy server, resulting in much faster performance.

In conclusion, don't make the same mistake I did.