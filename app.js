// ==========================================================================
// Config & State
// ==========================================================================
// User configuration for Google Sheets Apps Script Webhook
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz1tvudqAOo-J0-xgxMTTRIAs5usrGMxn9YDOKIZQ5rsEnfNisGIv3Qv9cP49hgAryqcw/exec"; // Users can paste their web app URL here

let currentLanguage = 'hi'; // Default language set to Hindi (local initiative)

const translations = {
    en: {
        toggleText: "हिंदी",
        campaignTitle: "Nasha Mukti (Say No to Drugs) Awareness Pledge",
        badgeSafe: "Healthy Life",
        badgeFast: "Takes 1 Minute",
        badgeCert: "Instant PDF/PNG",
        startPledgeBtn: "Take Pledge",
        step1Label: "Details",
        step2Label: "Pledge",
        detailsHeading: "Enter Your Details",
        detailsSub: "Fields marked with (*) are mandatory",
        labelName: "Full Name *",
        placeholderName: "Enter your full name",
        errName: "Please enter a valid name (at least 3 characters)",
        labelMobile: "Mobile Number (Optional)",
        placeholderMobile: "Enter 10-digit mobile number",
        errMobile: "Please enter a valid 10-digit Indian mobile number",
        labelAge: "Age *",
        placeholderAge: "Enter your age",
        errAge: "Please enter a valid age (1-120)",
        labelGender: "Gender *",
        optSelectGender: "Select Gender",
        optMale: "Male",
        optFemale: "Female",
        optOther: "Other",
        errGender: "Please select a gender",
        labelDistrict: "District *",
        errDistrict: "Please specify your district",
        labelBlock: "Block / Tehsil",
        placeholderBlock: "Enter block or tehsil name",
        labelVillage: "Village / City",
        placeholderVillage: "Enter village or city name",
        labelCategory: "Category *",
        optSelectCategory: "Select Category",
        optStudent: "Student",
        optCitizen: "Citizen",
        optTeacher: "Teacher",
        optGovt: "Government Employee",
        optBusiness: "Business Owner",
        errCategory: "Please select a category",
        nextToPledgeBtn: "Proceed to Pledge",
        pledgeHeading: "Nasha Mukti Pledge",
        pledgeSub: "Read the de-addiction commitment carefully",
        labelAgree: "I have read and agree to this pledge.",
        backToDetailsBtn: "Back",
        submitPledgeBtn: "Take Pledge & Generate Certificate",
        congratsTitle: "Congratulations!",
        congratsDesc: "You have successfully completed the Nasha Mukti Pledge and taken a step towards a healthier, drug-free India.",
        generatingText: "Generating your certificate...",
        btnPdfText: "Download PDF",
        btnPngText: "Download Image",
        restartBtn: "Take Another Pledge",
        impactStatusText: "Live",
        impactLabel: "Total Citizens Who Have Taken the Pledge",
        goalTargetText: "Campaign Target: 3,00,000 Pledges",
        helplineTitle: "NATIONAL DRUG HELPLINE",
        footerText1: "An initiative of Balaghat Police, Madhya Pradesh.",
        footerText2: "Designed to raise de-addiction awareness and build a healthy, drug-free community. #NashaMuktiBalaghat",
        emergencyTitle: "National Drug De-addiction Helpline:",
        pledgeRules: [
            "I pledge to stay completely away from all forms of harmful drugs, alcohol, tobacco, and other intoxicating substances.",
            "I pledge to adopt and promote a healthy, active, and drug-free lifestyle for myself and my family.",
            "I pledge to raise awareness about the physical, mental, and social dangers of drug abuse in my community.",
            "I pledge to support and guide individuals struggling with addiction towards de-addiction resources and de-addiction centers.",
            "I pledge to actively cooperate with the administration and police to build a drug-free, safe, and healthy society."
        ]
    },
    hi: {
        toggleText: "English",
        campaignTitle: "नशा मुक्ति (नशीले पदार्थों को ना कहें) शपथ",
        badgeSafe: "स्वस्थ जीवन",
        badgeFast: "1 मिनट का समय",
        badgeCert: "तुरंत PDF/PNG",
        startPledgeBtn: "शपथ लें",
        step1Label: "विवरण",
        step2Label: "शपथ पत्र",
        detailsHeading: "अपने विवरण दर्ज करें",
        detailsSub: "(*) चिह्नित फ़ील्ड अनिवार्य हैं",
        labelName: "पूरा नाम *",
        placeholderName: "अपना पूरा नाम दर्ज करें",
        errName: "कृपया एक मान्य नाम दर्ज करें (कम से कम 3 वर्ण)",
        labelMobile: "मोबाइल नंबर (वैकल्पिक)",
        placeholderMobile: "10 अंकों का मोबाइल नंबर दर्ज करें",
        errMobile: "कृपया 10 अंकों का मान्य भारतीय मोबाइल नंबर दर्ज करें",
        labelAge: "आयु (Age) *",
        placeholderAge: "अपनी आयु दर्ज करें",
        errAge: "कृपया एक मान्य आयु दर्ज करें (1-120)",
        labelGender: "लिंग (Gender) *",
        optSelectGender: "लिंग चुनें",
        optMale: "पुरुष (Male)",
        optFemale: "महिला (Female)",
        optOther: "अन्य (Other)",
        errGender: "कृपया लिंग चुनें",
        labelDistrict: "जिला *",
        errDistrict: "कृपया अपना जिला निर्दिष्ट करें",
        labelBlock: "ब्लॉक / तहसील",
        placeholderBlock: "ब्लॉक या तहसील का नाम दर्ज करें",
        labelVillage: "ग्राम / शहर",
        placeholderVillage: "गांव या शहर का नाम दर्ज करें",
        labelCategory: "श्रेणी *",
        optSelectCategory: "श्रेणी चुनें",
        optStudent: "छात्र (Student)",
        optCitizen: "नागरिक (Citizen)",
        optTeacher: "शिक्षक (Teacher)",
        optGovt: "सरकारी कर्मचारी (Govt. Employee)",
        optBusiness: "व्यवसायी (Business Owner)",
        errCategory: "कृपया एक श्रेणी चुनें",
        nextToPledgeBtn: "शपथ पत्र पढ़ें",
        pledgeHeading: "नशा मुक्ति शपथ",
        pledgeSub: "नशा मुक्ति संकल्प को ध्यान से पढ़ें",
        labelAgree: "मैंने इस शपथ को पढ़ लिया है और मैं इससे सहमत हूँ।",
        backToDetailsBtn: "पीछे",
        submitPledgeBtn: "शपथ लें और प्रमाणपत्र प्राप्त करें",
        congratsTitle: "बधाई हो!",
        congratsDesc: "आपने नशा मुक्ति शपथ को सफलतापूर्वक पूरा कर लिया है और स्वस्थ, नशा-मुक्त भारत की दिशा में एक कदम बढ़ाया है।",
        generatingText: "आपका प्रमाणपत्र तैयार किया जा रहा है...",
        btnPdfText: "PDF डाउनलोड करें",
        btnPngText: "छवि डाउनलोड करें",
        restartBtn: "दूसरा शपथ लें",
        impactStatusText: "लाइव",
        impactLabel: "शपथ लेने वाले कुल नागरिक",
        goalTargetText: "अभियान लक्ष्य: 3,00,000 संकल्प",
        helplineTitle: "राष्ट्रीय नशा मुक्ति हेल्पलाइन",
        footerText1: "बालाघाट पुलिस, मध्य प्रदेश की एक पहल।",
        footerText2: "नशा मुक्ति जागरूकता बढ़ाने और एक स्वस्थ, नशा-मुक्त समुदाय बनाने के लिए डिज़ाइन किया गया। #NashaMuktiBalaghat",
        emergencyTitle: "राष्ट्रीय नशा मुक्ति हेल्पलाइन:",
        pledgeRules: [
            "मैं सभी प्रकार के नशीले पदार्थों, शराब, सिगरेट/तंबाकू और अन्य हानिकारक नशीली दवाओं से पूरी तरह दूर रहने की प्रतिज्ञा करता/करती हूँ।",
            "मैं स्वयं, अपने परिवार और साथियों के लिए एक स्वस्थ, सक्रिय और नशा-मुक्त जीवन शैली को अपनाने और बढ़ावा देने की प्रतिज्ञा करता/करती हूँ।",
            "मैं अपने समुदाय में नशीली दवाओं के सेवन के शारीरिक, मानसिक और सामाजिक दुष्प्रभावों के बारे में जागरूकता फैलाने की प्रतिज्ञा करता/करती हूँ।",
            "मैं नशे की लत से पीड़ित व्यक्तियों को नशा मुक्ति केंद्रों और पेशेवर चिकित्सा सहायता की ओर मार्गदर्शन और सहयोग करने की प्रतिज्ञा करता/करती हूँ।",
            "मैं एक नशा-मुक्त, सुरक्षित और स्वस्थ समाज के निर्माण के लिए प्रशासन और पुलिस का सक्रिय सहयोग करने की प्रतिज्ञा करता/करती हूँ।"
        ]
    }
};

