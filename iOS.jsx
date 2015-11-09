/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/
var document = app.activeDocument;
var folder = new Folder("C:/Users/Jonas.Alvarado/Desktop/" + document.name.slice (0, -3));
if (!folder.exists) {
		folder.create();
	}


if (document && folder) {
	saveToRes(50, 50, "");
	saveToRes(100, 100, "@2x");
     saveToRes(150, 150, "@3x");
}

function saveToRes(scaleToX, scaleToY, densitySuffix) {
	var i, ab,
		file, options;

	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];
        
     var fatherFolder = new Folder(folder.fsName + "/" + ab.name + ".imageset");
    
    if (!fatherFolder.exists) {
		fatherFolder.create();
	}
        
		file = new File(fatherFolder.fsName + "/" + ab.name + densitySuffix + ".png");

		options = new ExportOptionsPNG24();
		options.antiAliasing = true;
		options.transparency = true;
		options.artBoardClipping = true;
		options.verticalScale = scaleToY;
		options.horizontalScale = scaleToX;

		document.exportFile(file, ExportType.PNG24, options);
	}
}
