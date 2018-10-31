(function (){
	var elements = document.getElementsByClassName("alt1 actions aligncenter");
	
	var st = document.createElement('b');
	// KKP - name of dialog in Vk
    st.innerHTML = ' | <a href="#">Share in KKP</a> &nbsp';
    st.className = 'sendKKP';
	st.onclick=function(e){
		e.preventDefault();
		var me = document.getElementById('my-username').innerText.substr(1);
		var title = document.getElementsByClassName("cat")[0].innerText;
		var artist = document.getElementsByClassName("cat")[1].getElementsByTagName('a')[0].innerText;
		var url = document.location.href.slice(0, -1).split('/')[4];
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function()
			{ 
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200 && xmlHttp.responseText == 'yay')
				document.getElementsByClassName("sendKKP")[0].innerHTML = ' | <a href="#" onclick="">Sent ^-^</a> &nbsp'
			else
				document.getElementsByClassName("sendKKP")[0].innerHTML = ' | <a href="#" onclick="">Error :c</a> &nbsp'
			}
		xmlHttp.open("POST", "http://quantum0.pythonanywhere.com/sendfalink/" + url, true);
		xmlHttp.setRequestHeader("Content-Type", "application/json");
		var data = JSON.stringify({"from": me, "id": url, "artist": artist, "title": title});
		xmlHttp.send(data);
		document.getElementsByClassName("sendKKP")[0].innerHTML = ' | <a href="#" onclick="">Sending...</a> &nbsp'
		return false;
	}

	for (var i = 0; i < elements.length; i++)
	{
		var bs = elements[0].getElementsByTagName('b');
		bs[3].parentNode.insertBefore(st, bs[3].nextSibling);
	}
	
})();