// SVG Crest Logos for drawing on canvas
const mpPoliceLogoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50,10 L85,25 L85,55 C85,75 50,90 50,90 C50,90 15,75 15,55 L15,25 Z" fill="#0F2B5B" stroke="#FF9933" stroke-width="3"/>
    <rect x="47" y="32" width="6" height="25" fill="#FFFFFF"/>
    <ellipse cx="50" cy="57" rx="9" ry="3" fill="#138808"/>
    <polygon points="50,18 53,24 60,24 55,28 57,34 50,30 43,34 45,28 40,24 47,24" fill="#FF9933"/>
    <circle cx="50" cy="45" r="16" fill="none" stroke="#FFFFFF" stroke-dasharray="2,2"/>
</svg>
`;

const balaghatPoliceLogoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="46" fill="#0F2B5B" stroke="#FF9933" stroke-width="3"/>
    <circle cx="50" cy="50" r="41" fill="none" stroke="#FFFFFF" stroke-dasharray="2,2"/>
    <polygon points="50,18 58,35 77,35 62,46 68,64 50,53 32,64 38,46 23,35 42,35" fill="#FF9933"/>
    <circle cx="50" cy="50" r="14" fill="#138808"/>
    <path d="M47 43h6v12h-6z" fill="#FFFFFF"/>
    <path d="M45 55h10v2h-10z" fill="#FF9933"/>
</svg>
`;

const cyberCellLogoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <polygon points="50,6 88,25 88,65 50,94 12,65 12,25" fill="#0F2B5B" stroke="#FF9933" stroke-width="3"/>
    <polygon points="50,11 83,28 83,62 50,88 17,62 17,28" fill="none" stroke="#FFFFFF" stroke-dasharray="2,2"/>
    <circle cx="50" cy="45" r="22" fill="none" stroke="#138808" stroke-width="1.5" stroke-dasharray="4,2"/>
    <path d="M28,45 Q50,30 72,45 Q50,60 28,45" fill="none" stroke="#FFFFFF" stroke-width="1"/>
    <path d="M50,23 Q35,45 50,67 Q65,45 50,23" fill="none" stroke="#FFFFFF" stroke-width="1"/>
    <rect x="42" y="44" width="16" height="12" rx="2" fill="#FF9933"/>
    <path d="M46,44 L46,40 A4,4 0 0,1 54,40 L54,44" fill="none" stroke="#FF9933" stroke-width="2.5"/>
    <circle cx="50" cy="50" r="1.5" fill="#0F2B5B"/>
</svg>
`;

// ==========================================================================
// DOM Elements
// ==========================================================================
const langToggleBtn = document.getElementById('langToggleBtn');
const welcomeSection = document.getElementById('welcomeSection');
const formSection = document.getElementById('formSection');
const certificateSection = document.getElementById('certificateSection');
const pledgeForm = document.getElementById('pledgeForm');
const startPledgeBtn = document.getElementById('startPledgeBtn');
const nextToPledgeBtn = document.getElementById('nextToPledgeBtn');
const backToDetailsBtn = document.getElementById('backToDetailsBtn');
const submitPledgeBtn = document.getElementById('submitPledgeBtn');
const agreeCheckbox = document.getElementById('agreeCheckbox');
const stepDetails = document.getElementById('stepDetails');
const stepPledge = document.getElementById('stepPledge');
const step1Indicator = document.getElementById('step1Indicator');
const step2Indicator = document.getElementById('step2Indicator');
const certificateCanvas = document.getElementById('certificateCanvas');
const certificateImg = document.getElementById('certificateImg');
const canvasLoader = document.getElementById('canvasLoader');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const downloadPngBtn = document.getElementById('downloadPngBtn');
const restartBtn = document.getElementById('restartBtn');

// Dynamic Translate Elements
const campaignTitle = document.getElementById('campaignTitle');
const badgeSafe = document.getElementById('badgeSafe');
const badgeFast = document.getElementById('badgeFast');
const badgeCert = document.getElementById('badgeCert');
const step1Label = document.getElementById('step1Label');
const step2Label = document.getElementById('step2Label');
const detailsHeading = document.getElementById('detailsHeading');
const detailsSub = document.getElementById('detailsSub');

const labelName = document.getElementById('labelName');
const fullNameInput = document.getElementById('fullName');
const errName = document.getElementById('errName');

const labelMobile = document.getElementById('labelMobile');
const mobileInput = document.getElementById('mobile');
const errMobile = document.getElementById('errMobile');

const labelAge = document.getElementById('labelAge');
const ageInput = document.getElementById('age');
const errAge = document.getElementById('errAge');

const labelGender = document.getElementById('labelGender');
const genderSelect = document.getElementById('gender');
const errGender = document.getElementById('errGender');
const optSelectGender = document.getElementById('optSelectGender');
const optMale = document.getElementById('optMale');
const optFemale = document.getElementById('optFemale');
const optOther = document.getElementById('optOther');

const labelDistrict = document.getElementById('labelDistrict');
const districtInput = document.getElementById('district');
const errDistrict = document.getElementById('errDistrict');

const labelBlock = document.getElementById('labelBlock');
const blockInput = document.getElementById('block');
const labelVillage = document.getElementById('labelVillage');
const villageInput = document.getElementById('village');

const labelCategory = document.getElementById('labelCategory');
const categorySelect = document.getElementById('category');
const errCategory = document.getElementById('errCategory');
const optSelectCategory = document.getElementById('optSelectCategory');
const optStudent = document.getElementById('optStudent');
const optCitizen = document.getElementById('optCitizen');
const optTeacher = document.getElementById('optTeacher');
const optGovt = document.getElementById('optGovt');
const optBusiness = document.getElementById('optBusiness');

const pledgeHeading = document.getElementById('pledgeHeading');
const pledgeSub = document.getElementById('pledgeSub');
const pledgeRulesList = document.getElementById('pledgeRulesList');
const labelAgree = document.getElementById('labelAgree');
const congratsTitle = document.getElementById('congratsTitle');
const congratsDesc = document.getElementById('congratsDesc');
const generatingText = document.getElementById('generatingText');
const btnPdfText = document.getElementById('btnPdfText');
const btnPngText = document.getElementById('btnPngText');
const footerText1 = document.getElementById('footerText1');
const footerText2 = document.getElementById('footerText2');
const emergencyTitle = document.getElementById('emergencyTitle');

const helplineTitle = document.getElementById('helplineTitle');
const goalTargetText = document.getElementById('goalTargetText');
const goalPercentText = document.getElementById('goalPercentText');
const goalProgressBarFill = document.getElementById('goalProgressBarFill');
const impactLabel = document.getElementById('impactLabel');

// Impact Counter Elements
const impactCountEl = document.getElementById('impactCount');
const impactStatusTextEl = document.getElementById('impactStatusText');

// ==========================================================================
// Event Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    fetchPledgeCount();                          // Load count on page open
    setInterval(fetchPledgeCount, 60 * 1000);    // Auto-refresh every 60 s

    langToggleBtn.addEventListener('click', toggleLanguage);
    
    startPledgeBtn.addEventListener('click', () => {
        welcomeSection.classList.add('hidden');
        formSection.classList.remove('hidden');
        showStep(1);
    });

    nextToPledgeBtn.addEventListener('click', () => {
        if (validateStep1()) {
            showStep(2);
        }
    });

    backToDetailsBtn.addEventListener('click', () => {
        showStep(1);
    });

    agreeCheckbox.addEventListener('change', () => {
        submitPledgeBtn.disabled = !agreeCheckbox.checked;
    });

    pledgeForm.addEventListener('submit', handleFormSubmit);

    downloadPdfBtn.addEventListener('click', downloadPDF);
    downloadPngBtn.addEventListener('click', downloadPNG);

    restartBtn.addEventListener('click', resetFormAndPledge);

    // Auto-remove validation error indicators on keyup/change
    [fullNameInput, mobileInput, districtInput, ageInput].forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                input.classList.remove('invalid');
            });
        }
    });
    [categorySelect, genderSelect].forEach(select => {
        if (select) {
            select.addEventListener('change', () => {
                select.classList.remove('invalid');
            });
        }
    });
});

// ==========================================================================
// Translation Logic
// ==========================================================================
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    updateUI();
}

function updateUI() {
    const t = translations[currentLanguage];
    
    // Header & Buttons
    langToggleBtn.querySelector('.lang-text').textContent = t.toggleText;
    campaignTitle.textContent = t.campaignTitle;
    
    badgeSafe.textContent = t.badgeSafe;
    badgeFast.textContent = t.badgeFast;
    badgeCert.textContent = t.badgeCert;
    
    startPledgeBtn.textContent = t.startPledgeBtn + ' / शपथ लें';
    
    // Step indicator labels
    step1Label.textContent = t.step1Label;
    step2Label.textContent = t.step2Label;
    
    // Details Form Step
    detailsHeading.textContent = t.detailsHeading;
    detailsSub.textContent = t.detailsSub;
    
    labelName.textContent = t.labelName;
    fullNameInput.placeholder = t.placeholderName;
    errName.textContent = t.errName;
    
    labelMobile.textContent = t.labelMobile;
    mobileInput.placeholder = t.placeholderMobile;
    errMobile.textContent = t.errMobile;
    
    labelAge.textContent = t.labelAge;
    ageInput.placeholder = t.placeholderAge;
    errAge.textContent = t.errAge;
    
    labelGender.textContent = t.labelGender;
    optSelectGender.textContent = t.optSelectGender;
    optMale.textContent = t.optMale;
    optFemale.textContent = t.optFemale;
    optOther.textContent = t.optOther;
    errGender.textContent = t.errGender;
    
    labelDistrict.textContent = t.labelDistrict;
    errDistrict.textContent = t.errDistrict;
    
    labelBlock.textContent = t.labelBlock;
    blockInput.placeholder = t.placeholderBlock;
    
    labelVillage.textContent = t.labelVillage;
    villageInput.placeholder = t.placeholderVillage;
    
    labelCategory.textContent = t.labelCategory;
    errCategory.textContent = t.errCategory;
    
    // Dropdown Choices
    optSelectCategory.textContent = t.optSelectCategory;
    optStudent.textContent = t.optStudent;
    optCitizen.textContent = t.optCitizen;
    optTeacher.textContent = t.optTeacher;
    optGovt.textContent = t.optGovt;
    optBusiness.textContent = t.optBusiness;
    
    nextToPledgeBtn.textContent = t.nextToPledgeBtn;
    
    // Pledge Step
    pledgeHeading.textContent = t.pledgeHeading;
    pledgeSub.textContent = t.pledgeSub;
    labelAgree.textContent = t.labelAgree;
    backToDetailsBtn.textContent = t.backToDetailsBtn;
    submitPledgeBtn.textContent = t.submitPledgeBtn;
    
    // Populate Pledge List
    pledgeRulesList.innerHTML = '';
    t.pledgeRules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        pledgeRulesList.appendChild(li);
    });

    // Success Screen
    congratsTitle.textContent = t.congratsTitle;
    congratsDesc.textContent = t.congratsDesc;
    generatingText.textContent = t.generatingText;
    btnPdfText.textContent = t.btnPdfText;
    btnPngText.textContent = t.btnPngText;
    restartBtn.textContent = t.restartBtn;
    
    // Impact Counter
    impactStatusTextEl.textContent = t.impactStatusText;
    if (impactLabel) impactLabel.textContent = t.impactLabel;
    if (helplineTitle) helplineTitle.textContent = t.helplineTitle;
    
    // Update goal progress text layout immediately
    const rawCount = parseInt(impactCountEl.textContent.replace(/,/g, ''), 10) || 0;
    updateGoalProgress(rawCount);

    // Footer
    footerText1.textContent = t.footerText1;
    footerText2.textContent = t.footerText2;
    emergencyTitle.textContent = t.emergencyTitle;
}

// ==========================================================================
// Live Impact Counter — Fetch Count from Google Sheets
// ==========================================================================
async function fetchPledgeCount() {
    if (!GOOGLE_SCRIPT_URL) {
        impactCountEl.textContent = '0';
        return;
    }
    try {
        // The Apps Script doGet() returns { count: N }
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=count`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        });
        if (!response.ok) throw new Error('Network response not OK');
        const data = await response.json();
        const count = parseInt(data.count, 10);
        // Animate the number update
        animateCount(isNaN(count) ? 0 : count);
    } catch (err) {
        console.warn('Could not fetch pledge count:', err);
        // Graceful fallback — show 0 without breaking the page
        if (impactCountEl.textContent === '—') {
            impactCountEl.textContent = '0';
        }
    }
}

