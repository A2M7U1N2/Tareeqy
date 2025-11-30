// حماية الصفحة
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// عناصر toggle
const container = document.querySelector(".container");
const themeBtn = document.querySelector(".theme-btn");
const langBtn = document.querySelector(".lang-btn");
const backBtns = document.querySelectorAll(".back-btn");

// الانتقال يمين/شمال مع الحركة
themeBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

langBtn.addEventListener("click", () => {
    container.classList.add("active");
});

// زر العودة
backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "dashboard.html"; // يمكن تغييرها للصفحة الرئيسية
    });
});

// THEME
const themeToggle = document.getElementById("themeToggle");

// عند تحميل الصفحة طبق اللون المخزن
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
} else {
    document.body.classList.remove("dark");
    themeToggle.checked = false;
}

// عند تغيير التبديل
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});

// LANGUAGE
const langBtns = document.querySelectorAll(".lang-btn-set");

// عند تحميل الصفحة حدد اللغة المختارة
const savedLang = localStorage.getItem("language") || "en";
langBtns.forEach(btn => {
    if (btn.dataset.lang === savedLang) {
        btn.classList.add("active");
    }
    
    btn.addEventListener("click", () => {
        // إزالة النشاط من جميع الأزرار
        langBtns.forEach(b => b.classList.remove("active"));
        
        // إضافة النشاط للزر المختار
        btn.classList.add("active");
        
        // حفظ اللغة
        localStorage.setItem("language", btn.dataset.lang);
        
        // إظهار رسالة تأكيد
        alert(`Language changed to ${btn.dataset.lang === "ar" ? "Arabic" : "English"}`);
    });
});
