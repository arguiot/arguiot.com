---
title: 'Ma Seconde Cabane: E-Commerce Case study'
excerpt: "Case Study on Ma Seconde Cabane, an e-commerce site I built on top of the NextJS & Vercel ecosystem for scalability, reliability and maintainability reasons. Here is a detailed report of my work on the website, from its creation to deployment."
coverImage: '/uploads/2020/05/Pro%20Display%20XDR.jpg'
date: '2020-11-26T06:00:00.322Z'
author:
  name: Arthur Guiot
  picture: '/img/logo.jpeg'
ogImage:
  url: '/uploads/2020/05/Pro%20Display%20XDR.jpg'
---
Let me introduce myself: my name is Arthur Guiot, and I am a computer science student. In my spare time I work as a freelance developer to make some money. I was contacted for the creation of an e-commerce website and I'll explain how I came to the result.

The project of this site is to propose a platform to sell second hand clothes in Montreal. When I was contacted, the client only had the name and the concept in mind, so I had to take care of the branding, design and conception of the site.

## Design Process
### 📚 Discover
The first thing I did was to search similar websites to find common patterns. This helped me to understand the real scenarios better and proceed with the design.
### ✍ Define
Compiling the data received from the research and using it to lead me towards a design which is for my users! This consists in defining a set of specifications for the website.
### 💡 Wireframe
Here I started wire-framing and coming up with design solutions aligned to my target audiences based on the research. Once this was done, I sent my ideas to the client, so she could choose the model she prefers.
### 👩‍💻 Development
Usually, this is the final step, but since the client wasn't sure of all the choices, I preferred to tackle the development directly and make the changes on the fly.
### 🔨 Refinements
Every time I advanced on the site, I would ask the client to give me her opinion, so that I could get as close as possible to what she wanted. We didn't necessarily agree on certain choices, so I would explain why it would be better to do it this way or that and most of the time she would take my opinion into account.

# Branding
I had to create a brand image, and thus define its visual identity. The first thing I did was to define a color palette that would reflect what the site should be. At the beginning, I started with yellow to represent childhood and positivity, but I quickly understood that a water blue would be more appropriate because it was linked to nature (growth, harmony, freshness).
![](/uploads/2020/05/palette.jpg)
For the logo, the client really wanted a maple leaf (symbol of Canada) and the name written in a playful, holiday-style font. I didn't have a lot of work since she liked the first prototype right away.
![](/uploads/2020/05/logo.jpg)
# Developpement
This was the biggest challenge for me as I have never done e-commerce before. I know there are a lot of solutions like Shopify, etc. I've never done e-commerce before. But I really wanted to do everything from A to Z (except the payment system).

The best way to meet these objectives was to use NextJS. NextJS is a JavaScript framework that allows to combine the frontend and the backend in a single codebase while reducing the time spent on programming!

Now, NextJS offers a starter kit for e-commerce, but I had already finished it before it was released (bad luck!).

It was important for me to adopt a workflow that requires minimal setup or maintenance while offering superior performance at scale. That’s why I chose Vercel to host the website. Using a single platform to handle domain management, automated build previewing, and production deployment allows me to continuously release new versions without increasing the mental overhead involved.

On top of Vercel, I decided to use CloudFlare even though it slightly reduces the performances (not visible at all, even side by side, but technically slower) but because I decided to use Workers and their DNS system. It was just easier dealing with complex things such as bandwidth usage, security in general and image caching.

As you start to understand, developing an e-commerce site requires to have a complex architecture and use a lot of third party services:
- **Payment system**: I used Stripe because they’re the biggest and it was really easy to integrate.
- **Database**: Fauna was a good choice because they’re cheap (free in my case) and offer reliable performances. They also support GraphQL which is far better than FQL. I could focus on the data instead of having to learn a new query language.
- **Image storage**: An e-commerce uses a lot of images. I needed a flexible, easy to use and cheap option to store images. The obvious answer could have been Amazon S3, but it turns out that Backblaze B2 offers more or less the same service but for 1/4 of the cost. So I went for Backblaze B2 object storage.
- **Image delivery**: At the beginning, I had gone with ImageKit because they had a free offer, but the performance wasn't good enough, so I switched to Imgix. Imgix is extremely fast, and to reduce costs, I cache the images on Cloudflare to pay almost nothing in CDN fees.

# Final version
![](/uploads/2020/05/Pro%20Display%20XDR.jpg "Website preview on Pro Display XDR")
After finishing my work, I was able to present it to the client who was delighted. In the end, I spent about 150 hours on this project, which is still a lot. The site was actually 2 sites: the working site and the administration panel (which I did from A to Z, but we'll talk about that in a future post). It was a very fun and instructive project.

You can visit the final version here: [https://masecondecabane.com](https://masecondecabane.com)