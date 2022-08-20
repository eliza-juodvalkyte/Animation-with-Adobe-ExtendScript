{
    app.beginUndoGroup("createNewProject");
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    // create a new project
    app.newProject();

    //initial composition variables
    var compWidth = 1920;
    var compHeight = 1080;
    var compAspect = 1;
    var compFPS = 25;
    var animationDuration = null;

    //сhecking the entered data
    //loading bar duration PROMT
    while ((animationDuration == null) || (isNaN(animationDuration)) || (animationDuration % 1 !== 0) || (animationDuration < 1) || (animationDuration > 15)) {
        var animationDuration = prompt("Enter animation duration", 7);
        if ((animationDuration == null) || (isNaN(animationDuration)) || (animationDuration % 1 !== 0) || (animationDuration < 1) || (animationDuration > 15)) {
            alert("Please enter an INTEGER in range from 1 to 15");
        }
    }

    //Animation duration
    var compDuration = parseInt(animationDuration) +1;
    app.endUndoGroup();
}

{
    app.beginUndoGroup("mainComp");
    var likesValue = null;

    //max likes PROMT
    while ((likesValue == null) || (isNaN(likesValue)) || (likesValue % 1 !== 0) || (likesValue < 100) || (likesValue > 999)) {
        var likesValue = prompt("Enter likes limit", 499);
        if ((likesValue == null) || (isNaN(likesValue)) || (likesValue % 1 !== 0) || (likesValue < 100) || (likesValue > 999)) {
            alert("Please enter an INTEGER in range from 100 to 999");
        }
    }

    app.endUndoGroup();
}

//creating a composition
{
    app.beginUndoGroup("createCompositions");
    var mainComp = app.project.items.addComp("Main comp", compWidth, compHeight, compAspect, compDuration, compFPS);
    app.endUndoGroup();
}

{
    app.beginUndoGroup("mainComp");
    //background
    var background = mainComp.layers.addSolid([255, 255, 255] / 255, "Background", compWidth, compHeight, compAspect, compDuration);

    //Instagram Rectangle    
    var rectangle = mainComp.layers.addShape();
    rectangle.name = ("Insta kvadratas");

    var rectangleSize = rectangle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rectangleSize.property("Size").setValue([370, 370]);
    rectangleSize.property("Roundness").setValue([90]);
    var rectangleFill = rectangle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    rectangleFill.property("Color").setValue([255, 0, 0] / 255);

    //Instagram Rectangle effect
    var colorGradient = rectangle.property("Effects").addProperty("ADBE 4ColorGradient");
    colorGradient.property("Blend").setValue([40]);
    colorGradient.property("Point 1").setValue([841, 424]);
    colorGradient.property("Point 2").setValue([1100, 410]);
    colorGradient.property("Point 3").setValue([817, 686]);
    colorGradient.property("Point 4").setValue([1100, 631]);

    colorGradient.property("Color 1").setValue([57, 31, 212] / 255);
    colorGradient.property("Color 2").setValue([247, 13, 196] / 255);
    colorGradient.property("Color 3").setValue([255, 185, 0] / 255);
    colorGradient.property("Color 4").setValue([255, 0, 42] / 255);

    //Shadows
    //apvalus seselis
    var blackColor = [0, 0, 0] / 255;
    var ellipse = mainComp.layers.addShape();
    ellipse.name = ("Apvalus seselis");

    var ellipseSize = ellipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ellipseSize.property("Size").setValue([110, 110]);
    var ellipseAppearance = ellipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    ellipseAppearance.property("Color").setValue(blackColor);
    ellipseAppearance.property("ADBE Vector Stroke Width").setValue([17]);
    ellipseAppearance.property("ADBE Vector Stroke Line Cap").setValue([2]);
    ellipse.property("Transform").property("Opacity").setValue([25]);

    //apvalus seselis mazas
    var smallerEllipse = mainComp.layers.addShape();
    smallerEllipse.name = ("Apvalus seselis mazas");

    var smallerEllipseSize = smallerEllipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    smallerEllipseSize.property("Size").setValue([30, 30]);
    var smallerEllipseAppearance = smallerEllipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    smallerEllipseAppearance.property("Color").setValue(blackColor);
    smallerEllipse.property("Transform").property("Position").setValue([1030, 472]);
    smallerEllipse.property("Transform").property("Opacity").setValue([25]);

    //Kvadratukas seselis
    var rectStroke = mainComp.layers.addShape();
    rectStroke.name = ("Kvadratukas seselis");

    var rectSize = rectStroke.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rectSize.property("Size").setValue([235, 235]);
    rectSize.property("Roundness").setValue([55]);

    var rectStrokeColor = rectStroke.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    rectStrokeColor.property("Color").setValue(blackColor);
    rectStrokeColor.property("ADBE Vector Stroke Width").setValue([17]);
    rectStrokeColor.property("ADBE Vector Stroke Line Cap").setValue([2]);
    rectStroke.property("Transform").property("Opacity").setValue([25]);

    app.endUndoGroup();
}

