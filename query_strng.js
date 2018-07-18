<html>
<body>
<script language="javascript">
function WriteToFile()
{
var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile("C:\\NewFile.txt", true);
var text=document.getElementById("TextArea1").innerText;
s.WriteLine(text);
s.WriteLine('***********************');
s.Close();
}
</script>

<form name="abc">
<textarea name="text">FIFA</textarea>
<button onclick="WriteToFile()">Click to save</Button>  
</form> 

</body>
</html>