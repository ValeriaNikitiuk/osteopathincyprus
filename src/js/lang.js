const allLengs = ["ru", "en", "es", "tur"];
let currentLang = localStorage.getItem('language') || checkBrowserLang() || "ru";
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;
let currentText = {};

const someObj = {
    attr: {
        ru: "",
        en: "",
        es: "",
        tur: "",
    },
}

const homeText = {
   "home-page": {
        ru: "Главная",
        en: "Home",
        es: "Página principal",
        tur: "Ana sayfa",
    },
    "price-page": {
        ru: "Услуги",
        en: "Services",
        es: "Servicios",
        tur: "Hizmetler",
    },
    "school-page": {
        ru: "Школа остеопатии",
        en: "Osteopathy school",
        es: "Escuela de osteopatía",
        tur: "Osteopati okulu",
    },

    "about-author": {
        ru: "Практикующий врач-остеопат. Преподаватель школы остеопатии на Кипре. С 2017-2022 проходил обучение на выездных циклах международной Академии остеопатии у доктора Алена Бернардо Горидо с получением диплома международного образца. Член ассоциации профессиональных остеопатов Испания ( R.O.P.) Автор 2-х учебных пособий по остеопатии Автор методики Didukh Garrido.",
        en: "Practicing Osteopathic Physician. Teacher at the School of Osteopathy in Cyprus. From 2017-2022, he completed training in international Osteopathic Academy with Dr. Alain Bernard Gorido, receiving an international diploma. Member of the Professional Osteopath Association of Spain (R.O.P.). Author of 2 textbooks on Osteopathy and the Didukh Garrido technique.",
        es: "Médico osteópata en ejercicio. Profesor en la Escuela de Osteopatía de Chipre. De 2017 a 2022, completó su formación en la Academia Internacional de Osteopatía con el Dr. Alain Bernard Gorido, obteniendo un diploma internacional. Miembro de la Asociación de Osteópatas Profesionales de España (R.O.P.). Autor de 2 libros de texto sobre osteopatía y la técnica Didukh Garrido.",
        tur: "Pratisyen Osteopatik Doktor. Kıbrıs Osteopati Okulu'nda öğretmen. 2017-2022 yılları arasında uluslararası Osteopatik Akademide Dr. Alain Bernard Gorido ile eğitim alarak uluslararası bir diploma aldı. İspanya Profesyonel Osteopat Derneği (R.O.P.) üyesi. Osteopati üzerine 2 ders kitabı ve Didukh Garrido tekniği'nin yazarı.",
    },
     "name": {
        ru: "Василий Дидух",
        en: "Vasiliy Didukh",
        es: "Vasiliy Didukh",
        tur: "Vasiliy Didukh",
    },
       "title-1": {
        ru: " Доверьтесь профессионалам",
        en: "Trust the professionals",
        es: "Confíe en los profesionales",
        tur: "Profesyonellere güvenin",
    },
       "open-clients": {
        ru: "всегда открыт для клиентов",
        en: "always open to clients",
        es: "siempre abiertos a los clientes",
        tur: "her zaman müşterilerimize açığız",
    },
          "children": {
        ru: "Детям имеющим физические отклонения консультация и сеансы реабилитации - бесплатно.",
        en: "To children with physical disabilities, consultation and rehabilitation sessions are provided for free.",
        es: "Para niños con discapacidades físicas, se ofrecen consultas y sesiones de rehabilitación de forma gratuita.",
        tur: "Fiziksel engeli olan çocuklar için danışmanlık ve rehabilitasyon seansları ücretsiz olarak sağlanır.",
    },
          "network": {
        ru: "ОСТЕОПАТ ВАСИЛИЙ",
        en: "Osteopath Vasiliy",
        es: "Osteópata Vasiliy",
        tur: "Osteopat Vasiliy",
    },
           "network2": {
        ru: "Школа остеопатии",
        en: "School of Osteopathy",
        es: "Escuela de Osteopatía",
        tur: "Osteopati Okulu",
    },
        "price": {
        ru: "Прайс на услуги",
        en: "Service price list.",
        es: "Lista de precios de servicios",
        tur: "Hizmet fiyat listesi",
    },
           "price-1": {
        ru: "Атласрефлекс терапия (коррекция первого шейного позвонка).",
        en: "Atlas reflex therapy (correction of the first cervical vertebra).",
        es: "Terapia de reflexología del atlas (corrección de la primera vértebra cervical).",
        tur: "Atlas refleks terapisi (ilk servikal omurganın düzeltilmesi).",
    },
            "price-2": {
        ru: "Атласспайн терапия.",
        en: "AtlasSpine Therapy.",
        es: "Terapia de la columna atlas.",
        tur: "Atlas Omurga Terapisi.",
    },
           "price-3": {
        ru: "Кранио-сакральная терапия.",
        en: "Craniosacral therapy.",
        es: "Terapia craneosacral.",
        tur: "Kranyosakral terapi.",
    },
          "price-4": {
        ru: "Мышечно структурные растяжки.",
        en: "Myofascial stretching.",
        es: "Estiramientos miofasciales.",
        tur: "Myofascial germe açma.",
    },
       "price-5": {
        ru: "Работа с соединительной тканью.",
        en: "Working with connective tissue.",
        es: "Trabajando con el tejido conectivo.",
        tur: "Bağ dokusu ile çalışma.",
    },
       "price-6": {
        ru: "Мобилизация суставов.",
        en: "Joint mobilization.",
        es: "Movilización articular.",
        tur: "Eklem mobilizasyonu.",
    },
        "price-7": {
        ru: "Лечебный массаж.",
        en: "Therapeutic massage.",
        es: "Masaje terapéutico.",
        tur: "erapötik masaj.",
    },
        "price-8": {
        ru: "Миофасциальный массаж лица.",
        en: "Myofascial face massage.",
        es: "Masaje miofascial facial.",
        tur: "Miyofasiyal yüz masajı.",
    },
         "price-9": {
        ru: "Мышечно структурный массаж лица.",
        en: "Musculoskeletal facial massage.",
        es: "Masaje facial musculoesquelético.",
        tur: "Yüz kas-iskelet sistemi masajı.",
    },
          "school": {
        ru: "ШКОЛА ОСТЕОПАТИИ",
        en: "SCHOOL OF OSTEOPATHY",
        es: "ESCUELA DE OSTEOPATÍA",
        tur: "OSTEOPATI OKULU",
    },
    "school-title": {
        ru: "Хотите научиться лечить людей с помощью своих рук и восстановить ихздоровье без использования химических препаратов или же повысить свою квалификацию в данной сфере? Тогда школа остеопатии - это то,что вам нужно! В нашей школе вы получите все необходимые знания и навыки, чтобы стать высококвалифицированным остеопатом. Наша программа обучения включает в себя как теоретические, так и практические занятия, которые позволят вам понять основы остеопатической медицины и применять их на практике.",
        en: "Do you want to learn how to treat people with your hands and restore their health without the use of chemical drugs, or improve your qualifications in this field? Then the Osteopathy School is what you need! In our school, you will receive all the necessary knowledge and skills to become a highly qualified osteopath. Our training program includes both theoretical and practical classes, which will allow you to understand the basics of osteopathic medicine and apply them in practice.",
        es: "¿Quieres aprender a tratar a las personas con tus manos y restaurar su salud sin el uso de medicamentos químicos o mejorar tus habilidades en este campo? ¡Entonces la Escuela de Osteopatía es lo que necesitas! En nuestra escuela, recibirás todos los conocimientos y habilidades necesarias para convertirte en un osteópata altamente calificado. Nuestro programa de formación incluye tanto clases teóricas como prácticas, lo que te permitirá comprender los fundamentos de la medicina osteopática y aplicarlos en la práctica.",
        tur: "Ellerinizle insanları tedavi etmeyi ve kimyasal ilaçlar kullanmadan sağlıklarını geri kazanmayı öğrenmek veya bu alandaki niteliklerinizi artırmak mı istiyorsunuz? Osteopati Okulu tam size göre! Okulumuzda, yüksek kaliteli bir osteopat olmak için gereken tüm bilgi ve becerileri edineceksiniz. Eğitim programımız teorik ve pratik dersleri içerir, böylece osteopatik tıbbın temellerini anlayabilir ve uygulayabilirsiniz.",
    },    
    "course": {
        ru: "Ознакомиться с курсами можно",
        en: "You can familiarize yourself with the courses",
        es: "Puedes familiarizarte con los cursos",
        tur: "Kurslarla ilgili bilgi edinebilirsiniz",
    }, 
    "here": {
        ru: "Здесь",
        en: "here",
        es: "aquí",
        tur: "burada",
    },
    "icons": {
        ru: "Сертификат европейского образца",
        en: "European standard certificate",
        es: "Certificado de estándar europeo",
        tur: "Avrupa standart sertifikası",
    },
    "icons2": {
        ru: "Обучение на нескольких языках",
        en: "Multilingual training",
        es: "Entrenamiento multilingüe",
        tur: "Çok dilli eğitim",
    },
     "icons3": {
        ru: "Совмещение учебы и отдыха на прекрасном острове Кипр",
        en: "Combining studying and leisure on the beautiful island of Cyprus",
        es: "Combinando el estudio y el ocio en la hermosa isla de Chipre",
        tur: "Güzel Kıbrıs adasında eğitim ve dinlenceyi birleştirme",
    },

}

