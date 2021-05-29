Democracia en Red
=================

Organization website for the Democracia en Red foundation

---

Para correr el front local:
```
npm ci
npm run devi
```

(el comando [`ci`](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable) instala directo del `package-lock.json`, las siglas son de *continuous integration*)

Para correr con la api:
```
export MAILGUN_API_KEY=-
export MEDIUM_URL=https://medium.com/multitudes
export MEDIUM_URL_CASOS=https://medium.com/multitudes/casos/home
npm run dev
```

### Desafío Democracia en Red

El desafío consistía en hacer modificaciones en la web de Democracia en Red, contando con un desarrollo de backend y otro de frontend. Como la primera parte requería de conocimientos en NodeJs y aún no estoy familiarizada con esta tecnología me concentré en completar la parte de Frontend.

A su vez, realicé algunos ajustes extra en otras secciones de la web:
<ul>
    <li>Ajusté los títulos de todas las secciones para que tuvieran más contraste con el fondo correspondiente.</li>
    <li>Collaborate: acomodé los elementos de tal manera que se visualizaran mejor en responsive.</li>
    <li>Footer: centré los íconos de las redes sociales.</li>
</ul>