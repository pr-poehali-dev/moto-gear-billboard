import Icon from "@/components/ui/icon";

const MOTO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/d403021e-fe56-4fd3-a30a-c51518c97a3f.jpg";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/02ccc225-3a2f-4cbe-b806-29801425921f.png";

const QR_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/6841c3b9-5c51-4fce-b7e2-0c3a6a81f1a1.png";

const PRODUCTS = [
  { name: "Шлемы", sub: "разные цвета и модели", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/cf0a68c7-7017-4928-b215-f4fbe2f7f80d.png" },
  { name: "Черепахи", sub: "Рост от 130 до 200 см", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/78a75afc-2ae1-4ff5-8722-c788e7204a05.jpg" },
  { name: "Перчатки", sub: null, image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/e23edbee-8280-4fc3-b1b3-3c05dd87d008.jpg" },
  { name: "Защита", sub: null, image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/ae305737-01dd-4826-9f38-8e6793636877.jpg" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#111" }}>
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
          <img src={MOTO_IMAGE} alt="bg" className="w-full h-full object-cover" style={{ objectPosition: "center", opacity: 0.12 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.82)" }} />
        </div>

        {/* ══ ШАПКА ══ */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ background: "#0D0D0D", flexShrink: 0, borderBottom: "3px solid #CC0000", height: "clamp(38px, 7vw, 62px)", padding: "0 20px" }}
        >
          <span className="font-oswald font-bold uppercase" style={{ fontSize: "clamp(18px, 4vw, 50px)", letterSpacing: "0.04em", lineHeight: 1 }}>
            <span style={{ color: "#FFFFFF" }}>Магазин </span>
            <span style={{ color: "#CC0000" }}>мотоэкипировки</span>
          </span>
        </div>

        {/* ══ ОСНОВНАЯ ЗОНА ══ */}
        <div
          className="relative z-10 flex flex-col flex-1 min-h-0"
          style={{ padding: "clamp(5px, 0.8vw, 12px)", gap: "clamp(4px, 0.6vw, 8px)" }}
        >
          {/* Скидка — над картинками, слева */}
          <div
            className="flex items-center justify-center gap-3"
            style={{
              background: "linear-gradient(90deg, #AA0000, #CC0000, #AA0000)",
              padding: "clamp(4px, 0.65vw, 8px) clamp(8px, 1.2vw, 16px)",
              flexShrink: 0,
            }}
          >
            <Icon name="Tag" size={14} className="text-yellow-300 flex-shrink-0" />
            <span className="font-oswald font-bold text-white uppercase"
              style={{ fontSize: "clamp(10px, 1.5vw, 19px)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
              При упоминании банера —{" "}
              <span style={{ color: "#FFE066", fontSize: "clamp(12px, 1.9vw, 24px)" }}>скидка 10%</span>
            </span>
            <Icon name="Tag" size={14} className="text-yellow-300 flex-shrink-0" />
          </div>

          {/* Ряд: лого+QR слева, картинки справа */}
          <div style={{ display: "flex", gap: "clamp(5px, 0.8vw, 12px)", flex: 1, minHeight: 0 }}>

            {/* LEFT — Лого сверху, «Сканируй QR» + QR снизу */}
            <div
              className="flex flex-col items-center"
              style={{ width: "clamp(80px, 13vw, 150px)", flexShrink: 0, gap: "clamp(4px, 0.6vw, 8px)" }}
            >
              {/* Лого */}
              <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", overflow: "hidden" }}>
                <img
                  src={LOGO_IMAGE}
                  alt="ARMORHEAD"
                  style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 0 14px rgba(204,0,0,0.65))" }}
                />
              </div>

              {/* Надпись над QR */}
              <span
                className="font-oswald font-bold uppercase"
                style={{ fontSize: "clamp(8px, 1.1vw, 14px)", color: "#FF3333", letterSpacing: "0.1em", flexShrink: 0 }}
              >
                Сканируй QR
              </span>

              {/* QR */}
              <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                <div style={{ background: "white", padding: "4px", border: "2.5px solid #CC0000", borderRadius: 3, width: "100%", aspectRatio: "1/1" }}>
                  <img src={QR_IMAGE} alt="QR" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              </div>
            </div>

            {/* Картинки товаров */}
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ flex: 1, minWidth: 0, position: "relative" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    border: "2px solid rgba(204,0,0,0.45)",
                    borderRadius: 4,
                    width: "100%",
                    height: "100%",
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
                      width: p.name === "Шлемы" ? "108%" : "90%",
                      height: p.name === "Шлемы" ? "108%" : "90%",
                      objectFit: "contain",
                    }}
                  />
                  {/* Подпись поверх картинки */}
                  <div
                    style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      background: "rgba(180,0,0,0.88)",
                      padding: "clamp(2px, 0.4vw, 6px) 4px",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <span className="font-oswald font-bold text-white text-center uppercase"
                      style={{ fontSize: "clamp(9px, 1.3vw, 16px)", letterSpacing: "0.08em", lineHeight: 1 }}>
                      {p.name}
                    </span>
                    {p.sub && (
                      <span className="font-roboto text-white text-center"
                        style={{ fontSize: "clamp(6px, 0.75vw, 9px)", opacity: 0.9, letterSpacing: "0.04em", lineHeight: 1 }}>
                        {p.sub}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Размеры — снизу */}
          <div
            className="flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(204,0,0,0.5)",
              borderRadius: 3,
              padding: "clamp(4px, 0.6vw, 8px) clamp(8px, 1.1vw, 14px)",
              flexShrink: 0,
            }}
          >
            <Icon name="Users" size={15} style={{ color: "#CC0000", flexShrink: 0 }} />
            <span className="font-oswald font-bold text-white uppercase"
              style={{ fontSize: "clamp(10px, 1.4vw, 18px)", letterSpacing: "0.05em" }}>
              В наличии большой ассортимент —{" "}
              <span style={{ color: "#CC0000" }}>для детей, подростков, взрослых</span>
            </span>
          </div>
        </div>

        {/* ══ НИЖНЯЯ ПОЛОСА: телефон + адрес ══ */}
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