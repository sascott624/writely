# Writely

<a href="create-writely.herokuapp.com">deployed to heroku here</a>

###About

Welcome to Writely! A single page application built with Angular and a Rails API. Writely provides a simple creative writing exercise to encourage users to practice writing and find inspiration.


###Dependencies

The Rails API was built using Rails 5.0.0.1, and a sqlite3 database. It requires the angular-rails-templates gem for front end functionality.


###Installation

*(if you want to run Writely locally)*

To get started, clone this repository and run ```bundle install```, followed by ```rake db:migrate``` to set up the database. Finally, run ```rake db:seed``` to seed your database with some writing samples to start.

Then, run your local server with ```rails s``` and navigate to localhost:3000 in your web browser.


###Use

Writely has three main pages: create, archive, and random. After creation, each published writing sample is listed in the archive.

Adding a new writing sample can be done on the create page: the user will receive a randomly generated word and genre in which to write, and can submit once completed - or refresh to generate a new word and genre. The user can also click the randomly generated word and/or genre to re-generate.

Lastly, the random page will query the writing sample database for a random sample, and will render that sample's view page.


###Contributors

 Pull requests are welcome.  Contributors, please adhere to the [Contributor Covenant code of conduct](http://contributor-covenant.org/).


###License

The MIT License (MIT)

Copyright (c) 2016 Lindsey Wells

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