{
    app.beginUndoGroup("mainComp");
    //gllowing shapes
    //kvadratukas exp
    var whiteColor = ([255, 255, 255] / 255);
    var yellowColor = ([255, 252, 0] / 255);
    var trimRectangle = mainComp.layers.addShape();
    trimRectangle.name = ("Kvadratukas EXP");

    rectSize = trimRectangle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rectSize.property("Size").setValue([235, 235]);
    rectSize.property("Roundness").setValue([55]);

    var trimRectangleColor = trimRectangle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    trimRectangleColor.property("Color").setValue(whiteColor);
    trimRectangleColor.property("ADBE Vector Stroke Width").setValue([17]);
    trimRectangleColor.property("ADBE Vector Stroke Line Cap").setValue([2]);

    //Apvalus exp
    var trimEllipse = mainComp.layers.addShape();
    trimEllipse.name = ("Apvalus EXP");
    ellipseSize = trimEllipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ellipseSize.property("Size").setValue([110, 110]);
    var trimEllipseAppearance = trimEllipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    trimEllipseAppearance.property("Color").setValue(whiteColor);
    trimEllipseAppearance.property("ADBE Vector Stroke Width").setValue([17]);
    trimEllipseAppearance.property("ADBE Vector Stroke Line Cap").setValue([2]);

    //Trim path effect
    var glowingStrokes = [trimRectangle, trimEllipse];
    for (var i = 0; i < glowingStrokes.length; i++) {

        var trimPath = glowingStrokes[i].property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
        trimPath.property("Start").setValue([100]);
        trimPath.property("End").expression = '''var t = time;
        var tMax = thisComp.layer("controllers").effect("animationDuration")("Slider");
        var tMin = 0;
        var t2 = 5 / 15 * tMax; var vMin = 100;
        var v2 = 0;
        ease(t, tMin, t2, vMin, v2);
        ''';
        trimPath.property("Offset").setValue([-30]);
    }

    //Apvaluz mazas EXP
    var trimEllipseSmall = mainComp.layers.addShape();
    trimEllipseSmall.name = ("Apvalus mazas EXP");

    var ellipseSmallSize = trimEllipseSmall.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ellipseSmallSize.property("Size").setValue([30, 30]);

    var trimEllipseSmallAppearance = trimEllipseSmall.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    trimEllipseSmallAppearance.property("Color").setValue(whiteColor);
    trimEllipseSmall.property("Transform").property("Position").setValue([1030, 472]);

    //Like apskritimas EXP
    var likeEllipse = mainComp.layers.addShape();
    likeEllipse.name = ("Like apskritimas EXP");

    var likeEllipseSize = likeEllipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    likeEllipseSize.property("Size").setValue([105, 105]);

    var likeEllipseAppearance = likeEllipse.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    likeEllipseAppearance.property("Color").setValue([232, 0, 0] / 255);
    likeEllipse.property("Transform").property("Position").setValue([1118, 377]);

    //scale animation for 2 ellipses
    var scalingEllipses = [likeEllipse, trimEllipseSmall];
    for (var i = 0; i < scalingEllipses.length; i++) {

        scalingEllipses[i].property("Transform").property("Scale").expression = '''var t = time;
        var tMax = thisComp.layer("controllers").effect("animationDuration")("Slider");
        var tMin = 4 / 15 * tMax;
        var t2 = 7 / 15 * tMax;
        var vMin = [0, 0];
        var v1 = [100, 100];
        easeOut(t, tMin, t2, vMin, v1);
        ''';
    }

    //glowing effect
    var glowNames = ["Drop Shadow - white glow", "Drop Shadow - dark glow halo 1", "Drop Shadow - dark glow halo 2"];
    
    var glowColors = [
        ([255, 255, 255] / 255),
        ([255, 252, 0] / 255),
        ([255, 252, 0] / 255)
    ];

    var glowOpacity = [
        ([100]),
        ([30]),
        ([15])
    ];

    var glowSoftness = [
        ([20]),
        ([20]),
        ([25])
    ];
    myFunction(trimRectangle);
    myFunction(trimEllipseSmall);
    myFunction(trimEllipse);
  
    app.endUndoGroup();
}

