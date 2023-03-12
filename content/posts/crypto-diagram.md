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
flowchart LR

A(((Indonesia Bank))) -->|top-up| B((Exchange-id))
B -->|Buy Crypto| C(Hold)
C --> D[Harga Naik] -->|Seneng| H(Jual)
C --> E[Harga Turun]
E -->|Sell| F[Cutloss]
E --> G[Hold]
G --> D
G --> E
H -->|Transfer| A
F --> I(sedih)
F --> J(menangis)
F --> K(menyesal)
```
