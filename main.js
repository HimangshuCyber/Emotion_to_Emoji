//The predictions
prediction_1 = ""; //The more likely prediction
prediction_2 = ""; //The least likely prediction

Webcam.set({ // Setting the webcam
    height: 300,
    width: 350,
    image_format: "jpeg",
    jpeg_quality: 90
});

camera = document.getElementById('camera'); // The camera
Webcam.attach('#camera'); // Attach the camera to the webcam

//Attach the captured image to the results div
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id = "capture_image" src="'+data_uri+'"/> '
    });
}

//Calling image classifier method belonging to ml5 js
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/V5Og_HYn1/model.json', modelLoaded);
console.log("ML5 VERSION: ", ml5.version); //Displaying the version

function modelLoaded(){
    console.log("Model Loaded!");
}

//Uttering the words
function speak(){
    synth = window.speechSynthesis;
    speak_data1 = "First prediction is " + prediction_1; //Saying the first prediction
    speak_data2 = "Second prediction is " + prediction_2; //Saying the second prediction
    utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}