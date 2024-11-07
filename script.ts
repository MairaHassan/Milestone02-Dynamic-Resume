// get reference to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display');

// handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // picture element
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    // generate the resume content dynamically
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        
        <h3>Personal Information</h3>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Address:</b> ${address}</p>
        
        <h3>Qualification</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});