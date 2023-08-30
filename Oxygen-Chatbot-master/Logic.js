
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; 
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();s
	}
}

function main()
{

	var TextBox_val = document.getElementById("InputBox").value; 


	var ResponseText_val = document.getElementById("ResponseText");


	var FormatInput = TextBox_val.toLowerCase().trim(); 



	if (FormatInput.includes("hi") || FormatInput.includes("hello"))
		ResponseText_val.innerHTML = "Hello!";

	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

	
	else if (FormatInput.includes("open google"))
	{
		
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("open onestate"))
	{
		
		ResponseText_val.innerHTML = "Opening Onestate Coding on YouTube";
		window.open("https://www.youtube.com/channel/UCrphqZNc_r-KsOTeTKH5hwA", "_blank");
	}

	else if (FormatInput.includes("open light-lens"))
	{
		
		ResponseText_val.innerHTML = "Opening Light-Lens on Github";
		window.open("https://github.com/Light-Lens", "_blank");
	}

	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}

const voice = document.querySelector(".voice")


const TextBox = document.getElementById("InputBox")


voice.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

			
			var inputt = document.getElementById("InputBox");
			inputt.autofocus = true
			inputt.value = transcript
			
		
			
		
		
		
    });
	
    
    if (speech == true) {
        recognition.start();
		
		
    }
})
