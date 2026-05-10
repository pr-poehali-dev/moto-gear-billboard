import Icon from "@/components/ui/icon";

const LOGO_IMAGE =
  "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/02ccc225-3a2f-4cbe-b806-29801425921f.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Моточерепаха",
    description: "Полная защита тела: грудь, спина, плечи, локти. Жёсткие вставки CE Level 2.",
    price: "от 4 900 ₽",
    image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/67e08aea-f35a-49c1-973e-f7c3c6b46a92.jpg",
    badge: "ХИТ",
  },
  {
    id: 2,
    name: "Перчатки мото",
    description: "Натуральная кожа, карбоновая защита костяшек, вентиляция, совместимость с сенсором.",
    price: "от 2 200 ₽",
    image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/746d157d-4dae-4fa9-afec-c81c97ea2d72.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Шлем для мотокросса",
    description: "Яркий принт, облегчённая конструкция, система вентиляции. Сертифицирован DOT.",
    price: "от 5 800 ₽",
    image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/e33c1ea6-1b6e-451b-850b-2743f8044c03.png",
    badge: "НОВИНКА",
  },
  {
    id: 4,
    name: "Очки мотокросс",
    description: "Зеркальная линза, двойное уплотнение, защита от запотевания. Совместимы со шлемом.",
    price: "от 1 800 ₽",
    image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/82f39a0d-1aed-4217-a4be-67e69464f066.jpg",
    badge: null,
  },
  {
    id: 5,
    name: "Наколенники и налокотники",
    description: "Комплект 4 шт. Жёсткая пластиковая защита, регулируемые ремни, подходят для кросса и эндуро.",
    price: "от 2 500 ₽",
    image: "https://cdn.poehali.dev/projects/4834ddfa-b5b1-416f-90be-792df54ccf24/bucket/4167775e-c0dd-4c55-96ce-260c675f57a5.jpg",
    badge: null,
  },
];

const Catalog = () => {
  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D", fontFamily: "Oswald, sans-serif" }}>

      {/* Header */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: "#0D0D0D", borderBottom: "2px solid #CC0000", boxShadow: "0 2px 20px rgba(204,0,0,0.3)" }}
      >
        <img src={LOGO_IMAGE} alt="ARMORHEAD" style={{ height: 52, objectFit: "contain" }} />
        <a
          href="tel:+79853615517"
          className="flex items-center gap-2"
          style={{ textDecoration: "none" }}
        >
          <Icon name="Phone" size={18} style={{ color: "#CC0000" }} />
          <span style={{ color: "#fff", fontSize: 20, letterSpacing: "0.02em" }}>
            +7 (985) <span style={{ color: "#CC0000" }}>361-55-17</span>
          </span>
        </a>
      </header>

      {/* Hero */}
      <section
        className="text-center py-12 px-4"
        style={{ borderBottom: "1px solid rgba(204,0,0,0.2)" }}
      >
        <p
          className="uppercase"
          style={{ color: "#CC0000", letterSpacing: "0.3em", fontSize: 12, marginBottom: 10 }}
        >
          В наличии · Быстрая выдача
        </p>
        <h1
          className="uppercase font-bold"
          style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 56px)", lineHeight: 1, letterSpacing: "0.04em" }}
        >
          Каталог <span style={{ color: "#CC0000" }}>мотоэкипировки</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", marginTop: 12, fontSize: 15, fontFamily: "Roboto, sans-serif" }}>
          При упоминании рекламы — скидка <span style={{ color: "#FFE066", fontWeight: 700 }}>10%</span>
        </p>
      </section>

      {/* Catalog grid */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(204,0,0,0.25)",
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#CC0000";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(204,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(204,0,0,0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", background: "#fff", height: 260 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: 16 }}
                />
                {product.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "#CC0000",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      padding: "3px 10px",
                      borderRadius: 2,
                    }}
                  >
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
                <h2
                  className="uppercase"
                  style={{ color: "#fff", fontSize: 20, letterSpacing: "0.04em", lineHeight: 1.1, margin: 0 }}
                >
                  {product.name}
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 13,
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: 1.5,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {product.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
                  <span
                    className="font-bold"
                    style={{ color: "#FFE066", fontSize: 20, letterSpacing: "0.02em" }}
                  >
                    {product.price}
                  </span>
                  <a
                    href="tel:+79853615517"
                    style={{
                      background: "#CC0000",
                      color: "#fff",
                      fontSize: 13,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "8px 16px",
                      borderRadius: 2,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Icon name="Phone" size={13} />
                    Позвонить
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <section
        className="text-center py-12 px-4"
        style={{ borderTop: "1px solid rgba(204,0,0,0.2)", marginTop: 20 }}
      >
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: "Roboto, sans-serif", marginBottom: 8 }}>
          Есть вопросы? Звоните — поможем с выбором!
        </p>
        <a
          href="tel:+79853615517"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "linear-gradient(90deg, #CC0000, #990000)",
            color: "#fff",
            fontSize: 22,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "14px 36px",
            borderRadius: 3,
            textDecoration: "none",
            fontFamily: "Oswald, sans-serif",
          }}
        >
          <Icon name="Phone" size={20} />
          +7 (985) 361-55-17
        </a>
      </section>
    </div>
  );
};

export default Catalog;
