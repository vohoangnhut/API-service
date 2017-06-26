
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#reviewImage').attr('src', e.target.result);
            b();
        }

        reader.readAsDataURL(input.files[0])
    }

    // $('#reviewImage').cropper({
    //     aspectRatio: 1/1,
    // });
}

function b() {
  //crop_dp(); //This will run the jcrop.
  $('#reviewImage').cropper({
        aspectRatio: 1/1,
        zoomOnWheel:false,modal:true,preview: '#reviewImage11',
        crop: function(e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
        }
    });

    $('#reviewImage').attr('src', $('#reviewImage').cropper('getCroppedCanvas').toDataURL('image/jpeg') );
}

$("#imgInp").change(function(){
    readURL(this);
});

 $('#reviewImage1').cropper({
        aspectRatio: 1 / 1,
        crop: function(e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
        }
    });