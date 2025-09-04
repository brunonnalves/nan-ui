import { MaskTypes } from '../types/maskTypes';

export const formatCurrency = (value: string): string => {
  if (!value) return '';
  let numericValue = cleanMaskedValue(value); // Remove tudo que não for número
  let floatValue = (parseInt(numericValue, 10) / 100).toFixed(2); // Converte para decimal
  return `R$ ${floatValue.replace('.', ',')}`;
};

const formatDateTime = (value: string): string => {
  let numericValue = cleanMaskedValue(value); // Remove tudo que não for número

  // Limita o tamanho para dd/mm/yyyy hh:mm
  if (numericValue.length > 12) {
    numericValue = numericValue.substring(0, 12);
  }

  // BLOQUEIA ENTRADA INVÁLIDA EM CADA PARTE
  let day = numericValue.substring(0, 2);
  let month = numericValue.substring(2, 4);
  let year = numericValue.substring(4, 8);
  let hour = numericValue.substring(8, 10);
  let minute = numericValue.substring(10, 12);

  // DIA: Primeiro dígito só pode ser 0-3, e dd não pode ser > 31
  if (day.length === 1 && !/[0-3]/.test(day)) day = '';
  if (day.length === 2 && parseInt(day) > 31) day = '31';

  // MÊS: Primeiro dígito só pode ser 0-1, e mm não pode ser > 12
  if (month.length === 1 && !/[0-1]/.test(month)) month = '';
  if (month.length === 2 && parseInt(month) === 0) month = '01';
  if (month.length === 2 && parseInt(month) > 12) month = '12';

  // ANO: Não pode ser menor que o ano atual
  const currentYear = new Date().getFullYear();
  if (year.length === 4 && parseInt(year) < currentYear)
    year = String(currentYear);

  // HORA: Primeiro dígito só pode ser 0-2, e hh não pode ser > 23
  if (hour.length === 1 && !/[0-2]/.test(hour)) hour = '';
  if (hour.length === 2 && parseInt(hour) > 23) hour = '23';

  // MINUTO: Primeiro dígito só pode ser 0-5, e mm não pode ser > 59
  if (minute.length === 1 && !/[0-5]/.test(minute)) minute = '';
  if (minute.length === 2 && parseInt(minute) > 59) minute = '59';

  // Aplica a formatação correta: dd/mm/yyyy hh:mm
  let formatted = '';
  if (day) formatted += day;
  if (month) formatted += `/${month}`;
  if (year) formatted += `/${year}`;
  if (hour) formatted += ` ${hour}`;
  if (minute) formatted += `:${minute}`;

  return formatted;
};

const formatTime = (value: string): string => {
  let numericValue = cleanMaskedValue(value); // Remove tudo que não for número

  // Limita o tamanho para hh:mm
  if (numericValue.length > 4) {
    numericValue = numericValue.substring(0, 4);
  }

  // BLOQUEIA ENTRADA INVÁLIDA EM CADA PARTE
  let hour = numericValue.substring(0, 2);
  let minute = numericValue.substring(2, 4);

  // HORA: Primeiro dígito só pode ser 0-2, e hh não pode ser > 23
  if (hour.length === 1 && !/[0-2]/.test(hour)) hour = '';
  if (hour.length === 2 && parseInt(hour) > 23) hour = '23';

  // MINUTO: Primeiro dígito só pode ser 0-5, e mm não pode ser > 59
  if (minute.length === 1 && !/[0-5]/.test(minute)) minute = '';
  if (minute.length === 2 && parseInt(minute) > 59) minute = '59';

  // Aplica a formatação correta: hh:mm
  let formatted = '';
  if (hour) formatted += ` ${hour}`;
  if (minute) formatted += `:${minute}`;

  return formatted;
};

export const formatCpf = (value: string): string => {
  let numericValue = cleanMaskedValue(value); // Remove tudo que não for número
  if (numericValue.length > 11) numericValue = numericValue.slice(0, 11);

  let formatted = numericValue
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

  return formatted;
};

export const formatCnpj = (value: string): string => {
  let numericValue = cleanMaskedValue(value); // Remove tudo que não for número
  if (numericValue.length > 14) numericValue = numericValue.slice(0, 14);

  let formatted = numericValue
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4')
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5');

  return formatted;
};

export const formatCep = (value: string): string => {
  let numericValue = cleanMaskedValue(value); // Remove tudo que não for número
  if (numericValue.length > 8) numericValue = numericValue.slice(0, 8);

  let formatted = numericValue.replace(/^(\d{5})(\d)/, '$1-$2');

  return formatted;
};

export const formatNaturalNumber = (value: string): string => {
  let numericValue = cleanMaskedValue(value); // Remove tudo que não for número

  // Garante que o número é maior que zero e remove zeros à esquerda
  const naturalNumber = numericValue.replace(/^0+/, '') || '0';
  return naturalNumber;
};

const formatPhone = (value: string): string => {
  let numericValue = cleanMaskedValue(value);
  if (numericValue.length > 11) numericValue = numericValue.slice(0, 11);

  // Aplica a máscara: (99) 99999-9999
  return numericValue
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/^(\(\d{2}\)) (\d{5})(\d)/, '$1 $2-$3');
};

export const applyMask = (value: string, mask?: MaskTypes) => {
  if (!mask) return value;

  switch (mask) {
    case 'currency':
      return formatCurrency(value);
    case 'datetime':
      return formatDateTime(value);
    case 'time':
      return formatTime(value);
    case 'cpf':
      return formatCpf(value);
    case 'cnpj':
      return formatCnpj(value);
    case 'cep':
      return formatCep(value);
    case 'naturalNumber':
      return formatNaturalNumber(value);
    case 'phone':
      return formatPhone(value);
    default:
      return value;
  }
};

export const cleanMaskedValue = (value: string) => {
  return value.replace(/\D/g, ''); // Remove tudo que não for número
};
