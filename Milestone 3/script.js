// Form validation and resume generation logic
function generateResume() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var year = document.getElementById('year').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var yearsWorked = document.getElementById('yearsWorked').value;
    var skills = document.getElementById('skills').value;
    // Form validation
    var isValid = true;
    if (name === "") {
        document.getElementById('nameError').innerText = "Name is required";
        isValid = false;
    }
    else {
        document.getElementById('nameError').innerText = "";
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format";
        isValid = false;
    }
    else {
        document.getElementById('emailError').innerText = "";
    }
    if (phone === "" || isNaN(Number(phone))) {
        document.getElementById('phoneError').innerText = "Invalid phone number";
        isValid = false;
    }
    else {
        document.getElementById('phoneError').innerText = "";
    }
    if (!isValid)
        return;
    // Create ResumeData object
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        institution: institution,
        year: year,
        jobTitle: jobTitle,
        company: company,
        yearsWorked: yearsWorked,
        skills: skills,
    };
    // Dynamically display the resume
    document.getElementById('outputName').innerHTML = "<strong>".concat(resumeData.name, "</strong>");
    document.getElementById('outputContact').innerHTML = "<strong>Email:</strong> ".concat(resumeData.email, "<br><strong>Phone:</strong> ").concat(resumeData.phone);
    document.getElementById('outputEducation').innerHTML = "<strong>".concat(resumeData.degree, "</strong>, ").concat(resumeData.institution, ", ").concat(resumeData.year);
    document.getElementById('outputExperience').innerHTML = "<strong>".concat(resumeData.jobTitle, "</strong> at ").concat(resumeData.company, ", ").concat(resumeData.yearsWorked, " years");
    document.getElementById('outputSkills').innerHTML = resumeData.skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', ');
    // Show the resume section
    document.getElementById('resumeOutput').style.display = 'block';
}
