const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


let bookmark = [];

app.get('/bookmarks' , (req , res)=>{
  res.json(bookmark);
})



app.post('/bookmarks', (req, res) => {

    const {title , url } = req.body;

    if (!title || !url) {
        res.status(400).json({
            error: "Title and URL are required"
        });
    } 
    const newBookmark = {id : Date.now() , title , url};    
        bookmark.push(newBookmark);
        
        res.json({
            title : title,
            url : url
        })
    
});

// Delete a bookmark
app.delete('/bookmarks/:id', (req, res) => {
    const { id } = req.params;
    bookmark =  bookmark.filter(book => book.id !== parseInt(id));
    res.json({ message: "Bookmark deleted successfully" });
});


app.listen(3000 , ()=> console.log("running on 3000"));