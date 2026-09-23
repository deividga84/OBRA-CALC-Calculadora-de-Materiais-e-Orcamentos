export const CAKTO_CHECKOUT_URL = "https://pay.cakto.com.br/aswukc5_1126364";

export const PRODUCT_INFO = {
  name: "OBRA CALC",
  subtitle: "Calculadora de Materiais e Orçamentos",
  price: "R$ 19,90",
  paymentType: "Pagamento único",
  description:
    "O OBRA CALC é a ferramenta prática e inteligente desenvolvida para estimar materiais, quantidades exatas e custos de obras e reformas de forma rápida e organizada.",
  disclaimer:
    "As informações fornecidas pelo OBRA CALC são estimativas e não substituem projetos, cálculos ou orientações de profissionais habilitados.",
};

export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  let base = '/';
  try {
    const metaEnv = typeof import.meta !== 'undefined' ? (import.meta as any)?.env : undefined;
    if (metaEnv && typeof metaEnv.BASE_URL === 'string') {
      base = metaEnv.BASE_URL;
    }
  } catch {
    base = '/';
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
