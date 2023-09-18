<?php  
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {  
   $uploadPath = 'uploads/';  
   $file = $_FILES['file']['name'];  
   $tmpName = $_FILES['file']['tmp_name'];  
   $error = $_FILES['file']['error'];
   if ($error === 0) {  
       if (move_uploaded_file($tmpName, $uploadPath. $file)) {  
           echo '文件上传成功';  
       } else {  
           echo '文件上传失败';  
       }  
   } else {  
       echo '文件上传过程中出现错误';  
   }  
} else {  
   echo '无效的请求';  
}
?>  
