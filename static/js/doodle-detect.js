send_to_server = function ()
{
    var canvas = document.getElementById("canvas");
    //var ctx = canvas.getContext('2d');
    //ctx.fillStyle = 'white';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    var png = canvas.toDataURL("image/png");
    var formdata = new FormData(); //FormData object
    formdata.append('doodle', png);

    var xhr = new XMLHttpRequest();
    var url = encodeURI('/upload');
    xhr.open('POST', url);
    xhr.send(formdata);
};