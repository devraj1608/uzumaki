document.getElementById('loginButton').addEventListener('click', function (event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.querySelector('input[name="PWD"]').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Log the values to the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if(password )

    // Additional logic, like validation or submitting the data, can go here

    // fetch url of the server
    // post to "/api/v1/user/register"
});