{
    app.beginUndoGroup("mainComp");
    //like txt

    var likeText = mainComp.layers.addText();
    likeText.name = "Skaiciai EXP";

    //text parameters
    var likeTextProp = likeText.property("Source Text");
    likeText.property("Source Text").expression = '''Math.round(effect("Slider Control")("Slider"),0);''';

    var textValue = likeTextProp.value;
    textValue.font = "OpenSans-Semibold";
    
    textValue.fontSize = 50;
    textValue.justification = ParagraphJustification.CENTER_JUSTIFY;
    textValue.fillColor = whiteColor;
    likeTextProp.setValue(textValue);

    var textSlider = likeText.property("Effects").addProperty("Slider Control");
    textSlider.property("Slider").expression = '''var t = time;
    var tMax = thisComp.layer("controllers").effect("animationDuration")("Slider");
    var t3 = 7 / 15 * tMax;
    var vMax = thisComp.layer("controllers").effect("maxLikesValues")("Slider");
    var v3 = 0;
    linear(t, t3, tMax, v3, vMax);
    ''';
    likeText.parent = likeEllipse;
    likeText.property("Transform").property("Position").setValue([1, 13]);

    app.endUndoGroup();
}

{
    app.beginUndoGroup("mainComp");

    //controllers
    var controllers = mainComp.layers.addNull();
    controllers.name = ("controllers");

    // animationDuration
    var sliderControl = controllers.property("Effects").addProperty("ADBE Slider Control");
    sliderControl.name = "animationDuration";
    sliderControl.property("Slider").expression = '''clamp(value, 1, ''' + animationDuration + ''');''';
    sliderControl.property("Slider").setValue(animationDuration);

    //controller maxLikesValue
    var maxLikesValue = controllers.property("Effects").addProperty("ADBE Slider Control");
    maxLikesValue.name = "maxLikesValues";
    maxLikesValue.property("Slider").expression = ''' clamp(value, 100, ''' + likesValue + ''');''';
    maxLikesValue.property("Slider").setValue(likesValue);

    app.endUndoGroup();
}

function myFunction(variable){
    for (var i = 0; i < glowNames.length; i++) {

        var trimGlow = variable.property("Effects").addProperty("ADBE Drop Shadow");
        trimGlow.name = glowNames[i];
        trimGlow.property("Shadow Color").setValue(glowColors[i]);
        //trimGlow.property("Opacity").setValue(glowOpacity[i]);
        trimGlow.property("Opacity").setValue([100]);
        trimGlow.property("Distance").setValue([0]);
        trimGlow.property("Softness").setValue(glowSoftness[i]);
    }
}
//open all compositions
mainComp.openInViewer();
