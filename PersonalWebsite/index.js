backgroundImage = function () {
    var img_path = './image/';
    var img_num = 4;

    var img_current_no = function () {
        return Math.floor(Math.random() * img_num + 1);
    };

    var img_url = function () {
        return img_path + img_current_no() + '.JPG';
    };
    var img_current_image;
    if (img_current_image === undefined) {
        img_current_image = img_url();
    }

    var body = document.querySelector('body').style;
    body.backgroundSize = 'cover';
    body.backgroundRepeat = 'no-repeat';
    body.backgroundImage = 'url(' + img_current_image + ')';
};

var up = document.getElementById('up-arrow');
var upStatus = 0;
up.addEventListener('click', function () {
    if (upStatus === 0) {
        var container = document.getElementById('container');
        container.setAttribute('class', 'folded');
        up.style.cursor = 's-resize';
    } else {
        var container = document.getElementById('container');
        container.removeAttribute('class');
        up.style.cursor = 'n-resize';
    }
    upStatus = ~upStatus;
});
backgroundImage();
