import { useState } from "react";

////////// Création et envoi d'un post //////////
const author = sessionStorage.getItem('name');
const profil = JSON.parse(sessionStorage.getItem('profil'))

function NewPost() {
    const [text, setText] = useState('');
    const [fileImage, setFileImage] = useState('');
    

    const CreatePost = (e) => {
      e.preventDefault();

      const imageUrl = fileImage

      let now = new Date()
      const date = now.toLocaleDateString()
      const time = now.toLocaleTimeString()

      return fetch('http://localhost:5500/api/posts/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${profil.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({author, text, date, time}),
      })
        .then((res) => res.json())

        .then((resJson) => {
          console.log(resJson);    
          console.log({author, text, imageUrl});
        })

        .catch((error) => {
          console.log(error);
          console.log({author, text, imageUrl});
        });
    };

    return (
      <form id="createPost" onSubmit={CreatePost}>
        <label htmlFor="createPostPicture">Image</label>
        <br />
        <input
          type="file"
          name="createPostPicture"
          id="createPostPicture"
          onChange={(e) => setFileImage(e.target.value)}
          value={fileImage}
        />

        <br />

        <label htmlFor="createPostContenu">Contenu</label>
        <br />
        <textarea
          name="createPostContenu"
          id="createPostContenu"
          rows=""
          cols=""
          placeholder="écrivez votre message"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>

        <br />

        <input id="createPostSubmit" type="submit" value="Envoyer un post" />
      </form>
    );
  }

export default NewPost
////////// Création et envoi d'un post //////////