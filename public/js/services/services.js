angular.module('meusServicos', ['ngResource', 'ngCookies'])
    .factory('recursoLogin', function ($cookies, $location) {
        const routes = {
            register: '/register',
            login: '/login'
        }
        function verify() {
            if ($location.path() != routes.register && $location.path() != routes.login) {
                // verificar se o cookie foi inserido , caso nao , redirecionar para pagina de login

                if ($cookies.get('x-acess-token')) {
                    const refaturandoToken = $cookies.get('x-acess-token').split('.')
                    //capturando a parte de informação do usuario 
                    const infoUser = JSON.parse(atob(refaturandoToken[1]))

                    // Setting a localStorage
                    localStorage.setItem('userName', infoUser.name)
                    localStorage.setItem('email', infoUser.email)

                } else {
                    $location.path('/login')
                }
            } else {
                console.log('essa rota nao vai aplicar o cookie')
            }
        }
        function token() {
            if ($cookies.get('x-acess-token')) {
                const refaturandoToken = $cookies.get('x-acess-token');
                // Setting a cookie

                return refaturandoToken
            }
        }

        return {
            verify: verify(),
            token: token()
        }

    })