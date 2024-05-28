$(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault();

        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const userData = {
            username,
            email,
            password
        };

        $.ajax({
            type: 'POST',
            url: '/register',
            data: userData,
            success: function(response) {
                alert(response.message);
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});