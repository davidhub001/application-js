<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test font</title>
    <link rel="stylesheet" href="style.css">
    <script src="jquery.js"></script>
</head>
<body>
    <select id="list_font">
        <option>rubik</option>
        <option>oswald</option>
        <option>chelaone</option>
        <option>oleo-bold</option>
        <option>oleo-reg</option>
    </select>
    <div id="text">
        andriamasinavalona davidson
    </div>
    <div class="font-bilp test">
        test
    </div>
</body>
<script>
    $(document).ready(function(){
        $("#list_font").change(function(){
            $("#text").attr('class',$(this).val());
        })
    })
</script>
</html>
