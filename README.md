#Technologies used.
HTML, CSS, JS, P5JS (rendering library for animations), AJAX, PHP, online website with SQL

#Your process/approach.
I knew that I don't like CSS, but I wanted to have cool animations. The way that I figured it, I could use processing (programming-language) that I had been toying with to do this. p5js is a library that is similar to processing that allows me to use processing like applications to make animations in a programmatic way, which I find cool. I also wanted to make it silly and an about page that people would find fun rather than about me. So I made it about platypuses instead. I started with a basic template, built out the p5js "extras" every day after I had done something on the "necessary" list and after a couple days I was more or less done. Then I went back and tried to clean up the code a bit and add comments. 

#Unsolved problems.
-Viewport height and width does not prevent scrolling out of lightbox.
-Top about box is a bit off because overlaying the high rez image distorts the dimensions (can't overlay properly otherwise)
-Have a hanging black space at end of body, which I can't get rid of programmatically.

#Your biggest wins and challenges.
I found that I had to use instantiations to get multiple canvases on the page for p5js which was a bit of a pain. Also, I found that the only way to really position canvases using offset was to do so by polling the page at an interval which is computationally expensive, and it's annoying I couldn't figure out a way to do this on page resize. Wins were that I figured out how to get my animations on a webpage and I can use AJAX to query my daterbase. Highest win is that I have a rather large amount of language which I can parse and is parseable (I hope) to others.