const anotherText = {
   "home-page": {
        ru: "Домашняя страница на русском",
        en: "Home page in English",
        es: "Página principal en español",
        tur: "Ana sayfa Türkçe",
    },
    "price-page": {
        ru: "Цены на русском",
        en: "Prices in English",
        es: "Precios en español",
        tur: "Fiyatlar Türkçe",
    },
    "school-page": {
        ru: "Школа остеопатии на русском",
        en: "Osteopathy school in English",
        es: "Escuela de osteopatía en español",
        tur: "Osteopati okulu Türkçe",
    },
}

function checkPagePathName() {
    switch (currentPathName) {
        case '/index.html':
            currentText = homeText;
            break;
         case '/another_page.html':
            currentText = anotherText;
            break;
    
        default:
            currentText = homeText;
            break;
    }
}

checkPagePathName();

function changeLang() {
    for (const key in currentText) {
        const elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = currentText[key][currentLang];
            
        }
    }
}
changeLang();

langButtons.forEach((btn => {
    btn.addEventListener('click', (event) => {
        currentLang = event.target.dataset.btn;
        localStorage.setItem('language', event.target.dataset.btn)
        resetActiveClass(langButtons, "header-btn--active");
        btn.classList.add("header-btn--active");
        changeLang();
    })
}))

function resetActiveClass(arr, activeClass) {
    arr.forEach((elem) => {
        elem.classList.remove(activeClass);
    });
    
}

function checkActiveLanguaButton() {
    switch (currentLang) {
        case "ru":
            document
                .querySelector('[data-btn="ru"]')
                .classList.add("header-btn--active");
            break;
        
        case "en":
            document
                .querySelector('[data-btn="en"]')
                .classList.add("header-btn--active");
            break;
        
        case "es":
            document
                .querySelector('[data-btn="es"]')
                .classList.add("header-btn--active");
            break;
        
        case "tur":
            document
                .querySelector('[data-btn="tur"]')
                .classList.add("header-btn--active");
            break;
    
        default:
            document
                .querySelector('[data-btn="ru"]')
                .classList.add("header-btn--active");
            break;
    }
}

checkActiveLanguaButton();

function checkBrowserLang() {
    const navlang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLengs.some((elem) => {
        return elem === navlang;
    });
    if (result) {
        return navlang;
    }
    
}
