import Icon from "@/components/ui/icon";

const EQUIPMENT_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/f9af4295-9b70-4d60-a617-4e108fb2d93a.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
      {/* Billboard 1150x630mm = ~1.826:1 ratio */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maxWidth: "1150px",
          aspectRatio: "1150 / 630",
          background: "#0A0A0A",
          border: "6px solid #F5C518",
          boxShadow:
            "0 0 80px rgba(245,197,24,0.3), inset 0 0 60px rgba(0,0,0,0.8)",
        }}
      >
        {/* Background equipment photo */}
        <div className="absolute inset-0">
          <img
            src={EQUIPMENT_IMAGE}
            alt="Оборудование"
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: "center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.85) 40%, rgba(10,10,10,0.5) 70%, rgba(10,10,10,0.85) 100%)",
            }}
          />
        </div>

        {/* Side accent bars */}
        <div
          className="absolute top-0 right-0 h-full"
          style={{
            width: "8px",
            background: "linear-gradient(180deg, #F5C518 0%, #FF6B00 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: "8px",
            background: "linear-gradient(180deg, #FF6B00 0%, #F5C518 100%)",
          }}
        />

        {/* Content layout */}
        <div className="relative z-10 flex h-full items-stretch">
          {/* LEFT: Logo + Brand */}
          <div
            className="flex flex-col justify-center items-center px-6 py-4"
            style={{
              minWidth: "22%",
              borderRight: "2px solid rgba(245,197,24,0.3)",
              background: "rgba(245,197,24,0.04)",
            }}
          >
            <div
              className="flex items-center justify-center mb-3"
              style={{
                width: "clamp(50px, 8vw, 90px)",
                height: "clamp(50px, 8vw, 90px)",
                background: "linear-gradient(135deg, #F5C518, #FF6B00)",
                borderRadius: "4px",
                flexShrink: 0,
              }}
            >
              <Icon name="Wrench" size={36} className="text-black" />
            </div>
            <div
              className="font-oswald font-bold text-center text-white leading-tight"
              style={{
                fontSize: "clamp(11px, 1.8vw, 20px)",
                letterSpacing: "0.05em",
              }}
            >
              ПРОФИ
            </div>
            <div
              className="font-oswald text-center leading-tight"
              style={{
                fontSize: "clamp(8px, 1.1vw, 13px)",
                color: "#F5C518",
                letterSpacing: "0.15em",
              }}
            >
              ИНСТРУМЕНТ
            </div>
          </div>

          {/* CENTER: Main content */}
          <div className="flex flex-col justify-center flex-1 px-6 py-4">
            <div
              className="font-roboto uppercase mb-1"
              style={{
                fontSize: "clamp(7px, 0.9vw, 11px)",
                letterSpacing: "0.3em",
                color: "#FF6B00",
              }}
            >
              Магазин профессионального оборудования
            </div>

            <div
              className="font-oswald font-bold text-white"
              style={{
                fontSize: "clamp(20px, 4.5vw, 58px)",
                lineHeight: "0.95",
                letterSpacing: "-0.01em",
              }}
            >
              <span style={{ color: "#F5C518" }}>ВСЁ</span> ДЛЯ
              <br />
              РАБОТЫ
            </div>

            <div
              className="inline-flex items-center gap-2 mt-2"
              style={{
                background: "linear-gradient(90deg, #F5C518, #FF6B00)",
                padding:
                  "clamp(4px, 0.8vw, 10px) clamp(10px, 1.5vw, 20px)",
                width: "fit-content",
                borderRadius: "2px",
              }}
            >
              <Icon name="Zap" size={14} className="text-black" />
              <span
                className="font-oswald font-bold text-black uppercase"
                style={{
                  fontSize: "clamp(9px, 1.2vw, 15px)",
                  letterSpacing: "0.1em",
                }}
              >
                Приходи — подберём!
              </span>
            </div>

            <div className="flex gap-3 mt-3 flex-wrap">
              {[
                "Электроинструмент",
                "Ручной инструмент",
                "Расходники",
                "Спецодежда",
              ].map((cat) => (
                <span
                  key={cat}
                  className="font-roboto text-white uppercase"
                  style={{
                    borderLeft: "2px solid #F5C518",
                    paddingLeft: "6px",
                    letterSpacing: "0.05em",
                    opacity: 0.7,
                    fontSize: "clamp(7px, 0.85vw, 10px)",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Phone + QR */}
          <div
            className="flex flex-col justify-center items-center px-5 py-4 gap-3"
            style={{
              minWidth: "28%",
              borderLeft: "2px solid rgba(245,197,24,0.3)",
              background: "rgba(0,0,0,0.4)",
            }}
          >
            <div className="text-center">
              <div
                className="font-roboto uppercase mb-1"
                style={{
                  fontSize: "clamp(6px, 0.7vw, 9px)",
                  color: "#FF6B00",
                  letterSpacing: "0.2em",
                }}
              >
                Звоните сейчас
              </div>
              <div
                className="font-oswald font-bold text-white leading-none"
                style={{
                  fontSize: "clamp(16px, 3vw, 38px)",
                  letterSpacing: "-0.02em",
                }}
              >
                +7 (999)
              </div>
              <div
                className="font-oswald font-bold leading-none"
                style={{
                  fontSize: "clamp(16px, 3vw, 38px)",
                  color: "#F5C518",
                  letterSpacing: "-0.02em",
                }}
              >
                000-00-00
              </div>
            </div>

            <div
              style={{
                width: "60%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, #F5C518, transparent)",
              }}
            />

            {/* QR Code placeholder */}
            <div className="flex flex-col items-center gap-1">
              <div
                style={{
                  width: "clamp(45px, 7vw, 80px)",
                  height: "clamp(45px, 7vw, 80px)",
                  background: "white",
                  padding: "4px",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                  <rect x="11" y="1" width="1" height="1" fill="#000" />
                  <rect x="9" y="3" width="1" height="1" fill="#000" />
                  <rect x="11" y="3" width="2" height="1" fill="#000" />
                  <rect x="9" y="5" width="2" height="1" fill="#000" />
                  <rect x="9" y="7" width="1" height="1" fill="#000" />
                  <rect x="1" y="9" width="1" height="1" fill="#000" />
                  <rect x="3" y="9" width="2" height="1" fill="#000" />
                  <rect x="7" y="9" width="1" height="1" fill="#000" />
                  <rect x="9" y="9" width="3" height="1" fill="#000" />
                  <rect x="13" y="9" width="1" height="2" fill="#000" />
                  <rect x="15" y="9" width="2" height="1" fill="#000" />
                  <rect x="19" y="9" width="1" height="1" fill="#000" />
                  <rect x="1" y="11" width="2" height="1" fill="#000" />
                  <rect x="5" y="11" width="1" height="1" fill="#000" />
                  <rect x="9" y="11" width="1" height="2" fill="#000" />
                  <rect x="11" y="11" width="2" height="1" fill="#000" />
                  <rect x="15" y="11" width="1" height="1" fill="#000" />
                  <rect x="17" y="11" width="3" height="1" fill="#000" />
                  <rect x="11" y="13" width="1" height="1" fill="#000" />
                  <rect x="13" y="13" width="1" height="1" fill="#000" />
                  <rect x="15" y="13" width="1" height="3" fill="#000" />
                  <rect x="17" y="13" width="1" height="1" fill="#000" />
                  <rect x="19" y="13" width="1" height="1" fill="#000" />
                  <rect x="11" y="15" width="1" height="1" fill="#000" />
                  <rect x="13" y="15" width="1" height="1" fill="#000" />
                  <rect x="17" y="15" width="1" height="1" fill="#000" />
                  <rect x="11" y="17" width="3" height="1" fill="#000" />
                  <rect x="15" y="17" width="1" height="1" fill="#000" />
                  <rect x="17" y="17" width="3" height="1" fill="#000" />
                  <rect x="11" y="19" width="1" height="1" fill="#000" />
                  <rect x="13" y="19" width="1" height="1" fill="#000" />
                  <rect x="17" y="19" width="1" height="1" fill="#000" />
                  <rect x="19" y="19" width="1" height="1" fill="#000" />
                </svg>
              </div>
              <div
                className="font-roboto text-center"
                style={{
                  fontSize: "clamp(5px, 0.65vw, 8px)",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Сканируй QR
              </div>
            </div>

            <div
              className="flex items-center gap-1 text-center"
              style={{
                fontSize: "clamp(6px, 0.7vw, 9px)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <Icon
                name="MapPin"
                size={10}
                style={{ color: "#F5C518", flexShrink: 0 }}
              />
              <span className="font-roboto">ул. Примерная, 1</span>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "4px",
            background: "linear-gradient(90deg, #FF6B00, #F5C518, #FF6B00)",
          }}
        />
      </div>
    </div>
  );
};

export default Index;