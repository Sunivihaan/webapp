window.watsonAssistantChatOptions = {
      integrationID: "43e3e202-d38e-4943-8aa3-def1a76fe5a0", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "fad4a067-18e9-4ea4-98a2-b61bbf7e760b", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });