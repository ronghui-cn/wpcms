 (function( $ ) {
        $(function() {
            $('.widget-description').each(function() {
                 $(this).html( '<img src="'+$(this).html()+'" />')
            });
		
        });
    })( jQuery );
	
 jQuery(document).ready(function(){   
    var theme_upload_frame;   
    var value_id; 
	
    jQuery('.upload_button,.up #upbottom').on('click',function(event){   
        value_id =jQuery(this).prev('input');      
        
        theme_upload_frame = wp.media({   
            title: '选择图片',   
            button: {   
                text: '选择',   
            }   , multiple: false   
     
			
        });   
           if(theme_upload_frame){
           theme_upload_frame.open();    
		   }
       
        theme_upload_frame.on('select',function(){   
            attachment = theme_upload_frame.state().get('selection').first().toJSON();   
            jQuery(value_id).val(attachment.url);
			jQuery(".supports-drag-drop").remove();     
        });   
           
        
    });  

    });   