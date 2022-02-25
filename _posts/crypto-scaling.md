---
title: 'A note on developing real-world payment system with the blockchain'
excerpt: 'The blockchain is an incredible tool for storing and manipulating data. But it is often too slow to be used for anything other than cryptocurrencies in the real world. It is especially true for payment systems that need to scale.'
coverImage: '/uploads/2022/02/nasdaq-header.jpg'
date: '2022-02-25T06:00:00.322Z'
author:
  name: Arthur Guiot
  picture: '/img/logo.jpeg'
ogImage:
  url: '/uploads/2022/02/visa-vs-btc.png'
---

Today, developers and companies seem to turn progressively to cryptos and web3, to prepare, what tomorrow will be called, the blockchain revolution. It's a wonderful technology that is already proving itself on the web, but it's having a hard time being integrated into our daily lives. A simple reason is that decentralization does not allow to make applications as powerful as traditional centralized applications.

A concrete example is El Salvador, which by legalizing Bitcoin has allowed its population to pay with Bitcoin at the supermarket. However, the use of Bitcoin in this case is particular, because it is not decentralized. To validate a transaction on the Bitcoin blockchain, it usually takes between 10 and 15 minutes. To solve this problem, the Salvadoran government has created a centralized payment system that allows you to pay without waiting for validation or paying additional fees.

