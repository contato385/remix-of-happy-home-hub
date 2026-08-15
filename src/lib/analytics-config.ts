/**
 * Preencha os IDs abaixo para ativar as integrações.
 * Enquanto estiverem vazios, nenhum script de terceiros é carregado.
 */
export const ANALYTICS = {
  metaPixelId: "2298825954379543",
  ga4Id: "",
  gtmId: "",
};

const whatsappText = encodeURIComponent(
  "Oi! Tenho interesse em criar meu site profissional com a NetzSite. Quero saber mais sobre o plano de R$ 67,90/mês e como funciona a entrega em até 24 horas. Pode me ajudar?"
);

export const CONTACT = {
  whatsapp: "5511921237043",
  email: "contato@seusite.com.br",
  brand: "NetzSite",
  price: "R$ 67,90",
  checkoutUrl: `https://wa.me/5511921237043?text=${whatsappText}`,
};
