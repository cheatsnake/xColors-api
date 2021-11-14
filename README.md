# :rainbow: xColors API

A free API for generate &amp; convert colors.

## :eyeglasses: Overview
xColor is a completely free service that provides the ability to obtain random colors and convert them into various color models (HEX, RGB and HSL are supported). All data comes in a convenient JSON format, so you can immediately use them for styling in CSS without additional validation.

## :page_facing_up: API Documentation

### :game_die: Get random color
Get a JSON object that contains a random color in three HEX, RGB and HSL color models at once.
```sh
https://x-colors.herokuapp.com/api/random
```
```sh
{
    hex: "#CCFB7B",
    rgb: "rgb(204, 251, 123)",
    hsl: "hsl(82, 51%, 98%)"
}
```

### :art: Get random color with a given hue
You can get random shades of the color you need. For example, using reserved names such as: 
<br>
<i>[ red, pink, puprle, navy, blue, aqua, green, lime, yellow, orange ]</i>
<br>
```sh
https://x-colors.herokuapp.com/api/random/blue
```
Instead of reserved words, you can use any number from the range [0, 359] - which corresponds to the [HUE scale](https://en.wikipedia.org/wiki/Hue).
```sh
https://x-colors.herokuapp.com/api/random/228
```

### :wrench: Parameters
The <i>number</i> parameter allows you to get an array containing the desired number of random colors.
```sh
?number=3
```
The <i>type</i> parameter allows you to get either only a dark or light shade of color. This allows you to know in advance what font color to use against the background of the resulting color. Usually, the font color is white on dark colors, and black on light colors.
> It works if you have specified the <b>{hue}/{color}</b> you need or use <b>all</b> - for an any color.
```sh
/random/{hue/color/all}?type=dark
```
```sh
/random/{hue/color/all}?type=light
```


### :arrows_counterclockwise: Converting сolors
You can freely convert colors between three color models. To do this, use the desired endpoint and use the <i>value</i> parameter to specify the color value of the color model, depending on the selected endpoint.
<br><br>
Convert HEX to RGB
```sh
https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF
```
Convert HEX to HSL
```sh
https://x-colors.herokuapp.com/api/hex2hsl?value=FFFFFF
```
Convert RGB to HEX
```sh
https://x-colors.herokuapp.com/api/rgb2hex?value=120-200-30
```
Convert RGB to HSL
```sh
https://x-colors.herokuapp.com/api/rgb2hsl?value=120-200-30
```
Convert HSL to HEX
```sh
https://x-colors.herokuapp.com/api/hsl2hex?value=300-90-50
```
Convert HSL to RGB
```sh
https://x-colors.herokuapp.com/api/hsl2rgb?value=300-90-50
```

## :dart: Examples
```sh
https://x-colors.herokuapp.com/api/random?number=10
```
```sh
https://x-colors.herokuapp.com/api/random/green?number=10&type=light
```
```sh
https://x-colors.herokuapp.com/api/random/123?type=dark&number=2
```
```sh
https://x-colors.herokuapp.com/api/hsl2hex/hsl(200,20,10)
```
```sh
https://x-colors.herokuapp.com/api/hex2rgb/e2A4bF
```

## :zap: Available Scripts

In the project directory, you can run:

### Runs the server with Nodemon for development
```sh
npm run dev
```
The page will reload if you make edits.\
You will also see any lint errors in the console.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### Create a production build
```sh
npm run build
```

### Runs the server of production build
```sh
npm start
```
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
