# hvaskjer
 
### “Hva Skjer” Drømtorp web mobil app 

Web appen vil være en plattform for elever, lærere og ansatte ved Drømtorp Videregående skole for å holde seg oppdatert på hva som skjer på skolen. Appen vil ha to hovedfunksjoner: 

**Aktiviteter:** Appen vil ha en aktivitetskalender som vil liste opp alle aktiviteter og arrangementer som skjer på skolen. Brukere vil kunne se informasjon om hver aktivitet, inkludert tid, sted, beskrivelse og eventuelle påmeldingsdetaljer. Brukere vil også kunne melde seg på aktiviteter direkte fra appen.

**Nyheter:** Appen vil også ha en nyhetsseksjon som vil inneholde siste nytt om hva som skjer på skolen. Nyhetene vil bli publisert av skolens ansatte og vil inkludere informasjon om viktige hendelser, nye initiativer, prestasjoner av elever og ansatte og andre relevante oppdateringer. 

I tillegg vil appen ha noen generelle funksjoner som: 

**Brukerregistrering:** Appen vil kreve at brukerne registrerer seg med en e-postadresse og passord før de kan melde seg på aktiviteter eller legge ut posts (bare for lærere), eventuelt bruke google sign in.

**Innlogging og autentisering:** Brukere vil logge inn på appen med sin registrerte e-postadresse og passord. Appen vil bruke autentiseringsbiblioteket NextAuth med JWT for å håndtere autentisering og autorisering av API-tilgang. 

**Responsivt design:** Mobilwebappen vil være responsivt designet for å gi en optimal brukeropplevelse på mobiltelefoner. 

**API-grensesnitt:** Appen vil ha et API-grensesnitt som vil bli utviklet ved hjelp av NextJS. API-et vil håndtere alle forespørsler fra appen til databasen og vil implementere sikkerhetsfunksjoner som autentisering og autorisering. 

 
### Frontend: 

**NextJS:** Mobilwebappen vil være bygget med NextJS, som er en populær frontend-rammeverk for å lage responsive webapplikasjoner. NextJS gjør det enkelt å bygge gjenbrukbare UI-komponenter og håndtere applikasjonstilstanden effektivt samt intregrere backend i samme struktur. 

**Axios:** Axios er et HTTP-klientbibliotek som vil bli brukt til å håndtere API-kall fra mobilwebappen til backend-serveren. 

Material UI: Material UI er et populært bibliotek for å lage responsive og moderne brukergrensesnitt. Det gir et sett med gjenbrukbare UI-komponenter som følger Material Design-prinsippene. 

### Backend: 

**PostgreSQL:** PostgreSQL er en open source, objekt-relasjonsdatabase (ORDBMS) som er utviklet av PostgreSQL Global Development Group. Den er en av de mest avanserte og kraftige databasene tilgjengelig og brukes ofte som et alternativ til MySQL eller Oracle.

**NextAuth:** NextAuth er en open source autentisering og autorisasjons bibliotek for Node.js-baserte applikasjoner. Det gir en enkel og robust løsning for å håndtere autentisering med flere leverandører som Google, Facebook, Twitter, Github, etc. samt autentisering med egen database.

**JWT:** JWT (JSON Web Tokens) er en standard for å utveksle sikre tokens mellom klient og server. Det vil bli brukt til å håndtere autentisering og autorisering av API-tilgang for mobilwebappen. 
