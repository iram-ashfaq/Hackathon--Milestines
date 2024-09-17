// script.ts
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    degree: string;
    institution: string;
    year: string;
    jobTitle: string;
    company: string;
    yearsWorked: string;
    skills: string;
}

// Form validation and resume generation logic
function generateResume() {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const yearsWorked = (document.getElementById('yearsWorked') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Form validation
    let isValid = true;

    if (name === "") {
        document.getElementById('nameError')!.innerText = "Name is required";
        isValid = false;
    } else {
        document.getElementById('nameError')!.innerText = "";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError')!.innerText = "Invalid email format";
        isValid = false;
    } else {
        document.getElementById('emailError')!.innerText = "";
    }

    if (phone === "" || isNaN(Number(phone))) {
        document.getElementById('phoneError')!.innerText = "Invalid phone number";
        isValid = false;
    } else {
        document.getElementById('phoneError')!.innerText = "";
    }

    if (!isValid) return;

    // Create ResumeData object
    const resumeData: ResumeData = {
        name,
        email,
        phone,
        degree,
        institution,
        year,
        jobTitle,
        company,
        yearsWorked,
        skills,
    };

    // Dynamically display the resume
    document.getElementById('outputName')!.innerHTML = `<strong>${resumeData.name}</strong>`;
    document.getElementById('outputContact')!.innerHTML = `<strong>Email:</strong> ${resumeData.email}<br><strong>Phone:</strong> ${resumeData.phone}`;

    document.getElementById('outputEducation')!.innerHTML = `<strong>${resumeData.degree}</strong>, ${resumeData.institution}, ${resumeData.year}`;
    document.getElementById('outputExperience')!.innerHTML = `<strong>${resumeData.jobTitle}</strong> at ${resumeData.company}, ${resumeData.yearsWorked} years`;
    document.getElementById('outputSkills')!.innerHTML = resumeData.skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ');

    // Show the resume section
    document.getElementById('resumeOutput')!.style.display = 'block';
}
