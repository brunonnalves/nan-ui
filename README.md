# Nan-UI

Uma biblioteca moderna de componentes React com componentes de UI bonitos e funcionais.

## 🚀 Características

- **Componentes de Formulário**: Input, Button, Checkbox, Radio, Select, Switch, Textarea, Divider
- **TypeScript**: Totalmente tipado para melhor experiência de desenvolvimento
- **CSS Puro**: Estilização baseada em CSS nativo com variáveis CSS customizáveis
- **Tema Customizável**: Sistema de tema baseado em variáveis CSS
- **Responsivo**: Componentes otimizados para diferentes tamanhos de tela
- **Acessível**: Seguindo as melhores práticas de acessibilidade
- **Zero Dependências**: Sem dependências externas de estilização
- **Estrutura Organizada**: Cada componente em sua própria pasta com todos os arquivos relacionados
- **Testes Inclusos**: Testes unitários para cada componente
- **Documentação Storybook**: Documentação interativa para todos os componentes

## 📦 Instalação

```bash
npm install nan-ui
# ou
yarn add nan-ui
# ou
pnpm add nan-ui
```

## 🔧 Dependências

Esta biblioteca requer apenas as seguintes dependências peer:

```json
{
  "react": ">=16.8.0"
}
```

## 📖 Uso

### Importação Básica

```tsx
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

### Configuração do Tema via CSS Variables

```css
:root {
  --nan-primary-600: #3b82f6; /* Azul customizado */
  --nan-primary-700: #2563eb;
  --nan-primary-800: #1d4ed8;
}
```

## 🎨 Componentes

### Button

```tsx
import { Button } from 'nan-ui';

// Variantes
<Button variant="primary">Botão Primário</Button>
<Button variant="secondary">Botão Secundário</Button>
<Button variant="outline">Botão Outline</Button>
<Button variant="icon">🔍</Button>

// Tamanhos
<Button size="small">Pequeno</Button>
<Button size="medium">Médio</Button>
<Button size="large">Grande</Button>

// Estados
<Button disabled>Desabilitado</Button>
<Button loading>Carregando...</Button>
```

### Input

```tsx
import { Input } from 'nan-ui';

<Input
  label='Email'
  type='email'
  placeholder='Digite seu email'
  required
  size='large'
  variant='success'
/>;
```

### Checkbox

```tsx
import { Checkbox } from 'nan-ui';

<Checkbox label='Aceito os termos' size='large' />;
```

### Radio

```tsx
import { Radio } from 'nan-ui';

<Radio label="Opção 1" name="options" value="1" size="large" />
<Radio label="Opção 2" name="options" value="2" size="large" />
```

### Select

```tsx
import { Select } from 'nan-ui';

<Select
  label='País'
  options={[
    { value: 'br', label: 'Brasil' },
    { value: 'us', label: 'Estados Unidos' },
  ]}
  placeholder='Selecione um país'
/>;
```

### Switch

```tsx
import { Switch } from 'nan-ui';

<Switch label='Notificações' size='large' />;
```

### Textarea

```tsx
import { Textarea } from 'nan-ui';

<Textarea
  label='Mensagem'
  placeholder='Digite sua mensagem'
  rows={4}
  maxLength={500}
  showCount
/>;
```

### Divider

```tsx
import { Divider } from 'nan-ui';

<Divider variant="dashed" />
<Divider variant="dotted" text="ou" />
<Divider orientation="vertical" />
```

## 📁 Organização dos Componentes

Cada componente é organizado em sua própria pasta contendo todos os arquivos relacionados:

```
src/components/Button/
├── Button.tsx           # Componente React
├── Button.css           # Estilos CSS específicos
├── Button.stories.tsx   # Documentação Storybook
├── Button.test.tsx      # Testes unitários
└── index.ts             # Export do componente
```

Esta estrutura oferece:

- **Coesão**: Todos os arquivos relacionados ficam juntos
- **Navegação fácil**: Encontra tudo sobre um componente em um lugar
- **Manutenção**: Mais fácil de manter e atualizar
- **Escalabilidade**: Estrutura previsível para novos componentes

## 🎨 Sistema de Tema

A biblioteca usa variáveis CSS para personalização:

```css
:root {
  /* Cores primárias */
  --nan-primary-600: #dc2626;
  --nan-primary-700: #b91c1c;
  --nan-primary-800: #991b1b;

  /* Cores secundárias */
  --nan-secondary-500: #6b7280;
  --nan-secondary-600: #4b5563;

  /* Espaçamentos */
  --nan-spacing-sm: 0.5rem;
  --nan-spacing-md: 1rem;
  --nan-spacing-lg: 1.5rem;

  /* Tipografia */
  --nan-font-size-sm: 0.875rem;
  --nan-font-size-md: 1rem;
  --nan-font-size-lg: 1.125rem;
}
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js >= 16
- npm, yarn ou pnpm

### Instalação das dependências

```bash
npm install
```

### Scripts disponíveis

```bash
# Desenvolvimento
npm run dev

# Build da biblioteca
npm run build

# Testes
npm test
npm run test:watch
npm run test:coverage

# Linting
npm run lint
npm run lint:fix

# Storybook
npm run storybook
npm run build-storybook

# Formatação
npm run format

# Limpeza
npm run clean
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

## 🧪 Testes

A biblioteca inclui testes unitários para todos os componentes:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

### Estrutura dos Testes

Cada componente tem seus próprios testes organizados na mesma pasta:

```
src/components/Button/
├── Button.tsx
├── Button.test.tsx    # Testes específicos do componente
└── ...
```

Os testes verificam:

- ✅ Renderização correta dos componentes
- ✅ Aplicação das classes CSS
- ✅ Funcionamento das props
- ✅ Estados (disabled, loading, etc.)
- ✅ Variantes e tamanhos

## 📚 Storybook

Para visualizar e testar os componentes, execute:

```bash
npm run storybook
```

Isso abrirá o Storybook localmente onde você pode explorar todos os componentes, suas variantes e propriedades.

### Build da Documentação

```bash
npm run build-storybook
```

Gera uma versão estática da documentação em `storybook-static/` que pode ser hospedada em qualquer servidor web.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, por favor abra uma [issue](https://github.com/brunonnalves/nan-ui/issues) no GitHub.

---

Feito com ❤️ por [Bruno Alves](https://github.com/brunonnalves)
