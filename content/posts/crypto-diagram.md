+++
author = "Alvernood"
title = 'Crypto Flowchart'
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


#### Flowchart kalo lo jual dan beli Crypto assets

```mermaid
flowchart TB

A(((Indonesia Bank))) -->|Deposit| B((Exchange-id))
B --> BC(Buy Crypto)
BC --> C(Hold)
C --> D[Harga Naik] -->|Seneng| H(Take Profit & Sell)
C --> E[Harga Turun]
E -.->|Sell| F[Cutloss]
F -..- re-invest -.-> B
E -.-> G[Hold]
G -.-> D
G -.-> E
H -->|Transfer & Simpen| A
F -.-> I(sedih)
F -.-> J(menangis)
F -.-> K(menyesal)
A --> PJ[/Bayar Pajak/]
H -->|Transfer & Simpen| block(Blockchain - Metamask)
block --> GP[/Gak Bayar Pajak Kekayaan/]
GP -->|transfer| A
```
