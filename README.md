<h1>Explanation</h1>

I designed this to be a project kids (probably middle schoolers) could follow to learn soldering and programming. There are a lot of kits available, but they lack the ability to teach kids to make their own projects. 

This includes the code and related files to make a binary clock with a Micro:bit. Versions 1 and 2 will work with these. The Makecode works by taking the time from the RTC module (see below for the part) and then displaying it via the neopixel library. Two forever blocks run to (1) obtain the current hour, second, and minute values and (2) display the values in binary format through the neopixels. The work is done through the defined functions.

The Micro:bit buttons are configured so as to allow the user to (1) toggle between DST and non-DST, (2) toggle between the "1" LED colors, and (3) change the brightness.

The Micro:bit runs on 3.3v, but the neopixels can run on 5 volts. Since 5 volt power supplies are common, I opted to run the clock on a 5 volt supply and power the Micro:bit through the regulator module. 

<h1>Electronic Components</h1>
Through-hole components for the project uses a DS3231 real time clock ("RTC") module, an AMS1117-3.3v voltage regulator breakout board, a single pull double throw slide switch, and a barrel jack connector. Those parts are generally available from Amazon/eBay/Aliexpress/Banggood. The last through-hole component is a Micro:bit breakout board from Sparkfun.

The LEDs are WS2812B-2020 modules. These do not need resistors or capacitors. I purchased mine through LCSC. The data sheets suggest that the modules are somewhat fragile, but I soldered mine with solder paste and a hot air station set to 300 degrees celsisus. Consult the data sheet about soldering.

<h1>Housing</h1>
I designed the housing in Freecad. The top piece (with the holes for the LEDs) should be printed with supports. I had to remove a slight amount of material from the holes in the top piece where the pegs on the bottom part insert. Results will depend on your printer's calibration. I glued the parts together with Gorilla Glue. I then used Rustoleum filler primer spray to fill any layer lines or other imperfections. After sanding it, I painted it. Most paints should adhere to the Rustoleum spray.

Finally, I used M3 brass inserts in the holes where the circuit board sits. As is, the M3 screws went in fairly easily. The inserts are readily available online. 

> Open this page at [https://filledmilk.github.io/microbit-binary-clock/](https://filledmilk.github.io/microbit-binary-clock/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/filledmilk/microbit-binary-clock** and import

## Edit this project ![Build status badge](https://github.com/filledmilk/microbit-binary-clock/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/filledmilk/microbit-binary-clock** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/filledmilk/microbit-binary-clock/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
