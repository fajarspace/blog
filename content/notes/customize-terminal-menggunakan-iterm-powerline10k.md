---
date: 2021-06-19
categories: [terminal, iterm]
title: "Customize iTerm menggunakan ohmyzsh+powerline10k"
---

<!--more-->

1. Download [iterm2](https://iterm2.com/)
2. Install [ohmyzsh](https://ohmyz.sh/) menggunakan brew atau lainnya (lihat di dokumentasi ohmyzsh)
3. Buka iterm Go to Preferences - profile - color lalu import color preset [https://github.com/fajaragngn/zsh-itermcolors](https://github.com/fajaragngn/zsh-itermcolors "https://github.com/fajaragngn/zsh-itermcolors")
4. Go to Preferences - profile - general klik icon menjadi built-in icon
5. Install theme [powerline10k](https://github.com/romkatv/powerlevel10k) (Lihat dokumentasi di github)
6. Config ketik **nano \~/.zshrc** ubah **ZSH_THEME="apa ini saya lupa:V"** menjadi **ZSH_THEME="powerlevel10k/powerlevel10k"**
7. Save, lalu restart iterm
8. Ikuti konfigurasi yang di berikan dan selesai.
9. Untuk konfigurasi ulang ketik p10k configure

   ![](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)
