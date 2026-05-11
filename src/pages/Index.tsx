import Icon from "@/components/ui/icon";

const MOTO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/d403021e-fe56-4fd3-a30a-c51518c97a3f.jpg";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/02ccc225-3a2f-4cbe-b806-29801425921f.png";

const QR_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/6841c3b9-5c51-4fce-b7e2-0c3a6a81f1a1.png";

const PRODUCTS = [
  { name: "Черепаха", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/78a75afc-2ae1-4ff5-8722-c788e7204a05.jpg" },
  { name: "Шлем", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/cf0a68c7-7017-4928-b215-f4fbe2f7f80d.png" },
  { name: "Перчатки", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/e23edbee-8280-4fc3-b1b3-3c05dd87d008.jpg" },
  { name: "Защита", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/ae305737-01dd-4826-9f38-8e6793636877.jpg" },
];

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "#111" }}
    >
      <div
        className="relative w-full overflow-hidden flex flex-col"
        style={{
          maxWidth: "1150px",
          aspectRatio: "1150 / 630",
          background: "#0D0D0D",
          border: "4px solid #CC0000",
          boxShadow: "0 0 60px rgba(204,0,0,0.4)",
        }}
      >
        {/* Фон */}
        <div className="absolute inset-0">
          <img src={MOTO_IMAGE} alt="bg" className="w-full h-full object-cover"
            style={{ objectPosition: "center", opacity: 0.12 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.82)" }} />
        </div>

        {/* ══ ROW 1: ШАПКА ══ */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            background: "#0D0D0D",
            flexShrink: 0,
            borderBottom: "3px solid #CC0000",
            height: "clamp(38px, 7vw, 62px)",
            padding: "0 20px",
          }}
        >
          <span className="font-oswald font-bold uppercase" style={{ fontSize: "clamp(18px, 4vw, 50px)", letterSpacing: "0.04em", lineHeight: 1 }}>
            <span style={{ color: "#FFFFFF" }}>Магазин </span>
            <span style={{ color: "#CC0000" }}>мотоэкипировки</span>
          </span>
        </div>

        {/* ══ ROW 2: ОСНОВНАЯ ЗОНА ══ */}
        <div className="relative z-10 flex flex-1 min-h-0" style={{ padding: "clamp(5px, 0.8vw, 12px)", gap: "clamp(5px, 0.8vw, 12px)" }}>

          {/* RIGHT — товары + нижняя инфо */}
          <div className="flex flex-col flex-1 min-w-0" style={{ gap: "clamp(4px, 0.6vw, 8px)" }}>

            {/* Ряд товаров + левая колонка (лого+QR) выровнены по одной строке */}
            <div style={{ display: "flex", gap: "clamp(5px, 0.8vw, 12px)", flex: 1 }}>

              {/* LEFT — Лого сверху, QR снизу, вся высота = высота ряда картинок */}
              <div
                className="flex flex-col items-center"
                style={{ width: "clamp(80px, 13vw, 150px)", flexShrink: 0, gap: "clamp(4px, 0.6vw, 8px)" }}
              >
                {/* Лого — flex:1 */}
                <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img
                    src={LOGO_IMAGE}
                    alt="ARMORHEAD"
                    style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 0 14px rgba(204,0,0,0.65))" }}
                  />
                </div>

                {/* Надпись над QR */}
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                  <span
                    className="font-oswald font-bold uppercase"
                    style={{
                      fontSize: "clamp(8px, 1.1vw, 14px)",
                      color: "#FF3333",
                      letterSpacing: "0.1em",
                      display: "block",
                    }}
                  >
                    Сканируй QR
                  </span>
                </div>

                {/* QR — flex:1, равен лого */}
                <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                  <div
                    style={{
                      background: "white",
                      padding: "4px",
                      border: "2.5px solid #CC0000",
                      borderRadius: 3,
                      width: "100%",
                      aspectRatio: "1/1",
                    }}
                  >
                    <img src={QR_IMAGE} alt="QR" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                </div>
              </div>
              {PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  style={{
                    flex: 1,
                    position: "relative",
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Картинка */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.97)",
                      border: "2px solid rgba(204,0,0,0.45)",
                      borderRadius: 4,
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: p.name === "Шлем" ? "108%" : "90%",
                        height: p.name === "Шлем" ? "108%" : "90%",
                        objectFit: "contain",
                      }}
                    />
                    {/* Подпись поверх картинки снизу */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "rgba(180,0,0,0.82)",
                        padding: "clamp(2px, 0.4vw, 5px) 4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        className="font-oswald font-bold text-white text-center uppercase"
                        style={{
                          fontSize: "clamp(9px, 1.3vw, 16px)",
                          letterSpacing: "0.08em",
                          lineHeight: 1,
                        }}
                      >
                        {p.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Нижняя строка: размеры + скидка */}
            <div
              className="flex items-center justify-between"
              style={{ gap: "clamp(6px, 1vw, 14px)", flexShrink: 0 }}
            >
              {/* Размеры — выделенные */}
              <div
                className="flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(204,0,0,0.5)",
                  borderRadius: 3,
                  padding: "clamp(4px, 0.6vw, 8px) clamp(8px, 1.1vw, 14px)",
                  flex: 1,
                }}
              >
                <Icon name="Users" size={15} style={{ color: "#CC0000", flexShrink: 0 }} />
                <span
                  className="font-oswald font-bold text-white uppercase"
                  style={{ fontSize: "clamp(10px, 1.4vw, 18px)", letterSpacing: "0.05em" }}
                >
                  Много размеров —{" "}
                  <span style={{ color: "#CC0000" }}>дети, подростки, взрослые</span>
                </span>
              </div>

              {/* Скидка */}
              <div
                className="flex items-center gap-2"
                style={{
                  background: "linear-gradient(90deg, #CC0000, #991100)",
                  padding: "clamp(4px, 0.7vw, 9px) clamp(8px, 1.2vw, 16px)",
                  clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 100%)",
                  flexShrink: 0,
                }}
              >
                <span className="font-oswald font-bold text-white uppercase"
                  style={{ fontSize: "clamp(8px, 1.2vw, 15px)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                  При упоминании банера —{" "}
                  <span style={{ color: "#FFE066", fontSize: "clamp(10px, 1.6vw, 20px)" }}>скидка 10%</span>
                </span>
                <Icon name="Tag" size={12} className="text-yellow-300 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* ══ ROW 3: НИЖНЯЯ ПОЛОСА — телефон + адрес ══ */}
        <div
          className="relative z-10 flex items-center justify-center gap-6"
          style={{
            background: "rgba(0,0,0,0.55)",
            borderTop: "2px solid #CC0000",
            flexShrink: 0,
            height: "clamp(38px, 7vw, 62px)",
            padding: "0 24px",
          }}
        >
          <div className="flex items-center gap-2">
            <Icon name="Phone" size={16} style={{ color: "#CC0000", flexShrink: 0 }} />
            <span className="font-oswald font-bold" style={{ fontSize: "clamp(18px, 3.2vw, 40px)", letterSpacing: "0.02em", lineHeight: 1, whiteSpace: "nowrap" }}>
              <span className="text-white">+7 (985) </span>
              <span style={{ color: "#FF3333" }}>361-55-17</span>
            </span>
          </div>
          <div style={{ width: "2px", height: "60%", background: "rgba(204,0,0,0.5)" }} />
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={14} style={{ color: "#CC0000", flexShrink: 0 }} />
            <span className="font-oswald text-white uppercase" style={{ fontSize: "clamp(13px, 2vw, 26px)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
              ул. Корнилаева, 16
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: "4px", background: "#CC0000" }} />
      </div>
    </div>
  );
};

export default Index;