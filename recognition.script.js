var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
                
//var speechrecognition = window.webkitSpeechRecognition
var recognition = new speechrecognition()
var textbox = $("textbox")
var instructions =$("instructions")
var content =''

recognition.continuous = true


//recognition is started

recognition.onstart = function(){
    instructions.text("Voice Racognition is on")
}

recognition.onspeechend =function(){
    instructions.text("No Activity")
}

recognition.onerror =function(){
    instructions.text("Tray Again")
}


recognition.onspeechend =function(event){
    var=current = event.resultIndex;
    
    var transcript = event.results[current][0].transcript
    
    content +=transcript
    
    textbox.val(content)
}
$("start-btn").click(function(event){
    if(content.length){
        content +=''
    }
    recognition.start()
})

textbox.on('input', function(){
    content=$(this).val()
})
