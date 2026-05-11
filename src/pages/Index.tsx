import Icon from "@/components/ui/icon";

const MOTO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/d403021e-fe56-4fd3-a30a-c51518c97a3f.jpg";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/02ccc225-3a2f-4cbe-b806-29801425921f.png";

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
      {/* Billboard 1150x630mm — задняя наклейка на авто */}
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
        {/* Фоновое фото */}
        <div className="absolute inset-0">
          <img
            src={MOTO_IMAGE}
            alt="bg"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center", opacity: 0.13 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.78)" }} />
        </div>

        {/* ─── ROW 1: ШАПКА — «МАГАЗИН МОТОЭКИПИРОВКИ» на всю ширину ─── */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            background: "linear-gradient(90deg, #AA0000, #CC0000, #AA0000)",
            padding: "clamp(4px, 1.1vw, 14px) 12px",
            borderBottom: "2px solid #FF3333",
            flexShrink: 0,
          }}
        >
          <span
            className="font-oswald font-bold text-white text-center uppercase tracking-widest"
            style={{
              fontSize: "clamp(18px, 3.8vw, 48px)",
              letterSpacing: "0.2em",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Магазин мотоэкипировки
          </span>
        </div>

        {/* ─── ROW 2: ОСНОВНОЙ БЛОК ─── */}
        <div className="relative z-10 flex flex-1 min-h-0">

          {/* LEFT — Логотип */}
          <div
            className="flex flex-col justify-center items-center"
            style={{
              width: "26%",
              borderRight: "1px solid rgba(204,0,0,0.35)",
              padding: "clamp(4px, 0.8vw, 12px)",
            }}
          >
            <img
              src={LOGO_IMAGE}
              alt="ARMORHEAD"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 0 16px rgba(204,0,0,0.7))",
              }}
            />
          </div>

          {/* CENTER — Товары + скидка + подпись */}
          <div
            className="flex flex-col justify-between flex-1"
            style={{ padding: "clamp(4px, 0.8vw, 12px) clamp(6px, 1vw, 16px)" }}
          >
            {/* Фото товаров */}
            <div style={{ display: "flex", gap: "clamp(4px, 0.7vw, 10px)", flex: 1 }}>
              {PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "clamp(2px, 0.3vw, 5px)",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.97)",
                      border: "2px solid rgba(204,0,0,0.5)",
                      borderRadius: 4,
                      width: "100%",
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: p.name === "Шлем" ? "110%" : "90%",
                        height: p.name === "Шлем" ? "110%" : "90%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <span
                    className="font-oswald text-white text-center uppercase"
                    style={{ fontSize: "clamp(8px, 1.1vw, 14px)", letterSpacing: "0.08em" }}
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Надпись про размеры */}
            <div
              className="flex items-center gap-2"
              style={{ marginTop: "clamp(3px, 0.5vw, 8px)" }}
            >
              <Icon name="Users" size={14} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-oswald text-white uppercase"
                style={{
                  fontSize: "clamp(9px, 1.35vw, 17px)",
                  letterSpacing: "0.06em",
                  opacity: 0.9,
                }}
              >
                Много размеров для детей, подростков и взрослых
              </span>
            </div>

            {/* Скидка */}
            <div
              className="flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, #CC0000, #990000)",
                padding: "clamp(5px, 0.9vw, 11px) clamp(8px, 1.2vw, 18px)",
                marginTop: "clamp(3px, 0.5vw, 8px)",
                clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 100%)",
                width: "fit-content",
              }}
            >
              <span
                className="font-oswald font-bold text-white uppercase"
                style={{ fontSize: "clamp(9px, 1.35vw, 17px)", letterSpacing: "0.05em" }}
              >
                При упоминании рекламы —{" "}
                <span style={{ fontSize: "clamp(12px, 1.9vw, 24px)", color: "#FFE066" }}>
                  скидка 10%
                </span>
              </span>
              <Icon name="Tag" size={14} className="text-yellow-300 flex-shrink-0" />
            </div>
          </div>

          {/* RIGHT — Телефон + QR + Адрес */}
          <div
            className="flex flex-col justify-between items-center"
            style={{
              width: "26%",
              borderLeft: "1px solid rgba(204,0,0,0.35)",
              background: "rgba(0,0,0,0.35)",
              padding: "clamp(6px, 1vw, 14px) clamp(6px, 1vw, 14px)",
            }}
          >
            {/* Телефон */}
            <div className="text-center w-full">
              <div
                className="font-roboto uppercase text-center"
                style={{ fontSize: "clamp(7px, 0.75vw, 10px)", color: "#CC0000", letterSpacing: "0.25em", marginBottom: "clamp(2px, 0.3vw, 4px)" }}
              >
                Звоните
              </div>
              <div
                className="font-oswald font-bold text-center"
                style={{
                  fontSize: "clamp(22px, 3.5vw, 44px)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                <span className="text-white">+7 (985) </span>
                <span style={{ color: "#CC0000" }}>361-55-17</span>
              </div>
            </div>

            {/* QR — большой */}
            <div className="flex flex-col items-center gap-1" style={{ flex: 1, justifyContent: "center" }}>
              <div
                style={{
                  width: "clamp(90px, 14vw, 170px)",
                  height: "clamp(90px, 14vw, 170px)",
                  background: "white",
                  padding: "5px",
                  borderRadius: "3px",
                  border: "3px solid #CC0000",
                }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/6841c3b9-5c51-4fce-b7e2-0c3a6a81f1a1.png"
                  alt="QR-код"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div
                className="font-roboto text-center uppercase"
                style={{ fontSize: "clamp(6px, 0.65vw, 9px)", color: "rgba(255,255,255,0.45)", letterSpacing: "0.14em" }}
              >
                Сканируй QR
              </div>
            </div>

            {/* Адрес */}
            <div className="flex items-center gap-1 justify-center">
              <Icon name="MapPin" size={13} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-roboto text-white"
                style={{ fontSize: "clamp(9px, 1.05vw, 14px)", opacity: 0.9 }}
              >
                ул. Корнилаева, 16
              </span>
            </div>
          </div>
        </div>

        {/* Bottom stripe */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "4px", background: "#CC0000" }} />
      </div>
    </div>
  );
};

export default Index;
