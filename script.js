require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {
    
      var scene = new WebScene({
        portalItem:{
         id:"1eae95ac39e2491282b5c417d2edc705" 
        }
      });
      
      var camera = new Camera({
        position: [
          -81.8830605860534,
          17.759948039422046,
          10000000
          //area with biggest cluster of points
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
              directShadowsEnabled: true,
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

    view.ui.add(homeBtn, "bottom-left");
    
    [gbr, rsr, ncr].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'bottom-right');
    });
    
    gbr.addEventListener('click', function() {
      view.goTo({
        position: {
          x: 146.21811574732055,
          y: -14.069510050969559,
          z: 1000000
          //great barrier reef
        },
        tilt:0,
        heading:0
      });
    });
      
     rsr.addEventListener('click', function() {
      view.goTo({
        position: {
          x: 38.820636242084085,
          y: 20.39716630387608,
          z: 1000000
          //Red Sea Reef
        },
        tilt:0,
        heading:0
      });
    });
   
     ncr.addEventListener('click', function() {
      view.goTo({
        position: {
          x: 166.43171263584816,
          y: -22.29910758788525,
          z: 1000000
          //New Caledonia Barrier Reef
        },
        tilt:0,
        heading:0
      });
    });
      
     });
