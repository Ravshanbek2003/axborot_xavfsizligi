import React, { Fragment } from "react";

import EducationData from "../../Data/EducationData";
import classes from "./education.module.css";
import { useSelector } from "react-redux";

function Education(props) {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);

  const languagesDone = EducationData.codingStatus;
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <img
          style={{ width: "80%" }}
          src="https://avatars.mds.yandex.net/i?id=ea6fa2c13b4333d0463cfb688d11acb3cf2e9e7b-10104781-images-thumbs&n=13"
          alt=""
          srcset=""
        />
      </div>
      <div className={classes.educationHeader}>
        <div className={classes.educationCard}>
          <h1 style={{ color: uiColor }}>
            AXBOROT XAVFSIZLIGI XAVFINI BAHOLASH
          </h1>
          <h2 style={{ color: nonThemeColor }}>
            1. Axborot xavfsizligi xavfi tushunchasi. Xavf, kengroq ma'noda,
            ma'lum yo'qotishlarga olib keladigan hodisaning ehtimoli (masalan,
            jismoniy shikastlanish, mulkni yo'qotish, tashkilotga zarar etkazish
            va boshqalar). Axborot xavfsizligi xavfi -bu aktiv yoki aktivlar
            guruhining zaifliklaridan tashkilotga zarar yetkazish uchun o'ziga
            xos tahdid sifatida foydalanishning potensial ehtimoli. Xavfning
            asosiy belgilari nomuvofiqlik, muqobillik va noaniqlikdir . Axborot
            xavflarining tasnifi 1-rasmda ko'rsatilgan va besh guruxga bo'lingan
            . Xatarlarni baholash spektrining chegaralarini tavsiflash uchun
            uchta qo'shimcha atama kerak. Xavfdagi nomuvofiqlik, agar subyektiv
            baholash obyektiv ravishda mavjud bo'lgan xavfli harakatlarni etarli
            darajada va ishonchli baholamasa va tavsiflamasa paydo bo'ladi.
            Alternativlik - bu ikki yoki undan ortiq mumkin bo'lgan yechimlar
            yoki harakatlardan tanlash zarurati. Agar tanlov bo'lmasa, unda
            xavfli vaziyatlar va natijada, xavf yo'q. Noaniqlik - bu qaror
            shartlari to'g'risidagi ma'lumotlarning to'liq yoki noto'g'riligi.
            Xavfning mavjudligi o'z-o'zidan qaror qabul qilinmagan yoki
            qarorning oqibatlari to'g'risida yetarli ma'lumotga ega bo'lmagan
            taqdirdagina mumkin. Bu xususiyatlar xavfni baholash jarayonida
            jiddiy qiyinchiliklarga olib kelishi mumkin. 1-rasm. Axborot
            xavflarining tasnifi Xatarlarni tahlil qilish xavflarni baholash
            jarayoni va xavflarni kamaytirish yoki ular bilan bog'liq salbiy
            ta'sirlarni kamaytirishning potensial usullarini o'z ichiga oladi.
            Xatarlarni tahlil qilish kontseptsiyasi axborot bilan bog'liq
            aktivlar bilan bog'liq emas, chunki u odatda ikkita asosiy
            xususiyatga qaratiladi: hodisaning ehtimoli va tashkilotga ta'siri.
            Axborot xavfsizligi kontekstida ta'sir ma'lumotlar yoki boshqa
            aktivlarning maxfiyligi, yaxlitligi yoki mavjudligini yo'qotishning
            mumkin bo'lgan oqibatlarini hisobga olgan holda, axborot
            xavfsizligini buzish natijasida tashkilotga yetkazilishi mumkin
            bo'lgan zararni ifodalaydi. Ehtimollik mavjud tahdidlar va
            zaifliklarni, shuningdek, axborot xavfsizligini boshqarish bo'yicha
            amalga oshirilgan chora-tadbirlarni hisobga olgan holda bunday
            buzilish ehtimolini hisoblaydi. Zarar darajasi pul parametri va
            tannarxning ekvivalenti bo'lib, xarajatda taklif qilingan
            metodologiya bo'yicha hisoblanishi mumkin. NATIJALAR Hodisaning
            tahdid darajasi va potentsial ta'sirini baholash uchun turli
            vositalar va usullardan foydalangan holda mavjud axborot xavfsizligi
            jarayonlarini tahlil qilish amalga oshiriladi. Ushbu tahlil
            natijalariga ko'ra, darhol qo'shimcha himoya choralarini talab
            qiladigan xavfli tahdidlar sifatida qabul qilinishi kerak bo'lgan
            eng yuqori xavflar ta'kidlangan. 2. Xavflarni tahlil qilishning
            sifat va miqdoriy yondashuvlari. Axborot xavfsizligi xavfini tahlil
            qilish ikki turga bo'linadi: sifat va miqdor. Sifatli tahlil xavf
            omillari, sohalari va turlarini aniqlaydi va u o'z ma'lumotlarini
            yaratish uchun odatda odamlarning o'zaro ta'siridan, masalan,
            seminarlar yoki suhbatlar orqali foydalanadi. Ma'lumotlar
            yig'ilgandan so'ng, xavf menejeri tahlili miqdoriy emas, balki sifat
            jihatidan qo'llaniladi. Jarayon raqamli modelni qanoatlantirmasa
            ham, u ko'pincha o'rganilayotgan xavflar bilan bog'liq murakkablikni
            tarjima qilish va ahamiyatsiz bo'lgan ma'lumotlar qismlari
            o'rtasidagi munosabatlarni o'rnatish qobiliyati uchun ishlatiladi.
            Sifatli tahlilning har xil turlari, masalan, o'tkazilgan suhbatlar
            yoki seminarlar davomida muhokama qilingan mavzularning
            stenogrammalarini ko'rib chiqish va qandaydir tematik tahlildan
            foydalanish mumkin. Bu, masalan, ishlatilgan nutqni tahlil qilishga
            asoslangan bo'lishi mumkin, chunki til atrof-muhit va xavflar
            konteksti haqida tafsilotlarni yoritishi mumkin. Sifatli tahlilning
            har xil turlarini o'tkazish mumkin. Ko'p vaqt talab qiluvchi, ammo
            qulay yondashuv bu o'tkazilgan suhbatlar stenogrammalariga yoki
            seminarlar davomida muhokama qilingan mavzularga tematik tahlilni
            qo'llashdir. Bu, masalan, qo'llanilgan nutqni tahlil qilishga
            asoslanishi mumkin, chunki inson tili atrof-muhit va xavf-xatarlar
            konteksti haqidagi aniq tafsilotlarni ajratib ko'rsatishi mumkin.
            O'z ma'lumotlarini hisobga olgan holda, xavflarni sifatli baholash
            biznes sohalaridagi o'zaro munosabatlarni ko'rib chiqishning
            samarali usuli hisoblanadi va shuning uchun nafaqat texnik
            jihatlarni, balki odamlar va jarayonlardan kelib chiqadigan
            muammolarni ham baholash imkoniyatiga ega bo'ladi. Sifatli xavfni
            baholash uchun asosiy e'tibor voqeaning statistik ehtimolligiga
            emas, balki sodir bo'lish ehtimoliga qaratiladi. Ushbu ehtimolliklar
            tahdidlar va zaifliklarni tahlil qilish, so'ngra ta'sir qilishi
            mumkin bo'lgan (ta'sir) aktiv yoki aktivlar uchun sifat yoki
            miqdoriy qiymatni yaratish natijasida olinadi: Xavf = Tahdid x
            Zaiflik * Ta'sir Bu erda Tahdid * Zaiflik ehtimoli. Sifatli
            xavflarni baholash metodologiyasiga misollardan biri OWASP (Open Web
            Ap- plication Security Project) xavflarni baholash metodologiyasi.
            O'z tahlilidan so'ng, OWASP 2-a rasmda keltirilganga o'xshash xulosa
            hosil qiladi, bunda ta'sir va ehtimollik sifat jihatidan past, o'rta
            yoki yuqori sifatida baholanadi. Yana bir metodologiya - bu SWOT
            matritsasi deb ham ataladigan SWOT (Strengths, Weaknesses,
            Opportunities, and Threats) tahlili bo'lib, u ichki omillarni
            (kuchli va zaif tomonlarini), shuningdek tashqi omillarni, jumladan,
            imkoniyatlar va tahdidlarni aniqlash va baholash uchun mo'ljallangan
            mahsulot, loyiha yoki biznes. SWOT 2-b rasmda keltirilganga o'xshash
            2 * 2 matritsa hosil qiladi. Matritsada ko'rinib turganidek,
            tahlilning asosiy maqsadi aniqlangan xususiyatlarning tashqi/ichki
            joylashuvi va ularning tashkilotga salbiy/ijobiy ta'siri. Ikki
            o'zgaruvchining kombinatsiyasini hisobga olgan holda, tegishli
            xususiyat kuch, zaiflik, imkoniyat yoki tahdid sifatida tasniflanadi
            va tegishli sohaga mos ravishda qo'shiladi. Axborot xavfsizligi
            xavfini baholash korxonalarni boshqarish amaliyotining muhim qismi
            bo'lib, xavflarni qabul qilish mezonlari va tashkilotga tegishli
            maqsadlarga nisbatan xavflarni aniqlash, miqdor va ustuvorliklarni
            aniqlashga yordam beradi. Xatarlarni boshqarish axborot tizimiga
            ta'sir qilish qobiliyatiga ega bo'lgan xavfsizlik xavflarini
            kamaytirish uchun axborot tizimining resurslariga salbiy ta'sir
            ko'rsatishi mumkin bo'lgan hodisalarni aniqlash, boshqarish va
            bartaraf etish yoki kamaytirishdan iborat jarayon, himoya
            vositalarining maqbul narxini hisobga olgan holda, xavf tahlili,
            "xarajat samaradorligi" parametrini tahlil qilish va xavfsizlik quyi
            tizimini tanlash, qurish va sinovdan o'tkazish, shuningdek,
            xavfsizlikning barcha jihatlarini o'rganish. Vaqt o'tishi bilan
            axborot tizimlarining murakkabligi ortib bormoqda va shuning uchun
            har qanday tashkilot uchun axborot xavfsizligi masalalari tobora
            muhim ahamiyat kasb etmoqda. Shu nuqtai nazardan, axborot
            xavfsizligiga kompleks yondashuvning zarur komponenti sifatida
            axborot xavfsizligi xavflarini tahlil qilish va baholashga alohida
            e'tibor qaratilmoqda. Axborot xavfsizligi xavflarining odatiy
            tahlili (va tegishli baholash) tizimning axborot xavfsizligi auditi
            yoki loyihalash bosqichida amalga oshiriladi. Axborot xavfsizligi
            auditining asosiy vazifasi axborot texnologiyalari tarkibiy
            qismlariga, shuningdek, umuman axborot tizimlari arxitekturasiga
            qo'llaniladigan boshqaruv mexanizmlarining qobiliyati va
            samaradorligini baholashdan iborat.
          </h2>
        </div>
      </div>
    </Fragment>
  );
}
export default Education;
