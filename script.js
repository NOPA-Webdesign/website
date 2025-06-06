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
        case "satzung":
            loadSatzungHTML();
            break;
        case "grußwort":
            loadGrußwortHTML();
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
                    Der Bürgerfonds Waldbrunn e.V. empfiehlt bei weiterem Unterstützungsbedarf unter anderem folgende Anlaufstellen:
                </p>
                <ul class="list-unstyled fs-5" style="line-height: 2;">
                    <li>• Mehrgenerationenhaus WABE</li>
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
                    Auch zu anderen, hier nicht aufgeführten Einrichtungen haben wir möglicherweise Verbindungen und arbeiten mit ihnen zusammen.
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
                    E-Mail: hans.fiederling@Bürgerfonds-Waldbrunn.de
                    Internet: www.bürgerfonds-waldbrunn.de
                </p>
                <p>
                    Eintragung im Vereinsregister<br>
                    Registernummer: 201495<br>
                    Sitz des Vereins: Waldbrunn
                    Registergericht: Amtgericht Würzburg
                </p>
                <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>
                    Hans Fiederling<br>
                    E-Mail: hans.fiederling@Bürgerfonds-Waldbrunn.de
                </p>
            </div>
        </div>
        <br>
        <br>
        <br>
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
            E-Mail: Hans.Fiederling@Bürgerfonds-Waldbrunn.de</p>
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
                                Der <strong>Bürgerfonds Waldbrunn e.V.</strong> ist eine solidarische Initiative, die Menschen wohnhaft in Waldbrunn, in einer aktuellen Notlage unterstützt –
                                schnell, vertraulich und unbürokratisch. Er wurde gegründet, um dort zu helfen, wo staatliche Hilfen zu spät greifen oder gar nicht vorgesehen sind.
                            </p>
                            <p>
                                Wer Hilfe benötigt, kann sich vertrauensvoll an ein Mitglied des Vorstands wenden. Das Anliegen wird <strong>anonymisiert</strong> an eine
                                unabhängige <strong>fünfköpfige Vergabekommission</strong> weitergeleitet. Nach Prüfung erfolgt eine Entscheidung, die dann zurück
                                an den Vorstand übermittelt wird.
                            </p>
                            <p>
                                Die Unterstützung erfolgt ausschließlich durch <strong>Spenden und freiwillige Beiträge</strong> aus der Bevölkerung und von Unternehmen.
                                Alle Mittel werden direkt für Hilfsmaßnahmen verwendet – es entstehen keine Verwaltungskosten.
                            </p>

                            <p class="text-center mt-4 fst-italic text-success">
                                „Gemeinsam helfen – wenn es darauf ankommt.“
                            </p>
                            TODO
                            FOTO MIT HÄNDEN 
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
                                Mit einem <strong>regelmäßigen Mitgliedsbeitrag</strong> oder einer einmaligen Spende, ob groß oder klein, leisten Sie einen wertvollen Beitrag für unsere Gemeinschaft.
                                Jeder Euro zählt und kommt dort an, wo er gebraucht wird.
                            </p>
                            <p class="text-center mt-4 fst-italic text-success">
                                „Helfen Sie mit – damit niemand in Waldbrunn allein gelassen wird.“
                            </p>
                            <p
                                  Der Bürgerfonds ist damit ein Zeichen für gelebte Nächstenliebe und Zusammenhalt in unserer Gemeinde.
                                  Er ergänzt bestehende soziale Angebote und schließt Lücken, wo schnelle Hilfe notwendig ist.
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
            TODO FOTO MIT HERZ HÄNDEN
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
                                        mail: "Hans.Fiederling@Bürgerfonds-Waldbrunn.de",
                                        icon: "✉️    "
                                    },
                                    {
                                        name: "Ludwig Götzelmann",
                                        rolle: "Stellv. Vorsitzender",
                                        tel: "09306 - 1539",
                                        mail: "Ludwig.Goetzelmann@Bürgerfonds-Waldbrunn.de",
                                        icon: "✉️    "
                                    },
                                    {
                                        name: "Regina Schneider",
                                        rolle: "Stellv. Vorsitzende",
                                        tel: "09306 - 8435",
                                        mail: "Regina.Schneider@Bürgerfonds-Waldbrunn.de",
                                        icon: "✉️    "
                                    },
                                    {
                                        name: "Paula Heller",
                                        rolle: "Kassiererin",
                                        tel: "09306 - 8541",
                                        mail: "",
                                        icon: ""
                                    },
                                    {
                                        name: "Martina Kronenberger",
                                        rolle: "Stellv. Kassiererin",
                                        tel: "09306 - 984573",
                                        mail: "",
                                        icon: ""
                                    },
                                    {
                                        name: "Norbert Postberg",
                                        rolle: "Schriftführer",
                                        tel: "09306 - 2740",
                                        mail: "Norbert.Postberg@Bürgerfonds-Waldbrunn.de",
                                        icon: "✉️    "

                                    }
                                ].map(p => `
                                    <div class="col">
                                        <div class="border rounded p-3 h-100 shadow-sm bg-white">
                                            <h5 class="mb-1">${p.name}</h5>
                                            <p class="mb-1"><strong>${p.rolle}</strong></p>
                                            <p class="mb-1">📞 ${p.tel}</p>
                                            <p class="mb-0">${p.icon} <a href="mailto:${p.mail}" style="color: #a3c814; font-size: auto;">${p.mail}</a></p>
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

function loadSatzungHTML() {
  document.getElementById("contentDiv").innerHTML = `
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card shadow-sm border-0 bg-light">
            <div class="card-body p-4">
              <h2 class="text-center mb-4">Satzung Bürgerfonds Waldbrunn e. V.</h2>

              <h5>§ 1 Name und Sitz, Eintragung</h5>
              <p>1. Der Name des Vereins lautet: Bürgerfonds Waldbrunn e.V.</p>
              <p>2. Der Sitz des Vereins ist Waldbrunn.</p>
              <p>3. Der Verein soll ins Vereinsregister eingetragen werden.</p>
              <p>4. Das Geschäftsjahr ist das Kalenderjahr.</p>

              <h5 class="mt-4">§ 2 Zweck des Vereins</h5>
              <p>1. Der Verein verfolgt ausschließlich und unmittelbar mildtätige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der Abgabenordnung. Zweck des Vereins ist die Unterstützung hilfsbedürftiger Personen innerhalb des Gemeindegebietes. Dies erfolgt zum Einen durch die Unterstützung persönlich bedürftiger Personen, welche gemäß § 53 Nr. 1 Abgabenordnung (AO) infolge ihres körperlichen, geistigen oder seelischen Zustandes auf die Hilfe anderer angewiesen sind, und zum Anderen durch die Unterstützung von Personen, deren wirtschaftliche Lage aus besonderen Gründen zu einer Notlage geworden ist. Die Unterstützung erfolgt freiwillig. Es besteht kein Rechtsanspruch auf Unterstützung durch den Verein.</p>
              <p>2. Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.</p>
              <p>3. Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.</p>

              <h5 class="mt-4">§ 3 Erwerb der Mitgliedschaft</h5>
              <p>1. Mitglied des Vereins kann jede natürliche Person nach Vollendung des 16. Lebensjahres und jede juristische Person werden.</p>
              <p>2. Wer die Mitgliedschaft erwerben will, hat an den Verein ein schriftliches Aufnahmegesuch zu richten.</p>
              <p>3. Über die Ablehnung oder Annahme des Aufnahmegesuchs entscheidet der Vorstandsvorsitzende. Gegen die Ablehnung des Aufnahmeantrages kann der Bewerber innerhalb eines Monats nach Bekanntgabe der Ablehnung beim Vorstand schriftlich Berufung einlegen. Über die Berufung entscheidet die erweiterte Vorstandschaft abschließend.</p>
              <p>4. Ein Aufnahmeanspruch besteht nicht.</p>

 <h5 class="mt-4">§ 4 Beendigung der Mitgliedschaft</h5>
<p>1. Die Mitgliedschaft endet durch Tod, Austritt, Ausschluss oder Streichung von der Mitgliederliste.</p>
<p>2. Der Austritt ist nur zum Jahresende mit einer Frist von drei Monaten möglich und bedarf der schriftlichen Erklärung gegenüber dem Vorstand.</p>
<p>3. Ein Ausschluss erfolgt bei Zahlungsrückstand trotz Mahnung oder bei vereinsschädigendem Verhalten durch Beschluss des Vorstands.</p>

<h5 class="mt-4">§ 5 Mitgliedschaftspflichten</h5>
<p>1. Es ist ein jährlicher Mitgliedsbeitrag zu leisten.</p>
<p>2. Die Höhe wird durch die Mitgliederversammlung festgelegt.</p>
<p>3. Der Beitrag ist zu Beginn des Kalenderjahres im Voraus zu entrichten.</p>

<h5 class="mt-4">§ 6 Mitgliedsrechte</h5>
<p>1. Stimmberechtigt sind alle geschäftsfähigen Mitglieder.</p>
<p>2. In Vereinsorgane wählbar sind nur volljährige Mitglieder.</p>

<h5 class="mt-4">§ 7 Organe des Vereins</h5>
<p>1. Der Vorstand</p>
<p>2. Die Mitgliederversammlung</p>
<p>3. Die Vergabekommission</p>

<h5 class="mt-4">§ 8 Der Vorstand</h5>
<p>1. Der erweiterte Vorstand besteht aus dem Vorsitzenden, zwei stellvertretenden Vorsitzenden, dem Kassierer und dem Schriftführer.</p>
<p>2. Der Verein wird gerichtlich und außergerichtlich durch zwei Mitglieder des Vorstands gemeinsam vertreten.</p>
<p>3. Die Amtszeit des Vorstands beträgt drei Jahre.</p>

<h5 class="mt-4">§ 9 Die Vergabekommission</h5>
<p>1. Die Kommission besteht aus fünf von der Mitgliederversammlung gewählten Mitgliedern mit einer Amtszeit von drei Jahren.</p>
<p>2. Für Vergabeentscheidungen ist eine Mehrheit von mindestens drei Mitgliedern erforderlich.</p>
<p>3. Alle Mitglieder sind zur lebenslangen Verschwiegenheit verpflichtet.</p>

<h5 class="mt-4">§ 10 Einberufung von Sitzungen</h5>
<p>1. Sitzungen werden bei Bedarf oder auf Antrag eines Organsmitglieds einberufen.</p>
<p>2. Die Einberufung erfolgt durch den Vorsitzenden oder seinen Stellvertreter.</p>

<h5 class="mt-4">§ 11 Revisoren</h5>
<p>1. Drei Revisoren werden von der Mitgliederversammlung für drei Jahre gewählt.</p>
<p>2. Sie führen jährlich eine Kassenprüfung durch.</p>

<h5 class="mt-4">§ 12 Ordentliche Mitgliederversammlung</h5>
<p>1. Findet mindestens einmal im Jahr statt, möglichst im ersten Quartal.</p>
<p>2. Einladung erfolgt mindestens zwei Wochen vorher schriftlich oder per E-Mail unter Angabe der Tagesordnung.</p>
<p>3. Anträge zur Tagesordnung können bis eine Woche vor der Versammlung gestellt werden.</p>

<h5 class="mt-4">§ 13 Außerordentliche Mitgliederversammlung</h5>
<p>1. Wird einberufen, wenn das Vereinsinteresse es erfordert oder ein Fünftel der Mitglieder dies schriftlich beantragt.</p>

<h5 class="mt-4">§ 14 Zuständigkeit der Mitgliederversammlung</h5>
<ul>
  <li>Wahl von Vorstand und Vergabekommission</li>
  <li>Entgegennahme und Entlastung des Jahresberichts</li>
  <li>Beschluss über Satzungsänderungen und Vereinsauflösung</li>
  <li>Festsetzung der Mitgliedsbeiträge</li>
  <li>Wahl der Revisoren</li>
  <li>Festlegung der Vergaberichtlinien</li>
</ul>

<h5 class="mt-4">§ 15 Beschlussfassung</h5>
<p>1. Die Versammlung wird vom Vorsitzenden oder bei Verhinderung von einem Stellvertreter geleitet. Ist kein Vorstandsmitglied anwesend, wählt die Versammlung eine Leitung.</p>
<p>2. Sie ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig.</p>
<p>3. Abstimmungen erfolgen mit einfacher Mehrheit, Satzungsänderungen mit 2/3-, Zweckänderungen und Auflösung mit 4/5-Mehrheit.</p>
<p>4. Jedes Mitglied hat eine Stimme. Über Beschlüsse ist ein Protokoll zu führen und vom Versammlungsleiter zu unterzeichnen.</p>

<h5 class="mt-4">§ 16 Auflösung des Vereins</h5>
<p>1. Die Liquidation erfolgt durch den bei Auflösung amtierenden Vorstand.</p>
<p>2. Das Vereinsvermögen fällt an die Gemeinde Waldbrunn zur Verwendung für gemeinnützige Zwecke.</p>

<p class="text-end mt-4"><em>Waldbrunn, 02.10.2023</em></p>
<p class="text-end"><em>(Unterschriften der Vorstandschaft im Original)</em></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function loadGrußwortHTML(){
     document.getElementById("contentDiv").innerHTML = `
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card bg-light border-0 shadow-sm">
            <div class="card-body">
              <h2 class="text-center mb-4">Grußwort von Bürgermeister Markus Haberstumpf</h2>
              <div class="row">
                <div class="col-md-4 text-center mb-3">
                  <img src="bilder/Bürgermeister.png" class="img-fluid rounded shadow-sm" alt="Bürgermeister">
                </div>
                <div class="col-md-8">
                  <p><strong>gemeinsam · hilfsbereit · sozial</strong></p>
                  <p>Es gibt viele Begriffe, mit denen man eine Unterstützung unverschuldet in Not geratener Mitbürgerinnen und Mitbürger beschreiben könnte.</p>
                  <p>Entscheidend ist jedoch, dass solchen Worten im Bedarfsfall auch Taten folgen. Aus diesem Grund hat sich der Bürgerfonds Waldbrunn e.V. gegründet.</p>
                  <p>Ein ehrenamtliches und soziales Engagement aus der Mitte unseres Ortes, um Waldbrunnerinnen und Waldbrunnern dann helfen zu können, wenn es angemessen und notwendig ist. Eine solche Initiative verdient Anerkennung und Unterstützung.</p>
                  <p>Tragen auch Sie mit Großherzigkeit und Mitverantwortung dazu bei, ein starkes finanzielles Fundament für unseren Bürgerfonds zu schaffen, um Waldbrunn weiter positiv zu entwickeln.</p>
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