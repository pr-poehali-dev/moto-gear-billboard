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
          <img src={MOTO_IMAGE} alt="bg" className="w-full h-full object-cover" style={{ objectPosition: "center", opacity: 0.13 }} />
          <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.78)" }} />
        </div>

        {/* ─── ШАПКА: МАГАЗИН МОТОЭКИПИРОВКИ ─── */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            background: "linear-gradient(90deg, #880000 0%, #CC0000 30%, #FF1111 50%, #CC0000 70%, #880000 100%)",
            padding: "clamp(6px, 1.4vw, 18px) 16px",
            borderBottom: "3px solid #FF4444",
            flexShrink: 0,
          }}
        >
          <span
            className="font-oswald font-bold text-white text-center uppercase"
            style={{
              fontSize: "clamp(22px, 4.6vw, 58px)",
              letterSpacing: "0.25em",
              textShadow: "0 0 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)",
              display: "block",
              width: "100%",
              textAlign: "center",
            }}
          >
            ★ &nbsp;Магазин мотоэкипировки&nbsp; ★
          </span>
        </div>

        {/* ─── ОСНОВНОЙ БЛОК ─── */}
        <div className="relative z-10 flex flex-1 min-h-0">

          {/* LEFT — Логотип */}
          <div
            className="flex flex-col justify-center items-center"
            style={{
              width: "25%",
              borderRight: "1px solid rgba(204,0,0,0.35)",
              padding: "clamp(4px, 0.7vw, 10px)",
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

          {/* CENTER — Товары сверху, инфо снизу */}
          <div
            className="flex flex-col flex-1"
            style={{ padding: "clamp(4px, 0.7vw, 10px) clamp(5px, 0.9vw, 14px)" }}
          >
            {/* Фото товаров — фиксированная высота, квадратные ячейки */}
            <div style={{ display: "flex", gap: "clamp(4px, 0.7vw, 10px)", height: "55%" }}>
              {PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "clamp(2px, 0.3vw, 4px)",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.97)",
                      border: "1.5px solid rgba(204,0,0,0.4)",
                      borderRadius: 3,
                      width: "100%",
                      aspectRatio: "1/1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: p.name === "Шлем" ? "110%" : "88%",
                        height: p.name === "Шлем" ? "110%" : "88%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <span
                    className="font-oswald text-white text-center uppercase"
                    style={{ fontSize: "clamp(7px, 1vw, 13px)", letterSpacing: "0.06em" }}
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Надпись про размеры */}
            <div
              className="flex items-center gap-2"
              style={{ marginTop: "clamp(4px, 0.7vw, 10px)" }}
            >
              <Icon name="Users" size={13} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-oswald text-white uppercase"
                style={{ fontSize: "clamp(8px, 1.2vw, 15px)", letterSpacing: "0.05em", opacity: 0.9 }}
              >
                Много размеров для детей, подростков и взрослых
              </span>
            </div>

            {/* Скидка */}
            <div
              className="flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, #CC0000, #990000)",
                padding: "clamp(5px, 0.85vw, 11px) clamp(8px, 1.2vw, 18px)",
                marginTop: "clamp(4px, 0.6vw, 8px)",
                clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 100%)",
                width: "fit-content",
                flexShrink: 0,
              }}
            >
              <span
                className="font-oswald font-bold text-white uppercase"
                style={{ fontSize: "clamp(8px, 1.25vw, 16px)", letterSpacing: "0.05em" }}
              >
                При упоминании рекламы —{" "}
                <span style={{ fontSize: "clamp(11px, 1.8vw, 22px)", color: "#FFE066" }}>
                  скидка 10%
                </span>
              </span>
              <Icon name="Tag" size={13} className="text-yellow-300 flex-shrink-0" />
            </div>
          </div>

          {/* RIGHT — Телефон + QR + Адрес */}
          <div
            className="flex flex-col justify-between items-center"
            style={{
              width: "27%",
              borderLeft: "1px solid rgba(204,0,0,0.35)",
              background: "rgba(0,0,0,0.35)",
              padding: "clamp(6px, 1vw, 14px) clamp(5px, 0.8vw, 12px)",
            }}
          >
            {/* Телефон */}
            <div className="text-center w-full" style={{ overflow: "hidden" }}>
              <div
                className="font-roboto uppercase text-center"
                style={{ fontSize: "clamp(6px, 0.7vw, 9px)", color: "#CC0000", letterSpacing: "0.25em", marginBottom: 2 }}
              >
                Звоните
              </div>
              <div
                className="font-oswald font-bold text-center"
                style={{
                  fontSize: "clamp(14px, 2.6vw, 32px)",
                  letterSpacing: "0em",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <span className="text-white">+7 (985) </span>
                <span style={{ color: "#CC0000" }}>361-55-17</span>
              </div>
            </div>

            {/* QR */}
            <div className="flex flex-col items-center gap-1" style={{ flex: 1, justifyContent: "center" }}>
              <div
                style={{
                  width: "clamp(85px, 13vw, 158px)",
                  height: "clamp(85px, 13vw, 158px)",
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
                style={{ fontSize: "clamp(5px, 0.6vw, 8px)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em" }}
              >
                Сканируй QR
              </div>
            </div>

            {/* Адрес */}
            <div className="flex items-center gap-1 justify-center">
              <Icon name="MapPin" size={12} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-roboto text-white"
                style={{ fontSize: "clamp(8px, 1vw, 13px)", opacity: 0.9, whiteSpace: "nowrap" }}
              >
                ул. Корнилаева, 16
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: "4px", background: "#CC0000" }} />
      </div>
    </div>
  );
};

export default Index;
