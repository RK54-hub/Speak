        function soeak(){
            const input = document .getElementById("text").value;
            const utterance = new SpeechSynthesisUtterance(input);
            speechSynthesis.speak(utterance);
        }
    