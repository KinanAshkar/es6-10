// 48 - Promise And XMLHTTPRequest:

/* let myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.state === 200){

        // ready state => the status of the request
        // [0]: request not initialized
        // [1]: server connection established
        // [2]: request recieved
        // [3]: processing request
        // [4]: request is finished and response is ready
        // status => response status code
        // [200] OK
        // [404] not found


        // console.log(this.responseText);
        console.log(JSON.parse(this.responseText));
    }
}

// XMLHttpRequest.open(method: "get" or "post", url: "api url", async: true, user, pass)

myRequest.open("get", "https:api.github.com/users/KinanAshkar/repos", true);

// send the request
myRequest.send(); */


// Other Example
/* function getFirstRepo(apiUrl){
    let myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.state === 200){

        // ready state => the status of the request
        // [0]: request not initialized
        // [1]: server connection established
        // [2]: request recieved
        // [3]: processing request
        // [4]: request is finished and response is ready
        // status => response status code
        // [200] OK
        // [404] not found


        // console.log(this.responseText);
        console.log(JSON.parse(this.responseText)[0].name);
    }
}

// XMLHttpRequest.open(method: "get" or "post", url: "api url", async: true, user, pass)

myRequest.open("get", apiUrl, true);

// send the request
myRequest.send();
}

getFirstRepo("https:api.github.com/users/KinanAshkar/repos"); */


// Other Example With Promise
/* const getFirstRepo = (apiUrl) => {

    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();

        myRequest.onload = function(){
            if(this.readyState === 4 && this.state === 200){
                resolve(JSON.parse(this.responseText)[0].name);
    }else{
        reject(Error(this.statusText));
    }
}
    myRequest.open("get", apiUrl, true);
    myRequest.send();
    });
}

// getFirstRepo("https:api.github.com/users/KinanAshkar/repos").then(
//     (result) => console.log(result),
//     (error) => console.log(error)
// );

getFirstRepo("https:api.github.com/users/KinanAshkar/repos").then(
    (result) => {
        let newElement = document.createElement("div");
        let elementText = document.createTextNode(result);
        newElement.appendChild(elementText);
        document.body.appendChild(newElement);
    },
    (error) => {
        console.log(error);
    }
); */