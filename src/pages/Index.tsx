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

// Трапеция: нижнее 113, верхнее 94, высота 60
// Срез сверху: (113-94)/2/113 = 8.4% с каждой стороны
// Шапка и нижняя полоса используют justify-content: space-between
// чтобы растянуться на всю ширину доступной зоны

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#111" }}>
      {/* Внешняя обёртка — красная рамка трапеции */}
      <div
        style={{
          position: "relative",
          maxWidth: "1130px",
          width: "100%",
          aspectRatio: "113 / 60",
          clipPath: "polygon(8.4% 0%, 91.6% 0%, 100% 100%, 0% 100%)",
          boxShadow: "0 0 60px rgba(204,0,0,0.5)",
          padding: "3px",
          background: "#CC0000",
        }}
      >
        {/* Внутренний билборд */}
        <div
          className="relative w-full h-full flex flex-col"
          style={{
            background: "#0D0D0D",
            clipPath: "polygon(8.4% 0%, 91.6% 0%, 100% 100%, 0% 100%)",
            overflow: "hidden",
          }}
        >
          {/* Фон */}
          <div className="absolute inset-0">
            <img src={MOTO_IMAGE} alt="bg" className="w-full h-full object-cover" style={{ objectPosition: "center", opacity: 0.12 }} />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.82)" }} />
          </div>

          {/* ══ ШАПКА — растянута на всю строку ══ */}
          <div
            className="relative z-10 flex items-center justify-between"
            style={{
              background: "#0D0D0D",
              flexShrink: 0,
              borderBottom: "2px solid #CC0000",
              height: "clamp(28px, 5vw, 50px)",
              padding: "0 13% 0 13%",
            }}
          >
            <span
              className="font-oswald font-bold uppercase w-full text-center"
              style={{ fontSize: "clamp(12px, 2.8vw, 36px)", letterSpacing: "0.12em", lineHeight: 1 }}
            >
              <span style={{ color: "#FFFFFF" }}>Магазин </span>
              <span style={{ color: "#CC0000" }}>мотоэкипировки</span>
            </span>
          </div>

          {/* ══ ОСНОВНАЯ ЗОНА ══ */}
          <div
            className="relative z-10 flex flex-col flex-1 min-h-0"
            style={{ padding: "clamp(3px, 0.5vw, 8px)", gap: "clamp(2px, 0.35vw, 5px)" }}
          >
            {/* Скидка */}
            <div
              className="flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(90deg, #AA0000, #CC0000, #AA0000)",
                padding: "clamp(2px, 0.4vw, 5px) clamp(6px, 1vw, 12px)",
                flexShrink: 0,
                margin: "0 9%",
              }}
            >
              <Icon name="Tag" size={11} className="text-yellow-300 flex-shrink-0" />
              <span className="font-oswald font-bold text-white uppercase"
                style={{ fontSize: "clamp(8px, 1.2vw, 15px)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                При упоминании банера —{" "}
                <span style={{ color: "#FFE066", fontSize: "clamp(9px, 1.5vw, 18px)" }}>скидка 10%</span>
              </span>
              <Icon name="Tag" size={11} className="text-yellow-300 flex-shrink-0" />
            </div>

            {/* Ряд: лого+QR слева, картинки справа */}
            <div style={{ display: "flex", gap: "clamp(3px, 0.5vw, 8px)", flex: 1, minHeight: 0 }}>

              {/* LEFT — Лого + QR, строго по высоте */}
              <div
                className="flex flex-col items-center"
                style={{ width: "clamp(55px, 8.5vw, 100px)", flexShrink: 0, gap: "clamp(2px, 0.35vw, 5px)" }}
              >
                {/* Лого */}
                <div style={{ flex: "0 0 48%", width: "100%", border: "2px solid rgba(255,255,255,0.75)", borderRadius: 3, overflow: "hidden" }}>
                  <img
                    src={LOGO_IMAGE}
                    alt="ARMORHEAD"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>

                {/* Надпись + логотип Авито */}
                <div className="flex flex-col items-center" style={{ flexShrink: 0, gap: 1 }}>
                  <span
                    className="font-oswald font-bold uppercase"
                    style={{ fontSize: "clamp(6px, 0.8vw, 10px)", color: "#ffffff", letterSpacing: "0.08em" }}
                  >
                    Сканируй QR
                  </span>
                  <div style={{ background: "white", borderRadius: 2, padding: "1px 3px", display: "flex", alignItems: "center" }}>
                    <img
                      src={AVITO_IMAGE}
                      alt="Авито"
                      style={{ height: "clamp(7px, 1vw, 12px)", width: "auto", objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* QR — квадратный, не вылезает */}
                <div style={{ flex: "0 0 40%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ background: "white", padding: "2px", border: "2px solid #CC0000", borderRadius: 3, width: "100%", aspectRatio: "1/1" }}>
                    <img src={QR_IMAGE} alt="QR" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                  </div>
                </div>
              </div>

              {/* Картинки товаров — уменьшены */}
              {PRODUCTS.map((p) => (
                <div key={p.name} style={{ flex: 1, minWidth: 0, maxWidth: "22%", position: "relative" }}>
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
                    {/* Цена сверху */}
                    <div
                      style={{
                        position: "absolute", top: 0, left: 0, right: 0,
                        background: "rgba(0,0,0,0.72)",
                        padding: "clamp(2px, 0.25vw, 3px) 2px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        zIndex: 1,
                      }}
                    >
                      <span className="font-oswald font-bold text-center"
                        style={{ fontSize: "clamp(8px, 1.2vw, 15px)", color: "#ffffff", letterSpacing: "0.03em", lineHeight: 1 }}>
                        {p.price}
                      </span>
                    </div>

                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: "75%",
                        height: "75%",
                        objectFit: "contain",
                      }}
                    />

                    {/* Подпись снизу */}
                    <div
                      style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        background: "rgba(180,0,0,0.88)",
                        padding: "clamp(2px, 0.3vw, 4px) 2px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <span className="font-oswald font-bold text-white text-center uppercase"
                        style={{ fontSize: "clamp(7px, 1vw, 13px)", letterSpacing: "0.07em", lineHeight: 1 }}>
                        {p.name}
                      </span>
                      <span className="font-roboto text-white text-center"
                        style={{ fontSize: "clamp(5px, 0.6vw, 7px)", opacity: p.sub ? 0.9 : 0, letterSpacing: "0.03em", lineHeight: 1 }}>
                        {p.sub ?? "placeholder"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ассортимент — по центру по вертикальной оси */}
            <div
              className="flex items-center justify-center gap-2"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(204,0,0,0.5)",
                borderRadius: 3,
                padding: "clamp(2px, 0.4vw, 5px) clamp(6px, 0.8vw, 10px)",
                flexShrink: 0,
                alignSelf: "center",
                width: "fit-content",
                margin: "0 auto",
              }}
            >
              <Icon name="Users" size={12} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span className="font-oswald font-bold text-white uppercase"
                style={{ fontSize: "clamp(7px, 1vw, 13px)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                В наличии большой ассортимент —{" "}
                <span style={{ color: "#CC0000" }}>для детей, подростков, взрослых</span>
              </span>
            </div>
          </div>

          {/* ══ НИЖНЯЯ ПОЛОСА — растянута на всю ширину ══ */}
          <div
            className="relative z-10 flex items-center justify-between"
            style={{
              background: "rgba(0,0,0,0.55)",
              borderTop: "2px solid #CC0000",
              flexShrink: 0,
              height: "clamp(28px, 5vw, 50px)",
              padding: "0 3%",
            }}
          >
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={13} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span className="font-oswald font-bold" style={{ fontSize: "clamp(13px, 2.4vw, 30px)", letterSpacing: "0.04em", lineHeight: 1, whiteSpace: "nowrap" }}>
                <span className="text-white">+7 (985) </span>
                <span style={{ color: "#FF3333" }}>361-55-17</span>
              </span>
            </div>
            <div style={{ width: "2px", height: "50%", background: "rgba(204,0,0,0.5)" }} />
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={12} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span className="font-oswald text-white uppercase" style={{ fontSize: "clamp(10px, 1.8vw, 22px)", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
                ул. Корнилаева, 16
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0" style={{ height: "3px", background: "#CC0000" }} />
        </div>
      </div>
    </div>
  );
};

export default Index;
