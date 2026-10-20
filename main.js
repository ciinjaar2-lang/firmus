function message(){
        var email = document.getElementById('email');
    var password = document.getElementById('password');
    const success = document.getElementById('success');
    const failure = document.getElementById('failure');

    if (email.value === '' || password.value === '') {
        failure.style.display = 'block';
    }
    else{
        setTimeout(() => {
            email.value = '';
            password.value = '';
        }, 2000);
        
        success.style.display = 'block';
    }

}