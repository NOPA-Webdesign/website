function loadStartHTML() {
  document.getElementById("contentDiv").innerHTML = "";
  document.getElementById("contentDiv").innerHTML = `
            <div class="container my-5">
            <div class="text-center mb-4">
                <h2 class="mb-3">Willkommen beim Bürgerfonds Waldbrunn</h2>
                <p class="lead">
                    Der Bürgerfonds ist eine Initiative zur Unterstützung von Mitbürgerinnen und Mitbürgern in
                    schwierigen Lebenslagen – schnell, unbürokratisch und solidarisch.
                </p>
                <img src="bilder/Logo.jpg" alt="Logo"
                    class="img-fluid my-3" style="max-height: 300px;">
                <p class="fst-italic">Teilen – für ein besseres Miteinander</p>
            </div>

            <div class="row justify-content-center mb-5">
                <div class="col-md-10">
                    <div class="card shadow-sm border-0">
                        <div class="card-body">
                            <h4 class="card-title">Was ist der Bürgerfonds?</h4>
                            <p class="card-text">
                                Der Bürgerfonds Waldbrunn wurde ins Leben gerufen, um Menschen in unserer Gemeinde
                                gezielt zu helfen – dort, wo offizielle Hilfen nicht greifen oder zu lange dauern.
                                Finanziert wird der Fonds durch Spenden und freiwillige Beiträge von Bürgerinnen,
                                Bürgern und Unternehmen aus Waldbrunn.
                            </p>
                            <p class="card-text">
                                Ob bei plötzlicher Arbeitslosigkeit, Krankheit oder finanziellen Notlagen – der
                                Bürgerfonds ermöglicht schnelle Unterstützung, die direkt ankommt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card bg-light border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title mb-4">Grußwort von Bürgermeister Markus Haberstumpf</h5>
                            <div class="row">
                                <div class="col-md-4 text-center mb-3">
                                    <img src="bilder/Bürgermeister.png" alt="Bürgermeister">
                                        alt="Bürgermeister Markus Haberstumpf" class="img-fluid rounded shadow-sm">
                                </div>
                                <div class="col-md-8">
                                    <p><strong>gemeinsam · hilfsbereit · sozial</strong></p>
                                    <p>
                                        Es gibt viele Begriffe, mit denen man eine Unterstützung unverschuldet in Not
                                        geratener Mitbürgerinnen und Mitbürger beschreiben könnte.
                                    </p>
                                    <p>
                                        Entscheidend ist jedoch, dass solchen Worten im Bedarfsfall auch Taten folgen.
                                        Aus diesem Grund hat sich der Bürgerfonds Waldbrunn e.V. gegründet.
                                    </p>
                                    <p>
                                        Ein ehrenamtliches und soziales Engagement aus der Mitte unseres Ortes, um
                                        Waldbrunnerinnen und Waldbrunnern dann helfen zu können, wenn es angemessen und
                                        notwendig ist.
                                        Eine solche Initiative verdient Anerkennung und Unterstützung.
                                    </p>
                                    <p>
                                        Tragen auch Sie mit Großherzigkeit und Mitverantwortung dazu bei, ein starkes
                                        finanzielles Fundament für unseren Bürgerfonds zu schaffen, um Waldbrunn weiter
                                        positiv zu entwickeln.
                                    </p>
                                    <p class="mb-1">Herzlichen Dank!</p>
                                    <p><em>Ihr Erster Bürgermeister Markus Haberstumpf</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function loadPage(site) {
    switch (site.toLowerCase()) {
        case "startseite":
            loadStartHTML();
            break;
        case "bürgerfonds":
            loadBuergerfondsHTML();
            break;
        case "unterstützen":
            loadUnterstuetzenHTML();
            break;
        case "ansprechpartner":
            loadAnsprechpartnerHTML();
            break;
        case "anlaufstellen":
            loadAnlaufstellenHTML();
            break;
        case "impressum":
            loadImpressumHTML();
            break;
        case "datenschutz":
            loadDatenschutzHTML();
            break;
    }

    setReiter(site);
}

function setReiter(reiter) {
  reiterArray = [
    "Startseite",
    "Bürgerfonds",
    "Unterstützen",
    "Ansprechpartner",
    "Anlaufstellen",
  ];
  reiterArray.forEach((element) => {
    document.getElementById(element).style.fontWeight = "normal";
  });
  document.getElementById(reiter).style.fontWeight = "bold";
  
}

function loadAnlaufstellenHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="text-center mb-4">
                <h2 class="mb-3">Weitere Anlaufstellen für Hilfsbedürftige</h2>
                <p class="lead">
                    Der Hilfsfonds Waldbüttelbrunn e.V. empfiehlt bei weiterem Unterstützungsbedarf unter anderem folgende Anlaufstellen:
                </p>
                <ul class="list-unstyled fs-5" style="line-height: 2;">
                    <li>• Bundesagentur für Arbeit</li>
                    <li>• Beratungs- und Eingliederungszentrum für Arbeitssuchende</li>
                    <li>• Schuldnerberatung</li>
                    <li>• Allgemeiner Sozialdienst</li>
                    <li>• Suchtberatung</li>
                    <li>• Christliche Kirchen</li>
                    <li>• Höchberger Tafel</li>
                </ul>
                <p class="mt-4">
                    Zu den oben genannten Institutionen stellen wir bei Bedarf für Sie den Kontakt her.
                    Wenn Sie dies wünschen, kann dieser Kontakt auch vorerst anonym über uns erfolgen.
                    Auch zu anderen, hier nicht aufgeführten Einrichtungen haben wir Verbindungen und arbeiten mit ihnen zusammen.
                </p>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function loadImpressumHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5 d-flex justify-content-center">
            <div class="text-center" style="max-width: 600px;">
                <h2 class="mb-4">Impressum</h2>
                <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                <p>
                    Bürgerfonds Waldbrunn e.V.<br>
                    vertreten durch den Vorstand
                </p>
                <p>
                    Vorsitzender: Hans Fiederling<br>
                    Telefon: 09306 - 1880<br>
                    E-Mail: hans.fiederling@t-online.de
                </p>
                <p>
                    Vereinsregister: eingetragener Verein<br>
                    Sitz des Vereins: Waldbrunn
                </p>
                <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>
                    Hans Fiederling<br>
                    E-Mail: hans.fiederling@t-online.de
                </p>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function loadDatenschutzHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <h2 class="mb-4 text-center">Datenschutzerklärung</h2>
            <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).</p>
            
            <h5 class="mt-4">Kontaktaufnahme</h5>
            <p>Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            
            <h5 class="mt-4">Speicherung von Zugriffsdaten</h5>
            <p>Beim Besuch unserer Webseite werden automatisch Informationen allgemeiner Natur erfasst (z.B. IP-Adresse, Uhrzeit, verwendeter Browser). Diese Daten sind nicht bestimmten Personen zuordenbar und dienen nur zur Sicherstellung eines störungsfreien Betriebs.</p>
            
            <h5 class="mt-4">Ihre Rechte</h5>
            <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, kontaktieren Sie uns bitte.</p>

            <p class="mt-4"><strong>Kontakt für Datenschutzanfragen:</strong><br>
            Hans Fiederling<br>
            Telefon: 09306 - 1880<br>
            E-Mail: hans.fiederling@t-online.de</p>
        </div>
    `;
    window.scrollTo(0, 0);
}

function loadBuergerfondsHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="card shadow-sm border-0 bg-light">
                        <div class="card-body p-4">
                            <h2 class="card-title text-center mb-4">Was ist der Bürgerfonds Waldbrunn e.V.?</h2>
                            <p>
                                Der <strong>Bürgerfonds Waldbrunn e.V.</strong> ist eine solidarische Initiative, die Menschen aus Waldbrunn in akuten Notlagen unterstützt –
                                schnell, vertraulich und unbürokratisch. Er wurde gegründet, um dort zu helfen, wo staatliche Hilfen zu spät greifen oder gar nicht vorgesehen sind.
                            </p>
                            <p>
                                Wer Hilfe benötigt, kann sich vertrauensvoll an ein Mitglied des Vorstands wenden. Das Anliegen wird anonymisiert an eine
                                unabhängige <strong>fünfköpfige Vergabekommission</strong> weitergeleitet. Nach Prüfung erfolgt eine Entscheidung, die dann zurück
                                an den Vorstand übermittelt wird – ohne dabei persönliche Daten offenzulegen.
                            </p>
                            <p>
                                Die Unterstützung erfolgt ausschließlich durch <strong>Spenden und freiwillige Beiträge</strong> aus der Bevölkerung und von Unternehmen.
                                Alle Mittel werden direkt für Hilfsmaßnahmen verwendet – es entstehen keine Verwaltungskosten.
                            </p>
                            <p>
                                Der Bürgerfonds ist damit ein Zeichen für gelebte Nächstenliebe und Zusammenhalt in unserer Gemeinde.
                                Er ergänzt bestehende soziale Angebote und schließt Lücken, wo schnelle Hilfe notwendig ist.
                            </p>
                            <p class="text-center mt-4 fst-italic text-success">
                                „Gemeinsam helfen – wenn es darauf ankommt.“
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function loadUnterstuetzenHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="row justify-content-center mb-4">
                <div class="col-lg-10">
                    <div class="card shadow-sm border-0 bg-light">
                        <div class="card-body p-4">
                            <h2 class="card-title text-center mb-4">Wie Sie den Bürgerfonds unterstützen können</h2>
                            <p>
                                Jede Spende – ob groß oder klein – hilft dabei, Menschen aus Waldbrunn in schwierigen Lebenssituationen zu unterstützen. 
                                Der Bürgerfonds springt dann ein, wenn staatliche Hilfen nicht greifen oder zu spät kommen.
                            </p>
                            <p>
                                Ihre Unterstützung ermöglicht schnelle und unbürokratische Hilfe direkt vor Ort – ganz ohne Verwaltungskosten, denn alle arbeiten ehrenamtlich.
                            </p>
                            <p>
                                Auch mit einem <strong>regelmäßigen Mitgliedsbeitrag</strong> oder einer einmaligen Spende leisten Sie einen wertvollen Beitrag für unsere Gemeinschaft.
                                Jeder Euro zählt und kommt dort an, wo er gebraucht wird.
                            </p>
                            <p class="text-center mt-4 fst-italic text-success">
                                „Helfen Sie mit – damit niemand in Waldbrunn allein gelassen wird.“
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-success shadow-sm">
                        <div class="card-body text-center">
                            <h4 class="card-title mb-3 text-success">Bankverbindung</h4>
                            <p class="mb-1"><strong>Empfänger:</strong> Bürgerfonds Waldbrunn e.V.</p>
                            <p class="mb-1"><strong>Bank:</strong> Raiffeisenbank Höchberg eG</p>
                            <p class="mb-1"><strong>IBAN:</strong> DE22 7906 3122 0000 0025 93</p>
                            <p class="mb-1"><strong>BIC:</strong> GENODEF1HBG</p>
                            <p class="mt-3 fst-italic">Auf Wunsch stellen wir Ihnen gerne eine Spendenquittung aus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function loadAnsprechpartnerHTML() {
    document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="card shadow-sm border-0 bg-light">
                        <div class="card-body p-4">
                            <h2 class="text-center mb-4">Ansprechpartner für weitere Informationen</h2>
                            <div class="row row-cols-1 row-cols-md-2 g-4">

                                ${[
                                    {
                                        name: "Hans Fiederling",
                                        rolle: "Vorsitzender",
                                        tel: "09306 - 1880",
                                        mail: "hans.fiederling@t-online.de"
                                    },
                                    {
                                        name: "Ludwig Götzelmann",
                                        rolle: "Stellv. Vorsitzender",
                                        tel: "09306 - 1539",
                                        mail: "l-goetzelmann@t-online.de"
                                    },
                                    {
                                        name: "Regina Schneider",
                                        rolle: "Stellv. Vorsitzende",
                                        tel: "09306 - 8435",
                                        mail: "regschnei@yahoo.de"
                                    },
                                    {
                                        name: "Paula Heller",
                                        rolle: "Kassiererin",
                                        tel: "09306 - 8541",
                                        mail: "ph-heller@t-online.de"
                                    },
                                    {
                                        name: "Martina Kronenberger",
                                        rolle: "Stellv. Kassiererin",
                                        tel: "09306 - 984573",
                                        mail: "martina.kronenberger@t-online.de"
                                    },
                                    {
                                        name: "Norbert Postberg",
                                        rolle: "Schriftführer",
                                        tel: "09306 - 2740",
                                        mail: "norbert_postberg@yahoo.de"
                                    }
                                ].map(p => `
                                    <div class="col">
                                        <div class="border rounded p-3 h-100 shadow-sm bg-white">
                                            <h5 class="mb-1">${p.name}</h5>
                                            <p class="mb-1"><strong>${p.rolle}</strong></p>
                                            <p class="mb-1">📞 ${p.tel}</p>
                                            <p class="mb-0">✉️ <a href="mailto:${p.mail}" style="color: #a3c814;">${p.mail}</a></p>
                                        </div>
                                    </div>
                                `).join('')}

                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-4">
                        <img src="bilder/GruppenBild.jpg" alt="GruppenBild" class="img-fluid rounded shadow-sm" style="max-width: 100%; height: auto;">
                    </div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0); 
}

