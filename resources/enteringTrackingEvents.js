const getEnteringTrackingEventsScripts = () => {
    return JSON.parse([
        {
            "type": "TrackEvent",
            "$title": "Registro de eventos - Last State",
            "$invalid": false,
            "settings": {
                "extras": {
                    "userId": "{{contact.identity}}",
                    "originatorMessageId": "{{input.message@id}}",
                    "userEmail": "{{contact.email}}",
                    "userName": "{{contact.name}}",
                    "sessionId": "{{sessionId}}"
                },
                "category": "Menu cliente - origem",
                "action": "{{lastState}}"
            }
        },
        {
            "type": "TrackEvent",
            "$title": "Registro de eventos - Exibicao",
            "$invalid": false,
            "settings": {
                "extras": {
                    "userId": "{{contact.identity}}",
                    "originatorMessageId": "{{input.message@id}}",
                    "userEmail": "{{contact.email}}",
                    "userName": "{{contact.name}}",
                    "sessionId": "{{sessionId}}"
                },
                "category": "Menu cliente",
                "action": "Exibicao"
            }
        }
    ])
}

module.exports.getEnteringTrackingEventsScripts