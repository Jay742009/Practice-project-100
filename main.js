function tell(){
    var synth = window.speechSynthesis ;

    speak_data = document.getElementById("input_1").value ;

    var speaking = new SpeechSynthesisUtterance(speak_data);

    synth.speak(speaking);

    console.log(speaking);
}