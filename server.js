// Upload express
const express = require('express');


const PORT = 3001;
const app = express();
//Generates unique id tags for stored data
const uuid = require('./helpers/uuid');

app.use(express.static('public'));
// Shows the homepage anytime a url is entered aside from /notes
app.get('*', (req, res) => {
    res.sendFile(
      `./public/index.html`)
  });
  

//Pulls notes.html when /notes is used at the end of url
app.get('/notes',(req, res) => {
    res.sendFile(`./public/notes.html`)
})

//Need to add code for a post request to add new entry into JSON file

//Gets all data stored in JSON file and shows it on the page
app.get('/api/notes',(req, res) => {

})


//Adds another item to JSON file
//Need to read in the JSON file first so you can append new data and then resave the JSON
app.post('/api/notes',(req, res) => {

  //deconstruct post data
  const {title, text} = req.body;
  
  //If data is complete create a new note object
  if(title && text){
    newNote = {
      title,
      text,
      id: uuid()
    }
  }

  fs.readFile(`./db/notes.json`,'utf8',(err,data)=>{
    if(err){
      console.error(err)
    }
    else{
    const parsedNotes = JSON.parse(data);
    parsedNotes.push(newNote);
    const noteString = JSON.stringify(parsedNotes);

    fs.writeFile(`./db/notes.json`, noteString, (err) =>
    err
      ? console.error(err)
      : console.log(
          `Review for ${newNote.title} has been written to JSON file`
        )
  );
}
})

  //Create section to read in current JSON
  //Append new Note to old JSON
  //Create section to write file  (Reference activity 19 and 20 Data Persistence)
})

//Deletes JSON data based on unique idea in url
app.delete(`/api/notes/${id}`,(req, res) => {

})

//Have the server run on port 3001
app.listen(PORT, () =>
  console.log(`Note taking app listening at http://localhost:${PORT}`)
);
