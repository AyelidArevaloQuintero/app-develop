document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let message = "";
    let alertType = "";

    if(email === "" || password === ""){
        alertType = "Warnig";
        message('Por favor completa todos los campos');
    }
    else if(email === 'aarevaloq@ufpso.edu.co' && password === '12345'){
        alertType = "Success";
        message('Inicio de sesión exitoso');
    }
    else{
        alertType = "Danger";
        message('Correo o contraseña no validos');
    }
    let alert = `
        <div class = "alert alert-${alertType} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    document.getElementById('alert').innerHTML = alert;
})

function login(email, password){
    let message = "";
    let alertType = "";
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then((data) => {
        alertType = "Success";
        message('Inicio de sesión exitoso');
        console.log("Todo bien" + data)
    })

    .catch((error) => {
        alertType = "Danger";
        message('Correo o contraseña no validos');
        console.error(error)
    })
    let alert = `
        <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    document.getElementById('alert').innerHTML = alert;
}