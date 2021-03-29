var imagename = ""
function sendimage()
{
    imagename = document.querySelector('input[name = car]:checked + label>img').getAttribute("src")
var queryString = "?img=" + imagename; 
window.location.href = "thankyou.html" + queryString;
}
function thankyou()
{
    var queryString = decodeURIComponent(window.location.search); //parsing 
    queryString = queryString.substring(1); 
    var queries = queryString.split("=");
    document.querySelector('img').src = queries[1];
    dataLayer.push({'event': 'success'});
}
function validateForm()
{
    var result;
    result =  validatename();
    result = validatemobile();
    result = validateemail();
    if(result==true)
    {
        dataLayer.push({'event': 'submitclick'});
    }
    return result;
}
function validatename()
{
    let x = document.getElementById("name").value;
    // name field is blank
    if (x == "" || x.trim() =="") 
    {
       alert(x.trim())
      alert("Name must be filled out");
      return false;
    }
    else
    {
        var regex = /^[A-Za-z ]+$/
        //check for special symbols
        if(!(regex.test(document.getElementById("name").value)))
        {
            alert("Name cannot contain special characters or numbers")
            return false;
        }
        else{return true;}
    }
}
function validatemobile()
{
    let regex = /^[6-9][0-9]{9}$/
    if(!(regex.test(document.getElementById("mob").value)))
            {
                alert("Invalid mobile numbers")
                return false
            }
    else{return true;}
}
function validateemail() 
{
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(regex.test(document.getElementById("email").value)))
    {
        alert("You have entered an invalid email address!")
        return false;
    }
    else{return true;}
}
