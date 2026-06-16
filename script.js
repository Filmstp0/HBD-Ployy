const envelopeWrapper = document.getElementById('envelopeWrapper');
const openBtn = document.getElementById('openBtn');
const resetBtn = document.getElementById('resetBtn');

const page1 = document.querySelector('.page-1');
const page2 = document.querySelector('.page-2');
const nextPageBtn = document.getElementById('nextPageBtn');
const prevPageBtn = document.getElementById('prevPageBtn');

// ดึงไอดีฝั่งขยายรูปสลีป
const slipImg = document.getElementById('slipImg');
const imageModal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');
const heartSeal = document.querySelector('.heart-seal');

// ฟังก์ชันเปิดซองจดหมาย
function openEnvelope() {
    envelopeWrapper.classList.add('open');
    openBtn.style.display = 'none';
    resetBtn.style.display = 'block';
}

openBtn.addEventListener('click', openEnvelope);
if(heartSeal) {
    heartSeal.addEventListener('click', openEnvelope);
}

// ปิดซอง (และรีเซ็ตหน้ากลับไปหน้าแรก)
resetBtn.addEventListener('click', () => {
    envelopeWrapper.classList.remove('open');
    resetBtn.style.display = 'none';
    openBtn.style.display = 'block';
    
    // รีเซ็ตการ์ดกลับไปหน้า 1
    page2.classList.remove('active');
    page1.classList.add('active');
});

// กดไปหน้าสลีป (หน้า 2)
nextPageBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    page1.classList.remove('active');
    page2.classList.add('active');
});

// กดกลับมาหน้าอวยพร (หน้า 1)
prevPageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    page2.classList.remove('active');
    page1.classList.add('active');
});

// === ฟังก์ชันสำหรับคลิกที่รูปภาพแล้วขยายใหญ่ ===
slipImg.addEventListener('click', (e) => {
    e.stopPropagation();
    imageModal.style.display = 'flex';
    setTimeout(() => {
        imageModal.classList.add('show');
    }, 10);
    modalImg.src = slipImg.src;
});

// ปิดรูปภาพ (เมื่อกดกากบาท)
closeModal.addEventListener('click', () => {
    imageModal.classList.remove('show');
    setTimeout(() => {
        imageModal.style.display = 'none';
    }, 300);
});

// ปิดรูปภาพ (เมื่อคลิกพื้นหลังว่างสีดำ)
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.classList.remove('show');
        setTimeout(() => {
            imageModal.style.display = 'none';
        }, 300);
    }
});