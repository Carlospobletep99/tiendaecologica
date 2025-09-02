// Manejo de login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Guardamos en localStorage (datos falsos)
            localStorage.setItem('usuario', JSON.stringify({
                nombre: username,
                email: username.toLowerCase() + '@correo.com',
                ciudad: 'Santiago de Chile'
            }));

            // Redirigimos a perfil
            window.location.href = 'perfil.html';
        } else {
            alert('Ingrese usuario y contraseña');
        }
    });
}

// Manejo de perfil
const nombreUsuario = document.getElementById('nombreUsuario');
if (nombreUsuario) {
    const datosUsuario = JSON.parse(localStorage.getItem('usuario'));

    if (datosUsuario) {
        document.getElementById('nombreUsuario').textContent = datosUsuario.nombre;
        document.getElementById('emailUsuario').textContent = datosUsuario.email;
        document.getElementById('ciudadUsuario').textContent = datosUsuario.ciudad;
    } else {
        // Si no hay usuario en localStorage, volver a login
        window.location.href = 'login.html';
    }

    // Cerrar sesión
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('usuario');
        window.location.href = 'login.html';
    });
}
