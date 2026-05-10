import Icon from "@/components/ui/icon";

const MOTO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/d403021e-fe56-4fd3-a30a-c51518c97a3f.jpg";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/7e22f5ac-56aa-47da-8495-83dd6cd6cb59.png";

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
      {/* Billboard 1150x630mm = 1.826:1 */}
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
        {/* Background moto photo */}
        <div className="absolute inset-0">
          <img
            src={MOTO_IMAGE}
            alt="Мотокросс"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center", opacity: 0.22 }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.80) 35%, rgba(13,13,13,0.55) 60%, rgba(13,13,13,0.92) 100%)",
            }}
          />
        </div>

        {/* Red top stripe */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "5px", background: "#CC0000" }}
        />

        {/* Diagonal red accent — decorative slash */}
        <div
          className="absolute"
          style={{
            top: 0,
            right: "30%",
            width: "3px",
            height: "100%",
            background: "linear-gradient(180deg, #CC0000 0%, transparent 100%)",
            transform: "skewX(-8deg)",
            opacity: 0.4,
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 flex h-full">

          {/* LEFT BLOCK — Logo + tagline */}
          <div
            className="flex flex-col justify-center items-center py-6 px-4"
            style={{
              width: "30%",
              borderRight: "1px solid rgba(204,0,0,0.35)",
            }}
          >
            {/* Logo image */}
            <img
              src={LOGO_IMAGE}
              alt="ARMORHEAD"
              style={{
                width: "clamp(100px, 18vw, 210px)",
                height: "clamp(100px, 18vw, 210px)",
                objectFit: "contain",
                filter: "drop-shadow(0 0 12px rgba(204,0,0,0.6))",
              }}
            />

            {/* Tagline */}
            <div
              className="font-oswald text-center mt-2"
              style={{
                fontSize: "clamp(7px, 0.9vw, 11px)",
                color: "#CC0000",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Жизнь даётся раз.
              <br />
              А броня — от нас
            </div>
          </div>

          {/* CENTER — Gear list */}
          <div
            className="flex flex-col justify-center flex-1 px-6 py-5"
          >
            {/* Label */}
            <div
              className="font-roboto uppercase mb-3"
              style={{
                fontSize: "clamp(7px, 0.85vw, 10px)",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.3em",
              }}
            >
              В наличии
            </div>

            {/* Gear items */}
            <div className="flex flex-col gap-1.5">
              {GEAR_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <div
                    style={{
                      width: "clamp(4px, 0.5vw, 7px)",
                      height: "clamp(4px, 0.5vw, 7px)",
                      background: "#CC0000",
                      borderRadius: "1px",
                      flexShrink: 0,
                      transform: "rotate(45deg)",
                    }}
                  />
                  <span
                    className="font-oswald text-white"
                    style={{
                      fontSize: "clamp(11px, 1.9vw, 24px)",
                      letterSpacing: "0.03em",
                      lineHeight: 1.1,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-4 inline-flex items-center gap-2"
              style={{
                background: "#CC0000",
                padding: "clamp(5px, 0.8vw, 10px) clamp(12px, 1.8vw, 24px)",
                width: "fit-content",
                clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 100%)",
              }}
            >
              <Icon name="ShieldCheck" size={14} className="text-white" />
              <span
                className="font-oswald font-bold text-white uppercase"
                style={{
                  fontSize: "clamp(9px, 1.15vw, 14px)",
                  letterSpacing: "0.12em",
                }}
              >
                Защити себя — приходи!
              </span>
            </div>
          </div>

          {/* RIGHT — Phone + Address + QR */}
          <div
            className="flex flex-col justify-center items-center py-6 px-5 gap-4"
            style={{
              width: "26%",
              borderLeft: "1px solid rgba(204,0,0,0.35)",
              background: "rgba(0,0,0,0.35)",
            }}
          >
            {/* Phone */}
            <div className="text-center">
              <div
                className="font-roboto uppercase mb-1"
                style={{
                  fontSize: "clamp(6px, 0.7vw, 9px)",
                  color: "#CC0000",
                  letterSpacing: "0.25em",
                }}
              >
                Звоните
              </div>
              <div
                className="font-oswald font-bold text-white"
                style={{
                  fontSize: "clamp(13px, 2.2vw, 28px)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                +7 (985)
              </div>
              <div
                className="font-oswald font-bold"
                style={{
                  fontSize: "clamp(13px, 2.2vw, 28px)",
                  color: "#CC0000",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                361-55-17
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                width: "55%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #CC0000, transparent)",
              }}
            />

            {/* QR */}
            <div className="flex flex-col items-center gap-1">
              <div
                style={{
                  width: "clamp(50px, 7.5vw, 88px)",
                  height: "clamp(50px, 7.5vw, 88px)",
                  background: "white",
                  padding: "5px",
                  borderRadius: "2px",
                }}
              >
                <svg
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                >
                  <rect x="1" y="1" width="7" height="7" fill="#000" />
                  <rect x="2" y="2" width="5" height="5" fill="#fff" />
                  <rect x="3" y="3" width="3" height="3" fill="#000" />
                  <rect x="13" y="1" width="7" height="7" fill="#000" />
                  <rect x="14" y="2" width="5" height="5" fill="#fff" />
                  <rect x="15" y="3" width="3" height="3" fill="#000" />
                  <rect x="1" y="13" width="7" height="7" fill="#000" />
                  <rect x="2" y="14" width="5" height="5" fill="#fff" />
                  <rect x="3" y="15" width="3" height="3" fill="#000" />
                  <rect x="9" y="1" width="1" height="1" fill="#000" />
                  <rect x="11" y="2" width="2" height="1" fill="#000" />
                  <rect x="9" y="4" width="2" height="1" fill="#000" />
                  <rect x="11" y="5" width="1" height="1" fill="#000" />
                  <rect x="9" y="6" width="1" height="1" fill="#000" />
                  <rect x="1" y="9" width="2" height="1" fill="#000" />
                  <rect x="5" y="9" width="1" height="1" fill="#000" />
                  <rect x="7" y="9" width="1" height="1" fill="#000" />
                  <rect x="9" y="9" width="3" height="1" fill="#000" />
                  <rect x="14" y="9" width="2" height="1" fill="#000" />
                  <rect x="18" y="9" width="2" height="1" fill="#000" />
                  <rect x="1" y="11" width="1" height="1" fill="#000" />
                  <rect x="4" y="11" width="2" height="1" fill="#000" />
                  <rect x="9" y="11" width="2" height="1" fill="#000" />
                  <rect x="13" y="11" width="1" height="1" fill="#000" />
                  <rect x="16" y="11" width="3" height="1" fill="#000" />
                  <rect x="11" y="13" width="2" height="1" fill="#000" />
                  <rect x="14" y="13" width="1" height="1" fill="#000" />
                  <rect x="16" y="13" width="1" height="1" fill="#000" />
                  <rect x="19" y="13" width="1" height="1" fill="#000" />
                  <rect x="11" y="15" width="1" height="1" fill="#000" />
                  <rect x="13" y="15" width="2" height="2" fill="#000" />
                  <rect x="17" y="15" width="2" height="1" fill="#000" />
                  <rect x="11" y="17" width="3" height="1" fill="#000" />
                  <rect x="16" y="17" width="1" height="1" fill="#000" />
                  <rect x="19" y="17" width="1" height="1" fill="#000" />
                  <rect x="12" y="19" width="1" height="1" fill="#000" />
                  <rect x="15" y="19" width="2" height="1" fill="#000" />
                  <rect x="19" y="19" width="1" height="1" fill="#000" />
                </svg>
              </div>
              <div
                className="font-roboto text-center"
                style={{
                  fontSize: "clamp(5px, 0.6vw, 7px)",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Сканируй QR
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                width: "55%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #CC0000, transparent)",
              }}
            />

            {/* Address */}
            <div className="flex flex-col items-center gap-1 text-center">
              <Icon name="MapPin" size={12} style={{ color: "#CC0000" }} />
              <span
                className="font-roboto text-white"
                style={{
                  fontSize: "clamp(8px, 1vw, 13px)",
                  opacity: 0.85,
                  letterSpacing: "0.02em",
                }}
              >
                ул. Корнилаева, 16
              </span>
            </div>
          </div>
        </div>

        {/* Bottom red bar */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "5px", background: "#CC0000" }}
        />
      </div>
    </div>
  );
};

export default Index;
