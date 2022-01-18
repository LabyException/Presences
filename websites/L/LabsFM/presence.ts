interface Channel {
  name: string;
  track: string;
  artist: string;
  timeStart: string;
  timeEnd: string;
}
const presence = new Presence({
    //The client ID of the Application created at https://discordapp.com/developers/applications
    clientId: "931523656553742356"
    }),
    //You can use this to get translated strings in their browser language
    strings = presence.getStrings({
      play: "presence.playback.playing",
      pause: "presence.playback.paused"
    });
  
  /*
  function myOutsideHeavyLiftingFunction(){
      //Grab and process all your data here
  
      // element grabs //
      // api calls //
      // variable sets //
  }
  
  setInterval(myOutsideHeavyLiftingFunction, 10000);
  //Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up
  */
  

  presence.on("UpdateData", async () => {
    const presenceData: PresenceData = {
      largeImageKey: "logo",
      smallImageText: "LabsFM.de - Liebe deine Musik!",
    };
    if (document.location.pathname.includes("/streams")) {
      presenceData.details =  "Hört sich einen Stream an";
    }
    else if(document.domain.includes("status.")) presenceData.details = "Schaut sich die Statusseite an";
    else if (document.location.pathname.includes("/partner")) presenceData.details = "Schaut sich die Partner an";
    else if (document.location.pathname.includes("/history")) presenceData.details = "Schaut sich die Stream History an";
    else if (document.location.pathname.includes("/beschreibung")) presenceData.details = "Schaut sich die TeamSpeak Beschreibung an";
    else presenceData.details = "Schaut sich die Startseite an";
    presenceData.buttons = [
      { label: "Öffne Webseite", url: ""+document.location }
    ];
    if (presenceData.details) presence.setActivity(presenceData);
    else presence.setActivity();
  });