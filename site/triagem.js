'use strict';
// Regras determinísticas: nenhuma conversa é enviada a um modelo de IA.
window.AED_TRIAGEM = Object.freeze({
  audiences: Object.freeze({eu: 'Para mim', familiar: 'Para um familiar', outra: 'Para outra pessoa'}),
  needs: Object.freeze({cadastros: 'Cadastros e acessos', documentos: 'Documentos e imposto de renda', beneficios: 'Benefícios e pagamentos', prazos: 'Prazos e atualizações', outro: 'Ainda não sei dizer'}),
  timing: Object.freeze({agora: 'Preciso de ajuda agora', planejando: 'Estou me organizando', conhecendo: 'Só quero conhecer'}),
  normalizePhone(value) {
    const digits = String(value).replace(/\D/g, '');
    return /^(?:[1-9]{2})(?:[2-5]\d{7}|9\d{8})$/.test(digits) ? digits : null;
  },
  payload(answers, phone, consent) {
    if (!Object.hasOwn(this.audiences, answers.audience) || !Object.hasOwn(this.needs, answers.need) || !Object.hasOwn(this.timing, answers.timing)) throw new Error('Confira suas respostas.');
    const normalized = phone ? this.normalizePhone(phone) : null;
    if (phone && !normalized) throw new Error('Confira o telefone com DDD.');
    if (normalized && consent !== true) throw new Error('Autorize o contato ou continue sem telefone.');
    return {version: 'triagem-v1', audience: answers.audience, need: answers.need, timing: answers.timing, phone: normalized, contactConsent: Boolean(normalized && consent), source: 'pagina-aposentadoemdia'};
  }
});
