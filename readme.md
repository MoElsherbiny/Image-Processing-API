# Project Name

Image Processing API

# Description

is a program that can resize an image's width and height to whatever size you require.

## Installation

To install all of the packages in a pack.json,
use
npm install

## Usage

Then use
npm run dev to run the server with nodemon package
npm run build to configure Ts with JavaScript with watch mode
npm run format to check prettier
npm run lint:fix to check for errors and, if possible, fix them

Next, try testing using one of the fantastic packages, Jasmine.
npm run test

then try Endpoint http://localhost:3000/resize?file=fjord&width=3030&height=1200

Try it if you didn't add a Image name like this.
http://localhost:3000/resize?file=&width=3030&height=1200
Unfortunately, no file was found. Enter the name of the image you want to resize

if the image is not in the folder
http://localhost:3000/resize?file=uda&width=3030&height=1200
you receive a message This photo was not found because the resource was not found. Please check the assets folder first and try again

if you didn't add height like this. http://localhost:3000/resize?file=fjord&width=3030&height=
you receive a message Please provide a valid height. To resize the image height

if you didn't add width like this. http://localhost:3000/resize?file=fjord&width=&height=1200
you receive a message Sorry Retry with a different width number.

I used existsSync to see if the picture was already in the image file or not. If it was, I returned it to you; otherwise, it was resized.

# Usage packages

```bash
npm install prettier
npm install ESLint
npm install sharp
npm install jasmine
npm install super-test
npm install nodemon
npm install fs-extra
```

# Roadmap

I'd like to make this project more accessible to users on store shelves in case I need to expand on the concept.

## Authors and acknowledgment

I admire Udacity's educational efforts in achieving this level of accomplishment, and I am proud to be a member of the Udacity team.

I also appreciate your interest in my project.

# Support

If you require further assistance, please contact me on Linkedin at https://www.linkedin.com/in/moelsherbiny

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License

[Udacity]
