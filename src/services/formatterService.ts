export const FormatterService = {
    currency(value: number): string {
        return value.toLocaleString('pt-BR', {minimumFractionDigits: 2,
                                              style: 'currency',
                                              currency: 'BRL'});
    },
    limitText(text: string): string {
        if (text.length < 50) {
            return text;
        }
        return text.slice(50) + '...';
    }
}