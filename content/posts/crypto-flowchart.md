+++
author = "Alvernood"
title = 'Cryptocurrency Flowchart'
date = 2023-03-10T06:23:01+07:00
draft = false
description = ''
tags = ['crypto']
categories = ['']
diagram = true
math = false
_build = {list = "always"}
cascade = {_build = {list = "always"}}
+++


#### Interesting Cryptocurrency Flowchart


```mermaid
flowchart TB

A(((B A N K))) -->|Deposit| B(((Exchange)))
B --> BC(Buy Crypto)
BC --> G(Hold)
G --> D[Harga Naik] -->|Seneng| H(Take Profit & Sell)
G --> E[Harga Turun]
E -->|Sell| F[Cutloss]
F -.-> RI[re-invest] --> BC
H -.-> RI
H --> B
E --> G((HOLD))
F -.-> I(sedih)
F -.-> J(menangis)
F -.-> K(menyesal)
A --> PJ[/Bayar Pajak/]
H -.->|Transfer & Simpen| block(((Blockchain - Metamask)))
block -->|Deposit| B
B -->|Withdraw| A
B -.->|Simpen Uang| block
block -.->|Money Laundering| NFT[NFT / Cryptocurrency]
NFT --> G
block -.->|DEX| UP(Uniswap / PancakeSwap)
UP --> BC
block -.->|Simpen Uang| SC[Stable Coin USDT/BUSD/USDC]
SC -.-> GP[/No Tax./]
```
