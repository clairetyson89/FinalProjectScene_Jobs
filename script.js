require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Legend",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Legend, Home) {
    
      var scene = new WebScene({
        portalItem:{
         id:"15ab14efbabd472fa850a0d8d7460c01" 
        }
      });
      
      var camera = new Camera({
        position: [
          -87.67157322768287,
          41.86408179479186,
          10000000
          //Chicago - 41.86408179479186, -87.67157322768287
        ],
        tilt:0,
        heading:0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: false,
              cameraTrackingEnabled: false
            }
        },
    });
    
   view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-right"
        );
 
    var homeBtn = new Home({
        view: view
      });

    view.ui.add(homeBtn, "bottom-left");
    
    [stl, dmi, lra].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'bottom-right');
    });
    
    stl.addEventListener('click', function() {
      view.goTo({
        position: {
          x: -90.2332859328471,
          y: 38.60455930240417,
          z: 1000000
          //saint louis - 38.60455930240417, -90.2332859328471
        },
        tilt:0,
        heading:0
      });
    });
      
     dmi.addEventListener('click', function() {
      view.goTo({
        position: {
          x: -93.65604561860111,
          y: 41.587021947929045,
          z: 1000000
          //des moines -  41.587021947929045, -93.65604561860111
        },
        tilt:0,
        heading:0
      });
    });
   
     lra.addEventListener('click', function() {
      view.goTo({
        position: {
          x: -92.29889788837065,
          y: 34.74858309769987,
          z: 1000000
          //little rock -- 34.74858309769987, -92.29889788837065
        },
        tilt:0,
        heading:0
      });
    });
      
     });
