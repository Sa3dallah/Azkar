const azkarList = [
  {
    text: "سبحان اللهِ وبحمدِه",
    count: 100,
    fdl: "«مَنْ قَالَ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، فِي يَوْمٍ مِائَةَ مَرَّةٍ، حُطَّتْ خَطَايَاهُ، وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ»",
  },
  {
    text: "لا إلَهَ إلَّا اللَّهُ وحدَهُ لا شَريكَ لَهُ ، لَهُ الملكُ ، ولَهُ الحمدُ ، يُحْيي ويُميتُ ، وَهوَ علَى كلِّ شيءٍ قديرٌ ",
    count: 100,
    fdl: "مَن قالَ : لا إلَهَ إلَّا اللَّهُ وحدَهُ لا شَريكَ لَهُ ، لَهُ الملكُ ، ولَهُ الحمدُ ، يُحْيي ويُميتُ ، وَهوَ علَى كلِّ شيءٍ قديرٌ ؛ في يومٍ مائةَ مرَّةٍ كانَ لَهُ عَدلُ عشرَ رقابٍ ، وَكُتِبت لَهُ مائةُ حسنةٍ ، ومُحِيَت عنهُ مائةُ سيِّئةٍ ، وَكانت لَهُ حِرزًا منَ الشَّيطانِ يومَهُ ذلِكَ ، حتَّى يُمْسيَ ، ولَم يأتِ أحدٌ بأفضلَ مِمَّا جاءَ بِهِ ؛ إلَّا أحدٌ عمِلَ أكْثرَ من ذلِكَ",
  },
  {
    text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    count: 100,
    fdl: "قال النبي ﷺ : أَلَا أَدُلُّكَ عَلَى كَلِمَةٍ هِيَ كَنْزٌ مِنْ كُنُوزِ الْجَنَّةِ؟ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
  },
  {
    text: "الحمدُ للهِ رَبِّ العالَمينَ",
    count: 100,
    fdl: "قال النبي ﷺ : والحمدُ للهِ تملأُ الميزانَ",
  },
  {
    text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ ﷺ",
    count: 100,
    fdl: "قال النبي ﷺ : أولى الناس بي يوم القيامة أكثرهم عليَّ صلاةً",
  },
  {
    text: " أَسْتَغْفِرُ اللَّهَ ",
    count: 100,
    fdl: "قال النبي ﷺ : مَنْ لَزِمَ الِاسْتِغْفَارَ جَعَلَ اللَّهُ لَهُ مِنْ كُلِّ ضِيقٍ مَخْرَجًا، وَمِنْ كُلِّ هَمٍّ فَرَجًا، وَرَزَقَهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
  },
  {
    text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
    count: 100,
    fdl: "قال النبي ﷺ : إِنَّ أَحَبَّ الْكَلَامِ إِلَى اللَّهِ: سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
  },
  {
    text: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
    count: 100,
    fdl: "قال النبي ﷺ : رَأَيْتُ بِضْعَةً وَثَلاَثِينَ مَلَكًا يَبْتَدِرُونَهَا أَيُّهُمْ يَكْتُبُهَا أَوَّلُ",
  },
  {
    text: "اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا",
    count: 100,
    fdl: "قال النبي ﷺ : عَجِبْتُ لَهَا، فُتِحَتْ لَهَا أَبْوَابُ السَّمَاءِ",
  },
  {
    text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.",
    count: 100,
    fdl: "قال النبي ﷺ : مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً، صَلَّى اللَّهُ عَلَيْهِ عَشْرًا، وَحُطَّتْ عَنْهُ عَشْرُ خَطَايَا، وَرُفِعَتْ لَهُ عَشْرُ دَرَجَاتٍ",
  },
  {
    text: "إِنتَهَيت....",
    count: 0,
    fdl: "جَزَاكَ اللَّهُ خَيْرًا وَبَارَكَ اللَّهُ فِيكَ... :)",
  },
];

let currentIndex = 0;
let currentCount = 0;

const zkrText = document.querySelector(".zkr-box p");
const totalCountSpan = document.querySelector(".cont .main");
const currentCountSpan = document.querySelector(".cont .change");
const contDiv = document.querySelector(".cont");
const nextBtn = document.querySelector(".go");
const prevBtn = document.querySelector(".back");
const zikrNumber = document.querySelector(".zkr-box h2 span"); // رقم الذكر الحالي
const fdlText = document.querySelector(".fdl p"); // فضل الذكر

// إضافة أنيميشن للاختفاء والنزول
contDiv.style.transition = "opacity 0.5s ease, transform 0.5s ease";

function updateUI() {
  zkrText.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  zkrText.style.transform = "translateX(-100%)";
  zkrText.style.opacity = "0";

  fdlText.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  fdlText.style.transform = "translateX(-100%)";
  fdlText.style.opacity = "0";

  setTimeout(() => {
    currentCount = 0;
    zkrText.innerHTML = azkarList[currentIndex].text.replace(/\n/g, "<br>"); // استبدال \n بـ <br>
    totalCountSpan.textContent = azkarList[currentIndex].count;
    currentCountSpan.textContent = currentCount;
    fdlText.textContent = azkarList[currentIndex].fdl; // تحديث فضل الذكر

    // تحديث الرقم في h2 span
    zikrNumber.textContent = currentIndex + 1;

    // رجع العناصر من اليمين
    zkrText.style.transform = "translateX(100%)";
    zkrText.style.opacity = "0";

    fdlText.style.transform = "translateX(100%)";
    fdlText.style.opacity = "0";

    setTimeout(() => {
      zkrText.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      zkrText.style.transform = "translateX(0)";
      zkrText.style.opacity = "1";

      fdlText.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      fdlText.style.transform = "translateX(0)";
      fdlText.style.opacity = "1";
    }, 50);

    // التحكم في الأزرار
    prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
    prevBtn.style.color = currentIndex === 0 ? "gray" : "#ffffff";

    nextBtn.style.pointerEvents =
      currentIndex === azkarList.length - 1 ? "none" : "auto";
    nextBtn.style.color =
      currentIndex === azkarList.length - 1 ? "gray" : "#ffffff";

    // جعل العداد يختفي بسلاسة مع نزول بسيط
    if (currentIndex === azkarList.length - 1) {
      contDiv.style.opacity = "0"; // يخفي بسلاسة
      contDiv.style.transform = "translateY(20px)"; // يتحرك للأسفل
      setTimeout(() => {
        contDiv.style.visibility = "hidden"; // يخفيه فعليًا بعد الانيميشن
      }, 500);
    } else {
      contDiv.style.visibility = "visible";
      contDiv.style.opacity = "1"; // يرجعه بسلاسة
      contDiv.style.transform = "translateY(0)"; // يرجعه لمكانه
    }
  }, 500);
}

contDiv.addEventListener("click", () => {
  if (currentCount < azkarList[currentIndex].count) {
    currentCount++;
    currentCountSpan.textContent = currentCount;
  }
  if (currentCount === azkarList[currentIndex].count) {
    if (currentIndex < azkarList.length - 1) {
      currentIndex++;
      updateUI();
    }
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < azkarList.length - 1) {
    currentIndex++;
    updateUI();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
});

// تشغيل أول ذكر
updateUI();
zkrText.style.direction = "rtl";
zkrText.style.textAlign = "center";
fdlText.style.direction = "rtl";
fdlText.style.textAlign = "right";
