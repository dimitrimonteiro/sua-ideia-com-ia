// ============ CONFIGURAÇÕES CENTRALIZADAS ============
// Link do checkout da Kirvano (usado por TODOS os botões de compra)
export const CHECKOUT_URL = "LINK_CHECKOUT_KIRVANO";

// Capa real do e-book: coloque o arquivo em /public/capa.png e use "/capa.png".
// Se ficar vazio, a página usa uma capa ilustrativa feita em CSS.
export const COVER_IMAGE = "";

// Oferta: preencha apenas o que for real. Campos vazios não aparecem na página.
export const OFFER = {
  price: "",          // ex.: "R$ 00,00"
  oldPrice: "",       // ex.: "R$ 00,00" (opcional)
  paymentNote: "",    // ex.: "ou 12x de R$ 0,00" (opcional)
  guarantee: "",      // ex.: texto da garantia (opcional)
  bonuses: [],        // ex.: ["Bônus 1", "Bônus 2"] (opcional)
};
