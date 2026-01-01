const products = {
  warehouse: [
    {
      id: 1,
      name: "رفوف تخزين مستودعات حمولة 300.كجم",
      description:
        "رفف مصنوع من الفولاذ المتين عالي الجودةالمقاوم للصدأ، يحمل حتى 300 كجم لكل رف",
      price: 340,
      images: [
        "images/Warehouse-Storage-Shelves-300kg-Capacity.webp",
        "images/Warehouse-Storage-Shelves-300kg-Capacity-side.webp",
        "images/Warehouse-Storage-Shelves-300kg-Capacity-2.webp",
      ],
      rating: 4.5,
      reviews: [
        {
          name: "محمد سالم",
          rating: 5,
          date: "2025-10-15",
          comment: "منتج ممتاز وجودة عالية، شكراً الرفوف الحديثة!",
        },
        {
          name: "ابواحمد العتيبي",
          rating: 4,
          date: "2025-10-10",
          comment: "جيدة ولكن التركيب كان يحتاج بعض الجهد",
        },
        {
          name: "خالد القحطاني",
          rating: 5,
          date: "2025-10-05",
          comment: "رفوف قوية ومتينة، تناسب المستودع تماماً",
        },
      ],
      category: "warehouse",
      specs: [
        "مادة: فولاذ عالي المقاومة",
        "الحمل: 300 كجم/رف",
        "الأبعاد: 200×200×60 سم",
        "اللون: اسود وابيض",
      ],
    },
    {
      id: 2,
      name: "رفوف تخزين مستودعات متوسطة الحمولة ازرق 750.كجم",
      description:
        "رفوف متعدد الطبقات للمستودعات المتوسطة الحجم سهلة التركيب قابل للتعديل",
      price: 650,
      images: [
        "images/Heavy-Duty-Iron-Warehouse-Shelves-750kg.webp",
        "images/Heavy-Duty-Iron-Warehouse-Shelves-750kg-side.webp",
        "images/Heavy-Duty-Iron-Warehouse-Shelves-750kg-detail.webp",
      ],
      rating: 4.2,
      reviews: [
        {
          name: "أحمد سالم",
          rating: 4,
          date: "2025-09-20",
          comment: "جودة جيدة وسعر مناسب",
        },
        {
          name: "نورة القحطاني",
          rating: 5,
          date: "2025-09-15",
          comment: "سهل التركيب والجودة ممتازة",
        },
      ],
      category: "warehouse",
      specs: [
        "مادة: فولاذ مجلفن متين عالي الجودة",
        "الحمل: 750 كجم/رف",
        "الأبعاد: 200×100×60 سم",
        "اللون: أزرق وبرتقالي",
      ],
    },
    {
      id: 3,
      name: "رفوف تخزين مستودعات متوسطة التحمل اسود200.كجم",
      description:
        "مثالية للمخازن المتوسطة وقطع الغيار، متعددة الاستخدامات عالية الجودة مقاومة للصدأ",
      price: 300,
      images: [
        "images/Black-Medium-Duty-Storage-Shelves-200kg.webp",
        "images/Black-Medium-Duty-Storage-Shelves-200kg-side.webp",
        "images/Black-Medium-Duty-Storage-Shelves-200kg-detail.webp",
      ],
      rating: 4.6,
      reviews: [
        {
          name: "فارس السالمي",
          rating: 5,
          date: "2025-02-15",
          comment: "سهلة التركيب وقوية جداً.وافضل سعر مقارنة ببقية المتاجر",
        },
      ],
      category: "warehouse",
      specs: [
        "مادة:فولاذ متين عالي الجودة",
        "الأبعاد:200×200×60",
        "اللون:أسود",
      ],
    },
    {
      id: 4,
      name: "رفوف تخزين مستودعات حديد حمولة 500.كجم",
      description:
        "رفوف تخزين ممتازة مثالية للمخازن المتوسطة ومستودعات قطع الغيار، متعددة الاستخدامات عالية الجودة سهلة التركيب",
      price: 350,
      images: [
        "images/Heavy-Duty-Iron-Warehouse-Shelves-500kg.webp",
        "images/Heavy-Duty-Iron-Warehouse-Shelves-500kg-side.webp",
        "images/Heavy-Duty-Iron-Warehouse-Shelves-500kg-detail.webp",
      ],
      rating: 4.6,
      reviews: [
        {
          name: "قاسم حمد",
          rating: 5,
          date: "2025-02-15",
          comment: "سهلة التركيب وقوية جداً.",
        },
      ],
      category: "warehouse",
      specs: [
        "مادة:فولاذ متين عالي الجودة مقاوم للصدأ",
        "الأبعاد:200×200×60",
        "اللون:أزرق وبرتقالي",
      ],
    },
    {
      id: 5,
      name: "رفوف كروم شبك سلة مقاس 160×130×45سم",
      description:
        "رفوف شبك كروم اربع طبقات متينة سهلة التركيب مثاليه للمطبخ والمستودعات الصغيرة بدون الحاجة لتثبيتها في الجدار",
      price: 400,
      images: ["images/chrome-wire-shelving-unit.webp"],
      rating: 4.6,
      reviews: [
        {
          name: "فهد الحربي",
          rating: 5,
          date: "2025-02-15",
          comment: "سهلة التركيب وقوية جداً.",
        },
      ],
      category: "warehouse",
      specs: ["مادة:معدن متين عالي الجودة", "الأبعاد:160×130×50", "اللون:فضي"],
    },
    {
      id: 6,
      name: "رفوف تخزين مستودعات متوسطة التحمل أبيض حمولة300.كجم",
      description:
        "رفوف مستودعات قوية حمولة 300كجم/رف سهلة التركيب قابلة للتعديل حسب احتياجك متوفره بمقاسات متعددة مع مسامير",
      price: 300,
      images: [
        "images/White-Medium-Duty-Warehouse-Shelves-300kg.webp",
        "images/White-Medium-Duty-Warehouse-Shelves-300kg-side.webp",
        "images/White-Medium-Duty-Warehouse-Shelves-300kg-detail.webp",
      ],
      rating: 4.6,
      reviews: [
        {
          name: "محمد الحجازي",
          rating: 5,
          date: "2025-02-15",
          comment: "شكرا الرفوف الحديثة على مصداقيتكم واسعاركم المناسبة",
        },
      ],
      category: "warehouse",
      specs: [
        "مادة:فولاذ متين عالي الجودة",
        "الأبعاد:200×200×60",
        "اللون:أسود",
      ],
    },
  ],
  supermarket: [
    {
      id: 7,
      name: "رفوف سوبرماركت جندول ابيض متين",
      description: "رفوف عرض جذاب للمنتجات في السوبرماركت والبقالات",
      price: 350,
      images: [
        "images/Durable-White-Gondola-Supermarket-Shelves.webp",
        "images/Durable-White-Gondola-Supermarket-Shelves-2.webp",
        "images/Durable-White-Gondola-Supermarket-Shelves-side.webp",
      ],
      rating: 4.7,
      reviews: [
        {
          name: "عبدالله المطيري",
          rating: 5,
          date: "2025-11-01",
          comment: "ساعد في زيادة مبيعات المحل بنسبة 20%",
        },
        {
          name: "فاطمة ام حسن",
          rating: 4,
          date: "2025-10-25",
          comment:
            "تصميم عملي رائع وجذاب للعملاء ساعدني في عرض مستحضرات التجميل",
        },
      ],
      category: "supermarket",
      specs: [
        "مادة: فولاذ واكريليك",
        "الأبعاد: 150×60×200 سم",
        "اللون: ابيض ورصاصي",
        "سهولة التركيب",
      ],
    },
    {
      id: 8,
      name: "رفوف سوبر ماركت ( نهاية مسار)ابيض",
      description:
        "رفوف عرض منتجات نهاية ممر نصف دائرة، مناسبة للبقالات والتموينات والمراكز التجارية ",
      price: 498,
      images: [
        "images/White-End-Cap-Supermarket-Display-Shelves.webp",
        "images/White-End-Cap-Supermarket-Display-Shelves-side.webp",
      ],
      rating: 4.7,
      reviews: [
        {
          name: "مريم مشعل",
          rating: 5,
          date: "2025-01-20",
          comment: "تصميم عصري وتظهر المنتجات بشكل ممتاز.",
        },
      ],
      category: "supermarket",
    },
    {
      id: 9,
      name: "رفوف سوبرماركت وسطي ابيض ورصاصي",
      description:
        "رفوف سوبر وسطي وجهين بعدة الوان لعرض جذاب للمنتجات في السوبرماركت والبقالات والتموينات",
      price: 450,
      images: [
        "images/Double-Sided-Island-Supermarket-Shelves.webp",
        "images/Double-Sided-Island-Supermarket-Shelves-side.webp",
      ],
      rating: 4.7,
      reviews: [
        {
          name: "عبدالله ابورياض",
          rating: 5,
          date: "2025-11-01",
          comment:
            "ساعد في زيادة مبيعات المحل بنسبة 30% بتصميمه الجميل شكرا لكم",
        },
        {
          name: "لمياء الحربي",
          rating: 4,
          date: "2025-10-25",
          comment:
            "تصميم عملي رائع وجذاب للعملاء ساعدني في عرض مستحضرات التجميل",
        },
      ],
      category: "supermarket",
      specs: [
        "مادة: فولاذ واكريليك",
        "الأبعاد: 170×50×40 سم",
        "اللون: ابيض ورصاصي",
        "سهلة التركيب مثالية للمتاجر المعلبات والمنضفات ومتاجر الألعاب",
      ],
    },
    {
      id: 10,
      name: "رفوف سوبرماركت جداري مخرم ابيض عالي الجودة",
      description:
        "رفوف سوبرماركت 1م×250سم جداري مخرم مثالي لعرض المنتجات في السوبرماركت والبقالات",
      price: 398,
      images: [
        "images/Perforated-Wall-Supermarket-Shelves-side.webp",
        "images/Perforated-Wall-Supermarket-Shelves.webp",
        "images/Perforated-Wall-Supermarket-Shelves-detail.webp",
      ],
      rating: 4.7,
      reviews: [
        {
          name: "علي ابوقاسم",
          rating: 5,
          date: "2025-11-01",
          comment: "ساعد في زيادة مبيعات المحل بنسبة 50%",
        },
        {
          name: "مها العزي",
          rating: 4,
          date: "2025-10-25",
          comment: "تصميم عملي رائع وجذاب للعملاء .شكرا الرفوف الحديثة",
        },
      ],
      category: "supermarket",
      specs: [
        "مادة: فولاذ متين واكريليك",
        "الأبعاد: 1م×250 سم",
        "اللون: ابيض ورصاصي وبيج",
        "سهل التركيب مناسب للبقالات والسوبرماركت ومتاجر ادوات التجميل",
      ],
    },
    {
      id: 11,
      name: "استاند شبك اربع سلات متعدد المقاسات",
      description:
        "استاند شبك سلات مقاس 110×50×60 ومتوفر بمقاسات متعددة مناسب للمطبخ والسوبرماركت بعجلات",
      price: 398,
      images: [
        "images/Mesh-stand-shelves-modern-shelves.webp",
        "images/Mesh-stand-shelves-modern-shelves-side.webp",
      ],
      rating: 4.7,
      reviews: [
        {
          name: "علي احمد",
          rating: 5,
          date: "2025-01-20",
          comment: "متانة قويه مناسب للادوات الخفيفه",
        },
      ],
      category: "supermarket",
    },
    {
      id: 12,
      name: "رفوف سوبر ماركت جندول نفيسه ابيض واسود",
      description:
        "رفوف سوبر لعرض منتجات ، مناسبة للبقالات والتموينات والمراكز التجارية ",
      price: 498,
      images: [
        "images/nafisa-gondola-shelves.webp",
        "images/nafisa-gondola-shelves-side.webp",
      ],
      rating: 4.7,
      reviews: [
        {
          name: "سعيد مسعد",
          rating: 5,
          date: "2025-01-20",
          comment: "تصميم عصري وتظهر المنتجات بشكل ممتاز.وسعر مناسب",
        },
      ],
      category: "supermarket",
    },
  ],
  home: [
    {
      id: 13,
      name: "رفف كروم مسطح أنيق",
      description: "رفف كروم متين عالي الجودة للمنازل والمستودعات",
      price: 320,
      images: [
        "images/elegant-flat-chrome-shelves.webp",
        "images/elegant-flat-chrome-shelves-side.webp",
        "images/elegant-flat-chrome-shelves-detail.webp",
      ],
      rating: 4.8,
      reviews: [
        {
          name: "فاطمة العتيبي",
          rating: 5,
          date: "2025-10-30",
          comment: "يضيف لمسة أنيقة للمطبخ ويساعد في تنظيمه",
        },
        {
          name: "علي الجهني",
          rating: 5,
          date: "2025-10-28",
          comment: "جودة عالية و ممتازة والتصميم رائع",
        },
      ],
      category: "home",
      specs: [
        "مادة: معدن متين",
        "الأبعاد: 200×45×90 سم",
        "اللون: فضي طبيعي",
        "سهولة التركيب",
      ],
    },
  ],
  accessories: [
    {
      id: 14,
      name: "رف عرض خضروات وفواكة مقاس 120×120×60سم",
      description:
        "رف عرض معدني مع 6سلات بلاستيكيةمناسب لعرض الخضروات والفواكة",
      price: 399,
      images: [
        "images/Fruit-display-shelves.webp",
        "images/Fruit-display-shelves-side.webp",
      ],
      rating: 4.4,
      reviews: [
        {
          name: "ريماس القحطاني",
          rating: 4,
          date: "2025-10-22",
          comment: "عملي لتنظيم المطبخ",
        },
        {
          name: "بدر الريس",
          rating: 5,
          date: "2025-10-18",
          comment: "ساعد في تنظيم الخضروات والفواكة في السوبر ماركت ",
        },
      ],
      category: "accessories",
      specs: [
        "مادة: معدن مجلفن عالي الجودة",
        "الأبعاد: 60×120×120 سم",
        "اللون: اخضر",
        "يشمل 6 سلات بلاستيكية",
      ],
    },
    {
      id: 15,
      name: "طاولة كاشير كاونتر اسود وابيض",
      description: "طاولة كاشير مقاس 120*60*85*190",
      price: 1540,
      images: [
        "images/Checkout-Counter-Table-Black-and-White.webp",
        "images/Checkout-Counter-Table-Black-and-White-side.webp",
      ],
      rating: 4.4,
      reviews: [
        {
          name: "محمد احمد",
          rating: 4,
          date: "2025-10-22",
          comment: "تصميم جميل ورائع والسعر مناسب",
        },
        {
          name: "علي الريساني",
          rating: 5,
          date: "2025-10-18",
          comment: "ساعد في تنظيم عمليات البيع للسوبر ماركت ",
        },
      ],
      category: "accessories",
      specs: [
        "مادة: استيل عالي الجودة",
        "الابعاد:190×60×85×120",
        "اللون: اخضر",
      ],
    },
    {
      id: 16,
      name: "عربةتسوق (سلة)",
      description: "عربات تسوق باحجام مختلفة 150لتر,180لتر بجودة عالية ",
      price: 320,
      images: [
        "images/Metal-Supermarket-Shopping-Trolley.webp",
        "images/Metal-Supermarket-Shopping-Trolley-side.webp",
        "images/Metal-Supermarket-Shopping-Trolley-detail.webp",
      ],
      rating: 4.4,
      reviews: [
        {
          name: "خالد السبعي",
          rating: 4,
          date: "2025-10-22",
          comment: "تصميم جميل ورائع والسعر مناسب اتمنى منكم المزيد من العروض ",
        },
        {
          name: "علي ولد مبارك",
          rating: 5,
          date: "2025-10-18",
          comment: "ساعد في تنظيم عمليات البيع للسوبر ماركت ",
        },
      ],
      category: "accessories",
      specs: ["مادة: استيل عالي الجودة"],
    },
    {
      id: 17,
      name: "طبليات بلاستيكية للمخازن والمستودعات",
      description:
        "طبلية بلاستيك عالية الجودة باحجام والوان متعددة مناسبة للمستودعات والمخازن ",
      price: 120,
      images: [
        "images/industrial-plastic-pallets.webp",
        "images/industrial-plastic-pallets-side.webp",
      ],
      rating: 4.4,
      reviews: [
        {
          name: "مازن الحميدي",
          rating: 4,
          date: "2025-10-22",
          comment: "تصميم جميل ورائع و المنتج ما يحتاج اي كلام والسعر مناسب",
        },
        {
          name: "علي القاسم",
          rating: 5,
          date: "2025-10-18",
          comment: "ساعد في تنظيم المخزن مناسب جدا للمستودعات ",
        },
      ],
      category: "accessories",
      specs: [
        "مادة: بلاستيك عالي الجودة",
        "الابعاد:100×120",
        "اللون: اخضروأزرق",
      ],
    },
  ],
};
// سلة التسوق
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initCart();

  // تحميل المنتجات المميزة في الصفحة الرئيسية
  if (document.querySelector(".products-grid")) {
    loadFeaturedProducts();
  }

  // تحميل المنتجات في صفحة المنتجات
  if (document.getElementById("products-container")) {
    loadAllProducts();
  }

  // تحميل تفاصيل المنتج
  if (document.querySelector(".product-detail")) {
    loadProductDetail();
  }

  // تهيئة نموذج الاستشارة
  if (document.getElementById("consultationForm")) {
    initConsultationForm();
  }

  // تهيئة سلة التسوق
  if (document.querySelector(".cart-page")) {
    loadCartItems();
  }

  // التحميل البطيء للصور
  initLazyLoading();

  // تحسين SEO ديناميكي
  updateMetaTags();
});

