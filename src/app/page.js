import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Olá, para configurar seu projeto com eslint/prettier, primeiro:</h1>

      <ul>
        <li>Ao criar o projeto na linha de comando do teu terminal, digite:</li>
        <li>
          <strong>npx create-next-app@latest nome-projeto --use-npm</strong>
        </li>
        <li>
          Lembre-se: No settings.json, o editor.codeActionsOnSave, deixar como{' '}
          <strong>false</strong>
        </li>
        <li>
          Para não haver conflitos, apenas a extensão do eslint deve estar
          instalada. O Prettier não. Faremos na mão
        </li>
        <li>
          Instalaremos as configs da Rocket. Comando: npm i -D eslint
          @rocketseat/eslint-config
        </li>
        <li>Deixar seu arquivo .eslint.json como está no meu</li>
      </ul>
      <h1>
        Pronto! Projeto React/next com eslint/prettier devidamente configurado.
      </h1>
    </main>
  )
}