// Smooth count-up animation from current displayed value to target
function animateCount(target) {
    const duration = 600; // ms
    const start = parseInt(impactCountEl.textContent.replace(/,/g, ''), 10) || 0;
    const diff = target - start;
    if (diff === 0) { 
        impactCountEl.textContent = target.toLocaleString('en-IN'); 
        updateGoalProgress(target);
        return; 
    }
    const startTime = performance.now();
    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const currentCount = Math.round(start + diff * ease);
        impactCountEl.textContent = currentCount.toLocaleString('en-IN');
        updateGoalProgress(currentCount);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// Update Goal Progress fill bar and percentage text
function updateGoalProgress(count) {
    const target = 300000;
    const pct = Math.min(100, (count / target) * 100);
    
    if (goalPercentText) {
        goalPercentText.textContent = `${pct.toFixed(2)}% Completed`;
    }
    if (goalProgressBarFill) {
        goalProgressBarFill.style.width = `${pct}%`;
    }
    if (goalTargetText) {
        goalTargetText.textContent = currentLanguage === 'en'
            ? `Campaign Target: 3,00,000 Pledges`
            : `अभियान लक्ष्य: 3,00,000 संकल्प`;
    }
}

// ==========================================================================
// Step Navigation & Form Validation
// ==========================================================================
function showStep(stepNum) {
    if (stepNum === 1) {
        stepDetails.classList.remove('hidden');
        stepPledge.classList.add('hidden');
        step1Indicator.classList.add('active');
        step2Indicator.classList.remove('active');
    } else if (stepNum === 2) {
        stepDetails.classList.add('hidden');
        stepPledge.classList.remove('hidden');
        step1Indicator.classList.add('active');
        step2Indicator.classList.add('active');
    }
}

function validateStep1() {
    let isValid = true;
    
    // Validate Full Name
    const nameVal = fullNameInput.value.trim();
    if (nameVal.length < 3) {
        fullNameInput.classList.add('invalid');
        isValid = false;
    } else {
        fullNameInput.classList.remove('invalid');
    }
    
    // Validate Mobile (Optional: check only if entered)
    const mobileVal = mobileInput.value.trim();
    const mobilePattern = /^[6-9]\d{9}$/;
    if (mobileVal.length > 0 && !mobilePattern.test(mobileVal)) {
        mobileInput.classList.add('invalid');
        isValid = false;
    } else {
        mobileInput.classList.remove('invalid');
    }

    // Validate Age (Required, number between 1 and 120)
    const ageVal = parseInt(ageInput.value, 10);
    if (isNaN(ageVal) || ageVal < 1 || ageVal > 120) {
        ageInput.classList.add('invalid');
        isValid = false;
    } else {
        ageInput.classList.remove('invalid');
    }

    // Validate Gender
    const genderVal = genderSelect.value;
    if (!genderVal) {
        genderSelect.classList.add('invalid');
        isValid = false;
    } else {
        genderSelect.classList.remove('invalid');
    }
    
    // Validate District
    const distVal = districtInput.value.trim();
    if (distVal.length === 0) {
        districtInput.classList.add('invalid');
        isValid = false;
    } else {
        districtInput.classList.remove('invalid');
    }
    
    // Validate Category Selection
    const categoryVal = categorySelect.value;
    if (!categoryVal) {
        categorySelect.classList.add('invalid');
        isValid = false;
    } else {
        categorySelect.classList.remove('invalid');
    }
    
    return isValid;
}

// ==========================================================================
// Submission & Apps Script Integration
// ==========================================================================
async function handleFormSubmit(e) {
    e.preventDefault();
    if (!validateStep1() || !agreeCheckbox.checked) return;

    // Show certificate loading state and move to final section
    formSection.classList.add('hidden');
    certificateSection.classList.remove('hidden');
    
    canvasLoader.style.display = 'flex';
    certificateImg.style.display = 'none';

    // Form Submissions Details
    const name = fullNameInput.value.trim();
    const mobile = mobileInput.value.trim() || 'N/A';
    const age = ageInput.value.trim();
    const gender = genderSelect.value;
    const district = districtInput.value.trim();
    const block = blockInput.value.trim() || 'N/A';
    const village = villageInput.value.trim() || 'N/A';
    const category = categorySelect.value;
    const timestamp = new Date().toISOString();
    
    // Generate unique Certificate ID (e.g. NM-BG-YYMMDD-RANDOM)
    const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomHex = Math.floor(1000 + Math.random() * 9000); // 4-digit unique
    const certificateId = `NM-BG-${dateStr}-${randomHex}`;

    // 1. Send data to Google Sheets in background (Non-blocking)
    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        const payload = {
            timestamp,
            certificateId,
            name,
            mobile,
            age,
            gender,
            district,
            block,
            village,
            category
        };

        // Fire & forget fetch (using no-cors as Web Apps often respond with redirects)
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).catch(err => console.warn("Google Sheets Logging failed, proceeding with certificate generation: ", err));
    } else {
        console.info("Google Sheet URL not configured. Data is not saved but certificate is generated.");
    }

    // 2. Generate and Render Certificate
    try {
        await generateCertificate(name, certificateId, district, village);
        // 3. Refresh the live counter a moment after sheet write completes
        setTimeout(fetchPledgeCount, 3000);
    } catch (err) {
        console.error("Certificate Generation Error:", err);
    }
}