// وظائف التنقل - الإصدار المحسن
function initNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  if (!menuToggle || !navLinks) return;

  // زر القائمة الجانبية
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // منع إغلاق القائمة فوراً

    // تبديل حالة القائمة
    navLinks.classList.toggle("active");
    this.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // إغلاق القائمة عند النقر على رابط
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navbar") && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  // إغلاق القائمة عند تغيير حجم النافذة
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  // إدارة القوائم المنسدلة على الجوال
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();

        // إغلاق جميع القوائم المنسدلة الأخرى
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("active");
          }
        });

        // تبديل القائمة الحالية
        dropdown.classList.toggle("active");
      }
    });
  });

  // تحديث عدد المنتجات في السلة
  updateCartCount();
}

// أضف هذا في script.js
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href !== "#") {
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    }
  });
}); // تحديث عدد المنتجات في السلة
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

// تحميل المنتجات المميزة (الصفحة الرئيسية)
function loadFeaturedProducts() {
  const productsGrid = document.querySelector(".products-grid");
  if (!productsGrid) return;

  // اختر 4 منتجات عشوائية من جميع الفئات
  const allProducts = [];
  Object.keys(products).forEach((category) => {
    allProducts.push(...products[category]);
  });

  const shuffled = allProducts.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4);

  productsGrid.innerHTML = selected
    .map((product) => {
      // التحقق من وجود مصفوفة صور أو صورة واحدة لضمان ظهور الصورة في الرئيسية
      const displayImage =
        product.images && product.images.length > 0
          ? product.images[0]
          : product.image;

      return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${displayImage}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description.substring(
                  0,
                  80
                )}${product.description.length > 80 ? "..." : ""}</p>
                <div class="product-price">${product.price} ريال</div>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>(${product.rating})</span>
                </div>
                <div class="product-actions">
                    <a href="product-detail.html?id=${
                      product.id
                    }" class="btn btn-outline">عرض التفاصيل</a>
                    <button class="btn btn-primary add-to-cart" data-id="${
                      product.id
                    }">أضف إلى السلة</button>
                </div>
            </div>
        </div>
    `;
    })
    .join("");

  // إعادة ربط أحداث أزرار "أضف إلى السلة"
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      addToCart(productId);
      if (typeof showNotification === "function") {
        showNotification("تمت إضافة المنتج إلى السلة!");
      }
    });
  });
}
function loadAllProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  let html = "";

  Object.keys(products).forEach((category) => {
    const categoryName = getCategoryName(category);
    html += `
            <section id="${category}" class="category-section">
                <h2>${categoryName}</h2>
                <div class="products-grid">
                    ${products[category]
                      .map((product) => {
                        // --- التعديل الجوهري هنا ---
                        // نختار أول صورة من المصفوفة الجديدة، أو نستخدم الصورة القديمة كبديل
                        const displayImage =
                          product.images && product.images.length > 0
                            ? product.images[0]
                            : product.image;

                        return `
                        <div class="product-card" data-id="${product.id}">
                            <div class="product-image">
                                <img src="${displayImage}" alt="${
                          product.name
                        }" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>${product.name}</h3>
                                <p>${product.description}</p>
                                <div class="product-price">${
                                  product.price
                                } ريال</div>
                                <div class="product-rating">
                                    ${generateStarRating(product.rating)}
                                    <span>(${product.rating})</span>
                                </div>
                                <div class="product-actions">
                                    <a href="product-detail.html?id=${
                                      product.id
                                    }" class="btn btn-outline">عرض التفاصيل</a>
                                    <button class="btn btn-primary add-to-cart" data-id="${
                                      product.id
                                    }">أضف إلى السلة</button>
                                </div>
                            </div>
                        </div>
                    `;
                      })
                      .join("")}
                </div>
            </section>
        `;
  });

  container.innerHTML = html;

  // إضافة أحداث لأزرار إضافة إلى السلة
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

function loadProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  if (!productId) return;

  // 1. البحث عن المنتج في البيانات
  let product = null;
  Object.keys(products).forEach((category) => {
    const found = products[category].find((p) => p.id === productId);
    if (found) {
      product = found;
      product.category = category;
      // دالة للحصول على اسم القسم بالعربي
      product.categoryName =
        typeof getCategoryName === "function"
          ? getCategoryName(category)
          : category;
    }
  });

  if (!product) {
    window.location.href = "products.html";
    return;
  }

  // 2. ربط عناصر الصفحة (IDs مطابقة لملف product-detail.html الخاص بك)
  const mainImg = document.getElementById("mainProductImage");
  const thumbContainer = document.querySelector(".thumbnails");
  const titleEl = document.getElementById("productTitle");
  const descEl = document.getElementById("productDescription");
  const priceEl = document.getElementById("productPrice");
  const specsEl = document.getElementById("productSpecs");
  const breadcrumbEl = document.getElementById("breadcrumb");
  const productCodeEl = document.getElementById("productCode");

  // دالة داخلية لإصلاح المسار
  const fixPath = (path) => {
    if (!path || typeof path !== "string" || path === "undefined")
      return "images/logo.png";
    // إذا كان اسم ملف فقط بدون مجلد، نضيف images/
    if (!path.startsWith("images/") && !path.startsWith("http")) {
      return "images/" + path;
    }
    return path;
  };

  // استخراج الصور: الأولوية للمصفوفة images ثم المفتاح الفردي image
  let allImages = [];
  if (product.images && Array.isArray(product.images)) {
    allImages = product.images.map((img) => fixPath(img));
  } else if (product.image) {
    allImages = [fixPath(product.image)];
  }

  // عرض الصورة الرئيسية
  if (mainImg) {
    mainImg.src = allImages.length > 0 ? allImages[0] : "images/logo.png";
    mainImg.alt = product.name;
  }

  // عرض الصور المصغرة
  if (thumbContainer) {
    if (allImages.length > 1) {
      // نظهر المصغرات فقط إذا وجد أكثر من صورة
      thumbContainer.innerHTML = allImages
        .map(
          (img, index) => `
                <div class="thumbnail ${
                  index === 0 ? "active" : ""
                }" onclick="changeMainImage('${img}', this)">
                    <img src="${img}" alt="${
            product.name
          }" onerror="this.src='images/logo.png'">
                </div>
            `
        )
        .join("");
    } else {
      thumbContainer.innerHTML = ""; // إخفاء القسم إذا كانت صورة واحدة
    }
  }

  // 4. تحديث النصوص (مع حماية ضد القيم الفارغة)
  if (titleEl) titleEl.textContent = product.name || "اسم المنتج غير متوفر";
  if (descEl)
    descEl.textContent =
      product.description || "لا يوجد وصف متوفر لهذا المنتج.";
  if (priceEl)
    priceEl.textContent = product.price
      ? `${product.price} ريال`
      : "اتصل للسعر";
  if (productCodeEl) productCodeEl.textContent = `RFOF-${product.id}`;

  // تحديث المواصفات
  if (specsEl && product.specs) {
    specsEl.innerHTML = product.specs.map((s) => `<li>${s}</li>`).join("");
  }

  // تحديث مسار التنقل
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `
            <a href="index.html">الرئيسية</a> / 
            <a href="products.html">المنتجات</a> / 
            <span>${product.name}</span>
        `;
  }

  // 5. زر الإضافة للسلة
  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.onclick = function () {
      if (typeof addToCart === "function") {
        addToCart(product.id);
        if (typeof showNotification === "function")
          showNotification("تمت إضافة المنتج بنجاح");
      }
    };
  }

  // 6. بيانات SEO
}

function changeMainImage(imgSrc, thumbElement) {
  const mainImg = document.getElementById("mainProductImage");
  if (mainImg) {
    mainImg.src = imgSrc;
  }

  document
    .querySelectorAll(".thumbnail")
    .forEach((t) => t.classList.remove("active"));
  if (thumbElement) {
    thumbElement.classList.add("active");
  }
} // دالة محسنة: تحميل التقييمات فقط
function loadProductReviews(product) {
  const reviewsList = document.getElementById("reviewsList");
  const overallRating = document.getElementById("overallRating");
  const overallStars = document.getElementById("overallStars");
  const ratingCount = document.getElementById("ratingCount");

  if (!reviewsList) return;

  // إذا كان المنتج يحتوي على تقييمات
  if (product.reviews && product.reviews.length > 0) {
    // تحديث التقييم العام
    if (overallRating) {
      overallRating.textContent = product.rating.toFixed(1);
    }

    if (overallStars) {
      overallStars.innerHTML = generateStarRating(product.rating);
    }

    if (ratingCount) {
      ratingCount.textContent = `بناءً على ${product.reviews.length} تقييم`;
    }

    // تحديث أشرطة التقييم
    updateRatingBars(product);

    // عرض التقييمات
    reviewsList.innerHTML = product.reviews
      .map(
        (review) => `
            <div class="review">
                <div class="review-header">
                    <div class="review-author">${review.name}</div>
                    <div class="review-rating">
                        ${generateStarRating(review.rating)}
                    </div>
                </div>
                <div class="review-date">${formatReviewDate(review.date)}</div>
                <div class="review-content">
                    <p>${review.comment}</p>
                </div>
            </div>
        `
      )
      .join("");

    // تحديث التبويب
    const reviewsTab = document.querySelector('.tab-btn[data-tab="reviews"]');
    if (reviewsTab) {
      reviewsTab.textContent = `التقييمات (${product.reviews.length})`;
    }
  } else {
    // حالة عدم وجود تقييمات
    reviewsList.innerHTML = `
            <div class="no-reviews">
                <i class="far fa-comment-alt fa-3x"></i>
                <p>لا توجد تقييمات لهذا المنتج بعد.</p>
            </div>
        `;

    if (ratingCount) {
      ratingCount.textContent = "لا توجد تقييمات بعد";
    }
  }
}

// دالة مساعدة: تحديث أشرطة التقييم
function updateRatingBars(product) {
  if (!product.reviews || product.reviews.length === 0) return;

  // حساب التوزيع
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  product.reviews.forEach((review) => {
    const roundedRating = Math.round(review.rating);
    if (distribution[roundedRating] !== undefined) {
      distribution[roundedRating]++;
    }
  });

  // تحديث الأشرطة
  const totalReviews = product.reviews.length;

  for (let rating = 5; rating >= 1; rating--) {
    const count = distribution[rating] || 0;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

    const barElement = document.querySelector(
      `.rating-bar:nth-child(${6 - rating}) .fill`
    );
    const percentageElement = document.querySelector(
      `.rating-bar:nth-child(${6 - rating}) .percentage`
    );

    if (barElement) {
      barElement.style.width = `${percentage}%`;
    }

    if (percentageElement) {
      percentageElement.textContent = `${Math.round(percentage)}%`;
    }
  }
}

// دالة مساعدة: تنسيق تاريخ التقييم
function formatReviewDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    return dateString;
  }
}

function addToCart(productId) {
  // البحث عن المنتج في البيانات
  let product = null;
  Object.keys(products).forEach((category) => {
    const found = products[category].find((p) => p.id === productId);
    if (found) product = found;
  });

  if (!product) return;

  // التحقق إذا كان المنتج موجود بالفعل في السلة
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    let productImg = "";
    if (
      product.images &&
      Array.isArray(product.images) &&
      product.images.length > 0
    ) {
      productImg = product.images[0];
    } else {
      productImg = product.image || "images/logo.png";
    }

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImg, // تخزين الرابط الصحيح في السلة
      quantity: 1,
    });
  }

  // حفظ السلة في localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // تحديث العداد في الهيدر
  updateCartCount();

  // إشعار المستخدم
  if (typeof showNotification === "function") {
    showNotification("تمت إضافة المنتج إلى السلة بنجاح!");
  }
}

// تحميل وعرض عناصر السلة في صفحة cart.html
function loadCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartSummary = document.querySelector(".cart-summary");

  if (!cartItemsContainer || !cartSummary) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart fa-3x"></i>
                <h3>سلة التسوق فارغة</h3>
                <p>لم تقم بإضافة أي منتجات إلى السلة بعد</p>
                <a href="products.html" class="btn btn-primary">تصفح المنتجات</a>
            </div>
        `;
    cartSummary.style.display = "none";
    return;
  }

  cartSummary.style.display = "block";

  // عرض عناصر السلة مع تصحيح المسارات تلقائياً
  cartItemsContainer.innerHTML = cart
    .map((item) => {
      let displayImg = item.image || "images/logo.png";
      if (
        displayImg !== "images/logo.png" &&
        !displayImg.startsWith("images/") &&
        !displayImg.startsWith("http")
      ) {
        displayImg = "images/" + displayImg;
      }

      return `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${displayImg}" alt="${item.name}" onerror="this.src='images/logo.png'">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <div class="cart-item-price">${item.price} ريال</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
                <div class="remove-item" data-id="${item.id}" title="حذف من السلة">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        </div>
    `;
    })
    .join("");

  // تحديث ملخص الأسعار
  updateCartSummary();

  // إعادة ربط أحداث الأزرار (الحذف والزيادة والنقصان)
  attachCartEvents();
}

