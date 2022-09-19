let form = document.querySelector ("form");
let errorMessage = {};

function displayError (name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name]
    elm.classList.add ("error")
}

function displaySuccess (name){
    let elm = form.elements[name];
    console.dir (elm)
    elm.nextElementSibling.innerText = "" ;
    errorMessage[name] = "" ;
    elm.classList.remove ("error");
    elm.classList.add ("success");
}

function handleSubmit (event){
    event.preventDefault();
    let elements = event.target.elements ;
    const name = elements.name.value;
    const email = elements.email.value;
    const message = elements.message.value;
    
    // name can not be less than 4 character
    if(name.length < 4){
        errorMessage.name = "name can not be less than 4 character"
        displayError("name")
    }
    else{
        displaySuccess("name")
    }

    // Email must contain the symbal @
    if (!email.includes("@")){
        errorMessage.email = "Email must contain the symbol @";
        displayError("email")
    }
    else{
        displaySuccess("email")
    }
}

form.addEventListener ("submit" , handleSubmit);