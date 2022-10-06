import { useState } from "react";

////////// Création et envoi d'un post //////////
const author = sessionStorage.getItem('name');
const profil = JSON.parse(sessionStorage.getItem('profil'))



function NewPost() {
    const [text, setText] = useState('');
    const [file, setFile] = useState();
    //const [picture, setPicture] = useState(null);

    const handlePicture = (e) => {
      //setPicture(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    };
    //console.log(picture);
    console.log(file);
    

    const CreatePost = (e) => {
      e.preventDefault();

      let now = new Date()
      const date = now.toLocaleDateString()
      const time = now.toLocaleTimeString()

      /*const formData = new FormData()
      formData.append("author", author )
      formData.append("text" , text)
      formData.append("date", date)
      formData.append("time", time)
      formData.append("file", file)*/

     

      fetch('http://localhost:5500/api/posts/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${profil.token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json' /* 'multipart/form-data'*/,
        },
        
        //body: formData
        body: JSON.stringify({author, text, date, time, file}),
      })
        .then((res) => res.json())

        .then((resJson) => {
          console.log(resJson);    
          console.log({author, text, file});
          //console.log(formData);
          //window.location.reload()
        })

        .catch((error) => {
          console.log(error);
          console.log({author, text, file});
          //console.log(formData);
        });
    };

    const Reinitialiser = () =>{
      setText('')
      setFile(null)
    }

    return (
      <form id="createPost"  method="post" encType='multipart/form-data' onSubmit={CreatePost}>
        <label htmlFor="createPostPicture">Image</label>
        <br />
        <input
          type="file"
          name="createPostPicture"
          id="createPostPicture"
          onChange={(e) => handlePicture(e)}
        />

        <br />

        <label htmlFor="createPostContenu">Contenu</label>
        <br />
        <textarea
          name="createPostContenu"
          id="createPostContenu"
          placeholder="écrivez votre message"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>

        <br />
        
        <div id="createPostInteractions">
          <input id="createPostInteractionsSubmit" type="submit" value="Envoyer le post" />
          <button id="createPostInteractionsNull" type="button" onClick={() =>{Reinitialiser()}}>Réinitialiser</button>
        </div>
        
      </form>
    );
  }

export default NewPost
////////// Création et envoi d'un post //////////