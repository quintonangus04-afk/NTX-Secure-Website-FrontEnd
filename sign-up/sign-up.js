// Test POST command

const


// stop form auto reload and send data to AuthenticateX

const signUpForm = document.getElementById('signUpForm')

signUpForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const signUpRequest = await fetch('https://ntx-system-backend-917699798868.europe-west1.run.app/signUpRequest', {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    const AuthenticateX_Response = await signUpRequest.json()
    console.log(AuthenticateX_Response)

})