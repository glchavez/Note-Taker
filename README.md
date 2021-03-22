# Note-Taker

## Description

This repository takes in user input and creates a list of notes. It is intended to help individuals keep track of their thoughts by allowing them to take notes and reference them at a later time on the web page. They will also be able to delete the notes once they are no longer needed.

A challenge I faced when creating this repository was assigning a unique id to each new note by using the uuid npm. Implementing this id assignment in the POST function of the server.js file worked, which I then used to delete specific notes from the database using id's. For future improvements, I would like to create the option to allow the user to update their old notes rather than just read them.


## Usage

To use this application, please visit the deployed web page at [Note Taker](https://limitless-bastion-08253.herokuapp.com/). Once on the web page, you will be presented with a home page. Click the "Get Started" button.

This will take you to the notes page that has an empty text area to create your first note. Once you have entered a note title and text in the text area's, you can click on the save icon in the top right to save the note. This saved note will appear in the left column. You can view the note by clicking on the note title. If you would like to delete the note, simply click on the delete icon next to the note title.

To create a new note, click on the pencil icon in the top right and an empty text area for the new note will appear.


The note web page will look as such:

![Example Note Web Page](/images/notePage.png)


## Credits

I would like to provide credit to [The Denver Univeristy Coding Bootcamp](https://bootcamp.du.edu/coding/) for providing me with the materials, intstructions, and one-on-one assistance to perform this project.

Recognition is provided to [W3 Schools](https://www.w3schools.com/) for providing me with resources to better understand the app.DELETE function for a server. I was also able to understand the uuid npm to set a unique id for each note from [npmjs.com](https://www.npmjs.com/package/uuid).


## License

MIT License

Copyright &copy; 2021 Giovany Chavez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.