// دالة مساعدة لربط الأحداث بعد تحميل العناصر
function attachCartEvents() {
  document.querySelectorAll(".decrease").forEach((btn) => {
    btn.onclick = function () {
      updateQuantity(parseInt(this.dataset.id), -1);
    };
  });

  document.querySelectorAll(".increase").forEach((btn) => {
    btn.onclick = function () {
      updateQuantity(parseInt(this.dataset.id), 1);
    };
  });

  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.onclick = function () {
      removeFromCart(parseInt(this.dataset.id));
    };
  });

  const checkoutBtn = document.getElementById("whatsapp-checkout");
  if (checkoutBtn) {
    checkoutBtn.onclick = checkoutViaWhatsApp;
  }
}
// تحديث كمية المنتج
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity < 1) {
    removeFromCart(productId);
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
  }
}

// إزالة منتج من السلة
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems();
  updateCartCount();
  showNotification("تمت إزالة المنتج من السلة");
}

// تحديث ملخص السلة
function updateCartSummary() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  document.querySelector(".subtotal-amount").textContent = `${subtotal} ريال`;
  document.querySelector(".shipping-amount").textContent =
    shipping === 0 ? "مجاناً" : `${shipping} ريال`;
  document.querySelector(".total-amount").textContent = `${total} ريال`;
}

