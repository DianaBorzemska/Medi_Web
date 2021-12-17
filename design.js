function changeFunc() {
    var selectBox = document.getElementById("illness");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	if (selectedValue == "alzheimers"){
		document.getElementById("form1").style.display = "block";
		document.getElementById("form2").style.display = "none";
		document.getElementById("form3").style.display = "none";
	}
	if (selectedValue == "diabetes"){
		document.getElementById("form1").style.display = "none";
		document.getElementById("form2").style.display = "block";
		document.getElementById("form3").style.display = "none";
	}
	if (selectedValue == "heart"){
		document.getElementById("form1").style.display = "none";
		document.getElementById("form2").style.display = "none";
		document.getElementById("form3").style.display = "block";
	}
}

const firebaseConfig = {
  apiKey: "AIzaSyBbrZL9449cMCUn4pR6n9lX1AXVICbKYw4",
  authDomain: "mediweb-cf259.firebaseapp.com",
  projectId: "mediweb-cf259",
  storageBucket: "mediweb-cf259.appspot.com",
  messagingSenderId: "541262822403",
  appId: "1:541262822403:web:cfebc7df6c145ee160a236",
  measurementId: "G-VPPJ6FHRHL"
};


firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()


const db = firestore.collection("Add_Patient")


let submitButton = document.getElementById("submit")


submitButton.addEventListener("click", (e) => {
	e.preventDefault()
	
	
	
	//Form Values(example)
	//let firstName = document.getElementById('fname').value
	//let lastName = document.getElementById('lname').value
	//let country = document.getElementById('country').value
	
	//register page
	
	let FirstName = document.getElementById('fname').value
	let LastName = document.getElementById('lname').value
	let DOB = document.getElementById('DOB').value
	let mri = document.getElementById('Mri').value
	let education = document.getElementById('Education').value
	let socioeconomic = document.getElementById('socioeconomic').value
	let mentalState = document.getElementById('mini_mental').value
	let dementiaRating = document.getElementById('clinical').value
	let intracranial = document.getElementById('intracranial').value
	let brainVolume = document.getElementById('brain').value
	let scaliingFactor = document.getElementById('atlas').value
	let pregnancies = document.getElementById('preg').value
	let bloodPressure = document.getElementById('blood').value
	let glucose = document.getElementById('glucose').value
	let skin = document.getElementById('skin').value
	let insulin = document.getElementById('insulin').value
	let bmi = document.getElementById('bmi').value
	let pedigree = document.getElementById('pedigree').value
	let painType = document.getElementById('chest').value
	let restingBloodPressure = document.getElementById('resting').value
	let cholesterol = document.getElementById('cholesterol').value
	let fastingBloodSugar = document.getElementById('bloodsugar').value
	let restingECG = document.getElementById('restingECG').value
	let maxHeartRate = document.getElementById('heartrate').value
	let inducedAngina = document.getElementById('inducedAngina').value
	let stDepression = document.getElementById('depression').value
	let peakExercise = document.getElementById('exercise').value
	let majorVessels = document.getElementById('vessels').value
	let thalassemia = document.getElementById('thalassemia').value
	let rbs = document.querySelectorAll('input[name="gender"]');
	let gender = null;
	for (var i = 0; i < rbs.length; i++){
		if (rbs[i].checked){
			gender = rbs[i].value;
			break;
		}
	} 
console.log("fef");
	
	
	//Save Form Data to Firebase
	db.doc().set({
		FirstName: FirstName,
		LastName: LastName,
		DOB: DOB,
		sex: gender,
		MRIDelayTime: mri,
		YearsofEducation: education,
		SocioeconomicStatus: socioeconomic,
		MiniMentalStateExamination: mentalState,
		ClinicalDementiaRating: dementiaRating,
		EstimatedtotalIntracranial: intracranial,
		NormalizeWholeBrainvolume: brainVolume,
		AtlasScalingFactor: scaliingFactor,
		Pregnancies: pregnancies,
		BloodPressure: bloodPressure,
		Glucose: glucose,
		SkinThickness: skin,
		Insulin: insulin,
		BMI: bmi,
		DiabetesPedigreeFunction: pedigree,
		ChestPainType: painType,
		RestingBloodPressure: restingBloodPressure,
		SerumCholesterol: cholesterol,
		FastingBloodSugar: fastingBloodSugar,
		RestingECG: restingECG,
		MaxHeartRate: maxHeartRate,
		Exerciseinducedangina: inducedAngina,
		STdepressioninducedbyexerciserelativetorest: stDepression,
		PeakexerciseSTsegment: peakExercise,
		Numberofmajorvessels: majorVessels,
		Talassemia: thalassemia
	}).then( () => {
		console.log("Data saved")
	}).catch((error) => {
		console.log(error)
		
	})	
	
	alert("Your form has been submitted")
		
})

firestore.collection("Add_Patient").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});