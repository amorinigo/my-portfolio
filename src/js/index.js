import { 
    particleConfig, 
    swiperConfig, 
    technologiesInfo, 
    skillsInfo, 
    projectsInfo, 
    servicesInfo, 
    regexs 
} from './data.js';

// MENU
const handleMenu = () => {

    const buttonsCtn = document.querySelector( '.navbar .buttons' );
    const menuButton = document.querySelector( '.menu-button' );

    const handleMenuToggle = () => {

        const navbar    = document.querySelector( '.navbar' );
        const menuLinks = Array.from( document.querySelectorAll( '.menu__link' ) );
        
        menuButton.addEventListener( 'click', () => navbar.classList.toggle( 'menu-active' ) );
        
        menuLinks.forEach( link => {
            link.addEventListener( 'click', () => navbar.classList.remove( 'menu-active' ) );
        } );

    }
    
    try { handleMenuToggle(); } catch (error) { console.log( error ); }  
    
    const handleButtonsView = () => {

        let lastScrollTop = 0;
    
        window.addEventListener( 'scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            ( scrollTop > lastScrollTop ) ? buttonsCtn.style.top = '-80px' : buttonsCtn.style.top = '20px';
            lastScrollTop = scrollTop;
        });

    }

    // try { handleButtonsView(); } catch (error) { console.log( error ); }
    
}

try { handleMenu(); } catch (error) { console.log( error ); }

// LANGUAGE BUTTON
const handleLanguageButton = () => {

    const languageButton = document.querySelector( '.navbar .language-button' );
    const elementsToChange = Array.from( document.querySelectorAll( '[data-section]' ) );
    languageButton.addEventListener( 'click', e => handleClick(e) );

    const handleClick = e => {

        e.preventDefault();
        e.target.dataset.language = e.target.dataset.language === 'es' ? 'en' : 'es';
        const language = e.target.dataset.language;
        languageButton.classList.toggle( 'active-english' );
        changeLanguage( language );
        
    }

    const changeLanguage = language => {

        fetch( `../assets/languages/${ language }.json` )
            .then( resp => resp.json() )
            .then( texts => changeTexts( texts ) );

        const changeTexts = newTexts => {

            elementsToChange.forEach( element => {
                
                const section = element.dataset.section;
                const value = element.dataset.value;
                
                ( element.classList.contains( 'contact-form__input' ) )
                    ? ( element.placeholder = newTexts[section][value] )
                    : ( element.innerHTML = newTexts[section][value] );

            } );

        }
        
    }

    changeLanguage( 'es' );
    
}

window.addEventListener( 'load', () => {
    try { handleLanguageButton(); } catch (error) { console.log( error ); }
} );

// CIRCLE
try { particlesJS( 'circleFigure', particleConfig ); } catch (error) { console.log( error ); }

const handleCircle = () => {

    const circle       = document.querySelector( '.circle-figure' );
    const circleTitle  = document.querySelector( '.circle-title' );
    
    window.addEventListener( 'scroll', () => {
        const value = window.scrollY;
        circle.style.clipPath = `circle( ${ value }px at 50% 60% )`;
        circleTitle.style.left = `${ 100 - value / 5 }%`;
    } );

}

try { handleCircle(); } catch (error) { console.log( error ); }

// UPLOAD BUTTON
const handleUploadButton = () => {

    const uploadBtn = document.querySelector( '.roundButton--bottom' );

    window.addEventListener( 'scroll', () => {

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        ( scrollTop > 300 )
            ? uploadBtn.classList.add( 'show-button' )
            : uploadBtn.classList.remove( 'show-button' );
            
    } );
    
}

try { handleUploadButton(); } catch (error) { console.log( error ); }

// PROJECTS CARDS
const handleProyectCards = () => {

    const createProjectCards = () => {

        const projectCardsCtn = document.querySelector( '.my-projects__cards' );
    
        projectsInfo.forEach( ({ name, img, technologies, link, cardColor }) => {
            
            projectCardsCtn.innerHTML += `
                <div class="project-card">
    
                    <div class="project-card__figure" style="background-color: ${ cardColor };">
                        <img class="project-card__img" src="${ img }" alt="${ name }" />
                    </div>
    
                    <div class="project-card__content">
    
                        <h4 class="project-card__name" style="color: ${ cardColor };">${ name }</h4>
    
                        <div class="project-card__technologies">
                            ${ 
                                technologies.map( technology => (
                                    `<h5 class="project-card__technology">${ technology }</h5>`
                                ) ) 
                            }
                        </div>    
    
                        <a 
                            class="button button--projects"
                            target="_blank" 
                            href="${ link }"
                            style="background-color: ${ cardColor };"
                            data-section="my-projects"
                            data-value="button"
                        >
                            Ver proyecto
                        </a>
                        
                    </div>
                    
                </div>
            `;
    
        } );
        
    }
    
    try { createProjectCards(); } catch (error) { console.log( error ); }

    const handleFilter = () => {

        // debouncer.
        let debounceTimer;
 
        const debounce = ( callback, time ) => {
          window.clearTimeout( debounceTimer );
          debounceTimer = window.setTimeout( callback, time );
        };
        // debouncer.

        const inputFilter  = document.querySelector( '.projects-filter input' );
        const projectCards = Array.from( document.querySelectorAll('.my-projects__cards .project-card') );
        const emptyMessage = document.querySelector( '.my-projects .empty-message' );
        
        inputFilter.addEventListener( 'input', () => debounce( filterProjects, 500 ), false );

        const filterProjects = () => {

            const inputValue = inputFilter.value.trim();

            const resetText = text => {
                return text.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
            }
            
            const terms = inputValue.split(',').filter( term => term !== '' ).map( term => resetText(term) );

            if( terms.length === 0 ) {
                projectCards.forEach( project => project.classList.remove( 'hide' ) );
                emptyMessage.classList.remove( 'show-message' );
                return;
            }

            const hasAllTheTerms = project => {
                
                let projectTechnologies = Array.from( project.querySelectorAll('.project-card__technology') );
                projectTechnologies = projectTechnologies.map( ({ textContent }) => resetText(textContent) );

                let matchingTechnologies = [];

                terms.forEach( term => {
                    const matchingTerm = projectTechnologies.find( tech => tech.includes( term ) );
                    ( matchingTerm ) && matchingTechnologies.push( matchingTerm );
                } );

                return matchingTechnologies.length === terms.length;
                
            }

            projectCards.forEach( project => {
                ( hasAllTheTerms(project) ) ? project.classList.remove('hide') : project.classList.add('hide');
            } );

            const hiddenProjects = Array.from(document.querySelectorAll('.my-projects__cards .project-card.hide'));
            
            ( projectCards.length === hiddenProjects.length )
                ? emptyMessage.classList.add( 'show-message' )
                : emptyMessage.classList.remove( 'show-message' );
            
        }
        
    }

    try { handleFilter(); } catch (error) { console.log( error ); }
    
}

