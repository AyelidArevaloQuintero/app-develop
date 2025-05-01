document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login (email, password)
})

function login(email, password){
    let message = '';
    let alertType = '';
    localStorage.removeItem('token')
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-type": "aplication/json",
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify({ email, password })
    })
    .then((responce) => {
        if(responce.status === 200){
            alertType = "Success";
            message = 'Inicio de sesión exitoso';
            console.log("Todo bien" + responce)
            alertBuilder(alertType, message)
            localStorage.setItem('token', 'cute09cute07cute05cute13')
            setTimeout(() => {
                location.href = 'admin/dashboard.html'
            }, 2000) // 2000ms = 2 segundos
            
        }
        else{
            alertType = "Danger";
            message = 'Correo o contraseña no validos';
            alertBuilder(alertType, message)
        }
    })

    .catch((error) => {
        alertType = "Danger";
        message = 'Error inesperado';
        console.error(error)
        alertBuilder(alertType, message)
    })
    
}

function alertBuilder(alertType, message){
    let alert = `
    <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`;
document.getElementById('alert').innerHTML = alert;
}