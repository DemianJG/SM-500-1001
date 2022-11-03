<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
    <title>Iniciar sesión</title>
    @viteReactRefresh
    @vite(['resources/js/app.js', 'resources/css/app.css', 'resources/css/formulario.css'])
</head>
<body>
    <header>
        <img class="logo" src="images/Maguey500.png" alt="MG500">
    </header>
    <form action="/login" method="POST">
        @csrf
        <h1 class="title">Inicio de sesión</h1>
        <label for="">
            <i class="fa-solid fa-user"></i>
            <input type="text" name="username" id="username" placeholder="Nombre de usuario">
        </label>
        <label for="">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password" id="password" placeholder="Contraseña">
        </label>
        <a href="" class="link">¿Olvidé mi contraseña?</a>
        <button id="button">Iniciar sesión</button>
    </form>
    {{-- <form action="/register" method="post">
        @csrf
        <h1 class="title">Registro</h1>
        <label for="">
            <i class="fa-solid fa-user"></i>
            <input type="text" name="name" id="username" placeholder="Nombre">
        </label>
        <label for="">
            <i class="fa-solid fa-user"></i>
            <input type="text" name="email" id="username" placeholder="Correo electronico">
        </label>
        <label for="">
            <i class="fa-solid fa-user"></i>
            <input type="text" name="username" id="username" placeholder="Nombre de usuario">
        </label>
        <label for="">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password" id="password" placeholder="Contraseña">
        </label>
        <label for="">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirmar contraseña">
        </label>
        <button type="submit">Registrar</button> --}}
    </form>
</body>
</html>