try { handleProyectCards(); } catch (error) { console.log( error ); }

// SKILLS
const handleSkillsSection = () => {

    const createSlider = () => {

        const swiperWrapper = document.querySelector( '.swiper-wrapper' );

        technologiesInfo.forEach( ({ name, img }) => {

            swiperWrapper.innerHTML += `
                <div class="swiper-slide">
                    <img class="swiper-img" src="${ img }" alt="${ name }" title="${ name }" />
                </div>
            `;    
            
        } );
        
        const swiper = new Swiper( '.swiper-container', swiperConfig );

    }

    try { createSlider(); } catch (error) { console.log( error ); }

    const createCards = () => {

        const cardsGrid = document.querySelector( '.skills-cards__grid' );

        skillsInfo.forEach( ({ img, sectionValue }) => {

            cardsGrid.innerHTML += `
                <div class="skills-card card">

                    <div class="skills-card__shadow">
                        <img class="skills-card__logo" src="${ img }" alt="${ sectionValue }" />
                    </div>

                    <h4 class="skills-card__title" data-section="skills" data-value="title-${ sectionValue }">
                    </h4>

                    <p 
                        class="skills-card__description" 
                        data-section="skills" 
                        data-value="description-${ sectionValue }"
                    >
                    </p>
                    
                </div>
            `;
            
        } );
        
    }

    try { createCards(); } catch (error) { console.log( error ); }
    
}

try { handleSkillsSection(); } catch (error) { console.log( error ); }

// SERVICES CARDS
const createServiceCards = () => {

    const servicesGrid = document.querySelector( '.my-services__grid' );

    servicesInfo.forEach( ({ img, sectionValue }) => {

        servicesGrid.innerHTML += `
            <div class="services-card card card--services">

                <img class="my-services__img" src="${ img }" alt="${ sectionValue }" />

                <h4 
                    class="services-card__title"
                    data-section="my-services"
                    data-value="title-${ sectionValue }"
                >
                </h4>

                <p 
                    class="services-card__description"
                    data-section="my-services"
                    data-value="description-${ sectionValue }"
                >
                </p>

            </div>
        `;
        
    } );
    
}

try { createServiceCards(); } catch (error) { console.log( error ); }

// CONTACT FORM
const handleContactForm = () => {

    const contactForm = document.querySelector( '.contact-form' );
    const inputs = Array.from( document.querySelectorAll( '.contact-form__input' ) );
    const okMessage = document.querySelector( '.contact-form__ok' );
    
    contactForm.addEventListener( 'submit', e => {
        e.preventDefault();
        ( isValidForm() ) ? sendForm() : showAllErrors();
    });
    
    const isValidForm = () => {
        let validFields = 0;
        inputs.forEach( input => isValidInput(input) && ( validFields += 1 ) );
        return validFields === inputs.length;
    }
    
    const sendForm = () => {
        hideAllErrors();
        // En este punto hacer el POST al backend.
        contactForm.reset();
    }

    const showOkMessage = show => {
        show ? okMessage.classList.add('show') : okMessage.classList.remove('show');
    }
    
    const hideAllErrors = () => {
        inputs.forEach( input => showError(false, input) );
        showOkMessage( true );
        setTimeout( () => showOkMessage( false ), 4000 );
    }
    
    const showAllErrors = () => {

        showOkMessage( false )
    
        inputs.forEach( input => {
            ( !isValidInput(input) ) ? showError(true, input) : showError(false, input);
        });

    }
    
    const isValidInput = ({ id, value }) => regexs[ id ].test( value.trim() );
    
    const showError = ( showError, input ) => {
        ( showError ) ? input.classList.add( 'show-error' ) : input.classList.remove( 'show-error' );
    }
    
}

try { handleContactForm(); } catch (error) { console.log( error ); }

// COPYRIGHT
const addYearToCopyright = () => {

    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector( '.copyright .year' );
    yearElement.textContent = currentYear;
    
}

try { addYearToCopyright(); } catch (error) { console.log( error ); }