document.getElementById('upload-form').addEventListener('submit', function (event) {  
   event.preventDefault(); // 阻止表单默认提交行为
   var fileInput = document.getElementById('file-input');  
   var file = fileInput.files[0];  
   var formData = new FormData();  
   formData.append('file', file);
   var xhr = new XMLHttpRequest();  
   xhr.open('POST', 'upload.php', true);  
   xhr.onload = function () {  
       if (xhr.status === 200) {  
           console.log(xhr.responseText);  
       } else {  
           console.log('上传失败');  
       }  
   };  
   xhr.send(formData);  
});  