// ==========================================================================
// Certificate Generation (Canvas Engine)
// ==========================================================================
async function generateCertificate(name, certId, district, village) {
    const canvas = certificateCanvas;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Await font load safety
    await document.fonts.ready;

    // 1. Draw elegant, light-cream background
    ctx.fillStyle = '#FFFDF8';
    ctx.fillRect(0, 0, w, h);

    // 2. Draw dual-styled ornamental border
    // Outer Dark Green Border
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#15803D';
    ctx.strokeRect(7, 7, w - 14, h - 14);

    // Inner Accent Saffron Border
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#F97316';
    ctx.strokeRect(20, 20, w - 40, h - 40);

    // Tri-color Corner Decorative Shapes
    const cornerSize = 40;
    // Top-Left corner accent
    ctx.fillStyle = '#F97316'; // Saffron
    ctx.fillRect(20, 20, cornerSize, 6);
    ctx.fillRect(20, 20, 6, cornerSize);
    
    // Bottom-Right corner accent
    ctx.fillStyle = '#16A34A'; // Green
    ctx.fillRect(w - 20 - cornerSize, h - 26, cornerSize, 6);
    ctx.fillRect(w - 26, h - 20 - cornerSize, 6, cornerSize);

    // 3. Render three Logo SVGs onto Canvas in a row
    const drawSvgLogo = (svgStr, x, y, size) => {
        return new Promise((resolve) => {
            const logoImg = new Image();
            const svgBlob = new Blob([svgStr], {type: 'image/svg+xml;charset=utf-8'});
            const svgUrl = URL.createObjectURL(svgBlob);
            logoImg.onload = () => {
                ctx.drawImage(logoImg, x, y, size, size);
                URL.revokeObjectURL(svgUrl);
                resolve();
            };
            logoImg.onerror = () => {
                // Draw a fallback colored crest if SVG fail
                ctx.fillStyle = '#0F2B5B';
                ctx.beginPath();
                ctx.arc(x + size / 2, y + size / 2, size / 2 - 5, 0, Math.PI * 2);
                ctx.fill();
                resolve();
            };
            logoImg.src = svgUrl;
        });
    };

   const logoSize = 95;
   const logoY = 45;
     const mpLogo = new Image();
           mpLogo.src = "assets/mppolicelogo.png";
    await new Promise((resolve) => {
    mpLogo.onload = () => {
        ctx.drawImage(
            mpLogo,
            w / 2 - logoSize / 2,
            logoY,
            logoSize,
            logoSize
        );
        resolve();
    };

    if (mpLogo.complete) {
        ctx.drawImage(
            mpLogo,
            w / 2 - logoSize / 2,
            logoY,
            logoSize,
            logoSize
        );
        resolve();
    }
});

    // 4. Header Text
    ctx.textAlign = 'center';
    ctx.fillStyle = '#15803D';
    ctx.font = 'bold 18px "Noto Sans", sans-serif';
    ctx.fillText('MADHYA PRADESH POLICE ', w / 2, 165);
    
    ctx.fillStyle = '#F97316';
    ctx.font = 'bold 15px "Noto Sans", sans-serif';
    ctx.fillText('BALAGHAT POLICE - NASHA MUKTI ABHIYAN ', w / 2, 188);

    // Separator line
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#E2E8F0';
    ctx.beginPath();
    ctx.moveTo(w / 2 - 150, 205);
    ctx.lineTo(w / 2 + 150, 205);
    ctx.stroke();

    // 5. Title
    ctx.fillStyle = '#15803D';
    ctx.font = 'bold 30px "Noto Sans Devanagari", "Noto Sans", sans-serif';
    ctx.fillText('CERTIFICATE OF COMMITMENT ', w / 2, 250);

    // 6. Subtext / Intro
    ctx.fillStyle = '#64748B';
    ctx.font = 'normal 15px "Noto Sans Devanagari", "Noto Sans", sans-serif';
    ctx.fillText('This is to certify that ', w / 2, 290);

    // 7. Participant Name (Stands out)
    ctx.fillStyle = '#15803D';
    ctx.font = 'bold italic 36px "Noto Sans Devanagari", "Noto Sans", sans-serif';
    ctx.fillText(name, w / 2, 345);

    // Underline name
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#F97316';
    ctx.beginPath();
    ctx.moveTo(w / 2 - 180, 358);
    ctx.lineTo(w / 2 + 180, 358);
    ctx.stroke();

    // 8. Location descriptor & details text
    const locText = village !== 'N/A' ? `${village}, ${district}` : `${district}`;
    ctx.fillStyle = '#1E293B';
    ctx.font = 'bold 16px "Noto Sans Devanagari", "Noto Sans", sans-serif';
    ctx.fillText(`Resident of : ${locText}`, w / 2, 395);

    // 9. Core Pledge Completion Body text
    ctx.fillStyle = '#475569';
    ctx.font = 'normal 15px "Noto Sans", sans-serif';
    ctx.fillText('has successfully taken the Nasha Mukti (Say No to Drugs) Pledge and committed to', w / 2, 435);
    ctx.fillText('staying away from drugs, promoting a healthy lifestyle, and supporting a drug-free society.', w / 2, 458);

    ctx.font = 'normal 15px "Noto Sans Devanagari", sans-serif';
    ctx.fillText('सफलतापूर्वक नशा मुक्ति (नशे को ना कहें) प्रतिज्ञा ली है और इसके लिए प्रतिबद्ध हैं,', w / 2, 495);
    ctx.fillText('नशीले पदार्थों से दूर रहना, स्वस्थ जीवनशैली को बढ़ावा देना और नशा-मुक्त समाज का समर्थन करना।', w / 2, 518);

    // Motto text
    ctx.fillStyle = '#16A34A';
    ctx.font = 'bold 16px "Noto Sans Devanagari", "Noto Sans", sans-serif';
    ctx.fillText('“नशा मुक्त बालाघाट - देश भक्ति जन सेवा”', w / 2, 560);

    // 10. Left: Certificate details
    ctx.textAlign = 'left';
    ctx.fillStyle = '#475569';
    ctx.font = 'normal 13px "Noto Sans Devanagari", "Noto Sans", sans-serif';
    
    const formattedDate = new Date().toLocaleDateString(currentLanguage === 'en' ? 'en-IN' : 'hi-IN', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    ctx.fillText(`Date / दिनांक: ${formattedDate}`, 65, 680);
    ctx.fillText(`ID / प्रमाण पत्र संख्या: ${certId}`, 65, 705);
    ctx.fillText(`Status: VERIFIED / सत्यापित`, 65, 730);

    // 11. Right: Signature Block & Seal (Placeholder until approved)
    // Reset
    const officialLogo = new Image();
officialLogo.src = "assets/mppolicelogo.png";

await new Promise((resolve) => {

    if (officialLogo.complete) {

        ctx.drawImage(
            officialLogo,
            w - 235,
            610,
            95,
            95
        );

        resolve();

    } else {

        officialLogo.onload = () => {

            ctx.drawImage(
                officialLogo,
                w - 235,
                610,
                95,
                95
            );

            resolve();

        };

        officialLogo.onerror = () => resolve();

    }

});
    

    ctx.textAlign = 'center';
    ctx.font = 'normal 14px "Noto Sans Devanagari", "Noto Sans", sans-serif';
    ctx.fillStyle = '#475569';
    ctx.fillText('Superintendent of Police', w - 188, 720);
    ctx.fillText('District Balaghat (M.P.)', w - 188, 740);
    ctx.fillText('पुलिस अधीक्षक, जिला बालाघाट (म.प्र.)', w - 188, 760);

    // Draw Stamp
   

    // 12. Center-Bottom: Verification QR Code
    // First, generate QR in the invisible container
    const qrDiv = document.getElementById('qrCodeContainer');
    qrDiv.innerHTML = ''; // clear
    
    // Verification URL pointing back to verification or site domain
    const verUrl = `${window.location.origin}${window.location.pathname}?verify=${certId}`;
    
    new QRCode(qrDiv, {
        text: verUrl,
        width: 100,
        height: 100,
        colorDark : "#15803D",
        colorLight : "#FFFDF8",
        correctLevel : QRCode.CorrectLevel.M
    });

    // Wait slightly for QR code SVG/canvas to generate client-side
    setTimeout(() => {
        const qrCanvasElement = qrDiv.querySelector('canvas');
        const qrImgElement = qrDiv.querySelector('img');
        
        let qrSource = null;
        if (qrCanvasElement) {
            qrSource = qrCanvasElement;
        } else if (qrImgElement && qrImgElement.src) {
            qrSource = qrImgElement;
        }

        if (qrSource) {
            // Draw verification label
            ctx.textAlign = 'center';
            ctx.fillStyle = '#64748B';
            ctx.font = 'bold 9px "Noto Sans", sans-serif';
            ctx.fillText('SCAN TO VERIFY', w / 2, 765);
            
            // Draw QR code image on canvas
            ctx.drawImage(qrSource, w / 2 - 50, 640, 100, 100);
        }

        // Export canvas image to display block
        certificateImg.src = canvas.toDataURL('image/png');
        
        // Hide loader and show image
        canvasLoader.style.display = 'none';
        certificateImg.style.display = 'block';
    }, 200);
}

// Draw a simulated official circular police blue stamp
function drawOfficialStamp(ctx, x, y) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(12, 53, 106, 0.65)'; // Stamp Blue ink color with slight transparency
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, 35, 0, Math.PI * 2);
    ctx.lineWidth = 1;
    ctx.stroke();

    // Stamp Text Circular
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(12, 53, 106, 0.65)';
    ctx.font = 'bold 6.5px "Noto Sans", sans-serif';
    
    // Circular text approximation using small angle steps
    const stampText = "POLICE HEADQUARTERS * DISTRICT BALAGHAT *";
    for(let i=0; i<stampText.length; i++) {
        let angle = (i * (360 / stampText.length)) * Math.PI / 180;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillText(stampText[i], 0, -27);
        ctx.restore();
    }
    
    // Inner Stamp Shield Icon representation
    ctx.beginPath();
    ctx.moveTo(x - 8, y - 8);
    ctx.lineTo(x + 8, y - 8);
    ctx.lineTo(x + 8, y + 2);
    ctx.quadraticCurveTo(x + 8, y + 10, x, y + 15);
    ctx.quadraticCurveTo(x - 8, y + 10, x - 8, y + 2);
    ctx.closePath();
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    ctx.font = 'bold 8px "Noto Sans", sans-serif';
    ctx.fillText("CYBER", x, y - 1);
    ctx.fillText("CELL", x, y + 7);
    
    ctx.restore();
}

// ==========================================================================
// Downloader Helpers
// ==========================================================================
function downloadPNG() {
    const dataUrl = certificateCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Nasha_Mukti_Pledge_Certificate.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    
    // Landscape A4 proportions
    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1200, 840]
    });
    
    const dataUrl = certificateCanvas.toDataURL('image/png');
    pdf.addImage(dataUrl, 'PNG', 0, 0, 1200, 840);
    pdf.save(`Nasha_Mukti_Pledge_Certificate.pdf`);
}

// ==========================================================================
// Form Reset
// ==========================================================================
function resetFormAndPledge() {
    pledgeForm.reset();
    agreeCheckbox.checked = false;
    submitPledgeBtn.disabled = true;
    
    certificateSection.classList.add('hidden');
    welcomeSection.classList.remove('hidden');
    
    // Reset validation errors visually
    [fullNameInput, mobileInput, ageInput, genderSelect, districtInput, categorySelect].forEach(input => {
        if (input) input.classList.remove('invalid');
    });
}
