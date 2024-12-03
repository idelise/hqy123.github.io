// 初始化作品展示轮播
const worksSwiper = new Swiper('.works-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// 动态添加作品
function addWorks() {
    const works = [
        {
            title: '作品1',
            image: 'work1.jpg',
            description: '作品描述'
        },
        // 添加更多作品...
    ];

    const swiperWrapper = document.querySelector('.works-swiper .swiper-wrapper');
    
    works.forEach(work => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="work-card">
                <img src="${work.image}" alt="${work.title}">
                <h3>${work.title}</h3>
                <p>${work.description}</p>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    addWorks();
}); 