# Guia de Início Rápido - Nan-UI

Este guia vai te ajudar a começar rapidamente com a biblioteca Nan-UI.

## 🚀 Instalação

```bash
npm install nan-ui
# ou
yarn add nan-ui
# ou
pnpm add nan-ui
```

## 📦 Instalação das Dependências

A biblioteca requer apenas React e React DOM:

```bash
npm install react react-dom
```

## 📖 Uso

### 1. Importação dos Estilos CSS

```tsx
import React from 'react';
import { Button, Input } from 'nan-ui';
import 'nan-ui/dist/styles.css'; // Importe os estilos CSS

function App() {
  return (
    <div>
      <Input label='Nome' placeholder='Digite seu nome' />
      <Button variant='primary'>Enviar</Button>
    </div>
  );
}
```

### 2. Importando Componentes

```tsx
import { Button, Input, Checkbox } from 'nan-ui';

function MyForm() {
  return (
    <form>
      <Input label='Nome' placeholder='Digite seu nome' />
      <Input label='Email' type='email' placeholder='Digite seu email' />
      <Checkbox label='Aceito os termos' />
      <Button variant='primary'>Enviar</Button>
    </form>
  );
}
```

### 3. Variantes de Botões

```tsx
import { Button } from 'nan-ui';

function ButtonExamples() {
  return (
    <div>
      <Button variant='primary'>Primário</Button>
      <Button variant='secondary'>Secundário</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='icon'>🔍</Button>
    </div>
  );
}
```

### 4. Tamanhos de Componentes

```tsx
import { Button } from 'nan-ui';

function ButtonSizes() {
  return (
    <div>
      <Button size='small'>Pequeno</Button>
      <Button size='medium'>Médio</Button>
      <Button size='large'>Grande</Button>
    </div>
  );
}
```

### 5. Componentes de Formulário

```tsx
import { Input, Select, Textarea, Switch, Radio } from 'nan-ui';

function FormComponents() {
  return (
    <div>
      <Input label='Nome' placeholder='Digite seu nome' required size='large' />

      <Select
        label='País'
        options={[
          { value: 'br', label: 'Brasil' },
          { value: 'us', label: 'Estados Unidos' },
        ]}
        placeholder='Selecione um país'
      />

      <Textarea
        label='Mensagem'
        placeholder='Digite sua mensagem'
        rows={4}
        maxLength={500}
        showCount
      />

      <Switch label='Notificações' size='large' />

      <Radio label='Opção 1' name='options' value='1' size='large' />
      <Radio label='Opção 2' name='options' value='2' size='large' />
    </div>
  );
}
```

### 6. Usando o Sistema de Tema via CSS Variables

```css
:root {
  /* Cores primárias customizadas */
  --nan-primary-600: #3b82f6;
  --nan-primary-700: #2563eb;
  --nan-primary-800: #1d4ed8;

  /* Espaçamentos customizados */
  --nan-spacing-md: 1.5rem;
  --nan-spacing-lg: 2rem;

  /* Tipografia customizada */
  --nan-font-size-md: 1.125rem;
  --nan-font-size-lg: 1.25rem;
}
```

## 🎨 Personalização

### Tema Customizado via CSS

```css
:root {
  /* Cores personalizadas */
  --nan-primary-600: #3b82f6; /* Azul customizado */
  --nan-primary-700: #2563eb;
  --nan-primary-800: #1d4ed8;

  /* Bordas personalizadas */
  --nan-radius-md: 0.75rem;
  --nan-radius-lg: 1rem;

  /* Sombras personalizadas */
  --nan-shadow-md: 0 8px 25px -8px rgba(0, 0, 0, 0.15);
}
```

## 📚 Desenvolvimento

### Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build da biblioteca
npm run build

# Testes
npm test

# Linting
npm run lint

# Storybook
npm run storybook
npm run build-storybook

# Formatar código
npm run format
```

### Estrutura do projeto

```
src/
├── components/                    # Componentes React organizados por pasta
│   ├── Button/                   # Componente Button
│   │   ├── Button.tsx           # Componente React
│   │   ├── Button.css           # Estilos CSS
│   │   ├── Button.stories.tsx   # Documentação Storybook
│   │   ├── Button.test.tsx      # Testes unitários
│   │   └── index.ts             # Export do componente
│   ├── Input/                    # Componente Input
│   │   ├── Input.tsx
│   │   ├── Input.css
│   │   └── index.ts
│   ├── Checkbox/                 # Componente Checkbox
│   │   ├── Checkbox.tsx
│   │   ├── Checkbox.css
│   │   └── index.ts
│   ├── Radio/                    # Componente Radio
│   │   ├── Radio.tsx
│   │   ├── Radio.css
│   │   └── index.ts
│   ├── Select/                   # Componente Select
│   │   ├── Select.tsx
│   │   ├── Select.css
│   │   └── index.ts
│   ├── Switch/                   # Componente Switch
│   │   ├── Switch.tsx
│   │   ├── Switch.css
│   │   └── index.ts
│   ├── Textarea/                 # Componente Textarea
│   │   ├── Textarea.tsx
│   │   ├── Textarea.css
│   │   └── index.ts
│   └── Divider/                  # Componente Divider
│       ├── Divider.tsx
│       ├── Divider.css
│       └── index.ts
├── styles/                       # Estilos CSS globais
│   ├── variables.css            # Variáveis CSS do design system
│   ├── base.css                 # Estilos base e utilitários
│   └── index.css                # Arquivo principal de estilos
├── types/                        # Tipos TypeScript
│   └── maskTypes.ts             # Tipos para máscaras de input
├── utils/                        # Utilitários
│   ├── mask.ts                  # Funções de máscara
│   └── date.ts                  # Funções de data
├── __mocks__/                    # Mocks para testes
│   └── styleMock.js             # Mock para arquivos CSS
└── index.ts                      # Ponto de entrada da biblioteca
```

## 🔗 Links Úteis

- [Documentação Completa](README.md)
- [Storybook](http://localhost:6006) (após executar `npm run storybook`)
- [Repositório GitHub](https://github.com/brunonnalves/nan-ui)

## 💡 Dicas

1. **Performance**: Os componentes são otimizados e tree-shakable
2. **TypeScript**: Totalmente tipado para melhor DX
3. **CSS Variables**: Use variáveis CSS para customização
4. **Acessibilidade**: Componentes seguem padrões de acessibilidade
5. **Responsividade**: Componentes funcionam em diferentes tamanhos de tela
6. **Zero Dependências**: Sem dependências externas de estilização
7. **Estrutura Organizada**: Cada componente em sua própria pasta
8. **Testes Inclusos**: Testes unitários para cada componente
9. **Documentação Storybook**: Documentação interativa completa

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## 📚 Storybook

```bash
# Desenvolvimento
npm run storybook

# Build da documentação
npm run build-storybook
```

---

Feito com ❤️ pela equipe Nan-UI
