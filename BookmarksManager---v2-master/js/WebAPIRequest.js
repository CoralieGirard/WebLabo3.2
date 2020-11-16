/*
    Méthodes d'accès aux services Web API_Server/bookmarks
 */

const apiBaseURL= "http://localhost:5000/api/bookmarks";
const apiBaseURLUser = "http://localhost:5000/api/accounts";
const apiBaseToken = "http://localhost:5000/token";
//const apiBaseURL= "https://blushing-imaginary-streetcar.glitch.me/api/bookmarks";

function webAPI_GET_ALL(queryString, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + queryString,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data => { successCallBack(data); console.log("webAPI_GET_ALL - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET_ALL - error");
        }
    });
}

function webAPI_GET( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data  => { successCallBack(data); console.log("webAPI_GET - success", data);},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET - error");
        }
    });
}

function webAPI_POST( data , token, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        headers: {'Authorization':'Bearer ' + token},
        data: JSON.stringify(data),
        success: (data) => {successCallBack();  console.log("webAPI_POST - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_POST - error");
        }
    });
}

function webAPI_PUT(data, token, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + data.Id,
        type: 'PUT',
        contentType:'application/json',
        headers: {'Authorization':'Bearer ' + token},
        data: JSON.stringify(data),
        success:(s) => {successCallBack(s);  console.log("webAPI_PUT - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_PUT - error");
        }
    });
}


function webAPI_DELETE( id, token, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        headers: {'Authorization':'Bearer ' + token},
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}

function  webAPI_Login(data, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseToken,
        contentType:'application/json',
        type: 'POST',
        data: JSON.stringify(data),
        success:(dataSentFromServer) => {successCallBack(dataSentFromServer);  console.log("webAPI_Login - success"); console.log(dataSentFromServer); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_Login - error");
        }
    });
}

function webAPI_GET_ALLUSERS(successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURLUser,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data => { successCallBack(data); console.log("webAPI_GET_ALL - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET_ALL - error");
        }
    });
}

function webAPI_GETUSER( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURLUser + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data  => { successCallBack(data); console.log("webAPI_GET - success", data);},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET - error");
        }
    });
}

function webAPI_POSTUSER( data , successCallBack, errorCallBack) {
    $.ajax({
        url: "http://localhost:5000/accounts/register",
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (data) => {successCallBack();  console.log("webAPI_POST - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_POST - error");
        }
    });
}

function webAPI_PUTUSER(data, token, successCallBack, errorCallBack) {
    $.ajax({
        url: "http://localhost:5000/accounts/change",
        type: 'PUT',
        contentType:'application/json',
        headers: {'Authorization':'Bearer ' + token},
        data: JSON.stringify(data),
        success:(s) => {successCallBack();  console.log("webAPI_PUT - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_PUT - error");
        }
    });
}

function webAPI_DELETEUSER( id, token, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURLUser + "/" + id,
        contentType:'text/plain',
        headers: {'Authorization':'Bearer ' + token},
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}
