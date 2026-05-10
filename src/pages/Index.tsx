import Icon from "@/components/ui/icon";

const MOTO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/d403021e-fe56-4fd3-a30a-c51518c97a3f.jpg";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/02ccc225-3a2f-4cbe-b806-29801425921f.png";

const GEAR_ITEMS = [
  "Шлемы для мотокросса",
  "Моточерепахи",
  "Наколенники",
  "Налокотники",
  "Перчатки",
  "Очки",
];

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "#111" }}
    >
      {/* Billboard 1150x630mm */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maxWidth: "1150px",
          aspectRatio: "1150 / 630",
          background: "#0D0D0D",
          border: "5px solid #CC0000",
          boxShadow: "0 0 60px rgba(204,0,0,0.4), 0 0 120px rgba(204,0,0,0.15)",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={MOTO_IMAGE}
            alt="Мотокросс"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center", opacity: 0.18 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,13,13,0.99) 0%, rgba(13,13,13,0.82) 35%, rgba(13,13,13,0.55) 60%, rgba(13,13,13,0.94) 100%)",
            }}
          />
        </div>

        {/* Top stripe */}
        <div className="absolute top-0 left-0 right-0" style={{ height: "5px", background: "#CC0000" }} />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full">

          {/* LEFT — Logo */}
          <div
            className="flex flex-col justify-center items-center py-3 px-3"
            style={{ width: "28%", borderRight: "1px solid rgba(204,0,0,0.3)" }}
          >
            <img
              src={LOGO_IMAGE}
              alt="ARMORHEAD"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 0 14px rgba(204,0,0,0.65))",
              }}
            />
          </div>

          {/* CENTER — Main info */}
          <div className="flex flex-col justify-center flex-1 px-5 py-3 gap-2">

            {/* Heading */}
            <div>
              <div
                className="font-oswald font-bold text-white"
                style={{
                  fontSize: "clamp(13px, 2.4vw, 31px)",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                Магазин <span style={{ color: "#CC0000" }}>мотоэкипировки</span>
              </div>
              <div
                className="font-roboto uppercase mt-1"
                style={{
                  fontSize: "clamp(6px, 0.75vw, 9px)",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.28em",
                }}
              >
                В наличии
              </div>
            </div>

            {/* Gear grid — 2 columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(2px, 0.4vw, 5px) clamp(8px, 1vw, 16px)",
              }}
            >
              {GEAR_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div
                    style={{
                      width: "clamp(4px, 0.45vw, 6px)",
                      height: "clamp(4px, 0.45vw, 6px)",
                      background: "#CC0000",
                      flexShrink: 0,
                      transform: "rotate(45deg)",
                    }}
                  />
                  <span
                    className="font-oswald text-white"
                    style={{
                      fontSize: "clamp(10px, 1.75vw, 22px)",
                      letterSpacing: "0.02em",
                      lineHeight: 1.15,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Discount banner */}
            <div
              className="flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, #CC0000, #990000)",
                padding: "clamp(5px, 0.9vw, 11px) clamp(10px, 1.5vw, 20px)",
                width: "fit-content",
                clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 100%)",
                marginTop: "clamp(2px, 0.4vw, 6px)",
              }}
            >
              <span
                className="font-oswald font-bold text-white"
                style={{
                  fontSize: "clamp(9px, 1.4vw, 18px)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                При упоминании рекламы —{" "}
                <span
                  style={{
                    fontSize: "clamp(12px, 1.9vw, 24px)",
                    color: "#FFE066",
                  }}
                >
                  скидка 10%
                </span>
              </span>
              <Icon name="Tag" size={16} className="text-yellow-300 flex-shrink-0" />
            </div>

            {/* CTA */}
            <div
              className="inline-flex items-center gap-1.5"
              style={{ width: "fit-content" }}
            >
              <Icon name="ShieldCheck" size={12} style={{ color: "#CC0000" }} />
              <span
                className="font-oswald text-white uppercase"
                style={{
                  fontSize: "clamp(7px, 0.9vw, 11px)",
                  letterSpacing: "0.15em",
                  opacity: 0.6,
                }}
              >
                Защити себя — приходи!
              </span>
            </div>
          </div>

          {/* RIGHT — Phone + QR + Address */}
          <div
            className="flex flex-col justify-center items-center py-3 px-4 gap-3"
            style={{
              width: "25%",
              borderLeft: "1px solid rgba(204,0,0,0.3)",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            {/* Phone */}
            <div className="text-center">
              <div
                className="font-roboto uppercase mb-1"
                style={{ fontSize: "clamp(6px, 0.65vw, 8px)", color: "#CC0000", letterSpacing: "0.25em" }}
              >
                Звоните
              </div>
              <div
                className="font-oswald font-bold"
                style={{
                  fontSize: "clamp(12px, 1.9vw, 24px)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                }}
              >
                <span className="text-white">+7 (985) </span>
                <span style={{ color: "#CC0000" }}>361-55-17</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "55%", height: "1px", background: "linear-gradient(90deg, transparent, #CC0000, transparent)" }} />

            {/* QR */}
            <div className="flex flex-col items-center gap-1">
              <div
                style={{
                  width: "clamp(65px, 10vw, 118px)",
                  height: "clamp(65px, 10vw, 118px)",
                  background: "white",
                  padding: "4px",
                  borderRadius: "2px",
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
                style={{ fontSize: "clamp(5px, 0.6vw, 7px)", color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em" }}
              >
                Сканируй QR
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "55%", height: "1px", background: "linear-gradient(90deg, transparent, #CC0000, transparent)" }} />

            {/* Address */}
            <div className="flex items-center gap-1">
              <Icon name="MapPin" size={11} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-roboto text-white"
                style={{ fontSize: "clamp(8px, 0.95vw, 12px)", opacity: 0.85 }}
              >
                ул. Корнилаева, 16
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "5px", background: "#CC0000" }} />
      </div>
    </div>
  );
};

export default Index;
