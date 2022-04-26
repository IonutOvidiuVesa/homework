document.querySelector('button').addEventListener('click', function() {
 fetch('https://reqres.in/api/users')
  .then((response) => {
    if(response.ok){
      return response.json()
    } else {
      throw new Error("Network Response Error");
    }
  }).then((data) => {
    console.log(data)
    showAllUserData(data);
  }).catch((error) => {
    console.error("Fetch Error:",error);
  })
  }, false);

  showAllUserData = (users) => {
    let length = users.data.length;
        for (let i = 0; i < length; i++){
            appendParagraph(`Name: ${users.data[i].first_name} ${users.data[i].last_name}`, "container")
            appendParagraph(`Email: ${users.data[i].email}`, "container")
            appendParagraph(`Id: ${users.data[i].id}`, "container")
        }
    }

    function appendParagraph(text, div) {
      const para = document.createElement("p");
      const node = document.createTextNode(`${text}`);
      para.appendChild(node);
      document.getElementById(`${div}`).appendChild(para);
  }
      
  
  