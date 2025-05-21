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
                <img src="Logo Bürgerfons Waldbrunn.jpg" alt="Hände mit Herzen"
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
                                    <img src="image.png"
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
}

function loadPage(site) {
  switch (site.toLowerCase()) {
    case "startseite":
      loadStartHTML();
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
}
