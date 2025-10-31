sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/capire/incidents/incident/test/integration/FirstJourney',
		'sap/capire/incidents/incident/test/integration/pages/IncidentsList',
		'sap/capire/incidents/incident/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/capire/incidents/incident') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);