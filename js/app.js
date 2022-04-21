document.querySelector('button').addEventListener('click', function() {
  console.log(fetch('https://reqres.in/api/users')
  .then((response) => {
    if(response.ok){
      return response.json()
    } else {
      throw new Error("Network Response Error");
    }
  }).then((data) => {
    console.log(data)
    showRandomuserData(data);
  }).catch((error) => {
    console.error("Fetch Error:",error);
  })
  )}, false);

  showRandomuserData = (randomUser) => {
    let length = randomUser.data.length;
    let randomNumber = Math.floor(Math.random() * length)
    document.getElementById('name').innerText =
    `${randomUser.data[randomNumber].first_name} ${randomUser.data[randomNumber].last_name}`
  
    document.getElementById('email').innerText =
    `${randomUser.data[randomNumber].email}`
  
    document.getElementById('id').innerText =
    `${randomUser.data[randomNumber].id}`
  }
      
  
  