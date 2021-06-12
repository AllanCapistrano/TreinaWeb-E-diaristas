export const ValidationService = {
    /* Função para validar o CEP */
    cep(cep = ''): boolean {
        //Remove tudo aquilo que não for um número e verifica o tamanho da string.
        return cep.replace(/\D/g, '').length === 8;
    }
};