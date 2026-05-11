import Icon from "@/components/ui/icon";

const MOTO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/d403021e-fe56-4fd3-a30a-c51518c97a3f.jpg";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/02ccc225-3a2f-4cbe-b806-29801425921f.png";

const QR_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/6841c3b9-5c51-4fce-b7e2-0c3a6a81f1a1.png";

const AVITO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/f66e4460-774f-43be-9ed7-3d973c48ce10.png";

const PRODUCTS = [
  { name: "Шлемы", sub: "разные цвета и модели", price: "От 2 790 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/cf0a68c7-7017-4928-b215-f4fbe2f7f80d.png" },
  { name: "Черепахи", sub: "Рост от 130 до 200 см", price: "От 2 490 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/78a75afc-2ae1-4ff5-8722-c788e7204a05.jpg" },
  { name: "Перчатки", sub: null, price: "От 990 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/e23edbee-8280-4fc3-b1b3-3c05dd87d008.jpg" },
  { name: "Защита", sub: null, price: "От 990 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/ae305737-01dd-4826-9f38-8e6793636877.jpg" },
];

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#111", padding: "16px" }}
    >
      {/* Внешняя рамка трапеции */}
      <div
        style={{
          position: "relative",
          maxWidth: "1130px",
          width: "100%",
          aspectRatio: "113 / 60",
          clipPath: "polygon(8.4% 0%, 91.6% 0%, 100% 100%, 0% 100%)",
          boxShadow: "0 0 60px rgba(204,0,0,0.5)",
          background: "#CC0000",
          padding: "3px",
        }}
      >
        {/* Внутренний контент */}
        <div
          className="relative w-full h-full"
          style={{
            background: "#0D0D0D",
            clipPath: "polygon(8.4% 0%, 91.6% 0%, 100% 100%, 0% 100%)",
            overflow: "hidden",
            display: "grid",
            gridTemplateRows: "auto auto 1fr auto auto",
          }}
        >
          {/* Фон */}
          <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <img
              src={MOTO_IMAGE}
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.12 }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.82)" }} />
          </div>

          {/* ══ ШАПКА ══ */}
          <div
            className="relative flex items-center justify-center"
            style={{
              zIndex: 1,
              background: "#0D0D0D",
              borderBottom: "2px solid #CC0000",
              height: "clamp(26px, 4.8vw, 48px)",
              padding: "0 14%",
            }}
          >
            <span
              className="font-oswald font-bold uppercase w-full text-center"
              style={{
                fontSize: "clamp(11px, 2.6vw, 34px)",
                letterSpacing: "0.14em",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>Магазин </span>
              <span style={{ color: "#CC0000" }}>мотоэкипировки</span>
            </span>
          </div>

          {/* ══ СКИДКА ══ */}
          <div
            className="relative flex items-center justify-center gap-2"
            style={{
              zIndex: 1,
              background: "linear-gradient(90deg, #AA0000, #CC0000, #AA0000)",
              padding: "clamp(2px, 0.38vw, 5px) 0",
              margin: "clamp(3px, 0.45vw, 6px) 10%",
              borderRadius: 2,
            }}
          >
            <Icon name="Tag" size={10} className="text-yellow-300 flex-shrink-0" />
            <span
              className="font-oswald font-bold text-white uppercase"
              style={{ fontSize: "clamp(8px, 1.15vw, 14px)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}
            >
              При упоминании банера —{" "}
              <span style={{ color: "#FFE066", fontSize: "clamp(9px, 1.4vw, 17px)" }}>скидка 10%</span>
            </span>
            <Icon name="Tag" size={10} className="text-yellow-300 flex-shrink-0" />
          </div>

          {/* ══ ОСНОВНАЯ ЗОНА ══ */}
          <div
            className="relative flex"
            style={{
              zIndex: 1,
              gap: "clamp(3px, 0.5vw, 7px)",
              padding: "0 clamp(4px, 0.6vw, 8px)",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            {/* Левая колонка: лого + QR */}
            <div
              className="flex flex-col items-center"
              style={{
                width: "clamp(50px, 7.5vw, 88px)",
                flexShrink: 0,
                gap: "clamp(2px, 0.3vw, 4px)",
              }}
            >
              {/* Лого */}
              <div
                style={{
                  width: "100%",
                  flex: "1 1 0",
                  border: "2px solid rgba(255,255,255,0.75)",
                  borderRadius: 3,
                  overflow: "hidden",
                  minHeight: 0,
                }}
              >
                <img
                  src={LOGO_IMAGE}
                  alt="ARMORHEAD"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Сканируй QR + Авито */}
              <div className="flex flex-col items-center" style={{ flexShrink: 0, gap: "1px" }}>
                <span
                  className="font-oswald font-bold uppercase"
                  style={{ fontSize: "clamp(5px, 0.75vw, 9px)", color: "#fff", letterSpacing: "0.08em", lineHeight: 1 }}
                >
                  Сканируй QR
                </span>
                <div
                  style={{
                    background: "white",
                    borderRadius: 2,
                    padding: "1px 3px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={AVITO_IMAGE}
                    alt="Авито"
                    style={{ height: "clamp(6px, 0.9vw, 11px)", width: "auto", objectFit: "contain", display: "block" }}
                  />
                </div>
              </div>

              {/* QR */}
              <div
                style={{
                  flex: "1 1 0",
                  width: "100%",
                  minHeight: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "white",
                    padding: "2px",
                    border: "2px solid #CC0000",
                    borderRadius: 3,
                    width: "100%",
                    aspectRatio: "1/1",
                  }}
                >
                  <img
                    src={QR_IMAGE}
                    alt="QR"
                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
              </div>
            </div>

            {/* Карточки товаров */}
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.97)",
                  border: "1.5px solid rgba(204,0,0,0.45)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Цена */}
                <div
                  style={{
                    background: "rgba(0,0,0,0.72)",
                    padding: "clamp(1px, 0.22vw, 3px) 2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="font-oswald font-bold text-center"
                    style={{
                      fontSize: "clamp(7px, 1.1vw, 14px)",
                      color: "#fff",
                      letterSpacing: "0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {p.price}
                  </span>
                </div>

                {/* Картинка */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    minHeight: 0,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: "90%", height: "90%", objectFit: "contain" }}
                  />
                </div>

                {/* Подпись */}
                <div
                  style={{
                    background: "rgba(180,0,0,0.88)",
                    padding: "clamp(1px, 0.28vw, 4px) 2px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="font-oswald font-bold text-white text-center uppercase"
                    style={{ fontSize: "clamp(6px, 0.95vw, 12px)", letterSpacing: "0.07em", lineHeight: 1 }}
                  >
                    {p.name}
                  </span>
                  <span
                    className="font-roboto text-white text-center"
                    style={{
                      fontSize: "clamp(4px, 0.55vw, 7px)",
                      opacity: p.sub ? 0.9 : 0,
                      letterSpacing: "0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {p.sub ?? " "}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ══ АССОРТИМЕНТ ══ */}
          <div
            className="relative flex items-center justify-center gap-2"
            style={{
              zIndex: 1,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(204,0,0,0.45)",
              borderRadius: 3,
              padding: "clamp(2px, 0.35vw, 4px) clamp(5px, 0.7vw, 9px)",
              margin: "clamp(2px, 0.35vw, 5px) clamp(4px, 0.6vw, 8px)",
              flexShrink: 0,
            }}
          >
            <Icon name="Users" size={11} style={{ color: "#CC0000", flexShrink: 0 }} />
            <span
              className="font-oswald font-bold text-white uppercase text-center"
              style={{ fontSize: "clamp(7px, 0.95vw, 12px)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
            >
              В наличии большой ассортимент —{" "}
              <span style={{ color: "#CC0000" }}>для детей, подростков, взрослых</span>
            </span>
          </div>

          {/* ══ НИЖНЯЯ ПОЛОСА ══ */}
          <div
            className="relative flex items-center justify-between"
            style={{
              zIndex: 1,
              background: "rgba(0,0,0,0.6)",
              borderTop: "2px solid #CC0000",
              height: "clamp(26px, 4.8vw, 48px)",
              padding: "0 3%",
              flexShrink: 0,
            }}
          >
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={12} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-oswald font-bold"
                style={{ fontSize: "clamp(12px, 2.3vw, 29px)", letterSpacing: "0.04em", lineHeight: 1, whiteSpace: "nowrap" }}
              >
                <span className="text-white">+7 (985) </span>
                <span style={{ color: "#FF3333" }}>361-55-17</span>
              </span>
            </div>
            <div style={{ width: "2px", height: "50%", background: "rgba(204,0,0,0.5)" }} />
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={11} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-oswald text-white uppercase"
                style={{ fontSize: "clamp(9px, 1.7vw, 21px)", letterSpacing: "0.08em", whiteSpace: "nowrap" }}
              >
                ул. Корнилаева, 16
              </span>
            </div>
          </div>

          {/* Нижняя красная линия */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: "3px", background: "#CC0000", zIndex: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
