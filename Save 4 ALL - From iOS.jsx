/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;

if (document && folder) {
    
    var folderName = document.name.slice (0, -3);
    var fatherFolder = new Folder(folder.fsName + "/" + folderName);
    
    if (!fatherFolder.exists) {
		fatherFolder.create();
	}
    saveToResIOs(50, "iOS", "");
    saveToResIOs(100, "iOS", "@2x");
    saveToResIOs(150, "iOS", "@3x");	
    saveToRes(42.26, "ldpi");
    saveToRes(56.34, "mdpi");
    saveToRes(84.51, "hdpi");
    saveToRes(112.68, "xhdpi");
    saveToRes(169.02, "xxhdpi");
    saveToRes(225.36, "xxxhdpi");
}

function saveToRes(scaleTo, resFolderName) {
    
	var i, ab,
		file, options,
		resFolder;
        
      
        

	resFolder = new Folder(fatherFolder.fsName + "/drawable-" + resFolderName);

	if (!resFolder.exists) {
		resFolder.create();
	}

	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];

		if (ab.name.indexOf("!") === -1) {
			file = new File(resFolder.fsName + "/" + ab.name + ".png");

			options = new ExportOptionsPNG24();
			options.antiAliasing = true;
			options.transparency = true;
			options.artBoardClipping = true;
			options.verticalScale = scaleTo;
			options.horizontalScale = scaleTo;

			document.exportFile(file, ExportType.PNG24, options);
		};
	}
}

function saveToResIOs(scaleTo, resFolderName, suffix) {
    
	var i, ab,
		file, options,
		resFolder;
        
	resFolder = new Folder(fatherFolder.fsName + "/" + resFolderName);

	if (!resFolder.exists) {
		resFolder.create();
	}

	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];

		if (ab.name.indexOf("!") === -1) {
			file = new File(resFolder.fsName + "/" + ab.name + suffix + ".png");

			options = new ExportOptionsPNG24();
			options.antiAliasing = true;
			options.transparency = true;
			options.artBoardClipping = true;
			options.verticalScale = scaleTo;
			options.horizontalScale = scaleTo;

			document.exportFile(file, ExportType.PNG24, options);
		};
	}
}