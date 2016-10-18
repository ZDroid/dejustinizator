# Dejustinizator

[![Build status](https://travis-ci.org/zdroid/dejustinizator.svg?branch=master)](https://travis-ci.org/zdroid/dejustinizator)
[![devDependencies status](https://david-dm.org/zdroid/dejustinizator/dev-status.svg)](https://david-dm.org/zdroid/dejustinizator?type=dev)

> Chrome extension for replacing Justin Bieber's name with anything you want

If you don't wanna see his name all over the Internet. It can work with any
other annoying celebrity, you just have to edit `src/dejustinizator.css`.

![Dejustinizator logo](https://raw.github.com/zdroid/dejustinizator/master/src/icon-128.png)

## Installation

Clone this repository and open **chrome://extensions/** page. Be sure you are
in **Developer mode**. Click on **Load unpacked extension** and choose the
`src/` directory of extension.

## Customization

Dejustinizator isn't hard to customize. All you have to do is to edit
`src/dejustinizator.css`.

1. Add the search regex in `searches` array.
2. Add the replacement in `replacements` array.

Try it out and blacklist all celebrity names you don't want to see.

## Screenshot

A picture is worth a thousand words.

![Dejustinizator screenshot](https://raw.github.com/zdroid/dejustinizator/master/screenshot.png)

## License

MIT &copy; [Zlatan Vasović](https://github.com/zdroid)
