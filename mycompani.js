// --- 1. ჯავშნის გაგზავნა ფორმიდან ---
const form = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); 
    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            form.style.display = 'none'; 
            successMessage.style.display = 'block';
            form.reset(); 
        } else {
            alert("შეცდომაა. გთხოვთ სცადოთ თავიდან.");
        }
    } catch (error) {
        alert("კავშირის შეცდომა.");
    }
});

// --- 2. რბილი სქროლი (Smooth Scroll) ---
const links = document.querySelectorAll('.scroll-link');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
const translations = {
    'GE': {
        'nav_services': 'სერვისები',
        'nav_booking': 'დაჯავშნა',
        'hero_title': 'შევქმნათ შენი კომპანიისთვის მორგებული ვებსაიტი',
        'hero_desc': 'თანამედროვე დიზაინი, სწრაფი მუშაობა და სრული მხარდაჭერა.',
        'hero_btn': 'დაჯავშნე ახლავე',
        'services_title': 'რას გთავაზობთ',
        'service_1_title': 'საინფორმაციო საიტები',
        'service_1_desc': 'შენი ბიზნესის სრული წარდგენა ინტერნეტში თანამედროვე დიზაინით.',
        'service_2_title': 'ციფრული მენიუები',
        'service_2_desc': 'QR მენიუები კაფეებისა და რესტორნებისთვის მოსახერხებელი ინტერფეისით.',
        'service_3_title': 'მორგებული პროექტები',
        'service_3_desc': 'ნებისმიერი სირთულის ვებ-აპლიკაცია და ინდივიდუალური გადაწყვეტილებები.',
        'booking_title': 'დაგვიკავშირდი და დაჯავშნე',
        'form_select_default': 'აირჩიე სერვისი...',
        'form_opt_1': 'საინფორმაციო საიტი',
        'form_opt_2': 'ციფრული მენიუ',
        'form_opt_3': 'სხვა',
        'form_submit': 'გაგზავნა',
        'form_success': 'მოთხოვნა წარმატებით გაიგზავნა!',
        'contact_title': 'საკონტაქტო ინფორმაცია'
    },
    'EN': {
        'nav_services': 'Services',
        'nav_booking': 'Booking',
        'hero_title': 'Let\'s create a custom website for your company',
        'hero_desc': 'Modern design, fast performance, and full support.',
        'hero_btn': 'Book Now',
        'services_title': 'What We Offer',
        'service_1_title': 'Informational Sites',
        'service_1_desc': 'Full online representation of your business with modern design.',
        'service_2_title': 'Digital Menus',
        'service_2_desc': 'QR menus for cafes and restaurants with a user-friendly interface.',
        'service_3_title': 'Custom Projects',
        'service_3_desc': 'Web applications of any complexity and individual solutions.',
        'booking_title': 'Contact & Book',
        'form_select_default': 'Choose a service...',
        'form_opt_1': 'Informational Site',
        'form_opt_2': 'Digital Menu',
        'form_opt_3': 'Other',
        'form_submit': 'Submit',
        'form_success': 'Request sent successfully!',
        'contact_title': 'Contact Information'
    },
    'RU': {
        'nav_services': 'Услуги',
        'nav_booking': 'Бронирование',
        'hero_title': 'Создадим индивидуальный сайт для вашей компании',
        'hero_desc': 'Современный дизайн, быстрая работа и полная поддержка.',
        'hero_btn': 'Забронировать сейчас',
        'services_title': 'Что мы предлагаем',
        'service_1_title': 'Информационные сайты',
        'service_1_desc': 'Полное представление вашего бизнеса в интернете с современным дизайном.',
        'service_2_title': 'Цифровые меню',
        'service_2_desc': 'QR-меню для кафе и ресторанов с удобным интерфейсом.',
        'service_3_title': 'Индивидуальные проекты',
        'service_3_desc': 'Веб-приложения любой сложности и индивидуальные решения.',
        'booking_title': 'Свяжитесь и забронируйте',
        'form_select_default': 'Выберите услугу...',
        'form_opt_1': 'Информационный сайт',
        'form_opt_2': 'Цифровое меню',
        'form_opt_3': 'Другое',
        'form_submit': 'Отправить',
        'form_success': 'Запрос успешно отправлен!',
        'contact_title': 'Контактная информация'
    }
};

// მენიუს ჩამოშლის ფუნქცია
function toggleLangMenu() {
    document.getElementById("langDropdown").classList.toggle("show");
}

// ენის შეცვლის ფუნქცია
function changeLanguage(lang) {
    document.getElementById("current-lang").innerText = lang;
    document.getElementById("langDropdown").classList.remove("show");
    
    // ვპოულობთ მონიშნულ სიტყვებს და ვცვლით ლექსიკონიდან
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n'); 
        if(translations[lang][key]) {
            el.innerText = translations[lang][key]; 
        }
    });
}

// თუ მომხმარებელი სხვაგან დააკლიკებს, მენიუ რომ დაიმალოს
window.onclick = function(event) {
    if (!event.target.matches('.lang-btn') && !event.target.matches('.lang-btn *')) {
        var dropdowns = document.getElementsByClassName("lang-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
