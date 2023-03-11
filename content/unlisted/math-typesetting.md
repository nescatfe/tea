+++
author = "Alvernood"
title = 'Type Matematika'
date = 2023-03-11T14:49:20+07:00
draft = false
description = ''
tags = ['']
categories = ['']
math = true 
diagram = false
[_build]
list = 'never'
[cascade._build]
list = 'never'
+++

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries like [KaTeX](https://katex.org) the one that Minima uses. Here's what you can do in the configuration file to enable it.

```
math:
  enable: false
  provider: katex
```

## Examples

The following are some examples of mathematical notations with KaTeX that are pretty much like LaTeX's.

### Block

```
\varphi = 1+\frac{1}{1+\frac{1}{1+\frac{1} {1+\cdots}}} 
```

wiil be rendered as:

$$
\varphi = 1+\frac{1}{1+\frac{1}{1+\frac{1} {1+\cdots}}} 
$$

### Inline

```
Pythagorean theorem can be written as $a^2+b^2=c^2$ where *a*, *b* and *c* are the length of legs of a triangle.
```

will be rendered as:

Pythagorean theorem can be written as $a^2+b^2=c^2$ where *a*, *b* and *c* are the length of legs of a triangle.