// الدفع عبر واتساب
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showNotification("السلة فارغة. أضف منتجات أولاً.", "error");
    return;
  }

  const phoneNumber = "966534879245";

  let message = `مرحباً، أود طلب المنتجات التالية من متجر الرفوف الحديثة:%0A%0A`;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - الكمية: ${
      item.quantity
    } - السعر: ${item.price * item.quantity} ريال%0A`;
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 10000 ? 0 : 50;
  const total = subtotal + shipping;

  message += `%0Aالإجمالي: ${total} ريال%0A(يشمل الشحن: ${
    shipping === 0 ? "مجاناً" : shipping + " ريال"
  })%0A%0A`;
  message += `الرجاء التواصل معي لتأكيد الطلب.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // فتح واتساب في نافذة جديدة
  window.open(whatsappUrl, "_blank");

  // تفريغ السلة بعد إرسال الطلب
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification("تم إرسال طلبك عبر واتساب. سنتواصل معك قريباً!");

  // إعادة توجيه بعد ثانية
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

// تهيئة نموذج التواصل (أرسل لنا رسالة)
function initContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // ربط الحقول بالمعرفات الصحيحة من الـ HTML
    const formData = {
      name: document.getElementById("contactName").value,
      phone: document.getElementById("contactPhone").value,
      subject: document.getElementById("contactSubject").value,
      message: document.getElementById("contactMessage").value,
    };

    // إرسال عبر واتساب
    const phoneNumber = "966534879245";

    const whatsappMessage =
      `*طلب جديد (موقع الرفوف الحديثة)*%0A%0A` +
      `👤 *الاسم:* ${formData.name}%0A` +
      `📞 *الهاتف:* ${formData.phone}%0A` +
      `📝 *الموضوع:* ${formData.subject}%0A` +
      `💬 *الرسالة:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // فتح واتساب
    window.open(whatsappUrl, "_blank");

    if (typeof showNotification === "function") {
      showNotification("تم تجهيز رسالتك! يرجى إرسالها عبر الواتساب.");
    } else {
      alert("تم تجهيز رسالتك! يرجى إرسالها عبر الواتساب.");
    }

    // إعادة تعيين النموذج
    form.reset();
  });
}

// التحميل البطيء للصور
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }
}

// تحديث علامات الميتا ديناميكياً
function updateMetaTags() {
  const pageTitle = document.title;
  const metaDescription = document.querySelector('meta[name="description"]');

  if (
    pageTitle.includes("الرفوف الحديثة لرفوف المستودعات والسوبر ماركت") &&
    metaDescription
  ) {
    // إضافة Open Graph tags ديناميكياً
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = pageTitle;
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.content = metaDescription.getAttribute("content");
    document.head.appendChild(ogDescription);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.content = window.location.href;
    document.head.appendChild(ogUrl);
  }
}

// وظائف مساعدة
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }

  return stars;
}

function getCategoryName(categoryKey) {
  const categories = {
    warehouse: "رفوف المستودعات",
    supermarket: "رفوف السوبرماركت",
    home: "رفوف منزلية",
    accessories: "سلات تسوق وطبليات",
  };

  return categories[categoryKey] || categoryKey;
}

function showNotification(message, type = "success") {
  // إزالة الإشعارات القديمة
  const oldNotification = document.querySelector(".notification");
  if (oldNotification) {
    oldNotification.remove();
  }

  // إنشاء إشعار جديد
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${
              type === "success" ? "check-circle" : "exclamation-circle"
            }"></i>
            <span>${message}</span>
        </div>
    `;

  document.body.appendChild(notification);

  // إظهار الإشعار
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // إخفاء الإشعار بعد 3 ثوان
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 3000);
}