## Network comparison
Since the last bull run in 2021, infrastructure blockchain projects are becoming more and more numerous and popular. We can mention [Solana](https://solana.com), [Avalanche](https://avax.network) or even [Fantom](https://fantom.foundation) which are at the top of the list. Where Ethereum had revolutionized Bitcoin by proposing the blockchain as a platform, the new networks are starting to propose the network as a platform. This is partly what explains the transition from Proof of Work to Proof of Stake. The blockchain is really becoming a kind of decentralized cloud that allows you to run your applications. Ethereum allowed applications to run in the blockchain for the blockchain, Solana allows applications to run in the blockchain for the web. We are starting to see little by little sites emerging that are entirely designed on the blockchain: this is the Web3.

However, I must confess to be a little disappointed. What was supposed to change the world with a new payment method ends up being the favorite payment method of [monkey image](https://boredapeyachtclub.com/) lovers. I would have preferred a [Crypto.com](https://crypto.com) card that actually uses my Bitcoin to pay rather than converting it to Euros first.

It's not because I didn't believe in it or try it, it's just a technology too immature. Who would be willing to wait 30 seconds at the checkout to pay for their BigMac? Not to mention the "gas fees" which would be exorbitant for such a small amount! So we have to work harder to improve this technology to make it really usable.

## How do we make sure we use blockchain in everyday life?
Let's take the time to understand what separates crypto payments from card payments today:
![Visa vs BTC](/uploads/2022/02/visa-vs-btc.png)

We understand that the blockchain must become faster and cheaper to outpace the current payment networks. Without forgetting of course all the specifications and hardware ecosystem that is non-existent today.

We are still far from a real revolution! However, we have to admit that we are getting closer every day. As I said earlier, many infrastructure blockchain projects have emerged this year. These projects all promise better performance, better scalability, and lower costs. Little by little, we're seeing cryptocurrencies become more and more integrated with the outside world. NFTs are a great example: the art world is finding a new audience, video games are starting to take interest in this technology, and even Facebook is changing its name. All this, helped by the advances in blockchain, with projects like Polygon and other chains called "Layer-2" that allow to reduce transaction costs.

### Building a blockchain-based payment system.
As I explained earlier, this kind of project is still far from being a reality, because few projects are willing to develop both the software (blockchain + services) and hardware (terminals) part. There are a few projects: Ripple, Stellar, or Diem (which has been abandoned since), but none of them is really available yet.

> But suppose we wanted to develop such a project, how would we go about it?

There are not dozens of options. The added value of such a project lies mainly in the creation of services and points of sale that can accept crypto payments. But this article is about blockchain, so let's focus on the technical aspect of developing such a network.

In an ideal world, you would have to develop every part of your new blockchain, but we'll assume that we're only allowed to use current means.

#### The Consensus
To develop a blockchain, the consensus is the heart of the network. It is the algorithm that will allow to transform a peer-to-peer network into a blockchain of data. It is what makes it possible to put in agreement all the machines which make turn the network. The consensus algorithm prevents incoherence or attacks where an attacker would send a message to the others allowing to falsify transactions. The oldest algorithm, that of Bitcoin, is the "Proof of Work", and is not very powerful, but secure. Today other algorithms exist, based on the "Proof of Stake" which works on the principle of betting: the more important a miner is, the more likely his block will be added. This allows to be much more efficient (more transactions per second) and to greatly reduce costs.

The number of transactions per second is certainly important, but in this type of consensus, everything is synchronous. This means that the validation time of a transaction is not necessarily as fast as one might think. Ethereum 2.0, with thousands of TPS (Transaction Per Second), will not have an instant TTV (Time to validity).

This is where asynchronous consensus is much more interesting. I would like to take as an example [Fantom](https://fantom.foundation) and [Avalanche](https://avax.network) which have two slightly different strategies. Avalanche has developed the Snowflake algorithm, which, to simplify greatly, will poll the other members of the network to know their results. If they have the same (for a certain number of samples), then the block is validated. Fantom with its Lachesis + TxFlow algorithm, will send each observed change to the network, and according to the coherence of the last events, will validate the old blocks asynchronously. This allows to use the result of Lachesis before the block is fully validated.

Avalanche is generally faster when using its token, $AVAX, but with Ethereum applications (EVM), it is Fantom which is faster because of its consensus.
#### The virtual machine
The reason for the speed of Avalanche is its VM which is more optimized than the Ethereum VM used by Fantom. It is important to consider this option because a faster VM, no matter the consensus, will optimize the network performance. That's why on this point, Avalanche wins the battle because of its subnets which allow to develop its own VM without necessarily going through EVM or AVM. Solana is also ahead because it uses LLVM, a way of not having a virtual machine as such, but of running programs directly without an interpreter.

#### Network economy
Network performance is of paramount importance, but if we end up paying fees for each transaction, building a payment system to compete with the current ones will be useless. We need to rethink how fees are distributed. Today, the economic disconnection between cryptos and the real world makes this kind of project difficult because if tomorrow the token in question loses its value, the fees will also decrease. Yet the network costs money to maintain. So we have to think of a way to have minimal and easy to predict fees. Paying in USDT/C would be a good option, as long as they are minimal. To do this, we need to maximize the performance of the network to get the most TPS for the least amount of energy spent.

#### Privacy and transparency
Today's blockchain are mostly public and the data can be read by anyone. For an actual payment system, this would be a major issue, as certain entities such as intelligence agencies or even insurance companies would be able to compile the data and analyze it to determine private information about a person. [Monero](https://www.getmonero.org) is a great example of a blockchain that is not public, and all the transactions are encrypted. It is mostly famous for encouraging fraud and can be used to finance terrorism, but if correctly regulated, the same technology could be used to preserve users' data.

## Centralized vs decentralized
It is important to acknowledge that complete decentralization is not a good option for a payment system. There are many reasons for this, but the main one is that when money is involved, it is necessary to regulate the exchanges. This is not the case with cryptocurrencies, where the exchange is done in a decentralized way, and not regulated by any central authority.

But complete centralization is not good either. Visa, Mastercard or SWIFT are completely centralized and have complete control over their infrastructure. Therefore, they can't be trusted to be neutral everytime. The example of Iran or more recently Russia with SWIFT shows the limits of centralization. So how should we deal with centralization vs decentralization?

Well, the question is complex because there's no one answer. One way is to develop a fully decentralized network, but operatable by centralized entities. This way we delegate the regulation to the banks and the central authorities. Everyone would be able to use and contribute to the network, making it censorship resistant, but payments would have to be validated first by those central authorities. This way, it would solve the major problem of private blockchains like Monero.

## Conclusion
We've seen why blockchain has the potential of revolutionizing the payments industry. It is a technology that can be used to build a payment system that is decentralized and secure. But it must be correctly designed, implemented and regulated to be a viable option. This is definitely not for today, but we can imagine a future where the topics covered in this article will be applied to create a blockchain based payment system.