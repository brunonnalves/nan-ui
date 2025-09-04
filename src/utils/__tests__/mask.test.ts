import { MaskTypes } from '../../types/maskTypes';
import {
  applyMask,
  formatCurrency,
  formatCpf,
  formatCnpj,
  formatCep,
  formatNaturalNumber,
  cleanMaskedValue,
} from '../mask';

describe('Mask Utils', () => {
  describe('cleanMaskedValue', () => {
    it('should remove all non-numeric characters', () => {
      expect(cleanMaskedValue('abc123def456')).toBe('123456');
      expect(cleanMaskedValue('12.345.678-90')).toBe('1234567890');
      expect(cleanMaskedValue('(11) 99999-9999')).toBe('11999999999');
      expect(cleanMaskedValue('R$ 1.234,56')).toBe('123456');
      expect(cleanMaskedValue('')).toBe('');
      expect(cleanMaskedValue('abc')).toBe('');
    });
  });

  describe('formatCurrency', () => {
    it('should format currency correctly', () => {
      expect(formatCurrency('12345')).toBe('R$ 123,45');
      expect(formatCurrency('1000')).toBe('R$ 10,00');
      expect(formatCurrency('100')).toBe('R$ 1,00');
      expect(formatCurrency('10')).toBe('R$ 0,10');
      expect(formatCurrency('1')).toBe('R$ 0,01');
      expect(formatCurrency('0')).toBe('R$ 0,00');
    });

    it('should handle empty string', () => {
      expect(formatCurrency('')).toBe('');
    });

    it('should handle large numbers', () => {
      expect(formatCurrency('123456789')).toBe('R$ 1234567,89');
    });
  });

  describe('formatCpf', () => {
    it('should format CPF correctly', () => {
      expect(formatCpf('12345678901')).toBe('123.456.789-01');
      expect(formatCpf('1234567890')).toBe('123.456.789-0');
      expect(formatCpf('123456789')).toBe('123.456.789');
      expect(formatCpf('12345678')).toBe('123.456.78');
      expect(formatCpf('1234567')).toBe('123.456.7');
      expect(formatCpf('123456')).toBe('123.456');
      expect(formatCpf('12345')).toBe('123.45');
      expect(formatCpf('1234')).toBe('123.4');
      expect(formatCpf('123')).toBe('123');
      expect(formatCpf('12')).toBe('12');
      expect(formatCpf('1')).toBe('1');
    });

    it('should limit CPF to 11 digits', () => {
      expect(formatCpf('123456789012')).toBe('123.456.789-01');
    });

    it('should handle empty string', () => {
      expect(formatCpf('')).toBe('');
    });
  });

  describe('formatCnpj', () => {
    it('should format CNPJ correctly', () => {
      expect(formatCnpj('12345678901234')).toBe('12.345.678/9012-34');
      expect(formatCnpj('1234567890123')).toBe('12.345.678/9012-3');
      expect(formatCnpj('12345678901')).toBe('12.345.678/901');
      expect(formatCnpj('1234567890')).toBe('12.345.678/90');
      expect(formatCnpj('123456789')).toBe('12.345.678/9');
      expect(formatCnpj('12345678')).toBe('12.345.678');
      expect(formatCnpj('1234567')).toBe('12.345.67');
      expect(formatCnpj('123456')).toBe('12.345.6');
      expect(formatCnpj('12345')).toBe('12.345');
      expect(formatCnpj('1234')).toBe('12.34');
      expect(formatCnpj('123')).toBe('12.3');
      expect(formatCnpj('12')).toBe('12');
      expect(formatCnpj('1')).toBe('1');
    });

    it('should limit CNPJ to 14 digits', () => {
      expect(formatCnpj('123456789012345')).toBe('12.345.678/9012-34');
    });

    it('should handle empty string', () => {
      expect(formatCnpj('')).toBe('');
    });
  });

  describe('formatCep', () => {
    it('should format CEP correctly', () => {
      expect(formatCep('12345678')).toBe('12345-678');
      expect(formatCep('1234567')).toBe('12345-67');
      expect(formatCep('123456')).toBe('12345-6');
      expect(formatCep('12345')).toBe('12345');
      expect(formatCep('1234')).toBe('1234');
      expect(formatCep('123')).toBe('123');
      expect(formatCep('12')).toBe('12');
      expect(formatCep('1')).toBe('1');
    });

    it('should limit CEP to 8 digits', () => {
      expect(formatCep('123456789')).toBe('12345-678');
    });

    it('should handle empty string', () => {
      expect(formatCep('')).toBe('');
    });
  });

  describe('formatNaturalNumber', () => {
    it('should format natural numbers correctly', () => {
      expect(formatNaturalNumber('12345')).toBe('12345');
      expect(formatNaturalNumber('012345')).toBe('12345');
      expect(formatNaturalNumber('00012345')).toBe('12345');
      expect(formatNaturalNumber('0')).toBe('0');
      expect(formatNaturalNumber('00')).toBe('0');
      expect(formatNaturalNumber('000')).toBe('0');
    });

    it('should handle empty string', () => {
      expect(formatNaturalNumber('')).toBe('0');
    });

    it('should handle only zeros', () => {
      expect(formatNaturalNumber('0000')).toBe('0');
    });
  });

  describe('applyMask', () => {
    it('should apply currency mask', () => {
      expect(applyMask('12345', 'currency')).toBe('R$ 123,45');
      expect(applyMask('1000', 'currency')).toBe('R$ 10,00');
    });

    it('should apply datetime mask', () => {
      const currentYear = new Date().getFullYear();
      expect(applyMask('010120241230', 'datetime')).toBe(
        `01/01/${currentYear} 12:30`
      );
      expect(applyMask('311220231459', 'datetime')).toBe(
        `31/12/${currentYear} 14:59`
      );
      expect(applyMask('01012024', 'datetime')).toBe(`01/01/${currentYear}`);
      expect(applyMask('0101202412', 'datetime')).toBe(
        `01/01/${currentYear} 12`
      );
    });

    it('should apply time mask', () => {
      expect(applyMask('1230', 'time')).toBe(' 12:30');
      expect(applyMask('2359', 'time')).toBe(' 23:59');
      expect(applyMask('0000', 'time')).toBe(' 00:00');
      expect(applyMask('12', 'time')).toBe(' 12');
    });

    it('should apply CPF mask', () => {
      expect(applyMask('12345678901', 'cpf')).toBe('123.456.789-01');
      expect(applyMask('1234567890', 'cpf')).toBe('123.456.789-0');
    });

    it('should apply CNPJ mask', () => {
      expect(applyMask('12345678901234', 'cnpj')).toBe('12.345.678/9012-34');
      expect(applyMask('1234567890123', 'cnpj')).toBe('12.345.678/9012-3');
    });

    it('should apply CEP mask', () => {
      expect(applyMask('12345678', 'cep')).toBe('12345-678');
      expect(applyMask('1234567', 'cep')).toBe('12345-67');
    });

    it('should apply natural number mask', () => {
      expect(applyMask('12345', 'naturalNumber')).toBe('12345');
      expect(applyMask('012345', 'naturalNumber')).toBe('12345');
    });

    it('should apply phone mask', () => {
      expect(applyMask('11987654321', 'phone')).toBe('(11) 98765-4321');
      expect(applyMask('1198765432', 'phone')).toBe('(11) 98765-432');
      expect(applyMask('119876543', 'phone')).toBe('(11) 98765-43');
      expect(applyMask('11987654', 'phone')).toBe('(11) 98765-4');
      expect(applyMask('1198765', 'phone')).toBe('(11) 98765');
      expect(applyMask('119876', 'phone')).toBe('(11) 9876');
      expect(applyMask('11987', 'phone')).toBe('(11) 987');
      expect(applyMask('1198', 'phone')).toBe('(11) 98');
      expect(applyMask('119', 'phone')).toBe('(11) 9');
      expect(applyMask('11', 'phone')).toBe('11');
      expect(applyMask('1', 'phone')).toBe('1');
    });

    it('should return original value for unknown mask', () => {
      expect(applyMask('12345678901234', 'unknown' as MaskTypes)).toBe(
        '12345678901234'
      );
    });

    it('should return original value when no mask is provided', () => {
      expect(applyMask('12345678901234')).toBe('12345678901234');
    });

    it('should return original value when mask is undefined', () => {
      expect(applyMask('12345678901234', undefined)).toBe('12345678901234');
    });
  });

  describe('Edge cases and validation', () => {
    it('should handle datetime validation correctly', () => {
      const currentYear = new Date().getFullYear();

      // Test day validation
      expect(applyMask('321220241230', 'datetime')).toBe(
        `31/12/${currentYear} 12:30`
      );
      expect(applyMask('001220241230', 'datetime')).toBe(
        `00/12/${currentYear} 12:30`
      );

      // Test month validation
      expect(applyMask('011320241230', 'datetime')).toBe(
        `01/12/${currentYear} 12:30`
      );
      expect(applyMask('010020241230', 'datetime')).toBe(
        `01/01/${currentYear} 12:30`
      );

      // Test hour validation
      expect(applyMask('010120242430', 'datetime')).toBe(
        `01/01/${currentYear} 23:30`
      );
      expect(applyMask('010120240030', 'datetime')).toBe(
        `01/01/${currentYear} 00:30`
      );

      // Test minute validation
      expect(applyMask('010120241260', 'datetime')).toBe(
        `01/01/${currentYear} 12:59`
      );
      expect(applyMask('010120241200', 'datetime')).toBe(
        `01/01/${currentYear} 12:00`
      );
    });

    it('should handle time validation correctly', () => {
      // Test hour validation
      expect(applyMask('2430', 'time')).toBe(' 23:30');
      expect(applyMask('0030', 'time')).toBe(' 00:30');

      // Test minute validation
      expect(applyMask('1260', 'time')).toBe(' 12:59');
      expect(applyMask('1200', 'time')).toBe(' 12:00');
    });

    it('should handle special characters in input', () => {
      expect(applyMask('abc123def456', 'cpf')).toBe('123.456');
      expect(applyMask('R$ 1.234,56', 'currency')).toBe('R$ 1234,56');
      expect(applyMask('(11) 99999-9999', 'phone')).toBe('(11) 99999-9999');
    });

    it('should handle very long inputs', () => {
      expect(applyMask('12345678901234567890', 'cpf')).toBe('123.456.789-01');
      expect(applyMask('12345678901234567890', 'cnpj')).toBe(
        '12.345.678/9012-34'
      );
      expect(applyMask('12345678901234567890', 'cep')).toBe('12345-678');
      expect(applyMask('12345678901234567890', 'phone')).toBe(
        '(12) 34567-8901'
      );
    });
  });
});
