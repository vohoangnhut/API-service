$(document).ready(function() {
      var btnSave = function (context) {
        var ui = $.summernote.ui;
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-floppy-o" style="color:#fff"/>',
          tooltip: 'Save changed data',
          click: function () {
            // invoke insertText method with 'hello' on editor module.
            //context.invoke('editor.insertText', 'hello');
            var content = $('#summernote').summernote('code');
            console.log('contents :', content);
          }
        });

        return button.render();   // return button as jquery object 
      }

      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      if(w <= 992)
      {
          var noteHeight = ((h/2) - 100);
          $('#summernote').summernote({
                    height: noteHeight,                 // set editor height
                    minHeight: null,             // set minimum height of editor
                    maxHeight: null,             // set maximum height of editor
                    focus: true,                // set focus to editable area after initializing summernote

                    toolbar: [
                        ['btnSave', ['saveButton']],
                        ['style',['ul', 'style']],
                        ['btnFullScreen',['fullscreen']]
                    ],

                    styleTags: ['h1', 'h3', 'p', 'blockquote', 'pre'],

                    buttons: {
                        saveButton: btnSave
                    },

          });

           var lstNoteHeight =  (h/2) - 100;
            $('.list-group').slimscroll({
              height: lstNoteHeight+ 'px',
              wheelStep: 100,
            });

      }else{
          var noteHeight = (h - 110);
          $('#summernote').summernote({
                    height: noteHeight,                 // set editor height
                    minHeight: null,             // set minimum height of editor
                    maxHeight: null,             // set maximum height of editor
                    focus: true,                // set focus to editable area after initializing summernote

                    toolbar: [
                        ['btnSave', ['saveButton']],
                        //['style', ['bold', 'italic', 'underline', 'strikethrough' ,'clear']],
                        //['font', [ 'superscript', 'subscript']],
                        //['fontsize', ['fontsize']],
                        //['color', ['color']],
                        //['para', ['ul', 'ol', 'paragraph','style']],
                        //['height', ['height']],
                        //['fontname', ['fontname']],

                        //['insert', ['picture','link','video','table','hr']],
                        //['misc', ['fullscreen','codeview','undo','redo','help']]
                        ['style',['ul', 'style']],
                        ['btnFullScreen',['fullscreen']]
                    ],

                    styleTags: ['h1', 'h3', 'p', 'blockquote', 'pre'],

                    buttons: {
                        saveButton: btnSave
                    },

          });

          var lstNoteHeight = (h - 110 - 22);
            $('.list-group').slimscroll({
              height: lstNoteHeight+ 'px'

            });
      }

      // scrollbar onresize resetten
      $(window).resize(function(){    
          var currentHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          var currentWidht = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          if(currentWidht <= 992)
          {
            $('.list-group').slimScroll({
                height: ((currentHeight/2) - 100)+'px'
            });
          }else{
            $('.list-group').slimScroll({
                height: (currentHeight - 110 - 22)+'px'
            });


            // $('#summernote').summernote({
            //         height: 100, 
            // });

            $('.summernote').summernote('height', 100);
          }
      });

      $('.list-group a').click(function(e) {
          if($(this).attr('class') == 'list-group-item active')
            return;
          $('.list-group').find('a').removeClass('active');
          $(this).addClass('active');
      });

      function isTouchDevice(){
            return 'ontouchstart' in window        // works on most browsers 
            || navigator.maxTouchPoints;       // works on IE10/11 and Surface
       }

        if(isTouchDevice()===true) {
            alert('disable tootip 3');
            //$("[rel='tooltip']").tooltip(false);
            $('.note-btn').attr('data-original-title', '');
        }
});