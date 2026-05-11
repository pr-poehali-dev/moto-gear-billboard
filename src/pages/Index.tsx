import Icon from "@/components/ui/icon";

const MOTO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/files/d403021e-fe56-4fd3-a30a-c51518c97a3f.jpg";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/02ccc225-3a2f-4cbe-b806-29801425921f.png";

const QR_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/6841c3b9-5c51-4fce-b7e2-0c3a6a81f1a1.png";

const AVITO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/f66e4460-774f-43be-9ed7-3d973c48ce10.png";

const LEFT_PRODUCTS = [
  { name: "Перчатки", sub: null, price: "От 990 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/e23edbee-8280-4fc3-b1b3-3c05dd87d008.jpg" },
  { name: "Шлемы", sub: "разные цвета и модели", price: "От 2 790 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/cf0a68c7-7017-4928-b215-f4fbe2f7f80d.png" },
];
const RIGHT_PRODUCTS = [
  { name: "Черепахи", sub: "Рост от 130 до 200 см", price: "От 2 490 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/78a75afc-2ae1-4ff5-8722-c788e7204a05.jpg" },
  { name: "Защита", sub: null, price: "От 990 ₽", image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/ae305737-01dd-4826-9f38-8e6793636877.jpg" },
];

// Высота нижней подписи фиксирована — все карточки выровнены по нижней границе
const LABEL_H = "clamp(20px, 3vw, 38px)";

const ProductCard = ({ p }: { p: { name: string; sub: string | null; price: string; image: string } }) => (
  <div
    style={{
      flex: "1 1 0",
      minWidth: 0,
      borderRadius: 4,
      overflow: "hidden",
      background: "rgba(255,255,255,0.97)",
      border: "1.5px solid rgba(204,0,0,0.45)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}
  >
    {/* Цена сверху */}
    <div
      style={{
        background: "rgba(0,0,0,0.72)",
        padding: "clamp(1px, 0.2vw, 3px) 2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        className="font-oswald font-bold text-center"
        style={{ fontSize: "clamp(9px, 1.4vw, 18px)", color: "#fff", letterSpacing: "0.03em", lineHeight: 1 }}
      >
        {p.price}
      </span>
    </div>

    {/* Картинка — оставляем место под подпись снизу */}
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", minHeight: 0, padding: "1px", paddingBottom: LABEL_H }}>
      <img src={p.image} alt={p.name} style={{ maxWidth: "99%", maxHeight: "99%", objectFit: "contain" }} />
    </div>

    {/* Подпись — абсолютно внизу, фиксированная высота → верхняя граница всегда на одном уровне */}
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: LABEL_H,
        background: "rgba(180,0,0,0.88)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <span
        className="font-oswald font-bold text-white text-center uppercase"
        style={{ fontSize: "clamp(9px, 1.3vw, 17px)", letterSpacing: "0.07em", lineHeight: 1 }}
      >
        {p.name}
      </span>
      <span
        className="font-roboto text-white text-center"
        style={{ fontSize: "clamp(6px, 0.8vw, 10px)", opacity: p.sub ? 0.9 : 0, letterSpacing: "0.03em", lineHeight: 1 }}
      >
        {p.sub ?? " "}
      </span>
    </div>
  </div>
);

const Index = () => {
  // Трапеция 113×60 — срез сверху: 8.4% с каждой стороны.
  // При высоте ~53% (основная зона сверху) срез составляет ~8.4% * (53%/100%) ≈ 4.4% от ширины с каждой стороны.
  // Верхняя часть основной зоны срезается сильнее — отступ по 7% с каждой стороны гарантирует что карточки целые.
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
            <img src={MOTO_IMAGE} alt="" className="w-full h-full object-cover" style={{ opacity: 0.12 }} />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.82)" }} />
          </div>

          {/* ══ ШАПКА ══ */}
          <div
            className="relative flex items-center justify-center"
            style={{
              zIndex: 1,
              background: "#0D0D0D",
              borderBottom: "2px solid #CC0000",
              height: "clamp(34px, 6.5vw, 64px)",
              padding: "0 14%",
            }}
          >
            <span
              className="font-oswald font-bold uppercase w-full text-center"
              style={{
                fontSize: "clamp(16px, 4vw, 52px)",
                letterSpacing: "0.12em",
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
              margin: "clamp(3px, 0.45vw, 6px) 12%",
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

          {/* ══ ОСНОВНАЯ ЗОНА ══
               Отступы по бокам — 6.5% чтобы крайние карточки не попадали под срез трапеции сверху.
               Карточки уменьшены: flex 0.8 вместо 1, чтобы оставалось больше воздуха.
          */}
          <div
            className="relative flex items-stretch py-[23px]"
            style={{
              zIndex: 1,
              gap: "clamp(3px, 0.45vw, 6px)",
              padding: "clamp(6px, 1.2vw, 14px) 6.5% clamp(2px, 0.3vw, 4px)",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            {/* Левые карточки — уменьшены */}
            <div className="flex gap-[clamp(3px,0.45vw,6px)]" style={{ flex: "1.6 1 0", minWidth: 0 }}>
              {LEFT_PRODUCTS.map((p) => <ProductCard key={p.name} p={p} />)}
            </div>

            {/* Центральная колонка: Лого + QR */}
            <div
              className="flex flex-col items-center"
              style={{
                width: "clamp(70px, 10.5vw, 120px)",
                flexShrink: 0,
                gap: "clamp(3px, 0.5vw, 7px)",
                justifyContent: "flex-start",
              }}
            >
              {/* Лого — квадрат, тонкая рамка, немного опущен */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  flexShrink: 0,
                  outline: "1px solid rgba(255,255,255,0.6)",
                  borderRadius: 4,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                  boxSizing: "border-box",
                  marginTop: "clamp(6px, 1.2vw, 16px)",
                }}
              >
                <img
                  src={LOGO_IMAGE}
                  alt="ARMORHEAD"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>

              {/* Распорка сверху — половина оставшегося места */}
              <div style={{ flex: 1, minHeight: 0 }} />

              {/* Сканируй QR + Авито + QR — в центре */}
              <div className="flex flex-col items-center" style={{ flexShrink: 0, gap: "2px" }}>
                <span
                  className="font-oswald font-bold uppercase"
                  style={{ fontSize: "clamp(5px, 0.8vw, 10px)", color: "#fff", letterSpacing: "0.08em", lineHeight: 1 }}
                >
                  Сканируй QR
                </span>
                <div style={{ background: "white", borderRadius: 2, padding: "1px 4px", display: "flex", alignItems: "center" }}>
                  <img
                    src={AVITO_IMAGE}
                    alt="Авито"
                    style={{ height: "clamp(7px, 1vw, 13px)", width: "auto", objectFit: "contain", display: "block" }}
                  />
                </div>

                {/* QR прямо под надписью */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    background: "white",
                    padding: "3px",
                    border: "1px solid #CC0000",
                    borderRadius: 4,
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1px",
                  }}
                >
                  <img src={QR_IMAGE} alt="QR" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
              </div>

              {/* Распорка снизу */}
              <div style={{ flex: 1, minHeight: 0 }} />
            </div>

            {/* Правые карточки — уменьшены */}
            <div className="flex gap-[clamp(3px,0.45vw,6px)]" style={{ flex: "1.6 1 0", minWidth: 0 }}>
              {RIGHT_PRODUCTS.map((p) => <ProductCard key={p.name} p={p} />)}
            </div>
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
            className="relative flex items-center justify-center gap-6"
            style={{
              zIndex: 1,
              background: "rgba(0,0,0,0.6)",
              borderTop: "2px solid #CC0000",
              height: "clamp(30px, 5.8vw, 58px)",
              padding: "0 3%",
              flexShrink: 0,
            }}
          >
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={14} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-oswald font-bold"
                style={{ fontSize: "clamp(18px, 4.2vw, 52px)", letterSpacing: "0.05em", lineHeight: 1, whiteSpace: "nowrap" }}
              >
                <span className="text-white">+7 (985) </span>
                <span style={{ color: "#FF3333" }}>361-55-17</span>
              </span>
            </div>
            <div style={{ width: "2px", height: "50%", background: "rgba(204,0,0,0.5)" }} />
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={13} style={{ color: "#CC0000", flexShrink: 0 }} />
              <span
                className="font-oswald text-white uppercase"
                style={{ fontSize: "clamp(10px, 1.9vw, 24px)", letterSpacing: "0.08em", whiteSpace: "nowrap" }}
              >
                ул. Корнилаева, 16
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0" style={{ height: "3px", background: "#CC0000", zIndex: 2 }} />
        </div>
      </div>
    </div>
  );
};

export default Index;