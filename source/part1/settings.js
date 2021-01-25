class Settings
{
    constructor(scene){
		// reference to the game scene
		this.scene = scene;
		
		var font = {font: '32px Arial', fill: '#000000'};
		this.txtPause= scene.add.text(1720, 5, '', font);

		this.show();
	}
	
	/**
	* Shows all settings.
	*/	
	show(){
		this.txtPause.text = "[P] Pause";
	}
}