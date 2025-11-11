document.addEventListener('DOMContentLoaded', function() {
    
    // -------------------------------------------------------------
    // 1. CAMBIO DE IDIOMA (Requisito 17)
    // -------------------------------------------------------------
    const languageSwitch = document.getElementById('languageSwitch');
    
    // Diccionario de traducciones
    const translations = {
        'es': {
            // Navegación
            'nav_perfil': 'Perfil', 'nav_valores': 'Valores', 'nav_proyectos': 'Proyectos', 'nav_mision': 'Misión/Visión', 'nav_contacto': 'Contacto',
            'lang_es': 'ES', 'lang_en': 'EN',
            // Perfil
            'hero_title': 'DEREK', 'hero_subtitle': 'Diseñando el futuro, pieza a pieza.',
            'hero_profile': 'Ingeniero en Desarrollo de Software enfocado en el diseño de soluciones digitales robustas y escalables.',
            'btn_cv': 'Descargar CV (PDF)', 'btn_contact': 'Contactar Ahora',
            // Valores
            'values_title': 'Valores Profesionales',
            'value1_title': 'Aprendizaje Continuo', 'value1_desc': 'Mantenerse actualizado con las nuevas tecnologías y metodologías de desarrollo.',
            'value2_title': 'Respeto', 'value2_desc': 'Promuevo un ambiente de colaboración donde se valoran las ideas, el tiempo y el trabajo.',
            'value3_title': 'Precisión', 'value3_desc': 'Garantizar que el código y el diseño cumplan estrictamente con los requisitos.',
            'value4_title': 'Resolución de Problemas', 'value4_desc': 'Ver los desafíos técnicos como oportunidades para diseñar soluciones ingeniosas.',
            // Proyectos
            'projects_title': 'Proyectos Desarrollados',
            'proj1_title': 'E-commerce de Ropa', 'proj1_desc': 'Plataforma completa de comercio electrónico.', 'proj1_tech': '**Tecnologías:** ReactJS, Bootstrap 5, NodeJS, MongoDB', 'proj1_overlay': 'Ver Detalle',
            'proj2_title': 'API de Gestión de Tareas', 'proj2_desc': 'Backend RESTful para manejo de usuarios y tareas.', 'proj2_tech': '**Tecnologías:** PHP (Laravel), MySQL', 'proj2_overlay': 'Ver Detalle',
            'proj3_title': 'Página Corporativa', 'proj3_desc': 'Web informativa con enfoque en accesibilidad y UX/UI.', 'proj3_tech': '**Tecnologías:** HTML5, CSS3, JavaScript Vainilla', 'proj3_overlay': 'Ver Detalle',
            // Misión/Visión
            'mission_title': 'Misión', 'mission_desc': 'Aplicar las mejores prácticas de ingeniería de software para construir soluciones digitales que resuelvan problemas reales, contribuyendo con precisión y funcionalidad en cada proyecto que desarrolle.',
            'vision_title': 'Visión', 'vision_desc': 'Convertirme en un desarrollador senior que lidere equipos y proyectos de alto impacto, diseñando y manteniendo arquitecturas de software innovadoras y eficientes a largo plazo.',
            // Contacto
            'contact_title': 'Hablemos de tu Proyecto',
            'form_name': 'Nombre Completo', 'form_email': 'Correo Electrónico', 'form_message': 'Mensaje / Breve descripción del proyecto',
            'form_submit': 'Enviar Mensaje',
            // Footer
            'footer_note': 'Portafolio desarrollado con HTML5, CSS3, Bootstrap 5 y JavaScript. © 2025 DEREK.'
        },
        'en': {
            // Navigation
            'nav_perfil': 'Profile', 'nav_valores': 'Values', 'nav_proyectos': 'Projects', 'nav_mision': 'Mission/Vision', 'nav_contacto': 'Contact',
            'lang_es': 'ES', 'lang_en': 'EN',
            // Profile
            'hero_title': 'DEREK', 'hero_subtitle': 'Designing the future, piece by piece.',
            'hero_profile': 'Software Development Engineer focused on designing robust and scalable digital solutions.',
            'btn_cv': 'Download CV (PDF)', 'btn_contact': 'Contact Now',
            // Values
            'values_title': 'Professional Values',
            'value1_title': 'Continuous Learning', 'value1_desc': 'Staying updated with new development technologies and methodologies.',
            'value2_title': 'Respect', 'value2_desc': 'Promoting a collaborative environment where everyone\'s ideas, time, and work are valued.',
            'value3_title': 'Precision', 'value3_desc': 'Ensuring code and design strictly meet requirements.',
            'value4_title': 'Problem Solving', 'value4_desc': 'Viewing technical challenges as opportunities to design ingenious solutions.',
            // Proyectos
            'projects_title': 'Developed Projects',
            'proj1_title': 'Clothing E-commerce', 'proj1_desc': 'Complete e-commerce platform.', 'proj1_tech': '**Technologies:** ReactJS, Bootstrap 5, NodeJS, MongoDB', 'proj1_overlay': 'See Detail',
            'proj2_title': 'Task Management API', 'proj2_desc': 'RESTful Backend for user and task handling.', 'proj2_tech': '**Technologies:** PHP (Laravel), MySQL', 'proj2_overlay': 'See Detail',
            'proj3_title': 'Corporate Website', 'proj3_desc': 'Informational website focused on accessibility and UX/UI.', 'proj3_tech': '**Technologies:** HTML5, CSS3, Vanilla JavaScript', 'proj3_overlay': 'See Detail',
            // Misión/Visión
            'mission_title': 'Mission', 'mission_desc': 'Applying software engineering best practices to build digital solutions that solve real problems, contributing precision and functionality to every project I develop.',
            'vision_title': 'Vision', 'vision_desc': 'To become a Senior Developer leading high-impact teams and projects, designing and maintaining innovative and efficient software architectures long-term.',
            // Contacto
            'contact_title': 'Let\'s Talk About Your Project',
            'form_name': 'Full Name', 'form_email': 'Email Address', 'form_message': 'Message / Brief project description',
            'form_submit': 'Send Message',
            // Footer
            'footer_note': 'Portfolio developed with HTML5, CSS3, Bootstrap 5, and JavaScript. © 2025 DEREK.'
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang; 
        
        // Actualiza todos los textos marcados con 'data-lang-key'
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                 element.innerHTML = translations[lang][key];
            }
        });

        // Actualiza el título del documento (si es necesario)
        document.title = (lang === 'en' ? 'DEREK | Professional Portfolio' : 'DEREK | Portafolio Profesional');
    }

    // Establecer idioma inicial basado en el estado del switch (desmarcado = ES, marcado = EN)
    setLanguage(languageSwitch.checked ? 'en' : 'es');

    // Listener para el switch de idioma
    languageSwitch.addEventListener('change', function() {
        if (this.checked) {
            setLanguage('en');
        } else {
            setLanguage('es');
        }
    });


    // -------------------------------------------------------------
    // 2. FORMULARIO DE CONTACTO (Requisito 12)
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Simulación del envío del formulario (usando JS Vainilla en lugar de una librería completa)
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const isEnglish = languageSwitch.checked;
        
        // Simulación de carga
        formMessage.style.display = 'block';
        formMessage.className = 'mt-3 alert alert-info';
        formMessage.innerHTML = isEnglish ? 'Sending message...' : 'Enviando mensaje...';

        // En un proyecto real, aquí enviarías los datos a un servicio (PHP/JS/Formspree/etc.)
        // Ejemplo de envío simulado:
        setTimeout(() => {
            const success = true; // Cambiar a 'false' para probar el error

            if (success) {
                formMessage.className = 'mt-3 alert alert-success';
                formMessage.innerHTML = isEnglish ? 
                    'Message sent successfully! I will contact you shortly.' : 
                    '¡Mensaje enviado con éxito! Te contactaré a la brevedad.';
                contactForm.reset(); 
            } else {
                formMessage.className = 'mt-3 alert alert-danger';
                formMessage.innerHTML = isEnglish ? 
                    'Error sending message. Please try again later or contact me via WhatsApp.' :
                    'Error al enviar el mensaje. Por favor, intenta de nuevo o contáctame por WhatsApp.';
            }
            
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                 formMessage.style.display = 'none';
            }, 5000);

        }, 2000); // 2 segundos de espera
    });

    // -------------------------------------------------------------
    // 3. BOTÓN SCROLLTOP (Requisito 14)
    // -------------------------------------------------------------
    const scrollTopButton = document.getElementById('scroll-top');

    // Muestra u oculta el botón basado en la posición de scroll
    window.onscroll = function() {
        // Se muestra si el usuario ha hecho scroll más de 100px
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    };
    
    // El scroll suave se puede manejar fácilmente con CSS (scroll-behavior: smooth en el body) o con este JS:
     scrollTopButton.addEventListener('click', function(e) {
        e.preventDefault(); // Detiene el salto instantáneo
        window.scrollTo({ top: 0, behavior: 'smooth' });
     });
});
