// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

//Slim Scroll
// $('.full-screem-wrap').slimscroll({
//   height: '100vh'
// });



$('#btnA').click(function() {
	const msgValidationContent = 'passowrd field is required'

	if(msgValidationContent)
	{
		//Set content for alert 
		$('#msgContent').html(`<strong>Warning ! </strong> ${msgValidationContent}`)
		toggleAlert();
	}

});



const toggleAlert = () => {
	//alert msg content : <strong>Warning!</strong> Bla Bla
	if ( $( ".alert-validation" ).is( ":hidden" ) ) {
	    $( ".alert-validation" ).slideDown(400, ()=>{setTimeout( ()=>{$( ".alert-validation" ).slideUp(400)} , 4000)})
	} 
	// else {
	//     $( ".alert-validation" ).slideUp(400)
	// }
}


$('#btnCloseAlert').click(function(e) {
	  $(this).parent().slideUp(300);
})


//Sweet Alert
$('#btnB').click(function() {
	swal({
  title: 'Input something',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (result) {
  swal({
    type: 'success',
    html: 'You entered: ' + result
  })
})

	// swal({
	// 	  title: 'Error!',
	// 	  text: 'Do you want to continue',
	// 	  type: 'error', //question, success, warning
	// 	  showCancelButton: true,
	// 	  cancelButtonColor: '#d33',
	// 	  //cancelButtonText: 'abc', Default is Cancel
	// 		confirmButtonColor: '#3085d6',	
	// 		confirmButtonText: 'Yes, delete it!',
	// 	  //timer : 2000 //auto close in 2000 milisecond
	// 	}).then(
	// 		()=>{swal('Deleted!','Your file has been deleted.','success')},

	// 		(dismiss)=>{
	// 			// dismiss can be 'cancel', 'overlay',
  	// 			// 'close', and 'timer'
	// 			  if (dismiss == 'cancel') swal('error!','Your file has been deleted.','error')}
	// 	)
});

const btnAClick=()=>{
    const msgValidationContent = 'passowrd field is required'

	if(msgValidationContent)
	{
		//Set content for alert 
		$('#msgContent').html(`<strong>Warning ! </strong> ${msgValidationContent}`)
		toggleAlert();
	}
}

const btnBClick=()=>{
    	swal({
  title: 'Input something',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (result) {
  swal({
    type: 'success',
    html: 'You entered: ' + result
  })
})
}
