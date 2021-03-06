app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/layout/login');
        $urlRouterProvider.when('/layout', '/layout/login');
        $stateProvider
                .state('layout', {
                    url: '/layout',
                    templateUrl: 'app/modules/m_layout/view/index.html'
                })
                .state('layout.home', {
                    url: '/home',
                    templateUrl: 'app/modules/m_home/view/index.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('echarts').then(function(){});
                        }]
                    }
                })
                .state('layout.login', {
                    url: '/login?from',
                    templateUrl: 'app/modules/m_login/view/index.html'
                })
                .state('layout.register', {
                    url: '/register',
                    templateUrl: 'app/modules/m_login/view/register.html'
                })
                .state('layout.forgetpwd', {
                    url: '/forgetpwd',
                    templateUrl: 'app/modules/m_login/view/forgetpwd.html'
                })

    }]);