// إضافة أنماط الإشعار
const notificationStyles = document.createElement("style");
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        left: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        transform: translateY(-100px);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification.error {
        background-color: #e74c3c;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification i {
        font-size: 20px;
    }
    
    @media (min-width: 768px) {
        .notification {
            left: auto;
            max-width: 400px;
        }
    }
`;

document.head.appendChild(notificationStyles);

// تهيئة السلة
function initCart() {
  updateCartCount();
}

// إضافة حدث لزر تفريغ السلة (للتطوير)
if (document.getElementById("clear-cart")) {
  document.getElementById("clear-cart").addEventListener("click", function () {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    if (document.querySelector(".cart-page")) {
      loadCartItems();
    }
    showNotification("تم تفريغ السلة");
  });
} // ============================================
// دوال خاصة بصفحة تفاصيل المنتج
// ============================================

// تحميل تفاصيل المنتج
function loadProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  if (!productId) {
    window.location.href = "products.html";
    return;
  }

  // البحث عن المنتج في بيانات المنتجات
  let product = null;
  let categoryKey = "";

  Object.keys(products).forEach((category) => {
    const found = products[category].find((p) => p.id === productId);
    if (found) {
      product = found;
      categoryKey = category;
    }
  });

  if (!product) {
    window.location.href = "products.html";
    return;
  }

  // تحديث الصفحة ببيانات المنتج
  updateProductPage(product, categoryKey);
  loadRelatedProducts(productId, categoryKey);
  setupProductDetailEvents(productId, product);
}

function displayProductReviews(product) {
  const reviewsList = document.getElementById("reviewsList");
  const overallRating = document.getElementById("overallRating");
  const overallStars = document.getElementById("overallStars");
  const ratingCount = document.getElementById("ratingCount");

  if (!reviewsList) return;

  const reviews = product.reviews || [];

  // 1. تحديث الملخص العلوي
  if (overallRating) overallRating.textContent = product.rating || "0.0";
  if (overallStars) overallStars.innerHTML = generateStarRating(product.rating);
  if (ratingCount)
    ratingCount.textContent = `بناءً على ${reviews.length} تقييم`;

  // 2. حساب وتحديث أعمدة النسب المئوية (Rating Bars)
  updateRatingBars(reviews);

  // 3. عرض قائمة المراجعات
  if (reviews.length === 0) {
    reviewsList.innerHTML = `
            <div class="no-reviews">
                <i class="far fa-comment-alt fa-3x"></i>
                <p>لا توجد تقييمات لهذا المنتج بعد.</p>
            </div>`;
    return;
  }

  reviewsList.innerHTML = reviews
    .map(
      (rev) => `
        <div class="review-item" style="border-bottom: 1px solid #eee; padding: 20px 0;">
            <div class="review-header" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <div class="user-info" style="display: flex; align-items: center; gap: 10px;">
                    <div class="user-avatar" style="width: 40px; height: 40px; background: #f0f0f0; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-user" style="color: #ccc;"></i>
                    </div>
                    <div>
                        <h4 style="margin: 0;">${rev.name}</h4>
                        <div style="color: #ffc107; font-size: 0.8rem;">${generateStarRating(
                          rev.rating
                        )}</div>
                    </div>
                </div>
                <div style="font-size: 0.8rem; color: #888;">${rev.date}</div>
            </div>
            <p style="color: #555; line-height: 1.6;">${rev.comment}</p>
        </div>
    `
    )
    .join("");
}

// دالة مساعدة لحساب النسب المئوية وتحريك الأعمدة
function updateRatingBars(reviews) {
  const total = reviews.length;
  if (total === 0) return;

  // حساب تكرار كل تقييم (من 1 إلى 5)
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    if (counts[r.rating] !== undefined) counts[r.rating]++;
  });

  const ratingBars = document.querySelectorAll(".rating-bar");

  [5, 4, 3, 2, 1].forEach((star, index) => {
    const percentage = Math.round((counts[star] / total) * 100);
    const bar = ratingBars[index];

    if (bar) {
      const fill = bar.querySelector(".fill");
      const percentText = bar.querySelector(".percentage");

      if (fill) fill.style.width = percentage + "%";
      if (percentText) percentText.textContent = percentage + "%";
    }
  });
} // تحديث صفحة المنتج بالبيانات
function updateProductPage(product, categoryKey) {
  // تحديث العناوين والميتا
  document.title = `${product.name} - الرفوف الحديثة`;

  // تحديث مسار التنقل
  const categoryName = getCategoryName(categoryKey);
  const breadcrumb = document.getElementById("breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
            <a href="index.html">الرئيسية</a>
            <span class="separator">/</span>
            <a href="products.html">المنتجات</a>
            <span class="separator">/</span>
            <a href="products.html#${categoryKey}">${categoryName}</a>
            <span class="separator">/</span>
            <span class="current">${product.name}</span>
        `;
  }

  // تحديث مسار التصنيف
  const categoryBreadcrumb = document.getElementById("categoryBreadcrumb");
  if (categoryBreadcrumb) {
    categoryBreadcrumb.innerHTML = `
            <a href="products.html#${categoryKey}">${categoryName}</a>
        `;
  }

  // تحديث العنوان
  const productTitle = document.getElementById("productTitle");
  if (productTitle) productTitle.textContent = product.name;

  // تحديث التقييم
  const productRating = document.getElementById("productRating");
  if (productRating) {
    productRating.innerHTML =
      generateStarRating(product.rating) + `<span>${product.rating}</span>`;
  }

  // تحديث كود المنتج
  const productCode = document.getElementById("productCode");
  if (productCode) {
    productCode.textContent = `MS-${product.id.toString().padStart(3, "0")}`;
  }

  // تحديث السعر
  const productPrice = document.getElementById("productPrice");
  if (productPrice) {
    productPrice.textContent = `${product.price} ريال`;
  }

  // تحديث الوصف
  const productDescription = document.getElementById("productDescription");
  if (productDescription) {
    productDescription.textContent = product.description;
  }

  // تحديث المواصفات
  const productSpecs = document.getElementById("productSpecs");
  if (productSpecs && product.specs) {
    productSpecs.innerHTML = product.specs
      .map((spec) => `<li>${spec}</li>`)
      .join("");
  }

  // تحديث الصور
  const mainImage = document.getElementById("mainProductImage");
  const thumbnailsContainer = document.querySelector(".thumbnails");

  if (mainImage) {
    // التعديل هنا: نأخذ أول صورة من المصفوفة، وإذا لم توجد نأخذ الخاصية المنفردة
    mainImage.src =
      product.images && product.images.length > 0
        ? product.images[0]
        : product.image;
    mainImage.alt = product.name;
  } // تحديث الصور داخل دالة loadProductDetail
  if (thumbnailsContainer && product.images) {
    // إنشاء صور مصغرة ديناميكياً بناءً على مصفوفة الصور في المنتج
    thumbnailsContainer.innerHTML = product.images
      .map(
        (imgSrc, index) => `
        <div class="thumbnail ${
          index === 0 ? "active" : ""
        }" data-image="${imgSrc}">
            <img src="${imgSrc}" alt="${product.name} - صورة ${
          index + 1
        }" loading="lazy">
        </div>
    `
      )
      .join("");

    // استدعاء دالة الأحداث
    setupThumbnailEvents();
  }
  generateProductSchema(product);
  // تأكد من تمرير (product) كاملاً
  displayProductReviews(product);
}

