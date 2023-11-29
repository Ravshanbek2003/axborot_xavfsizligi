import React from "react";

import styles from "./project.module.css";
import ProjectsData from "../../Data/ProjectsData";

import { useSelector } from "react-redux";

const Projects = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  let projects = ProjectsData.DUMMY_PROJECTS;
  return (
    <React.Fragment>
      <h1 style={{ margin: "50px" }}>
        Bu dasturlar, sistemani xavfsizlikni ta'minlash, zararli amallarni
        aniqlash va tarmoq xavfsizligini oshirish maqsadida foydalaniladi. Har
        bir dastur xavfsizlikni oshirish uchun xususiy bo'lib, ularni
        foydalanishdan oldin muhitni tahlil qilib, foydalanuvchilarga va tizim
        administratorlariga maslahat berish muhimdir.
      </h1>
      <div className={styles.projects}>
        <section className={styles.projectImg}>
          <img
            src="https://avatars.mds.yandex.net/get-direct/5390726/LjBODwXICjRi4LMz0Z5dDA/x600"
            alt=""
          />
        </section>
        <section className={styles.projectHeader}>
          <div>
            Xavfsizlik buzilganini aniqlovchi dasturlar, tizimlarni va
            dasturlarni imtihon qilish, xavfsizlikni tekshirish, zararli
            kodlarni aniqlash va yuzlab ommaviy tarmoqdan muhofaza qilish uchun
            ishlatiladi. Quyidagi dasturlar ushbu maqsadlarga yo'naltirilgan:
          </div>
        </section>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          1.Nmap:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Tarmoqda qanday qurilgan joylashuvlarning topilishini va tekshirishini
          osonlashtirish uchun ishlatiladi.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=dc1e569133f677f8a4e750d8652b13329a3f2446-10597937-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          2.Wireshark:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Paketlar ro'yhatini ko'rsatib, tarmoqda yuborilgan va qabul qilingan
          ma'lumotlarni monitoring qilish.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=85b8e9863f621564b0f435faff8208f09472171e-10906504-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          3.Metasploit:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Xavfsizlik va sinalganlik imkoniyatlarini oshirish maqsadida testlov
          qilish va jiddiy xavfsizlik masalalarni aniqlash uchun ishlatiladi.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=ed12469cdd483064eaf8e7766ece5b88b288dbdc-10330387-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          4.OpenVAS:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Ochiq manbalari va tizimlar uchun xavfsizlik skaner va islohot tizimi.
          Tizimni tekshirib, topilgan nukusliklarni tuzatish uchun yordam
          beradi.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=49919f91c6c659f3462734a463f2414a40b39656-10119944-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          5.Snort:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Paketlarni monitoring qilish va nazorat qilish uchun tuzilgan sinov
          dasturi.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=04144896001f459ccb27dc39915666bb0ef788fa-10121710-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          6.ClamAV:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Viruslar va zararli fayllarni aniqlash va o'chirish uchun xavfsizlik
          skaneri.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=219605eab9533bd6deeeb0007bece8d67d2b7bf9-10558413-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          7.John the Ripper:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Parollarni tasdiqlash uchun ishlatiladi. Hesh funksiyalari orqali
          parollar va boshqa tasdiqlash kodi qaytarib beradi.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=ae149c98d7a710209a83a5ce4f5b43c155113cf5-10130831-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          8.Wi-Fi Analyzer:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Wi-Fi tarmoqlarni monitoring qilish va xavfsizlikga qarshi ishlov
          bajarish uchun ishlatiladi.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=be7664e5c7a7df56252709fccac4b82e2d093a76-8497218-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          9.AIDE (Advanced Intrusion Detection Environment):
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Tizimdagi o'zgarishlarni tekshirib, xavfsizlikni monitoring qilish va
          nazorat qilish uchun ishlatiladi.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=90426dbe7806ce1f1bc9a1ed37f17f368cc33dfd-10310451-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          10.Yara:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Malumotlar bazasidan bor zararli fayllarni aniqlovchi, izlaydigan va
          aniqlagan ishlab chiqilgan dastur.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=70438a369669abda4810f9f93bcc94dd23d4085c-4768443-images-thumbs&n=13"
        alt=""
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
          11.OSSEC:
        </h1>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Xavfsizlik va monitoring tizimi. Nazorat qiluvchi yo'riqnoma,
          sistemalar o'rtasida biriktirilgan, ma'lumotlarni aniqlash va
          xavfsizlikni baho ishlash.
        </p>
      </div>
      <img
        src="https://avatars.mds.yandex.net/i?id=392665dc087d28c5d725ddad9ae45654bc30d56d-7948163-images-thumbs&n=13"
        alt=""
      />
    </React.Fragment>
  );
};

export default Projects;
