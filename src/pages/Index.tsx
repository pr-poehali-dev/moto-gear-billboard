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
            <div style={{
              border: "2px solid #CC0000",
              borderRadius: 4,
              padding: "8px",
              background: "rgba(0,0,0,0.55)",
              boxShadow: "0 0 18px rgba(204,0,0,0.5), inset 0 0 12px rgba(0,0,0,0.4)",
              width: "88%",
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src={LOGO_IMAGE}
                alt="ARMORHEAD"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 10px rgba(204,0,0,0.8)) brightness(1.15)",
                }}
              />
            </div>
          </div>

          {/* CENTER — Main info */}
          <div className="flex flex-col justify-center flex-1 px-5 py-3 gap-2">

            {/* Heading */}
            <div>
              <div
                className="font-oswald font-bold"
                style={{
                  fontSize: "clamp(26px, 5.2vw, 66px)",
                  letterSpacing: "0.01em",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                }}
              >
                <span className="text-white" style={{ display: "block" }}>Магазин</span>
                <span style={{ color: "#CC0000", display: "block" }}>мотоэкипировки</span>
              </div>
              <div
                className="font-roboto uppercase mt-2"
                style={{
                  fontSize: "clamp(6px, 0.75vw, 9px)",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.28em",
                }}
              >
                В наличии
              </div>
            </div>

            {/* Products photo row */}
            <div style={{ display: "flex", gap: "clamp(4px, 0.7vw, 10px)" }}>
              {PRODUCTS.map((p) => (
                <div key={p.name} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(2px, 0.3vw, 4px)" }}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.96)",
                      border: "1.5px solid rgba(204,0,0,0.4)",
                      borderRadius: 3,
                      width: "100%",
                      aspectRatio: "1/1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img src={p.image} alt={p.name} style={{ width: p.name === "Шлем" ? "110%" : "88%", height: p.name === "Шлем" ? "110%" : "88%", objectFit: "contain" }} />
                  </div>
                  <span
                    className="font-oswald text-white text-center"
                    style={{ fontSize: "clamp(7px, 1vw, 13px)", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {p.name}
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
              <div className="flex items-center justify-center gap-2 mb-1">
                <div
                  className="font-roboto uppercase"
                  style={{ fontSize: "clamp(6px, 0.65vw, 8px)", color: "#CC0000", letterSpacing: "0.25em" }}
                >
                  Звоните
                </div>
                <div
                  className="font-oswald font-bold"
                  style={{
                    fontSize: "clamp(6px, 0.65vw, 8px)",
                    background: "#CC0000",
                    color: "#fff",
                    padding: "1px 5px",
                    letterSpacing: "0.15em",
                    borderRadius: "2px",
                  }}
                >
                  24/7
                </div>
              </div>
              <div
                className="font-oswald font-bold"
                style={{
                  fontSize: "clamp(18px, 2.8vw, 36px)",
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