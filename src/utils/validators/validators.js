//export type fieldMaxLengthCreator=(maxLength: number)=>(value: string)=>undefined| string;

export const requiredField = (value) => {
    if (value) return undefined;
    return 'Поле обязательное к заполнению';
};
export const numberField = (value) => {
    if (value.length==12 && /^380/.test(value)) return undefined;
    return 'Телефон (должен быть формата - 380991234567)';
};
export const oneOrTwoField = (value) => {
    if (value==1 || value==2) return undefined;
    return '1-поставщик, 2-заказчик)';
};
export const maxLengthCreator=(maxLength)=>(value)=>{
    if (value.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};