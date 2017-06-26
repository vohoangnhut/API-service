
/***
 * 1 : CREATE
 * 2 : UPDATE
 * **/
var mode = 1;

const onClickBtnSave = () => {

	if(mode === 2)
	{
		//Update Case
		var txtUsrNm = document.getElementsByName('txtUsrNm')[0].value
		var txtPsw = document.getElementsByName('txtPsw')[0].value	
		var txtEmail = document.getElementsByName('txtEmail')[0].value

		$.ajax({
			type: "PUT",
			url: '/sys_001',
			dataType: 'json',
			data: {txtUsrNm:txtUsrNm,txtPsw:txtPsw,txtEmail:txtEmail},
			success: function (result) {

				swal({
					title : result.msg,
					type : 'success'
				})

				$('#btnSave').html('<strong>Save</strong>')
				mode = 1;

				var idElement = 'local'+result.localElement

				//set value into grid
				document.getElementById(idElement).childNodes[1].innerHTML = document.getElementsByName('txtUsrNm')[0].value
				document.getElementById(idElement).childNodes[2].innerHTML = document.getElementsByName('txtEmail')[0].value
				document.getElementById(idElement).childNodes[3].setAttribute("att-email", document.getElementsByName('txtEmail')[0].value);
				document.getElementById(idElement).childNodes[3].setAttribute("att-name", document.getElementsByName('txtUsrNm')[0].value);

				resetField();
				document.getElementsByName('txtEmail')[0].disabled = false;
				document.getElementById('btnCancel').style.visibility = 'hidden'
				toggleAction(false);
				
			}
		});	

	}else {
		//Insert Case
		var txtUsrNm = document.getElementsByName('txtUsrNm')[0].value
		var txtPsw = document.getElementsByName('txtPsw')[0].value	
		var txtEmail = document.getElementsByName('txtEmail')[0].value

		$.ajax({
			type: "POST",
			url: '/sys_001',
			dataType: 'json',
			data: {txtUsrNm:txtUsrNm,txtPsw:txtPsw,txtEmail:txtEmail},
			success: function (result) {
				swal({
					title : result.msg,
					type : 'success'
				})
				
				$('#table-user').children().append(result.newRow)

				resetField();
			},
			error: function(result){
				console.log(result);
			}
		});	
	}
}

const resetField = () => {
		document.getElementsByName('txtUsrNm')[0].value = "";
		document.getElementsByName('txtPsw')[0].value = "";
		document.getElementsByName('txtEmail')[0].value = "@gmail.com";
}

const toggleAction=(switchBT)=>{
	$('.btn-primary').attr("disabled", switchBT);
	$('.btn-danger').attr("disabled", switchBT);
}


const btnEdit = (e) => {
	if(mode == 1)
	{
		$('#btnSave').html('<strong>Update</strong>')
		mode = 2;
		//Disable UserId
		document.getElementsByName('txtEmail')[0].disabled = true;

		const email = e.parentNode.getAttribute('att-email')
		const name = e.parentNode.getAttribute('att-name')
		document.getElementsByName('txtUsrNm')[0].value = name;
		document.getElementsByName('txtEmail')[0].value = email;

		toggleAction(true);

		document.getElementById('btnCancel').style.visibility = 'visible'
	}
	
}

const onClickBtnCancelUpdate = () => {
	mode = 1;
	$('#btnSave').html('<strong>Save</strong>')
	document.getElementById('btnCancel').style.visibility = 'hidden'
	document.getElementsByName('txtEmail')[0].disabled = false
	toggleAction(false)
	resetField()
}

const btnDelete = (e) => {

	swal({
		title: 'Do you want to delete',
		type: 'question',
		showCancelButton: true,
		}).then(function () {
			const usrEml = e.parentNode.getAttribute('att-email')

			$.ajax({
				type: "DELETE",
				url: '/sys_001',
				dataType: 'json',
				data: {usrEml:usrEml},
				success: function (result) {
					var idElement = 'local'+result.localElement
					document.getElementById(idElement).remove()
					resetField();

					swal({
						title: 'Successfull',
						type: 'success'})
				},
				error: function(result){
					console.log(result);
				}
			});	
		})


}


//Init =======================================
var $image = $(".image-crop > img")
$($image).cropper({
    aspectRatio: 1,
    preview: ".img-preview",
    done: function (data) {
        // Output the result data for cropping image.
    }
});

var $inputImage = $("#inputImage");
if (window.FileReader) {
    $inputImage.change(function () {
        var fileReader = new FileReader(),
                files = this.files,
                file;

        if (!files.length) {
            return;
        }

        file = files[0];

        if (/^image\/\w+$/.test(file.type)) {
            fileReader.readAsDataURL(file);
            fileReader.onload = function () {
                $inputImage.val("");
                $image.cropper("reset", true).cropper("replace", this.result);
            };
        } else {
            showMessage("Please choose an image file.");
        }
    });
} else {
    $inputImage.addClass("hide");
}


$("#zoomIn").click(function () {
    $image.cropper("zoom", 0.1);
});

$("#zoomOut").click(function () {
    $image.cropper("zoom", -0.1);
});

$("#rotateLeft").click(function () {
    $image.cropper("rotate", 45);
});

$("#rotateRight").click(function () {
    $image.cropper("rotate", -45);
});

const btnOkImage = () => {
    $("#editProductImage").modal('toggle');

    var base64 = $image.cropper("getDataURL");

    var data = new FormData();
    data.append('file', base64.split(',')[1]);

    $.ajax({
        type: "POST",
        url: '/upload',
        data: data,
        dataType: "json",
        processData: false, // Don't process the files
        contentType: false,//"application/json; charset=utf-8",

        success: function (result) {
            $('#imgPath').attr('src', result);
        },
        error: function () {
            console.log("Error occurs on the Database level!");
        }
    });
}
//Init =======================================



