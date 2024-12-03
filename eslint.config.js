import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignorar la carpeta dist (y otras que consideres)
  { ignores: ['dist'] },

  // Configuración para archivos JS y JSX
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,  // Puedes actualizar esto si usas una versión más nueva
      globals: globals.browser,  // Solo las variables globales del navegador
      parserOptions: {
        ecmaVersion: 'latest',  // Usa la versión más reciente de ECMAScript
        ecmaFeatures: { jsx: true },  // Habilita JSX
        sourceType: 'module',  // Usa módulos
      },
    },
    settings: { react: { version: '18.3' } },  // Especifica la versión de React
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Reglas recomendadas para JavaScript y React
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Reglas personalizadas
      'react/jsx-no-target-blank': 'off',  // Desactiva la regla para no usar _blank
      'react/prop-types': 'off',  // Desactiva la validación de tipos para props
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },  // Permite exportaciones constantes
      ],
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^React$',  // Ignora "React" en la regla de variables no usadas
        },
      ],
    },
  },
];
