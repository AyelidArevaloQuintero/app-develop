document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "" || password === ""){
        console.log('Por favor completa todos los campos');
    }
    else if(email === 'aarevaloq@ufpso.edu.co' && password === '12345'){
        console.log('Inicio de sesión exitoso');
    }
    else{
        console.log('Correo o contraseña no validos');
    }
})