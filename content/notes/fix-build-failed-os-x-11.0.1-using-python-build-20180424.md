---
date: 2020-11-24
categories: [terminal, python, macos]
title: "Fix BUILD FAILED (OS X 11.0.1 bigsur using python-build 20180424)"
---

➜ brew install zlib openssl readline

<!--more-->

CFLAGS="-I$(brew --prefix openssl)/include -I$(brew --prefix readline)/include -I$(xcrun --show-sdk-path)/usr/include"

LDFLAGS="-L$(brew --prefix openssl)/lib -L$(brew --prefix readline)/lib -L$(brew --prefix zlib)/lib"

Warning: zlib 1.2.11 is already installed and up-to-date  
To reinstall 1.2.11, run `brew reinstall zlib`

Warning: openssl@1.1 1.1.1g is already installed and up-to-date  
To reinstall 1.1.1g, run `brew reinstall openssl@1.1`

Warning: readline 8.0.4 is already installed and up-to-date  
To reinstall 8.0.4, run `brew reinstall readline`
