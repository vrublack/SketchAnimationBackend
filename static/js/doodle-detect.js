send_to_server = function (png)
{
    var formdata = new FormData(); //FormData object
    formdata.append('doodle', png);

    var xhr = new XMLHttpRequest();
    var url = encodeURI('/upload');
    xhr.open('POST', url);
    xhr.send(formdata);
};