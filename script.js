function loadStartHTML() {
    document.getElementById("contentDiv").innerHTML = '';
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