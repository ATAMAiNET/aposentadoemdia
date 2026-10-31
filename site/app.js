'use strict';
const privacyDialog = document.getElementById('privacy-dialog');
document.getElementById('privacy-open').addEventListener('click', () => privacyDialog.showModal());
document.getElementById('privacy-close').addEventListener('click', () => privacyDialog.close());
const rules = window.AED_TRIAGEM;
const chat = document.getElementById('chat-dialog');
const stage = document.getElementById('chat-stage');
const progress = document.getElementById('chat-progress');
const back = document.getElementById('chat-back');
const reset = document.getElementById('chat-reset');
const config = window.AED_CONFIG || {};
// Uma URL válida não substitui a revisão do aviso de privacidade.
let endpoint = null;
try { const url = new URL(config.leadEndpoint); if (config.collectionEnabled === true && url.protocol === 'https:' && !url.username && !url.password) endpoint = url.href; } catch {}
if (endpoint) document.getElementById('chat-mode').textContent = 'Suas respostas só serão enviadas depois de você conferir e confirmar.';
let step = 0;
let answers = {};
let phone = '';
let consent = false;
let sending = false;
let requestId = null;
let controller = null;
function element(tag, text, className) { const node = document.createElement(tag); if (text) node.textContent = text; if (className) node.className = className; return node; }
function button(text, action, className = 'choice') { const node = element('button', text, className); node.type = 'button'; node.addEventListener('click', action); return node; }
function clear() { step = 0; answers = {}; phone = ''; consent = false; sending = false; requestId = null; }
function focusHeading() { const h = stage.querySelector('h3'); if (h) { h.tabIndex = -1; h.focus(); } }
function advance(key, value) { answers[key] = value; requestId = null; step++; render(); }
function error(text) { let node = document.getElementById('chat-error'); if (!node) {node = element('p', '', 'chat-error'); node.id = 'chat-error'; node.setAttribute('role', 'alert'); stage.append(node);} node.textContent = text; }
function render() {
  stage.replaceChildren(); back.hidden = step === 0 || step === 5; reset.hidden = step === 5;
  progress.textContent = step < 5 ? `Etapa ${step + 1} de 5` : '';
  const questions = [ ['A ajuda é para quem?', 'audience', rules.audiences], ['Com o que você precisa de ajuda?', 'need', rules.needs], ['Quando você gostaria de receber ajuda?', 'timing', rules.timing] ];
  if (step < 3) { const [question, key, options] = questions[step]; stage.append(element('h3', question)); const list = element('div', '', 'choices'); for (const [value, label] of Object.entries(options)) list.append(button(label, () => advance(key, value))); stage.append(list); }
  else if (step === 3) {
    stage.append(element('h3', 'Quer que a gente entre em contato?'));
    stage.append(element('p', 'O telefone é opcional. Você também pode apenas registrar seu interesse. Não há prazo de retorno garantido.'));
    const form = element('form'); form.noValidate = true;
    const label = element('label', 'Telefone com DDD (opcional)'); label.htmlFor = 'lead-phone';
    const input = element('input'); input.id = 'lead-phone'; input.type = 'tel'; input.inputMode = 'tel'; input.autocomplete = 'tel-national'; input.maxLength = 20; input.value = phone; input.setAttribute('aria-describedby', 'phone-help');
    const help = element('p', 'Se informar um telefone, autorize o contato abaixo.', 'fine'); help.id = 'phone-help';
    const consentLabel = element('label', '', 'consent-label'); const check = element('input'); check.type = 'checkbox'; check.checked = consent;
    consentLabel.append(check, element('span', 'Autorizo usar este telefone apenas para responder ao meu interesse no Aposentado em Dia.'));
    const next = element('button', 'Conferir minhas respostas', 'button'); next.type = 'submit';
    form.append(label, input, help, consentLabel, next);
    form.addEventListener('submit', event => { event.preventDefault(); try { rules.payload(answers, input.value.trim(), check.checked); phone = input.value.trim(); consent = Boolean(phone && check.checked); step = 4; render(); } catch (e) { error(e.message); } });
    stage.append(form, button('Continuar sem telefone', () => { phone = ''; consent = false; step = 4; render(); }, 'text-button no-phone'));
  } else if (step === 4) {
    stage.append(element('h3', 'Está tudo certo?'));
    const list = element('dl', '', 'review'); for (const [term, value] of [['A ajuda é', rules.audiences[answers.audience]], ['Assunto', rules.needs[answers.need]], ['Momento', rules.timing[answers.timing]], ['Telefone', phone || 'Não informado'], ['Contato autorizado', phone && consent ? 'Sim, para responder a esta solicitação' : 'Não']]) list.append(element('dt', term), element('dd', value));
    stage.append(list, element('p', 'O assistente registra interesse. Não realiza análise de benefício, orientação fiscal ou contratação.'));
    if (!endpoint) stage.append(element('p', 'Esta é uma demonstração. Suas respostas não serão enviadas nem salvas.', 'chat-demo'));
    stage.append(button(endpoint ? 'Enviar meu interesse' : 'Concluir demonstração', async () => {
      if (sending) return;
      if (!endpoint) { clear(); step = 5; render(); return; }
      const payload = rules.payload(answers, phone, consent);
      requestId ||= crypto.randomUUID();
      sending = true; back.disabled = true; reset.disabled = true; document.getElementById('chat-close').disabled = true;
      const submit = stage.querySelector('.button'); submit.disabled = true; submit.textContent = 'Enviando…';
      controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 15000);
      try {
        const response = await fetch(endpoint, {method: 'POST', headers: {'Content-Type': 'application/json'}, credentials: 'omit', referrerPolicy: 'no-referrer', body: JSON.stringify({...payload, requestId}), signal: controller.signal});
        if (!response.ok) throw new Error('Não foi possível confirmar o recebimento.');
        const result = await response.json(); if (result.ok !== true || result.requestId !== requestId) throw new Error('Não foi possível confirmar o recebimento.');
        clear(); step = 5; render();
      } catch { error('Não conseguimos confirmar o envio. Você pode tentar novamente. Suas respostas continuam aqui enquanto a página estiver aberta.'); submit.disabled = false; submit.textContent = 'Tentar novamente'; }
      finally {clearTimeout(timeout); controller = null; sending = false; back.disabled = false; reset.disabled = false; document.getElementById('chat-close').disabled = false;}
    }, 'button'));
  } else {
    stage.append(element('h3', endpoint ? 'Interesse recebido.' : 'Demonstração concluída.'));
    stage.append(element('p', endpoint ? 'Obrigado. Se você deixou telefone e autorizou, ele será usado para responder à sua solicitação. O contato não garante contratação nem atendimento imediato.' : 'Nada foi enviado ou salvo. O atendimento será habilitado depois de conectar o recebimento privado das respostas.'));
    stage.append(button('Fechar', () => chat.close(), 'button'));
  }
  focusHeading();
}
document.getElementById('chat-open').addEventListener('click', () => { if (!chat.open) { clear(); chat.showModal(); render(); } });
document.getElementById('chat-close').addEventListener('click', () => { if (!sending) chat.close(); });
chat.addEventListener('cancel', event => { if (sending) event.preventDefault(); });
chat.addEventListener('close', () => { if (controller) controller.abort(); clear(); stage.replaceChildren(); });
back.addEventListener('click', () => { if (!sending && step > 0) {step--; render();} });
reset.addEventListener('click', () => { if (!sending) {clear(); render();} });
