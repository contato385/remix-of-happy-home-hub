# Atualizar número do WhatsApp

## O que faremos
Trocar o número de WhatsApp placeholder do site pelo número real do usuário, mantendo o link do rodapé funcionando corretamente.

## Passos

1. **Atualizar configuração de contato**
   - Arquivo: `src/lib/analytics-config.ts`
   - Alterar `CONTACT.whatsapp` de `"5599999999999"` para `"5511921237043"`

2. **Validar funcionamento**
   - O link do rodapé já usa `https://wa.me/${CONTACT.whatsapp}`, então ele passará a apontar automaticamente para `https://wa.me/5511921237043`
   - Rodar build para garantir que não há erros

3. **Verificar no preview**
   - Confirmar que o botão "WhatsApp" no rodapé abre o link correto

## Resultado esperado
O rodapé do site passa a mostrar e abrir o WhatsApp real do usuário ao clicar.