// إعداد أحداث الصور المصغرة
function setupThumbnailEvents() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("mainProductImage");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      // إزالة النشاط من جميع الصور المصغرة
      thumbnails.forEach((t) => t.classList.remove("active"));

      // إضافة النشاط للصورة المختارة
      this.classList.add("active");

      // تغيير الصورة الرئيسية
      const newImage = this.getAttribute("data-image");
      if (mainImage) {
        mainImage.src = newImage;
        mainImage.alt = this.querySelector("img").alt;
      }
    });
  });
}

// تحميل منتجات ذات صلة
function loadRelatedProducts(currentProductId, categoryKey) {
  const relatedProductsContainer = document.getElementById("relatedProducts");
  if (!relatedProductsContainer) return;

  // الحصول على منتجات من نفس الفئة باستثناء المنتج الحالي
  const categoryProducts = products[categoryKey] || [];
  const relatedProducts = categoryProducts
    .filter((p) => p.id !== currentProductId)
    .slice(0, 3); // أخذ أول 3 منتجات

  if (relatedProducts.length === 0) {
    // إذا لم يكن هناك منتجات في نفس الفئة، خذ منتجات من فئات أخرى
    const allProducts = [];
    Object.keys(products).forEach((cat) => {
      if (cat !== categoryKey) {
        allProducts.push(...products[cat]);
      }
    });

    // خذ 3 منتجات عشوائية
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    relatedProducts.push(...shuffled.slice(0, 3));
  }

  // عرض المنتجات ذات الصلة
  // عرض المنتجات ذات الصلة
  relatedProductsContainer.innerHTML = relatedProducts
    .map((product) => {
      // --- إضافة هذا السطر لتحديد الصورة الصحيحة ---
      const displayImg =
        product.images && product.images.length > 0
          ? product.images[0]
          : product.image;

      return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${displayImg}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price} ريال</div>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>(${product.rating})</span>
                </div>
                <div class="product-actions">
                    <a href="product-detail.html?id=${
                      product.id
                    }" class="btn btn-outline">عرض التفاصيل</a>
                </div>
            </div>
        </div>
    `;
    })
    .join("");
}

// إعداد أحداث صفحة تفاصيل المنتج
function setupProductDetailEvents(productId, product) {
  // إدارة الكمية
  const decreaseBtn = document.getElementById("decreaseQty");
  const increaseBtn = document.getElementById("increaseQty");
  const quantityInput = document.getElementById("productQuantity");

  if (decreaseBtn && increaseBtn && quantityInput) {
    decreaseBtn.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    increaseBtn.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue < 99) {
        quantityInput.value = currentValue + 1;
      }
    });
  }

  // إضافة إلى السلة
  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const quantity = parseInt(quantityInput.value);

      // إضافة المنتج إلى السلة بالكمية المطلوبة
      for (let i = 0; i < quantity; i++) {
        addToCart(productId);
      }

      showNotification(`تمت إضافة ${quantity} من المنتج إلى السلة بنجاح!`);
    });
  }

  // الطلب عبر واتساب
  const whatsappBtn = document.getElementById("whatsappOrderBtn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {
      const quantity = parseInt(quantityInput.value);
      const totalPrice = product.price * quantity;

      const phoneNumber = "966534879245";
      const message = `أود طلب المنتج التالي من الرفوف الحديثة:%0A%0Aالمنتج: ${product.name}%0Aالكمية: ${quantity}%0Aالسعر للقطعة: ${product.price} ريال%0Aالإجمالي: ${totalPrice} ريال%0A%0Aالرجاء التواصل معي لتأكيد الطلب.`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  // التبويبات
  setupProductTabs();

  // نموذج التقييم
}

// إعداد التبويبات
function setupProductTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // إزالة النشاط من جميع الأزرار
      tabBtns.forEach((b) => b.classList.remove("active"));

      // إضافة النشاط للزر المختار
      this.classList.add("active");

      // إخفاء جميع المحتويات
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // إظهار المحتوى المختار
      const targetPane = document.getElementById(tabId);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initCart();

  // تحميل المنتجات المميزة في الصفحة الرئيسية
  if (
    document.querySelector(".products-grid") &&
    !document.querySelector(".product-detail")
  ) {
    loadFeaturedProducts();
  }

  // تحميل المنتجات في صفحة المنتجات
  if (document.getElementById("products-container")) {
    loadAllProducts();
  }

  // تحميل تفاصيل المنتج
  if (document.querySelector(".product-detail")) {
    loadProductDetail();
  }

  // تهيئة نموذج الاستشارة
  if (document.getElementById("consultationForm")) {
    initContactForm();
  }

  // تهيئة سلة التسوق
  if (document.querySelector(".cart-page")) {
    loadCartItems();
  }

  // التحميل البطيء للصور
  initLazyLoading();

  // تحسين SEO ديناميكي
  updateMetaTags();
}); // تحديث علامات الميتا ديناميكياً (خاص بصفحة تفاصيل المنتج فقط)
function updateMetaTags() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  if (!productId) return; // إذا لم يكن هناك منتج، لا نغير شيئاً

  // البحث عن المنتج في كائن products
  let product = null;
  Object.keys(products).forEach((category) => {
    const found = products[category].find((p) => p.id === productId);
    if (found) product = found;
  });

  if (!product) return;

  // تحديث العنوان
  document.title = `${product.name} - الرفوف الحديثة لرفوف المستودعات والسوبرماركت`;

  // تحديث الوصف والكلمات المفتاحية فقط في صفحة المنتج
  const metaDescription = document.querySelector('meta[name="description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');

  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      product.description.substring(0, 150)
    );
  }
  if (metaKeywords) {
    metaKeywords.setAttribute(
      "content",
      `${product.name}, ${product.category}, رفوف, تخزين, الرفوف الحديثة`
    );
  }

  // إضافة وسوم Open Graph خاصة بالمنتج
  const ogTags = {
    "og:title": `${product.name} - الرفوف الحديثة`,
    "og:description": product.description.substring(0, 150),
    "og:url": window.location.href,
    "og:type": "product",
    "og:image": product.image,
  };

  Object.keys(ogTags).forEach((property) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", ogTags[property]);
  });

  // إضافة وسوم Twitter Cards خاصة بالمنتج
  const twitterTags = {
    "twitter:card": "summary_large_image",
    "twitter:title": `${product.name} - الرفوف الحديثة`,
    "twitter:description": product.description.substring(0, 150),
    "twitter:image": product.image,
  };

  Object.keys(twitterTags).forEach((name) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", twitterTags[name]);
  });
} // 1. تعريف وظيفة توليد الـ Schema// دالة توليد السكيما المحدثة (التي تدعم الصور المتعددة والمراجعات)
function generateProductSchema(product) {
  const existingSchema = document.getElementById("dynamic-product-schema");
  if (existingSchema) existingSchema.remove();

  const baseUrl = window.location.origin;
  let productImages = [];

  // التعامل مع مصفوفة الصور الجديدة
  if (product.images && product.images.length > 0) {
    productImages = product.images.map((img) =>
      img.startsWith("http") ? img : `${baseUrl}/${img.replace(/^\//, "")}`
    );
  } else {
    productImages = [`${baseUrl}/images/logo.png`];
  }

  // بناء بيانات المراجعات بشكل تفصيلي لجوجل
  const reviewsSchema = (product.reviews || []).map((rev) => ({
    "@type": "Review",
    author: { "@type": "Person", name: rev.name },
    datePublished: rev.date,
    reviewBody: rev.comment,
    reviewRating: { "@type": "Rating", ratingValue: rev.rating },
  }));

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: productImages,
    description: product.description,
    sku: `RFOF-${product.id}`,
    mpn: product.id.toString(),
    brand: { "@type": "Brand", name: "الرفوف الحديثة" },
    offers: {
      "@type": "Offer",
      url: window.location.href,
      priceCurrency: "SAR",
      price: product.price,
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating || "4.5",
      reviewCount: product.reviews ? product.reviews.length : "5",
    },
    review: reviewsSchema,
  };

  const script = document.createElement("script");
  script.id = "dynamic-product-schema";
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
  console.log(`✅ تم تحديث SEO Schema لمنتج: ${product.name}`);
}
document.addEventListener("DOMContentLoaded", function () {
  initContactForm();
});
