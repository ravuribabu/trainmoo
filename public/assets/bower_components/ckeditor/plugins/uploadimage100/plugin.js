(function(){
	CKEDITOR.plugins.add( 'uploadimage100', {
	    icons: 'uploadimage100',
	    init: function( editor ) {
	        console.log('Upload Image 100');
	        editor.addCommand('uploadimage100', { exec: showMyDialog });
	        editor.ui.addButton( 'uploadimage100', {
			    label: 'Upload Image',
			    command: 'uploadimage100',
			    toolbar: 'insert'
			});
	    }
	});

	function showMyDialog(e) {
	    SweetAlert.swal('Hello Upload your image');
	}
})()