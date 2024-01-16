import { Component, createResource } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { dict } from './lang';
import * as i18n from '@solid-primitives/i18n';
import { Flatten } from '@solid-primitives/i18n';

type RawDictionary = typeof dict;

export type Dictionary = Flatten<RawDictionary>;



const App: Component = () => {
  const en_flat_dict: Dictionary = i18n.flatten(dict);

  async function fetchDictionary(): Promise<Dictionary> {
    console.log("fetch called")
    return en_flat_dict;
  }
  const [ldict] = createResource(() => '', fetchDictionary, {
    initialValue: en_flat_dict,
  });
  const t = i18n.translator(ldict, i18n.resolveTemplate);

  const chainedT = i18n.chainedTranslator(dict, t);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span class={styles.link}>
          {chainedT.auth.test('Josef', () => console.log('Hello World'))}
        </span>
      </header>
    </div>
  );
};

export default App;
