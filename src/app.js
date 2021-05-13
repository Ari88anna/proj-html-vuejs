var app = new Vue(
    {
        el: '#root',
        data: {
            //topMenu: array di link da inserire nell'header
            topMenu: ['Home', 'Pages', 'Course Format', 'Courses', 'Demos' ],
            //socialList: array di oggetti, ogni oggetto rapppresenta un social
            socialList: [
                {
                    name: '-facebook'
                },
                {
                    name: '-twitter'
                },
                {
                    name: '-instagram'
                },
                {
                    name: '-linkedin'
                },
                {
                    name: '-google-plus'
                },
                {
                    name: '-youtube'
                }
            ],

            //socialList: array di oggetti, ogni oggetto rapppresenta un social e il suo colore di sfondo
            socialListFoot: [
                {
                    name: 'fab fa-facebook',
                    bg: '#3b5998'
                },
                {
                    name: 'fab fa-instagram',
                    bg: '#c32aa3'
                },
                {
                    name: 'fab fa-linkedin',
                    bg: '#0077b5'
                },
                {
                    name: 'fab fa-pinterest',
                    bg: '#bd081c'
                },
                {
                    name: 'fab fa-twitter',
                    bg: '#1da1f2'
                },
                {
                    name: 'fas fa-basketball-ball',
                    bg: '#ea4c89'
                },
                {
                    name: 'fab fa-google-plus',
                    bg: '#db4437'
                },
                {
                    name: 'fab fa-skype',
                    bg: '#00aff0'
                },
                
            ]

        }

})