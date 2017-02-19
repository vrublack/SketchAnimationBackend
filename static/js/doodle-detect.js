animate_sketch = function (props)
{
    var canvas = $('#canvas');
    var offsetLeft = canvas.position().left;
    var offsetTop = canvas.position().top;
    canvas.hide();

    var body = $('img#body');
    body.show();
    body.css({left: offsetLeft, top: offsetTop, position: 'absolute'});
    body.attr('src', props[0]['src']);

    var wheel1 = $('img#wheel1');
    wheel1.show();
    wheel1.css({left: props[1]['x-offset'] + offsetLeft, top: props[1]['y-offset'] + offsetTop, position: 'absolute'});
    wheel1.attr('src', props[1]['src']);

    var wheel2 = $('img#wheel2');
    wheel2.show();
    wheel2.css({left: props[2]['x-offset'] + offsetLeft, top: props[2]['y-offset'] + offsetTop, position: 'absolute'});
    wheel2.attr('src', props[2]['src']);

    var duration = 3000;
    var rotations = 10;
    var rotationDeg = rotations * 360 + "deg";
    var translateX = "1000px";

    wheel1.velocity({
        translateX: translateX,
        rotateZ: rotationDeg
    }, {
        duration: duration,
        easing: "linear"
    });

    wheel2.velocity({
        translateX: translateX,
        rotateZ: rotationDeg
    }, {
        duration: duration,
        easing: "linear"
    });

    body.velocity({
        translateX: translateX
    }, {
        duration: duration,
        easing: "linear"
    });

};


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
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState == XMLHttpRequest.DONE)
        {
            if (xhr.responseText == 'Bad request' || xhr.responseText == 'Detection failed')
                alert(xhr.responseText);
            else
                animate_sketch(JSON.parse(xhr.responseText))
        }
    }
};