class resourceCaller {
    constructor(url){
        this._url = url;
    }

    get Url() {
        return this._url;
    }

    loadFromApi () {
        console.log(fetch(this.Url)
        .then((response) => {   
          return response.text()
        }).then((data) => {
          console.log(data);
          this.showAllData(data);          
        }).catch((error) => {
          console.error(error);
        })
    )};

    showAllData = (user) => {
        document.getElementById('fullResponse').innerText = user;
      
      }
}

class childCaller extends resourceCaller {
    constructor(url){
        super(url)
    }

    loadFromApi () {
        console.log(fetch(this.Url)
        .then((response) => {   
          return response.json()
        }).then((data) => {
          console.log(data);
          this.showAllUserData(data);          
        }).catch((error) => {
          console.error(error);
        })
    )};

    showAllUserData (users) {
    let length = users.data.length;
    let para = document.createElement("p");
        for (let i = 0; i < length; i++){
            appendParagraph(`Name: ${users.data[i].first_name} ${users.data[i].last_name}`, "box")
            appendParagraph(`Email: ${users.data[i].email}`, "box")
            appendParagraph(`Id: ${users.data[i].id}`, "box")
        }
    }
}

function appendParagraph(text, div) {
    const para = document.createElement("p");
    const node = document.createTextNode(`${text}`);
    para.appendChild(node);
    document.getElementById(`${div}`).appendChild(para);
}

const reasourceC = new resourceCaller('https://reqres.in/api/users');
reasourceC.loadFromApi();
const resourceChild = new childCaller('https://reqres.in/api/users');
resourceChild.loadFromApi();