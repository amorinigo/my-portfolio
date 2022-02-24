const sliderImgUrl   = '/assets/images/skills/slider';
const skillsImgUrl   = '/assets/images/skills/cards';
const projectsImgUrl = '/assets/images/projects';
const servicesImgIrl = '/assets/images/services';
const githubUrl      = 'https://amorinigo.github.io';

export const particleConfig = {
    "particles":{
        "number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":0.5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}
    },
    "interactivity":{
        "detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}
    },
    "retina_detect":true
};

export const swiperConfig = {
    observer: true,
    freeMode: true,
    loop: true,
    breakpoints: {
        0:    { slidesPerView: 1 },
        769:  { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }
};

export const technologiesInfo = [
    //{ name: 'GraphQL',      img: `${ sliderImgUrl }/graph-ql.svg`     },
    //{ name: 'NextJS',       img: `${ sliderImgUrl }/next-js.svg`      },
    //{ name: 'Gatsby',       img: `${ sliderImgUrl }/gatsby.svg`       },
    { name: 'Redux',        img: `${ sliderImgUrl }/redux.svg`        },
    { name: 'React',        img: `${ sliderImgUrl }/react.svg`        },
    { name: 'ReactiveX',    img: `${ sliderImgUrl }/rxjs.svg`         },
    { name: 'Angular',      img: `${ sliderImgUrl }/angular.svg`      },
    { name: 'Gulp',         img: `${ sliderImgUrl }/gulp.svg`         },
    { name: 'Babel',        img: `${ sliderImgUrl }/babel.svg`        },
    { name: 'Webpack',      img: `${ sliderImgUrl }/webpack.svg`      },
    { name: 'GIT',          img: `${ sliderImgUrl }/git.svg`          },
    { name: 'TypeScript',   img: `${ sliderImgUrl }/typescript.svg`   },
    { name: 'JavaScript',   img: `${ sliderImgUrl }/javascript.svg`   },
    { name: 'Tailwind CSS', img: `${ sliderImgUrl }/tailwind-css.svg` },
    { name: 'Bootstrap',    img: `${ sliderImgUrl }/bootstrap.svg`    },
    { name: 'SASS',         img: `${ sliderImgUrl }/sass.svg`         },
    { name: 'CSS 3',        img: `${ sliderImgUrl }/css3.svg`         },
    { name: 'HTML 5',       img: `${ sliderImgUrl }/html5.svg`        }
];

export const skillsInfo = [
    { img: `${ skillsImgUrl }/problems.svg`,     sectionValue: 'problem-resolution' },
    { img: `${ skillsImgUrl }/team.svg`,         sectionValue: 'teamwork'           },
    { img: `${ skillsImgUrl }/organization.svg`, sectionValue: 'organization'       },
    { img: `${ skillsImgUrl }/time.svg`,         sectionValue: 'time-management'    }
];

export const projectsInfo = [
    {
        name: 'Todo Películas',
        img: `${ projectsImgUrl }/todoPeliculas.svg`,
        technologies: [ 'RxJS', 'Angular', 'Bootstrap', 'JavaScript ES6', 'HTML', 'CSS', 'SASS' ],
        link: `${ githubUrl }/todoPeliculas/`,
        cardColor: '#3719CA'
    },
    {
        name: 'GYM Fitness Studio',
        img: `${ projectsImgUrl }/gym.svg`,
        technologies: [ 'JavaScript ES6', 'SASS', 'CSS', 'HTML' ],
        link: `${ githubUrl }/gym-fitness-studio/`,
        cardColor: '#7D3C98'
    },
    {
        name: 'Portafolio',
        img: `${ projectsImgUrl }/portafolio.svg`,
        technologies: [ 'JavaScript ES6', 'SASS', 'CSS', 'HTML' ],
        link: `${ githubUrl }/my-portfolio/`,
        cardColor: '#AF0DA7'
    }
];

export const servicesInfo = [
    { img: `${ servicesImgIrl }/best-practices.svg`,    sectionValue: 'good-practices'    },
    { img: `${ servicesImgIrl }/responsive-design.svg`, sectionValue: 'responsive-design' },
    { img: `${ servicesImgIrl }/creativity.svg`,        sectionValue: 'creativity'        },
    { img: `${ servicesImgIrl }/dynamism.svg`,          sectionValue: 'dynamism'          }
];

export const regexs = {
    name: /^[a-zA-ZÀ-ÿ]{2,100} ?[a-zA-ZÀ-ÿ]{0,100}$/,
    email: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: /^.{5,200}$/m
}