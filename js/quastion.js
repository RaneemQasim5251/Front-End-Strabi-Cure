function showDiagnosis() {
    const form = document.getElementById('strabismusForm');
    let diagnosis = "Based on your answers, it seems like your eyes are ";
    let hasSymptom = false;

    // Check each question
    ['diplopia', 'amblyopia', 'esotropia', 'exotropia', 'hypotropia', 'hypertropia'].forEach((symptom) => {
        if (form[symptom].value === 'yes') {
            if (hasSymptom) diagnosis += ", and you might have " + symptom;
            else {
                diagnosis += "showing signs of " + symptom;
                hasSymptom = true;
            }
        }
    });

    if (!hasSymptom) diagnosis += "looking great! No signs of common Strabismus symptoms.";

    // Display diagnosis
    const resultDiv = document.getElementById('diagnosisResult');
    resultDiv.textContent = diagnosis;
    resultDiv.classList.remove('hidden');
}
